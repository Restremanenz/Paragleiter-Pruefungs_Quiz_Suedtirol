const routes = {
    "/Paragleiter-Pruefungs_Quiz_Suedtirol": {
        template: "menu.html",
    },
    questions: {
        template: "quiz.html",
    },
};

const locationHandler = async () => {
    var location = window.location.hash.replace("#", "");
    const len = location.length;

    if (location[0] == '/') {
        location = "/Paragleiter-Pruefungs_Quiz_Suedtirol";
    } else {
        questionMode = Number(location[len-1]);
        location = location.slice(0, len-1);
    }

    const route = routes[location];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("content").innerHTML = html;

    nextButton = document.getElementById('next-btn');
    questionContainerElement = document.getElementById('question-container');
    questionElement = document.getElementById('question');
    answerButtonsElement = document.getElementById('answer-buttons');
    questionnrElement = document.getElementById('questionnr');
    scoreElement = document.getElementById('score');

    startGame();
};


window.addEventListener("hashchange", locationHandler);
locationHandler();
