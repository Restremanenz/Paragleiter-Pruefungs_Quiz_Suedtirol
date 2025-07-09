const QuestionModes = Object.freeze({
    CHAPTER1: 1,
    CHAPTER2: 2,
    CHAPTER3: 3,
    CHAPTER4: 4,
    CHAPTER5: 5,
    CHAPTER6: 6,
    CHAPTER7: 7,
    CHAPTER8: 8,
    CHAPTER9: 9,
    ALL: 0,
});

let questionMode = QuestionModes.ALL;

let nextButton;
let questionContainerElement;
let questionElement;
let answerButtonsElement;
let questionnrElement;
let scoreElement

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let count = 0;
let questions = questionslist;

function startGame() {
    if (questionMode == 0) {
        questions = [].concat.apply([], questionslist);
    } else {
        questions = questionslist[questionMode-1];
    }

    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    score = 0;
    count = 0;
    setNextQuestion();
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', () => selectAnswer(button));
        document.getElementById('answer-buttons').appendChild(button);
    });
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (document.getElementById('answer-buttons').firstChild) {
        document.getElementById('answer-buttons').removeChild(document.getElementById('answer-buttons').firstChild)
    }
}

function selectAnswer(selectedButton) {
    const correct = selectedButton.dataset.correct;
    count++;
    if (correct) {
        score++;
    }

    scoreElement.innerHTML = (score / count * 100).toFixed().toString() + '%';

    Array.from(document.getElementById('answer-buttons').children).forEach(button => {
        button.disabled = true;
        setStatusClass(button, button.dataset.correct);
    });

    setStatusClass(selectedButton, correct);
    setStatusClass(document.body,  correct)

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
