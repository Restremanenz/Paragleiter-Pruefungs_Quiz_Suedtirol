const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const Punkte = document.getElementById("Punkte")
const FrageNr = document.getElementById("FrageNr")

let RichtigeAntworten = 0, alleAntworten = 0

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  FrageNr.innerHTML = alleAntworten + 1;
  setNextQuestion()
})

function WeiterBtn(e) {
  if (e.key === "Enter" && nextButton.className == "next-btn btn") {
    // Cancel the default action, if needed
    e.preventDefault();
    // Trigger the button element with a click
    document.getElementById("next-btn").click();
  }
}

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  if (nextButton.className == "next-btn btn hide") {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    alleAntworten++;
    if (correct == "true") {
      RichtigeAntworten++;
    }
    Punkte.innerHTML = (RichtigeAntworten / alleAntworten * 100).toFixed()
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
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

const questions = [



  {
    question: '1001 Wer darf den Sport- und Wanderflug (SWF) autonom aus??ben?',
    answers: [
      { text: 'Jeder, der einen Flugkurs besucht hat', correct: false },
      { text: 'jeder, der im Besitz der gesetzlichen Voraussetzungen, wie g??ltigen Flugschein und Haftpflichtversicherung, ist', correct: true },
      { text: 'jeder, vorausgesetzt, dass er eine Pr??fung des AeCI bestanden hat', correct: false }
    ]
  },
  {
    question: '1002 Wer ist der Alleinverantwortliche f??r die Steuerung des Drachens bzw. Gleitschirms?',
    answers: [
      { text: 'Der Pilot', correct: true },
      { text: 'der Pilot, aber nur wenn er ??ber ausreichende Erfahrung verf??gt', correct: false },
      { text: 'das Amt f??r die Luftfahrtkontrolle', correct: false }
    ]
  },
  {
    question: '1003 Welches ist, mit Einwilligung der Eltern, das Mindestalter f??r die Aus??bung des Sport- und Wanderflugs(SWF)?',
    answers: [
      { text: '14 Jahre', correct: false },
      { text: '18 Jahre', correct: false },
      { text: '16 Jahre', correct: true }
    ]
  },
  {
    question: '1004 Das ??rztliche Zeugnis hat im Normalfall eine G??ltigkeit von:',
    answers: [
      { text: '18 Monaten', correct: false },
      { text: '24 Monaten', correct: true },
      { text: '16 Monaten', correct: false }
    ]
  },
  {
    question: '1005 Besteht, laut Gesetz, die Vorschrift einer Haftpflichtversicherung?',
    answers: [
      { text: 'Ja, der Pilot muss sich haftpflichtversichern', correct: true },
      { text: 'ja, aber nur f??r Piloten mit gen??gend Erfahrung', correct: false },
      { text: 'ja, bei Fl??gen von langer Dauer', correct: false }
    ]
  },
  {
    question: '1006 Welche sind beim Sport-und Wanderflug die generellen Vorflugregeln beim Start?',
    answers: [
      { text: 'Der Landende (Top Landing) hat das Vorflugrecht', correct: true },
      { text: 'der Startende hat das Vorflugrecht', correct: false },
      { text: 'Es gibt diesbez??glich keine Regeln', correct: false }
    ]
  },
  {
    question: '1007 Besteht, laut Gesetz, beim Drachen- und Gleitschirmfliegen Helmpflicht?',
    answers: [
      { text: 'Nein', correct: false },
      { text: 'ja', correct: true },
      { text: 'nur beim Drachenfliegen', correct: false }
    ]
  },
  {
    question: '1008 Welches ist der Luftraum, innerhalb dessen der Sport-und Wanderflug erlaubt ist?',
    answers: [
      { text: '1. in jedem Luftraum aber unter 1000 feet (300Meter),', correct: false },
      { text: '2. innerhalb des von den Luftfahrtbeh??rden kontrollierten Luftraums,', correct: false },
      { text: '3. im nicht kontrolliertem Luftraum, ausgenommen Sondergenehmigungen oder Notam.', correct: true }
    ]
  },
  {
    question: '1009 Aus welchem Grund hat der Gesetzgeber dem SWF ganz bestimmte H??chsth??hen zugewiesen?',
    answers: [
      { text: '1. Weil Drachen- und Gleitschirmfliegen zweitrangige Sportarten sind,', correct: false },
      {
        text: '2. um den Sport- und Wanderflug (SWF) vom restlichen Zivil- und Milit??rluftverkehr zu trennen und Kollisionen zu vermeiden, ', correct: true
      },
      {
        text: '3. um zu vermeiden, dass Flugger??te, wie Drachen und Gleitschirme, nicht ??ber bestimmte H??hen fliegen, da sie daf??r nicht flugtauglich sind.', correct: false
      }
    ]
  },
  {
    question: '1010 Welche Mindesth??he muss beim Fliegen eingehalten werden?',
    answers: [
      { text: '1. An Werktagen 150 Meter ??ber dem h??chsten Punkt im Umkreis von 3 Kilometern, an Feiertagen 300 Meter,', correct: false },
      { text: ' 2. Es gibt keine Mindesth??he, da das ??berfliegen von Ortschaften generell verboten ist,', correct: false },
      {
        text: '3. die H??he, die ausreicht, um notfalls problemlos zu landen und keinerlei Dinge und Personen in Gefahr zu bringen.', correct: true
      }
    ]
  },
  {
    question: '1011 Welche Distanz muss von den Wolken eingehalten werden?',
    answers: [
      { text: '1. 1000 Meter,', correct: false },
      { text: '2. es gibt keine genaue Regel,', correct: false },
      { text: '3. au??erhalb von Wolken und mit Sichtkontakt zum Boden oder Wasser.', correct: true }
    ]
  },
  {
    question: '1012 Ist das Fliegen mit Drachen und Gleitschirm innerhalb von Wolken erlaubt?',
    answers: [
      {
        text: '1. Nein, da man wegen Orientierungsmangel die Kontrolle ??ber das Flugger??t verlieren und gegen Hindernisse sto??en kann, ', correct: true
      },
      { text: '2. nein, weil Kollisionsgefahr besteht, obwohl das Fliegen in der Wolke mit Instrumenten keine Gefahr bedeutet,', correct: false },
      { text: '3. ja, vorausgesetzt, die Wolke reicht nicht bis zum Boden oder dem Hang, ansonsten w??re das Fliegen gef??hrlich.', correct: false }
    ]
  },
  {
    question: '1013    Aus welchem Grund bezieht man sich beim Fliegen auf den Sonnenuntergang (Ephemeriden)?',
    answers: [
      { text: '1.   Weil mit Hilfe der Sterne eine genaue Navigation m??glich ist,', correct: false },
      { text: '2.   weil ein genaues Einsch??tzen der H??he der Sonne am Horizont eine gute Orientierung erm??glicht,', correct: false },
      {
        text: '3.   um Tag f??r Tag eine Uhrzeit festzulegen, die sich auf den Sonnenaufgang und Sonnenuntergang bezieht, denn nur dazwischen ist der Sichtflug erlaubt, (30 Minuten vor Sonnenaufgang und 30 Minuten nach Sonnenuntergang)', correct: true
      }
    ]
  },
  {
    question: '1014    Ist es erlaubt, n??her als 4 km an die Staatsgrenze heranzufliegen?',
    answers: [
      { text: '1.   Nein,', correct: false },
      { text: '2.   ja,', correct: true },
      { text: '3.   je nach Gesetz des angrenzenden Staates.', correct: false }
    ]
  },
  {
    question: '1015    Wie werden Drachen und Gleitschirm klassifiziert?',
    answers: [
      { text: '1.   Als Segelflieger,', correct: false },
      { text: '2.   als Ger??te zum Sport- und Wanderflug,', correct: true },
      { text: '3.   als Luftfahrer', correct: false }
    ]
  },
  {
    question: '1016    Was versteht man unter kontrolliertem Luftraum?',
    answers: [
      { text: '1.   Einen Teil des nationalen Luftraumes mit Radarkontrolle,', correct: false },
      { text: '2.   einen Teil des nationalen Luftraumes mit Milit??rradarkontrolle ??ber alle Flugzeuge,', correct: false },
      {
        text: '3.   einen Teil des nationalen Luftraumes, innerhalb dessen der Zivil- und Milit??rluftverkehr von den zust??ndigen ??mtern kontrolliert wird.', correct: true
      }
    ]
  },
  {
    question: '1017 Das italienische Gesetz sagt aus, dass:',
    answers: [
      {
        text: '1. Im kontrolliertem Luftraum nur Zivil-und Milit??rflugzeuge fliegen; Ger??te f??r SWF haben Flugverbot, ausgenommen mit Sondergenehmigung, ', correct: true
      },
      { text: '2. im kontrolliertem Luftraum generell alle Flugzeuge und Ger??te f??r SWF fliegen,', correct: false },
      { text: '3. im kontrolliertem Luftraum Zivil- und Milit??rflugzeuge und an Feiertagen auch Drachen und Gleitschirme fliegen.', correct: false }
    ]
  },
  {
    question: '1018    Ist der Sport- und Wanderflug (SWF) im kontrollierten Luftraum erlaubt?',
    answers: [
      { text: '1.   Nur mit Sondergenehmigung,', correct: true },
      { text: '2.   nur bei Sichtflugkonditionen (Visual Flight Rules),', correct: false },
      { text: '3.   nein, unabh??ngig von den bestehenden Umst??nden.', correct: false }
    ]
  },
  {
    question: '1019    Welcher Abstand muss beim Fliegen von einem nicht im ATZ liegenden Flugplatz gehalten werden?',
    answers: [
      { text: '1.   Mindestens 5 Kilometer,', correct: true },
      { text: '2.   mindestens 1 Kilometer,', correct: false },
      { text: '3.   mindestens 5 Kilometer und mehr als 500 Meter ??ber Grund.', correct: false }
    ]
  },
  {
    question: '1020    Was ist ein ATZ?',
    answers: [
      { text: '1.   Ein kontrollierter Luftraum rund um einen Flugplatz und dar??ber, (Aerodrome Trafic Zone).', correct: true },
      { text: '2.   der Platz, wo Zivil- und Milit??rflugzeuge auf die Starterlaubnis warten,', correct: false },
      { text: '3.   eine Flugplatzverkehrszone.', correct: false }
    ]
  },
  {
    question: '1021    D??rfen Flugger??te des SWF in eine ATZ einfliegen?',
    answers: [
      { text: '1.   Ja,', correct: false },
      { text: '2.   ja, wenn keine Flugzeuge landen und starten,', correct: false },
      { text: '3.   nein, ausgenommen mit Sondergenehmigung des Direktors des Flughafenbezirks (???Circoscrizione aeroportuale???)', correct: true }
    ]
  },
  {
    question: '1022 Was ist ein CTR?',
    answers: [
      {
        text: '1. Ein Teil des kontrollierten Luftraumes, innerhalb dessen sich der Flugzeugverkehr abwickelt; und eventuell der Sport- und Wanderflug mit Sondergenehmigung, ', correct: true
      },
      {
        text: '2. ein Teil des nicht unbedingt kontrollierten Luftraumes, innerhalb dessen sich der Zivil- und Milit??rluftverkehr abwickelt, ', correct: false
      },
      { text: '3. ein Teil des kontrollierten Luftraumes, f??r An- und Abfl??ge der Milit??rflugzeuge.', correct: false }
    ]
  },
  {
    question: '1023    Ist das Fliegen mit Drachen und Gleitschirm innerhalb eines CTR erlaubt?',
    answers: [
      { text: '1.   Normalerweise ja,', correct: false },
      { text: '2.   ja, an Feiertagen,', correct: false },
      { text: '3.   nein, nur mit Sondergenehmigung.', correct: true }
    ]
  },
  {
    question: '1024    Was ist ein TMA?',
    answers: [
      { text: '1.   Ein Teil des Luftraumes, der f??r Milit??rfl??ge reserviert ist,', correct: false },
      { text: '2.   ein Teil des kontrollierten Luftraumes,', correct: true },
      { text: '3.   ein nicht kontrollierter Luftraum.', correct: false }
    ]
  },
  {
    question: '1025    Ist der Sport- und Wanderflug in einem TMA erlaubt?',
    answers: [
      { text: '1.   Ja, mit Sondergenehmigung,', correct: true },
      { text: '2.   ja,', correct: false },
      { text: '3.   ja, bei geringem Flugverkehr.', correct: false }
    ]
  },
  {
    question: '1026 Was ist eine AWY?',
    answers: [
      { text: '1. Eine Fahrbahn, auf der sich Flugzeuge am Boden bewegen,', correct: false },
      {
        text: '2. ein kontrollierter Luftraum in Form eines Korridors, innerhalb dessen sich Flugzeuge von einem Punkt der Erdezu einem anderen bewegen, ', correct: true
      },
      { text: '3. ein nicht unbedingt kontrollierter Luftraum mit Flugverkehr.', correct: false }
    ]
  },
  {
    question: '1027    Ist das Fliegen innerhalb einer AWY mit Drachen und Gleitschirm gestattet?',
    answers: [
      { text: '1.   Nein,', correct: true },
      { text: '2.   ja, bei ganz wenig Verkehr,', correct: false },
      { text: '3.   ja.', correct: false }
    ]
  },
  {
    question: '1028    Was ist eine P- Zone (???PAPA???)?',
    answers: [
      { text: '1.   Ein Gebiet, in dem jedes Fliegen verboten ist (Sperrgebiet),', correct: true },
      { text: '2.   ein Gebiet, in dem nur Gleitschirme fliegen d??rfen,', correct: false },
      { text: '3.   ein Gebiet, in dem nur Milit??rflug erlaubt ist.', correct: false }
    ]
  },
  {
    question: '1029    Was bedeutet eine D- Zone (???DELTA???)?',
    answers: [
      { text: '1.   Ein Gebiet, wo das Drachenfliegen erlaubt ist,', correct: false },
      { text: '2.   ein Gebiet, wo das Fliegen f??r alle gef??hrlich ist (Gefahrengebiet),', correct: true },
      { text: '3.   ein Gebiet, in dem nur spezielle Flugzeuge fliegen d??rfen.', correct: false }
    ]
  },
  {
    question: '1030    Was bedeutet eine R- Zone (???ROMEO ???)?',
    answers: [
      { text: '1.   Ein Gebiet, in dem das Fliegen erlaubt ist,', correct: false },
      { text: '2.   ein Gebiet, in dem absolutes Flugverbot f??r alle herrscht,', correct: false },
      {
        text: '3.   ein Gebiet, in dem das Fliegen eingeschr??nkt ist (Restricted). F??r SWF nur mit Sondergenehmigung.', correct: true
      }
    ]
  },
  {
    question: '1031    In Gebieten, die in den Luftfahrtkarten als D- Zone und P- Zone eingetragen sind,',
    answers: [
      { text: '1.   ist das Drachen- und Gleitschirmfliegen normalerweise nicht erlaubt,', correct: true },
      { text: '2.   ist der SWF an Feiertagen erlaubt,', correct: false },
      {
        text: '3.   Ist das Drachen- und Gleitschirmfliegen normalerweise erlaubt.', correct: false
      }
    ]
  },
  {
    question: '1032    Wer bestimmt die Drehrichtung beim Fliegen in der Thermik?',
    answers: [
      { text: '1.   Der Erste, der eindreht, bestimmt die Drehrichtung,', correct: true },
      { text: '2.   der weniger Erfahrene bestimmt die Drehrichtung,', correct: false },
      { text: '3.   bei Kumuluswolken dreht man rechts, sonst immer links.', correct: false }
    ]
  },
  {
    question: '1033    Wer hat das Vorflugrecht zwischen einem Flugger??t mit Motor und einem Ger??t f??r SWF?',
    answers: [
      { text: '1.   Das Flugger??t mit Motor, da es schneller fliegt,', correct: false },
      { text: '2.   das Flugger??t mit Motor, da es weniger man??vrierf??hig ist,', correct: false },
      { text: '3.   das Ger??t f??r Sport- und Wanderflug.', correct: true }
    ]
  },
  {
    question: '1034    Begegnen sich zwei Flugger??te auf gleicher H??he, in entgegengesetzter Richtung (Kollisionskurs),',
    answers: [
      { text: '1.   fliegt einer gerade weiter und der andere vermeidet die Kollision,', correct: false },
      { text: '2.   der von rechts kommt, fliegt weiter und der andere weicht aus, um die Kollision zu vermeiden,', correct: false },
      { text: '3.   beide weichen rechts aus und behalten sich im Auge.', correct: true }
    ]
  },
  {
    question: '1035 Wenn sich zwei Flugger??te ohne Motor beim Fliegen am Hang begegnen, m??ssen sich die Piloten folgenderma??en verhalten: ',
    answers: [
      { text: '1. der Pilot, der den Hang zu seiner Linken hat, fliegt gerade weiter und der andere weicht links aus,', correct: false },
      {
        text: '2. der Pilot, der den Hang rechts hat, fliegt gerade weiter, der andere hat den Hang links und muss rechts ausweichen, ', correct: true
      },
      {
        text: '3. beide fliegen gerade weiter und ver??ndern ihre H??he, um eine Kollision zu vermeiden.', correct: false
      }
    ]
  },
  {
    question: '1036 Wer hat das Vorflugrecht zwischen einem Gleitschirm, einem Gleitschirmtandem und einem Drachentandem?',
    answers: [
      { text: '1. Der Gleitschirm,', correct: false },
      { text: '2. der Drachentandem,', correct: false },
      { text: '3. der Gleitschirmtandem.', correct: true }
    ]
  },
  {
    question: '1037    Wie lautet generell die Regel bez??glich des Vorflugrechts bei der Landung?',
    answers: [
      { text: '1.   Alle Drachen und Gleitschirme haben das Vorflugrecht, unabh??ngig von ihrer H??he,', correct: false },
      { text: '2.   das tiefste Flugger??t hat das Vorflugrecht,', correct: true },
      { text: '3.   die Piloten mit mehr Erfahrung haben das Vorflugrecht.', correct: false }
    ]
  },
  {
    question: '1038    Muss beim SWF das Flugger??t haftpflichtversichert sein?',
    answers: [
      { text: '1.   Nein,', correct: true },
      { text: '2.   ja,', correct: false },
      { text: '3.   ja, aber nur in Gebieten mit viel Flugverkehr.', correct: false }
    ]
  },
  {
    question: '1039    Welches ist das zust??ndige Amt f??r Meldungen wegen gesetzwidrigen Verhaltens beim SWF ?',
    answers: [
      { text: '1.   Die Staatspolizei.', correct: false },
      { text: '2.   die ???Direzione Circoscrizionale di Aeroporto??? (Direktion des Flughhafenbezirks),', correct: true },
      { text: '3.   die Carabinieri.', correct: false }
    ]
  },
  {
    question: '1040    Welche ist eine der Voraussetzungen zum Tandemfliegen?',
    answers: [
      { text: '1.   G??ltiger Flugschein und die vom Aero- Club erlassene Bef??higung zum Passagiertransport,', correct: true },
      { text: '2.   g??ltiger Flugschein und mindestens 30 Flugstunden,', correct: false },
      { text: '3.   g??ltiger Flugschein, viel Erfahrung und Flug nur bei geeignetem Wetter.', correct: false }
    ]
  },
  {
    question: '2001    Was versteht man unter Aerodynamik?',
    answers: [
      { text: '1.   Die Lehre der Str??mungen,', correct: false },
      { text: '2.   die Lehre von den Str??mungen und Kr??ften von Gasen,', correct: true },
      {
        text: '3.   die Lehre der Str??mungen innerhalb der Atmosph??re.', correct: false
      }
    ]
  },
  {
    question: '2002    Was ist ein Fl??gel?',
    answers: [
      { text: '1.   Eine Fl??che mit einer ganz bestimmten Form, die immer Auftrieb erzeugt,', correct: false },
      { text: '2.   eine Fl??che mit g??nstiger Form, die bei Vorw??rtsbewegung gegen??ber der Luft aerodynamische Kr??fte erzeugt,', correct: true },
      { text: '3.   eine Fl??che mit einer beliebigen Form, die immer Auftrieb erzeugt.', correct: false }
    ]
  },
  {
    question: '2003    Was versteht man unter dem Begriff ???Fl??chenprofil??? ?',
    answers: [
      { text: '1.   Eine horizontale Fl??che,', correct: false },
      { text: '2.   eine vertikal projizierte, zwischen den beiden Fl??gelenden liegende Fl??che,', correct: false },
      { text: '3.   ein Teil des Fl??gels, rechtwinklig zur Querachse.', correct: true }
    ]
  },
  {
    question: '2004    Welche sind die meist verwendeten Profilformen beim SWF ?',
    answers: [
      { text: '1.   Plankonvex und symmetrisch,', correct: false },
      { text: '2.   bikonvex und symmetrisch,', correct: false },
      { text: '3.   konkav und konvex.', correct: true }
    ]
  },
  {
    question: '2005    Was versteht man unter Anstr??mkante und Austrittskante?',
    answers: [
      { text: '1.   Die beiden Fl??gelenden,', correct: false },
      { text: '2.   die Innen- und Au??enseite des Fl??gels,', correct: false },
      { text: '3.   den vordersten und hintersten Punkt eines Fl??gels.', correct: true }
    ]
  },
  {
    question: '2006    Was versteht man unter dem Begriff ???Profilsehne????',
    answers: [
      { text: '1.   Eine gerade, durchlaufende Linie durch das Profil, die die Anstr??mkante und die Austrittskante verbindet,', correct: true },
      { text: '2.   eine Linie, die die Oberseite und die Unterseite des Segels verbindet,', correct: false },
      { text: '3.   die Distanz zwischen den beiden Fl??gelenden.', correct: false }
    ]
  },
  {
    question: '2007    Was versteht man unter dem Begriff ???Obersegel und Untersegel????',
    answers: [
      { text: '1.   Es gibt nur ein Obersegel,', correct: false },
      { text: '2.   die obere und die untere Seite des Fl??gels,', correct: true },
      { text: '3.   die Innenseite und die Au??enseite des Fl??gels.', correct: false }
    ]
  },
  {
    question: '2008    Was versteht man unter Spannweite?',
    answers: [
      { text: '1.   Die Distanz zwischen den beiden Fl??gelenden,', correct: true },
      { text: '2.   die Distanz zwischen der Anstr??mkante und der Austrittskante,', correct: false },
      { text: '3.   die Distanz zwischen Ober- und Untersegel.', correct: false }
    ]
  },
  {
    question: '2009    Was versteht man unter Streckung eines Fl??gels?',
    answers: [
      { text: '1.   Die Distanz zwischen den beiden Fl??gelenden,', correct: false },
      { text: '2.   das Verh??ltnis zwischen der Fl??che und der Spannweite,', correct: false },
      { text: '3.   das Verh??ltnis zwischen der Spannweite im Quadrat und der projizierten Fl??che.', correct: true }
    ]
  },
  {
    question: '2010 Welche ist die Streckung eines Fl??gels mit einer Fl??che von 25 Quadratmetern und einer Spannweite von 10 Metern ? ',
    answers: [
      { text: '1. 4 (vier),', correct: true },
      { text: '2. 2,5 (zwei komma f??nf),', correct: false },
      { text: '3. 6,25 (sechs komma f??nfundzwanzig).', correct: false }
    ]
  },
  {
    question: '2011    Wie hei??en die Achsen, um die sich ein Fl??gel bewegt?',
    answers: [
      { text: '1.   Die L??ngs- und die Hochachse,', correct: false },
      { text: '2.   die L??ngsachse, die Querachse und die Hochachse,', correct: true },
      { text: '3.   die L??ngsachse und die Querachse.', correct: false }
    ]
  },
  {
    question: '2012    Wie bezeichnet man die Bewegung um die L??ngsachse?',
    answers: [
      { text: '1.   Rollen,', correct: true },
      { text: '2.   gieren,', correct: false },
      { text: '3.   nicken.', correct: false }
    ]
  },
  {
    question: '2013    Wie bezeichnet man die Bewegung um die Querachse?',
    answers: [
      { text: '1.   Rollen,', correct: false },
      { text: '2.   gieren,', correct: false },
      { text: '3.   nicken.', correct: true }
    ]
  },
  {
    question: '2014    Wie bezeichnet man die Bewegung um die Hochachse?',
    answers: [
      {
        text: '1.   Rollen, ', correct: false
      },
      { text: '2.   gieren,', correct: true },
      { text: '3.   nicken.', correct: false }
    ]
  },
  {
    question: '2015    Kann ein Fl??gel als Maschine bezeichnet werden?',
    answers: [
      { text: '1.   Nein, wegen Mangel an geeigneten Mechanismen,', correct: false },
      { text: '2.   nur bei variabler Fl??che,', correct: false },
      { text: '3.   ja, weil er eine bestimmte Energie in eine andere umwandeln kann.', correct: true }
    ]
  },
  {
    question: '2016    Die Bewegung eines Fl??gels:',
    answers: [
      { text: '1.   st??rt die umliegende Luft innerhalb der Wirbelstr??mung,', correct: true },
      { text: '2.   st??rt keine Luft,', correct: false },
      { text: '3.   st??rt die Luft, aber au??erhalb der Wirbelstr??mung.', correct: false }
    ]
  },
  {
    question: '2017    Warum bezieht man sich auch auf die Wirbelstr??mung, wenn die Rede von Aerodynamik ist?',
    answers: [
      { text: '1.   Weil das in der Physik gebr??uchlich ist.', correct: false },
      { text: '2.   Die Wirbelstr??mung gibt es nicht.', correct: false },
      { text: '3.   Weil sich im Flug s??mtliche Kr??fte innerhalb der Wirbelstr??mung abspielen.', correct: true }
    ]
  },
  {
    question: '2018    Was ist die Wirbelstr??mung?',
    answers: [
      { text: '1.   Die Menge Luft, die vom Durchflug eines Fl??gels interessiert wird,', correct: true },
      { text: '2.   ein Messger??t f??r die Geschwindigkeit des Fl??gels,', correct: false },
      { text: '3.   die Verwirbelungen beim Fliegen.', correct: false }
    ]
  },
  {
    question: '2019 Innerhalb der Wirbelstr??mung:',
    answers: [
      { text: '1.   verwirbelt jeder K??rper die Str??mung.', correct: true },
      { text: '2.   Ein K??rper mit g??nstiger Form erzeugt keine Verwirbelungen.', correct: false },
      { text: '3.   Ein K??rper hat keinen Einfluss auf die Wirbelstr??mung.', correct: false }
    ]
  },
  {
    question: '2020    Ein Fl??gel, der vom Wind angestr??mt wird, und ein Fl??gel der sich vorw??rts bewegt:',
    answers: [
      { text: '1.   erzeugen keinen Auftrieb,', correct: false },
      { text: '2.   erzeugen, bei gleicher Windrichtung und Windst??rke, die gleichen aerodynamischen Kr??fte.', correct: true },
      { text: '3.   Das ist von der aerodynamischen Form abh??ngig.', correct: false }
    ]
  },
  {
    question: '2021    Was versteht man unter dem Begriff ???Relativer Wind????',
    answers: [
      { text: '1.   Die unterschiedliche Geschwindigkeit der Str??mung zwischen Innen- und Au??enfl??gel,', correct: false },
      { text: '2.   der Wind, dem ein Fl??gel begegnet, oder ein Fl??gel, der durch Vorw??rtsbewegung dem Wind begegnet,', correct: true },
      { text: '3.   die Geschwindigkeitsdifferenz zwischen der Segelober- und Segelunterseite.', correct: false }
    ]
  },
  {
    question: '2022 Die Geschwindigkeit eines Fl??gels und die Kr??fte, die w??hrend des Flugs auf ihn wirken, sind:',
    answers: [
      {
        text: '1. Physikalische Gr????en, die mit Vektoren (mit definierter Richtung, Betrag und Ansatzpunkt) dargestellt und untereinander zusammengesetzt und zerlegt werden k??nnen, ', correct: true
      },
      {
        text: '2. physikalische Gr????en, die nicht graphisch dargestellt werden k??nnen, die aber geometrisch addiert und subtrahiert werden k??nnen, ', correct: false
      },
      { text: '3. einfache numerische Gr????en, mit denen man jede Operation durchf??hren kann.', correct: false }
    ]
  },
  {
    question: '2023 Was versteht man unter dem Druck einer Str??mung bzw. der Luft auf einer Oberfl??che?',
    answers: [
      { text: '1. Das Produkt der Fl??che mit der Kraft, welche die Str??mung auf sie aus??bt,', correct: false },
      { text: '2. das Verh??ltnis zwischen der Kraft, die die Str??mung auf einer Fl??che aus??bt, und dem Quadrat der Fl??che,', correct: false },
      { text: '3. die Kraft, die die Str??mung auf eine Fl??cheneinheit aus??bt.', correct: true }
    ]
  },
  {
    question: '2024    Der Gesamtdruck innerhalb der Wirbelstr??mung besteht aus:',
    answers: [
      { text: '1.   dynamischem Druck und Gewicht der Str??mung,', correct: false },
      { text: '2.   dynamischem und statischem Druck,', correct: true },
      { text: '3.   dynamischem Druck und Widerstand der Str??mung.', correct: false }
    ]
  },
  {
    question: '2025    Was versteht man unter dem statischen Druck einer Str??mung?',
    answers: [
      { text: '1.   Das Verh??ltnis zwischen dem Gewicht und der Geschwindigkeit der Str??mung,', correct: false },
      { text: '2.   das Verh??ltnis zwischen dem Gewicht der Str??mung und ihrer Luftdichte,', correct: false },
      { text: '3.   das Gewicht der Str??mung auf eine Fl??cheneinheit.', correct: true }
    ]
  },
  {
    question: '2026    Was versteht man unter dem dynamischen Druck einer Str??mung?',
    answers: [
      { text: '1.   Das Verh??ltnis zwischen dem Gewicht und der Geschwindigkeit der Str??mung,', correct: false },
      { text: '2.   das Verh??ltnis zwischen dem Gewicht und der Geschwindigkeit eines K??rpers innerhalb der Str??mung,', correct: false },
      { text: '3.   der Druck, den eine Str??mung auf eine Fl??che bewirkt.', correct: true }
    ]
  },
  {
    question: '2027    Was bedeutet der Ausdruck ???1/2 ?? v2?',
    answers: [
      { text: '1.   Die Dichte der Luft bei einer bestimmten Geschwindigkeit,', correct: false },
      { text: '2.   der statische Druck einer Str??mung, deren Dichte = ?? ist,', correct: false },
      {
        text: '3.   der dynamische Druck einer Str??mung, deren Dichte = ?? und deren Geschwindigkeit = v ist.', correct: true
      }
    ]
  },
  {
    question: '2028    Der Auftrieb und der Widerstand sind direkt proportional:',
    answers: [
      { text: '1.   zum statischen Druck,', correct: false },
      { text: '2.   zum dynamischen Druck,', correct: true },
      { text: '3.   zum totalen Druck.', correct: false }
    ]
  },
  {
    question: '2029    Beim Erzeugen von Auftrieb l??uft die Str??mung folgenderweise ??ber das Fl??gelprofil:',
    answers: [
      { text: '1.   mit unterschiedlicher Geschwindigkeit,', correct: true },
      { text: '2.   mit unterschiedlicher Dichte,', correct: false },
      { text: '3.   mit unterschiedlichen Molek??len.', correct: false }
    ]
  },
  {
    question: '2030    Die Geschwindigkeit der Str??mung auf einem Fl??gel im Flug ist:',
    answers: [
      { text: '1.   auf der Segeloberseite h??her,', correct: true },
      { text: '2.   auf der Segelunterseite h??her,', correct: false },
      { text: '3.   auf beiden Seiten identisch.', correct: false }
    ]
  },
  {
    question: '2031    Der dynamische Druck auf einem Profil ist:',
    answers: [
      { text: '1.   auf der Segeloberseite h??her,', correct: true },
      { text: '2.   auf der Segelunterseite h??her,', correct: false },
      { text: '3.   auf beiden Seiten gleich.', correct: false }
    ]
  },
  {
    question: '2032    Der statische Druck auf einem Profil ist:',
    answers: [
      { text: '1.   auf beiden Seiten gleich,', correct: false },
      { text: '2.   auf der Segeloberseite h??her,', correct: false },
      { text: '3.   auf der Segeloberseite geringer.', correct: true }
    ]
  },
  {
    question: '2033 Das Bernoulli-Gesetz sagt Folgendes aus:',
    answers: [
      { text: '1. die Summe des dynamischen und des statischen Drucks ist nicht konstant,', correct: false },
      { text: '2. die Summe des dynamischen und des statischen Drucks ist konstant,', correct: true },
      { text: '3. der dynamische und der statische Druck summieren sich nicht.', correct: false }
    ]
  },
  {
    question: '2034 Was geschieht in einem Venturi-Rohr mit konstantem Fassungsverm??gen?',
    answers: [
      { text: '1. Bei Ver??nderung des Durchmessers bleiben Druck und Geschwindigkeit unver??ndert,', correct: false },
      { text: '2. bei Ver??nderung des Durchmessers ver??ndert sich nur der dynamische Druck,', correct: false },
      {
        text: '3. bei Ver??nderung des Durchmessers ver??ndern sich die Geschwindigkeit, der statische und der dynamische Druck, w??hrend der totale Druck konstant bleibt.', correct: true
      }
    ]
  },
  {
    question: '2035    Beim Ver??ndern des Durchmessers eines Venturi-Rohres mit konstantem Fassungsverm??gen:',
    answers: [
      { text: '1.   ver??ndert sich die Str??mungsgeschwindigkeit,', correct: true },
      { text: '2.   bleibt die Str??mungsgeschwindigkeit gleich,', correct: false },
      { text: '3.   ver??ndert sich der Gesamtdruck.', correct: false }
    ]
  },
  {
    question: '2036 Die Summe aus dem statischen und dem dynamischen Druck der Str??mung durch ein Venturi- Rohr mit konstantem Fassungsverm??gen: ',
    answers: [
      { text: '1. ver??ndert sich bei Ver??nderung des Durchmessers,', correct: false },
      { text: '2. bleibt konstant bei Ver??nderung des Durchmessers,', correct: true },
      {
        text: '3. das ist von der Luftdichte abh??ngig.', correct: false
      }
    ]
  },
  {
    question: '2037    Verringert sich der Durchmesser eines Venturi-Rohres mit konstantem Fassungsverm??gen, so:',
    answers: [
      { text: '1.   nimmt die Geschwindigkeit der Str??mung zu und ihr dynamischer Druck wird geringer,', correct: false },
      { text: '2.   nimmt die Geschwindigkeit der Str??mung und des dynamischen Drucks zu,', correct: true },
      { text: '3.   nimmt die Geschwindigkeit der Str??mung zu und der totale Druck wird gr????er.', correct: false }
    ]
  },
  {
    question: '2038    Vergr????ert sich der Durchmesser eines Venturi-Rohres mit konstantem Fassungsverm??gen, so:',
    answers: [
      { text: '1.   verringert sich die Geschwindigkeit der Str??mung und ihr statischer Druck nimmt zu,', correct: true },
      { text: '2.   verringert sich die Geschwindigkeit der Str??mung und ihr statischer Druck nimmt ab,', correct: false },
      { text: '3.   verringert sich die Geschwindigkeit der Str??mung und der totale Druck ver??ndert sich.', correct: false }
    ]
  },
  {
    question: '2039    Hat das Bernoulli-Gesetz Einfluss auf Drachen und Gleitschirm?',
    answers: [
      { text: '1.   Ja, aber nicht beim Fliegen in der Thermik,', correct: false },
      { text: '2.   ja,', correct: true },
      { text: '3.   nein.', correct: false }
    ]
  },
  {
    question: '2040    Das Profil der Drachen und Gleitschirme ist generell:',
    answers: [
      { text: '1.   bikonvex symmetrisch.', correct: false },
      { text: '2.   plankonvex,', correct: false },
      { text: '3.   konkav-konvex oder bikonvex.', correct: true }
    ]
  },
  {
    question: '2041    Was versteht man unter der ??? Luftkraftresultierenden????',
    answers: [
      { text: '1.   die Resultierende aller Kr??fte, die von einem Fl??gel im Flug erzeugt werden,', correct: true },
      { text: '2.   die Resultierende oder vektorielle Summe zwischen Auftrieb und Widerstand,', correct: false },
      { text: '3.   eine Kraft, die rechtwinklig zur Flugbahn wirkt.', correct: false }
    ]
  },
  {
    question: '2042    Die Luftkraftresultierende ist eine Kraft,',
    answers: [
      { text: '1.   die rechtwinklig zur Flugbahn oder dem relativen Wind wirkt,', correct: false },
      { text: '2.   die immer l??ngs der Flugbahn wirkt,', correct: false },
      { text: '3.   die nach oben und entgegen der Gewichtskraft wirkt.', correct: true }
    ]
  },
  {
    question: '2043    Die Luftkraftresultierende resultiert aus:',
    answers: [
      { text: '1.   dem Auftrieb im rechten Winkel- und dem Widerstand parallel zur Profilsehne,', correct: false },
      { text: '2.   dem Auftrieb im rechten Winkel- und dem Widerstand l??ngs der Flugbahn,', correct: true },
      { text: '3.   dem Auftrieb parallel- und dem Widerstand im rechten Winkel zur Flugbahn.', correct: false }
    ]
  },
  {
    question: '2044    Wenn ein Profil vom relativen Wind angestr??mt wird, kann man behaupten, dass:',
    answers: [
      { text: '1.   Auftrieb erzeugt wird,', correct: false },
      { text: '2.   kein Auftrieb ohne Widerstand erzeugt wird,', correct: true },
      { text: '3.   der erzeugte Widerstand nur von Profil abh??ngig ist.', correct: false }
    ]
  },
  {
    question: '2045 Beim Drachen- und Gleitschirmfliegen kann man behaupten, dass:',
    answers: [
      { text: '1. der Widerstand l??ngs der Flugbahn wirkt und der Geschwindigkeit gleich ist,', correct: false },
      { text: '2. der Widerstand bei konstanter Geschwindigkeit dem Vortrieb entgegenwirkt,', correct: true },
      {
        text: '3. der Auftrieb und der Widerstand sich ausgleichen.', correct: false
      }
    ]
  },
  {
    question: '2046    Der Widerstand ist eine aerodynamische Kraft, die immer:',
    answers: [
      { text: '1.   rechtwinklig zur Flugbahn wirkt,', correct: false },
      { text: '2.   parallel zur Profilsehne wirkt,', correct: false },
      { text: '3.   parallel zur Flugbahn oder dem relativem Wind wirkt.', correct: true }
    ]
  },
  {
    question: '2047 Wie lautet die Formel des Widerstandes W?',
    answers: [
      {
        text: '1. W = ?? ?? S Cw v??', correct: true
      },
      {
        text: '2. W = ?? ?? S?? Cw v', correct: false
      },
      { text: '3. W = ?? ?? S Cw v', correct: false }
    ]
  },
  {
    question: '2048 Wie ver??ndert sich der aerodynamische Widerstand eines Fl??gels beim Ver??ndern der Fl??chengr????e und der Luftdichte ? ',
    answers: [
      { text: '1. Er ver??ndert sich nicht,', correct: false },
      { text: '2. er ver??ndert sich proportional,', correct: true },
      { text: '3. er ver??ndert sich umgekehrt proportional.', correct: false }
    ]
  },
  {
    question: '2049 Wie verh??lt sich der Form- oder aerodynamische Widerstand beim Verdreifachen der Geschwindigkeit ? ',
    answers: [
      { text: '1. Er verdreifacht sich,', correct: false },
      { text: '2. er ver??ndert sich nicht,', correct: false },
      {
        text: '3. er verneunfacht sich.', correct: true
      }
    ]
  },
  {
    question: '2050    Was versteht man unter dem Widerstandskoeffizienten ???Cw????',
    answers: [
      { text: '1.   Ein numerischer Faktor, der von der Fl??gelbelastung abh??ngt,', correct: false },
      { text: '2.   ein numerischer Koeffizient, der von der Profilform und dem Anstellwinkel abh??ngig ist,', correct: true },
      { text: '3.   eine Kraft, die von der Profilform und dem Anstellwinkel abh??ngt.', correct: false }
    ]
  },
  {
    question: '2051    Woraus besteht der Gesamtwiderstand eines Drachens oder Gleitschirms?',
    answers: [
      { text: '1.   Dem Reibungswiderstand, dem Formwiderstand und dem induzierten Widerstand,', correct: true },
      { text: '2.   dem Reibungswiderstand und dem induzierten Widerstand,', correct: false },
      {
        text: '3.   dem Formwiderstand und dem induzierten Widerstand.', correct: false
      }
    ]
  },
  {
    question: '2052    Was ist der Formwiderstand?',
    answers: [
      { text: '1.   Der Widerstand, der durch einen mehr oder weniger aerodynamischen K??rper entsteht,', correct: true },
      { text: '2.   der Widerstand, der immer gleich gro?? ist,', correct: false },
      { text: '3.   der Widerstand, der bei sehr g??nstiger und aerodynamischer Form auf Null reduziert werden kann.', correct: false }
    ]
  },
  {
    question: '2053    Auf welchem Widerstand wirkt sich die Profilh??he aus?',
    answers: [
      { text: '1.   Auf den Reibungswiderstand,', correct: false },
      { text: '2.   auf den induzierten Widerstand,', correct: false },
      { text: '3.   auf den Formwiderstand.', correct: true }
    ]
  },
  {
    question: '2054    Mit zunehmender Geschwindigkeit nimmt der Formwiderstand:',
    answers: [
      { text: '1.   zu,', correct: true },
      { text: '2.   ab,', correct: false },
      { text: '3.   bleibt gleich.', correct: false }
    ]
  },
  {
    question: '2055    Was ist der Reibungswiderstand?',
    answers: [
      { text: '1.   Der Widerstand, der von der Gr????e der Fl??che abh??ngig ist,', correct: false },
      { text: '2.   der Widerstand, der durch die Reibung auf einer Fl??che entsteht,', correct: true },
      { text: '3.   der Widerstand, der durch die Randwirbel entsteht.', correct: false }
    ]
  },
  {
    question: '2056    Was versteht man unter der ???Laminarschicht????',
    answers: [
      { text: '1.   Die Luftschicht zwischen der Fl??che des Fl??gels und der Wirbelstr??mung,', correct: false },
      { text: '2.   die Beschichtung des Segels zwischen der Ober- und Unterseite,', correct: false },
      {
        text: '3.   eine ganz d??nne Luftschicht zwischen dem Fl??gel und der dar??ber str??menden Luft.', correct: true
      }
    ]
  },
  {
    question: '2057    Der Reibungswiderstand ist:',
    answers: [
      { text: '1.   auch von der Laminarschicht abh??ngig,', correct: true },
      { text: '2.   nicht von der Laminarschicht abh??ngig,', correct: false },
      { text: '3.   von der Gr????e und der Form des Fl??gels abh??ngig.', correct: false }
    ]
  },
  {
    question: '2058    Wie ver??ndert sich der Reibungswiderstand beim Ver??ndern der Geschwindigkeit?',
    answers: [
      { text: '1.   Er nimmt bei Verringerung der Geschwindigkeit zu,', correct: false },
      { text: '2.   er nimmt bei Erh??hung der Geschwindigkeit zu,', correct: true },
      { text: '3.   er bleibt immer konstant.', correct: false }
    ]
  },
  {
    question: '2059    Was ist der induzierte Widerstand?',
    answers: [
      { text: '1.   Der Widerstand, der durch die Randwirbel an den Fl??gelenden entsteht,', correct: true },
      { text: '2.   der Widerstand, der durch die Reibung auf der Fl??che entsteht,', correct: false },
      { text: '3.   der Widerstand, der durch die Form und die Gr????e einer Fl??che entsteht.', correct: false }
    ]
  },
  {
    question: '2060    Wodurch entsteht der induzierte Widerstand ? ',
    answers: [
      { text: '1.   Durch die Reibung auf einer Fl??che,', correct: false },
      { text: '2.   durch die mehr oder weniger hohe Profilform,', correct: false },
      { text: '3.   durch den unterschiedlichen statischen Druck zwischen Segelober- und Segelunterseite.', correct: true }
    ]
  },
  {
    question: '2061    Ist der induzierte Widerstand von der Fl??gelstreckung abh??ngig?',
    answers: [
      { text: '1.   Ja, nur von der Streckung,', correct: false },
      { text: '2.   ja, auch davon, und er ist umso kleiner, desto h??her die Streckung ist,', correct: true },
      { text: '3.   ??berhaupt nicht.', correct: false }
    ]
  },
  {
    question: '2062 Ver??ndert sich der induzierte Widerstand, bei Ver??nderung der Geschwindigkeit?',
    answers: [
      { text: '1. Ja, er wird h??her bei h??herer Geschwindigkeit,', correct: false },
      { text: '2. nein,', correct: false },
      { text: '3. ja, er verringert sich bei Erh??hung der Geschwindigkeit.', correct: true }
    ]
  },
  {
    question: '2063    Ein Fl??gel mit mehr Streckung:',
    answers: [
      { text: '1.   hat mehr Leistung,', correct: true },
      { text: '2.   hat weniger Leistung,', correct: false },
      { text: '3.   ist strapazierf??higer.', correct: false }
    ]
  },
  {
    question: '2064    Welches ist der eigentliche Grund, warum der Hersteller die Streckung erh??ht?',
    answers: [
      { text: '1.   Um den Formwiderstand zu verringern,', correct: false },
      { text: '2.   um den Reibungswiderstand zu verringern,', correct: false },
      { text: '3.   um den induzierten Widerstand zu verringern.', correct: true }
    ]
  },
  {
    question: '2065    Welcher Widerstand nimmt bei Erh??hung der Fluggeschwindigkeit ab?',
    answers: [
      { text: '1.   Der Reibungswiderstand,', correct: false },
      { text: '2.   der induzierte Widerstand,', correct: true },
      { text: '3.   der Formwiderstand.', correct: false }
    ]
  },
  {
    question: '2066    Wie verh??lt sich der aerodynamische Widerstand bei Ver??nderung der Geschwindigkeit?',
    answers: [
      { text: '1.   Direkt proportional,', correct: false },
      { text: '2.   er bleibt gleich,', correct: false },
      { text: '3.   Direkt proportional und im Quadrat zur Geschwindigkeit.', correct: true }
    ]
  },
  {
    question: '2067    Ein Ger??t mit einem geringeren aerodynamischen Widerstand hat bei gleichen Bedingungen:',
    answers: [
      { text: '1.   eine h??here Leistung und ein besseres Gleiten,', correct: true },
      { text: '2.   nur eine h??here Geschwindigkeit,', correct: false },
      { text: '3.   nur ein geringeres Sinken.', correct: false }
    ]
  },
  {
    question: '2068    Ver??ndert sich der Widerstand bei Ver??nderung des Anstellwinkels?',
    answers: [
      { text: '1.   Nein,', correct: false },
      { text: '2.   ja, aber nur im Kurvenflug,', correct: false },
      { text: '3.   ja.', correct: true }
    ]
  },
  {
    question: '2069    Ist es m??glich, den Widerstand auf Null zu reduzieren?',
    answers: [
      { text: '1.   Ja, bei der Wahl des richtigen Anstellwinkels,', correct: false },
      { text: '2.   ja, man sollte sehr langsam fliegen,', correct: false },
      { text: '3.   nein.', correct: true }
    ]
  },
  {
    question: '2070    Wenn wir ein ganz d??nnes Profil verwenden, verschwindet der Widerstand?',
    answers: [
      { text: '1.   Ja, bei einem Anstellwinkel von Null Grad,', correct: false },
      { text: '2.   es gibt keinen Auftrieb ohne Widerstand,', correct: true },
      { text: '3.   ja, mit einem sehr glatten Segel.', correct: false }
    ]
  },
  {
    question: '2071 Was versteht man unter ???Auftrieb??? ?',
    answers: [
      { text: '1. Eine Kraft; diese ist eine Komponente der Luftkraftresultierenden, die l??ngs der Flugbahn wirkt,', correct: false },
      { text: '2. eine Kraft; die horizontale Komponente der Luftkraftresultierenden,', correct: false },
      { text: '3. eine Komponente der Luftkraftresultierenden, die rechtwinklig zur Flugbahn oder dem relativen Wind wirkt.', correct: true }
    ]
  },
  {
    question: '2072    Auftrieb entsteht unter Anderem durch:',
    answers: [
      { text: '1.   Verringern des statischen Druckes auf der Segeloberseite,', correct: true },
      { text: '2.   Verringern des dynamischen Druckes auf der Segeloberseite,', correct: false },
      { text: '3.   Erh??hen des statischen Druckes auf der Oberseite.', correct: false }
    ]
  },
  {
    question: '2073    Wovon ist der Auftrieb abh??ngig?',
    answers: [
      { text: '1.   Von der Profilform, der Luftdichte, der Fl??chengr????e, der Fluggeschwindigkeit und dem Anstellwinkel,', correct: true },
      { text: '2.   von der Profilform und dem Anstellwinkel,', correct: false },
      { text: '3.   nur vom Anstellwinkel.', correct: false }
    ]
  },
  {
    question: '2074 Wie lautet die Formel f??r den Auftrieb A?',
    answers: [
      {
        text: '1. A = ?? ?? S?? Ca v', correct: false
      },
      { text: '2. A = ?? ?? S Ca v??', correct: true },
      { text: '3. A = ?? ?? S Ca v', correct: false }
    ]
  },
  {
    question: '2075    Was versteht man unter dem Auftriebskoeffizienten ???Ca??? ?',
    answers: [
      { text: '1.   Eine Kraft, rechtwinklig zur Flugbahn oder dem relativen Wind,', correct: false },
      { text: '2.   eine Geschwindigkeit, die vom Anstellwinkel abh??ngig ist,', correct: false },
      { text: '3.   ein numerischer Faktor, der von der Profilform und dem Anstellwinkel abh??ngig ist.', correct: true }
    ]
  },
  {
    question: '2076    Hat die Profilh??he Einfluss auf Auftrieb und Widerstand?',
    answers: [
      { text: '1. Ja, beim Erh??hen des Profils nimmt der Auftrieb zu und der Widerstand nimmt ab,', correct: false },
      { text: '2. Ja, beim Erh??hen des Profils nehmen Auftrieb und Widerstand zu,', correct: true },
      {
        text: '3. Ja, der Auftrieb nimmt zu und der Widerstand bleibt gleich.', correct: false
      }
    ]
  },
  {
    question: '2077    Sind Auftrieb und Widerstand auch von der Luftdichte abh??ngig?',
    answers: [
      { text: '1.   Ja,', correct: true },
      { text: '2.   nein,', correct: false },
      { text: '3.   nicht immer.', correct: false }
    ]
  },
  {
    question: '2078    Was ist der Anstellwinkel?',
    answers: [
      { text: '1.   Der Winkel zwischen Profilsehne und anstr??mender Luft (relativer Wind) oder Flugbahn,', correct: true },
      { text: '2.   der Winkel zwischen Profilsehne und Horizont,', correct: false },
      { text: '3.   der Winkel zwischen Profilsehne und dem meteorologischem Wind.', correct: false }
    ]
  },
  {
    question: '2079    Der Neigungswinkel unterscheidet sich ganz klar vom Anstellwinkel und ist der Winkel zwischen:',
    answers: [
      { text: '1.   der Profilsehne und der horizontalen Ebene,', correct: true },
      { text: '2.   der Profilsehne und dem relativen Wind oder der anstr??menden Luft,', correct: false },
      {
        text: '3.   der Flugbahn und der horizontalen Ebene.', correct: false
      }
    ]
  },
  {
    question: '2080    Welche Flugrichtung hat ein Profil mit einem Neigungswinkel von +6?? und einem Anstellwinkel von +10?? ?',
    answers: [
      { text: '1.   steigend und gegen??ber der horizontalen Ebene um 4?? nach oben geneigt.', correct: false },
      { text: '2.   absteigend und gegen??ber der horizontalen Ebene um 4?? nach unten geneigt.', correct: true },
      { text: '3.   genau horizontal.', correct: false }
    ]
  },
  {
    question: '2081    Der Anstellwinkel und der Neigungswinkel w??ren im Fluge identisch:',
    answers: [
      { text: '1.   bei einem Flug mit horizontaler Flugbahn und Windstille.', correct: true },
      { text: '2.   bei einer horizontalen Flugbahn,', correct: false },
      { text: '3.   beim Kurvenfliegen.', correct: false }
    ]
  },
  {
    question: '2082 Aus welchem Grund erscheint in der Formel f??r den Widerstand W = ?? ?? Cw S v2 nicht der Anstellwinkel, obwohl sich bei dessen Ver??nderung der Widerstand ver??ndert ? ',
    answers: [
      { text: '1. Bei Ver??nderung des Anstellwinkels ver??ndert sich nur die projizierte Fl??che,', correct: false },
      { text: '2. eine andere Formel zeigt den Zusammenhang zwischen Anstellwinkel und aerodynamischem Widerstand,', correct: false },
      { text: '3. bei Ver??nderung des Anstellwinkels ver??ndert sich der Cw.', correct: true }
    ]
  },
  {
    question: '2083    Man erh??ht den Auftrieb eines Profils, durch Erh??hen des Anstellwinkels.',
    answers: [
      { text: '1.   Ja, ein h??herer Anstellwinkel bedeutet mehr Auftrieb,', correct: false },
      { text: '2.   ja, von null bis zwanzig Grad,', correct: false },
      { text: '3.   ja, aber innerhalb bestimmter Grenzen.', correct: true }
    ]
  },
  {
    question: '2084    Ver??ndert sich der Auftrieb bei Ver??nderung des Anstellwinkels?',
    answers: [
      { text: '1.   Ja,', correct: true },
      { text: '2.   nein,', correct: false },
      {
        text: '3.   ja, aber der Widerstand bleibt gleich.', correct: false
      }
    ]
  },
  {
    question: '2085 Aus welchem Grund erscheint in der Formel f??r den Auftrieb A = ?? ?? Ca S v2 nicht der Anstellwinkel, obwohl sich bei dessen Ver??nderung der Auftrieb ??ndert ? ',
    answers: [
      { text: '1. Bei Ver??nderung des Anstellwinkels ver??ndert sich nur die projizierte Fl??che,', correct: false },
      { text: '2. eine andere Formel zeigt den Zusammenhang zwischen Anstellwinkel und Auftrieb,', correct: false },
      { text: '3. bei Ver??nderung des Anstellwinkels ver??ndert sich Ca.', correct: true }
    ]
  },
  {
    question: '2086    Wie kann man w??hrend des Fluges den Auftrieb ver??ndern?',
    answers: [
      { text: '1.   Man verringert den Widerstand,', correct: false },
      { text: '2.   man ver??ndert den Anstellwinkel innerhalb bestimmter Grenzen,', correct: true },
      { text: '3.   man beh??lt den gleichen Neigungswinkel.', correct: false }
    ]
  },
  {
    question: '2087 Das Gesamtgewicht ist eine der Luftkraftresultierenden entgegenwirkende Kraft und besteht aus folgenden Komponenten: ',
    answers: [
      {
        text: '1. dem Vortrieb l??ngs der Flugbahn und der Auftriebsgegenkraft rechtwinklig zur Flugbahn oder der anstr??menden Luft, ', correct: true
      },
      { text: '2. dem Vortrieb, rechtwinklig zur Flugbahn, und der Auftriebsgegenkraft gegen dem relativen Wind,', correct: false },
      { text: '3. dem Vortrieb l??ngs der Flugbahn und der Auftriebsgegenkraft entgegen dem Widerstand.', correct: false }
    ]
  },
  {
    question: '2088 Die Energie (Schubkraft) beim Sport- und Wanderflug entsteht:',
    answers: [
      { text: '1. Durch nat??rliche und aerodynamische Kr??fte,', correct: false },
      { text: '2. Durch die Gewichtskraft,', correct: true },
      { text: '3. Durch die kinetische Tr??gheit.', correct: false }
    ]
  },
  {
    question: '2089 Durch welche Energie ist ein Gleitflug m??glich?',
    answers: [
      { text: '1. Thermische Energie,', correct: false },
      { text: '2. statische Energie,', correct: false },
      { text: '3. potentielle Energie.', correct: true }
    ]
  },
  {
    question: '2090 Was versteht man unter Vortrieb bzw. Schubkraft?',
    answers: [
      { text: '1. Eine Komponente der Gewichtskraft, die l??ngs der Flugbahn wirkt,', correct: true },
      { text: '2. Eine Komponente der Gewichtskraft, die rechtwinklig zur Flugbahn wirkt.', correct: false },
      { text: '3. Eine Kraft, die nicht vom Gewicht abh??ngig ist.', correct: false }
    ]
  },
  {
    question: '2091 Wie kann man im Flug den Vortrieb ver??ndern?',
    answers: [
      { text: '1. Er kann nicht ver??ndert werden,', correct: false },
      { text: '2. Durch Ver??ndern des Neigungswinkels,', correct: true },
      { text: '3. Nur durch Ver??ndern des Widerstandes.', correct: false }
    ]
  },
  {
    question: '2092 Die Auftriebsgegenkraft ist eine Komponente der Gewichtskraft und wirkt im Gleitflug entgegen: ',
    answers: [
      { text: ' 1. dem Widerstand,', correct: false },
      { text: '2. dem Vortrieb,', correct: false },
      { text: '3. dem Auftrieb.', correct: true }
    ]
  },
  {
    question: '2093 Wie ver??ndern sich im Kurvenflug die Auftriebsgegenkraft und die projizierte Fl??che?',
    answers: [
      {
        text: '1. Beide werden gr????er, die Auftriebsgegenkraft wegen der Zentripetalkraft und die Fl??che aus geometrischen Gr??nden, ', correct: false
      },
      {
        text: '2. die Auftriebsgegenkraft nimmt wegen der Zentrifugalkraft zu, w??hrend die projizierte Fl??che wegen ihrer Schr??glage abnimmt, ', correct: true
      },
      { text: '3. beide bleiben gleich.', correct: false }
    ]
  },
  {
    question: '2094    Welche sind die Folgen der Zentrifugalkraft und der Schr??glage in der Kurve?',
    answers: [
      { text: '1.   die Auftriebsgegenkraft wird gr????er und die projizierte Fl??che wird kleiner.', correct: true },
      { text: '2.   das Gewicht und die Fl??che werden kleiner,', correct: false },
      { text: '3.   nur der aerodynamische Widerstand wird kleiner.', correct: false }
    ]
  },
  {
    question: '2095    Was versteht man unter Fl??chenbelastung?',
    answers: [
      { text: ' 1.   Das Verh??ltnis zwischen Abfluggewicht und projizierter Fl??che,', correct: true },
      { text: '2.   das Verh??ltnis zwischen der Fl??che und dem Abfluggewicht,', correct: false },
      { text: '3.   die Bruchbelastung eines Ger??tes.', correct: false }
    ]
  },
  {
    question: '2096 Der Pilot wiegt 78 Kg, die Ausr??stung mit Zubeh??r 22 Kg. Wie hoch ist die Fl??chenbelastung(G - Wert), bei einer projetzierten Fl??che von 25 Quadratmeter ? ',
    answers: [
      { text: '1. 6 Kg./Quadratmeter.', correct: false },
      { text: '2. 9 Kg./Quadratmeter.', correct: false },
      { text: '3. 4 Kg./Quadratmeter.', correct: true }
    ]
  },
  {
    question: '2097    In Folge eines Einklappers des Gleitschirmes verkleinert sich die Fl??che. Das bedeutet dass:',
    answers: [
      { text: '1.   die Fl??chenbelastung gleich bleibt,', correct: false },
      { text: '2.   die Fl??chenbelastung zunimmt,', correct: true },
      { text: '3.   die Fl??chenbelastung geringer wird.', correct: false }
    ]
  },
  {
    question: '2098    Was versteht man unter dem Begriff: G-Kraft?',
    answers: [
      { text: '1.   Die Gewichtsvervielfachung als Folge jeder Art von Beschleunigung im Flug,', correct: true },
      { text: '2.   die Gewichtsvervielfachung als Folge des Widerstandes im Kurvenflug,', correct: false },
      {
        text: '3.   die starke Bauweise eines Drachens oder Gleitschirmes.', correct: false
      }
    ]
  },
  {
    question: '2099   In einer Kurve erf??hrt dem System Fl??gel-Pilot aufgrund der Zentrifugalkraft eine Beschleunigung von 2 G.Man kann sagen, dass: ',
    answers: [
      { text: '1. der Belastungsfaktor unver??ndert bleibt,', correct: false },
      { text: '2. der Belastungsfaktor verdoppelt wird, aber das Gewicht des Systems erscheint unver??ndert,', correct: false },
      { text: ' 3. der Belastungsfaktor verdoppelt sich und das Gewicht des Systems erscheint doppelt.', correct: true }
    ]
  },
  {
    question: '2100    Beim verdoppeln der G-Kraft, bleibt die Fl??chenbelastung konstant:',
    answers: [
      { text: '1.   das kann vorkommen,', correct: false },
      { text: '2.   nein, die Fl??chenbelastung hat sich verdoppelt,', correct: true },
      { text: '3.   nein, die Fl??chenbelastung hat sich halbiert.', correct: false }
    ]
  },
  {
    question: '2101    Was versteht man unter dem Begriff: Druckpunkt?',
    answers: [
      { text: '1.   Den Angriffspunkt der Gewichtskraft.', correct: false },
      { text: '2.   den Angriffspunkt der drei Achsenbewegungen,', correct: false },
      { text: '3.   der Angriffspunkt aller Luftkr??fte am Fl??gel im Flug.', correct: true }
    ]
  },
  {
    question: '2102    Kann sich der Druckpunkt im Flug verschieben?',
    answers: [
      { text: '1.   Nein, seine Faktoren bleiben konstant,', correct: false },
      { text: '2.   ja, aber nur bei bestimmten Profilen,', correct: false },
      {
        text: '3.   ja, bei Ver??ndern des Anstellwinkels.', correct: true
      }
    ]
  }, {
    question: '2103 Wie ver??ndert sich der Druckpunkt, bei Ver??ndern des Anstellwinkels mit autostabilem Profil ? ',
    answers: [
      { text: '1. bei tiefem Anstellwinkel nach vorn und bei hohem Anstellwinkel nach hinten.', correct: true },
      { text: '2. bei tiefen Anstellwinkel nach hinten und bei hohem Anstellwinkel nach vorne.', correct: false },
      { text: '3. er verschiebt sich nur selten.', correct: false }
    ]
  },
  {
    question: '2104    Was versteht man unter: Ger??teschwerpunkt?',
    answers: [
      { text: '1.   Den Angriffspunkt der Gewichtskraft,', correct: true },
      { text: '2.   den Angriffspunkt der aerodynamischen Resultierenden,', correct: false },
      { text: '3.   den Achsenschnittpunkt des Ger??tes.', correct: false }
    ]
  },
  {
    question: '2105    Wo befindet sich der Gesamtschwerpunkt?',
    answers: [
      { text: '1.   Beim Pilotenschwerpunkt,', correct: false },
      { text: '2.   zwischen dem Pilotenschwerpunkt und dem Ger??teschwerpunkt,', correct: true },
      { text: '3.   er befindet sich am Schnittpunkt der drei Achsen des Systems.', correct: false }
    ]
  },
  {
    question: '2106    Wann verlagert sich der Gesamtschwerpunkt?',
    answers: [
      { text: '1.   Nur bei Bewegungen um die Querachse,', correct: false },
      { text: '2.   nur bei Bewegungen um die L??ngsachse,', correct: false },
      { text: '3.   bei Bewegungen um die Quer- und die L??ngsachse.', correct: true }
    ]
  },
  {
    question: '2107    Das Gleiten ist das Verh??ltnis zwischen:',
    answers: [
      { text: '1.   Auftrieb und Widerstand,', correct: true },
      { text: '2.   Fl??chenbelastung und Widerstand,', correct: false },
      { text: '3.   Fl??che und Auftrieb.', correct: false }
    ]
  },
  {
    question: '2108    Das Gleiten ist das Verh??ltnis zwischen:',
    answers: [
      { text: '1.   Fl??che und Gewicht,', correct: false },
      { text: '2.   Abfluggewicht und H??chstgeschwindigkeit,', correct: false },
      { text: '3.   Ca und Cw.', correct: true }
    ]
  },
  {
    question: '2109    Das Gleiten eines Profils resultiert aus:',
    answers: [
      { text: '1.   der horizontalen und der vertikalen Geschwindigkeit,', correct: true },
      { text: '2.   seiner Geschwindigkeit auf der Flugbahn,', correct: false },
      { text: '3.   dem Verh??ltnis zwischen Fl??che und Gewicht.', correct: false }
    ]
  },
  {
    question: '2110 Aus dem Verh??ltnis zwischen Auftrieb und Widerstand ergibt sich das Gleiten; wann ver??ndert es sich ? ',
    answers: [
      { text: '1. Beim Ver??ndern des Anstellwinkels,', correct: true },
      { text: '2. beim Ver??ndern der Fl??che,', correct: false },
      { text: '3. beim Ver??ndern der Fl??chenbelastung.', correct: false }
    ]
  },
  {
    question: '2111    Was bedeutet die Gleitzahl 8?',
    answers: [
      { text: '1.   bei Windstille: 1 Km gleiten und 800 Meter sinken,', correct: false },
      { text: '2.   das Verh??ltnis zwischen Profilsehne und Spannweite betr??gt 8.', correct: false },
      { text: '3.   bei Windstille: 8 Km gleiten und 1000 Meter sinken.', correct: true }
    ]
  },
  {
    question: '2112    Ver??ndert sich der Gleitwinkel beim Ver??ndern des Anstellwinkels?',
    answers: [
      { text: '1.   Es ver??ndert sich nur der Auftriebskoeffizient Ca,', correct: false },
      { text: '2.   es ver??ndert sich nur der Widerstandskoeffizient Cw,', correct: false },
      {
        text: '3.   es ver??ndern sich Ca und Cw; das bedeutet, dass der Gleitwinkel sich ver??ndert.', correct: true
      }
    ]
  },
  {
    question: '2113    Ver??ndert sich der Gleitwinkel beim Ver??ndern der Fl??chenbelastung?',
    answers: [
      { text: '1.   Ja,', correct: false },
      { text: ' 2.   nicht bei Windstille und solange keine Fl??chenverformung eintritt,', correct: true },
      { text: '3.   nein, auch nicht bei hoher Fl??chenbelastung mit Fl??chenverformung.', correct: false }
    ]
  },
  {
    question: '2114    Zwei gleiche Flugger??te fliegen, bei Windstille und mit unterschiedlicher Fl??chenbelastung:',
    answers: [
      { text: '1.   dieselbe Distanz mit unterschiedlicher Flugzeit,', correct: true },
      { text: '2.   unterschiedliche Distanzen mit gleicher Flugzeit.', correct: false },
      { text: '3.   unterschiedliche Distanzen mit unterschiedlichen Flugzeiten.', correct: false }
    ]
  },
  {
    question: '2115    Beim Ver??ndern der Fl??chenbelastung ohne Fl??chenverformung und bei Windstille:',
    answers: [
      { text: '1.   ver??ndert sich nur der Gleitwinkel,', correct: false },
      { text: '2.   ver??ndern sich der Gleitwinkel und die Fluggeschwindigkeit, aber das Sinken bleibt gleich.', correct: false },
      { text: '3.   ver??ndern sich die Fluggeschwindigkeit und das Sinken, aber der Gleitwinkel bleibt identisch.', correct: true }
    ]
  },
  {
    question: '2116    Was geschieht mit der Sinkgeschwindigkeit beim Fliegen einer Kurve?',
    answers: [
      { text: '1.   Sie nimmt zu,', correct: true },
      { text: '2.   sie bleibt konstant,', correct: false },
      { text: '3.   sie nimmt ab.', correct: false }
    ]
  },
  {
    question: '2117    Was passiert, wenn wir im Flug mit einem bestimmten Anstellwinkel die Fl??chenbelastung erh??hen?',
    answers: [
      {
        text: '1.   Die Fluggeschwindigkeit und das Sinken werden gr????er, ', correct: true
      },
      { text: '2.   die Fluggeschwindigkeit und das Sinken werden geringer,', correct: false },
      { text: '3.   die Fluggeschwindigkeit wird h??her und das Sinken geringer.', correct: false }
    ]
  },
  {
    question: '2118 Ist es beim SWF m??glich, auf einer horizontalen Flugbahn zu fliegen?',
    answers: [
      { text: '1. Ja, mit ganz speziellen Profilen,', correct: false },
      {
        text: '2. nein, das w??rde bedeuten, dass der aerodynamische Widerstand und infolgedessen auch das Sinken annulliert w??rden, ', correct: true
      },
      { text: '3. ja, mit sehr wenig Fl??chenbelastung.', correct: false }
    ]
  },
  {
    question: '2119 Stabile horizontale Flugbahnen k??nnen beim Sport- und Wanderflug realisiert werden:',
    answers: [
      { text: '1.   nur gegen??ber dem Boden, mit starkem R??ckenwind,', correct: false },
      { text: '2.   nur gegen??ber dem Boden, mit aufsteigenden Luftmassen,', correct: true },
      { text: '3.   nur gegen??ber dem Boden, bei Windstille.', correct: false }
    ]
  },
  {
    question: '2120 Die Polare eines Fl??gels ist eine grafische Darstellung:',
    answers: [
      { text: '1.   der Geschwindigkeit ??ber Grund bei verschiedenen Anstellwinkeln,', correct: false },
      { text: '2.   des Auftriebs- und Widerstandskoeffizienten beim Ver??ndern des Neigungswinkels,', correct: false },
      { text: '3.   des Auftriebs- und Widerstandskoeffizienten beim Ver??ndern des Anstellwinkels.', correct: true }
    ]
  },
  {
    question: '2121    Was ist eine Geschwindigkeitspolare?',
    answers: [
      { text: '1.   Eine grafische Darstellung der horizontalen und vertikalen Geschwindigkeit bei verschiedenen Anstellwinkeln,', correct: true },
      { text: '2.   eine grafische Darstellung des Auftriebs und des Widerstandes bei verschiedenen Anstellwinkeln,', correct: false },
      { text: '3.   eine grafische Darstellung des Vortriebs und des Widerstandes bei verschiedenen Anstellwinkeln.', correct: false }
    ]
  },
  {
    question: '2122    Ver??ndert sich die Polare beim Ver??ndern der Fl??chenbelastung?',
    answers: [
      { text: '1.   Ja, aber nur die vertikalen Werte,', correct: false },
      { text: '2.   nein, sie ver??ndert sich nicht,', correct: false },
      { text: '3.   nein, sie ver??ndert sich nicht, verschiebt sich aber horizontal und vertikal.', correct: true }
    ]
  },
  {
    question: '2123    Welche Werte kann man aus einer Geschwindigkeitspolare ersehen?',
    answers: [
      { text: '1.   den Auftrieb beim Ver??ndern des Anstellwinkels,', correct: false },
      { text: '2.   den Widerstand beim Ver??ndern des Anstellwinkels,', correct: false },
      { text: '3.   die horizontale und die vertikale Geschwindigkeit beim Ver??ndern des Anstellwinkels.', correct: true }
    ]
  },
  {
    question: '2124 Ein Fl??gel fliegt, laut der Polaren, das geringste Sinken:',
    answers: [
      { text: '1. Mit dem Anstellwinkel des geringsten Auftriebs,', correct: false },
      { text: '2. Mit dem Anstellwinkel des besten Gleitens bei Windstille,', correct: false },
      { text: '3. Mit einem h??heren Anstellwinkel als der des besten Gleitens bei Windstille.', correct: true }
    ]
  },
  {
    question: '2125    Beim Fliegen mit H??chstgeschwindigkeit:',
    answers: [
      { text: '1.   ist der Widerstand gr????er als beim Fliegen des besten Gleitens,', correct: true },
      { text: '2.   ist der Anstellwinkel gr????er als der des besten Gleitens,', correct: false },
      { text: '3.   ist der Anstellwinkel auf seinem h??chsten Punkt.', correct: false }
    ]
  },
  {
    question: '2126    Was ist das beste Gleiten bei Windstille?',
    answers: [
      { text: '1.   Das beste Verh??ltnis zwischen Widerstand und Gewicht,', correct: false },
      { text: '2.   das beste Verh??ltnis zwischen Auftrieb und Widerstand,', correct: true },
      { text: '3.   das beste Verh??ltnis zwischen Auftrieb und Gewicht.', correct: false }
    ]
  },
  {
    question: '2127    Wie fliegt man, um bei steigenden Luftmassen das bestm??gliche Gleiten zu erzielen?',
    answers: [
      { text: '1.   Etwas schneller als bei Windstille,', correct: false },
      { text: '2.   etwas langsamer, als bei Windstille,', correct: true },
      { text: '3.   gleich schnell wie bei Windstille.', correct: false }
    ]
  },
  {
    question: '2128 Wie fliegt man, laut Polare, um bei sinkenden Luftmassen das bestm??gliche Gleiten zu erzielen?',
    answers: [
      { text: '1. Etwas schneller als das beste Gleiten bei Windstille,', correct: true },
      { text: '2. etwas langsamer als das beste Gleiten bei Windstille,', correct: false },
      { text: '3. gleich schnell wie bei Windstille.', correct: false }
    ]
  },
  {
    question: '2129    Wie fliegt man, laut Polare, um bei R??ckenwind das beste Gleiten zu erzielen?',
    answers: [
      { text: '1.   Mit einem h??heren Anstellwinkel, das hei??t etwas langsamer als bei Windstille,', correct: true },
      { text: '2.   mit einem tieferen Anstellwinkel, das hei??t schneller als bei Windstille,', correct: false },
      { text: '3.   mit dem Anstellwinkel des besten Gleitens.', correct: false }
    ]
  },
  {
    question: '2130    Wie fliegt man, laut Polare, um bei Gegenwind das bestm??gliche Gleiten zu erzielen?',
    answers: [
      { text: '1.   Mit dem Anstellwinkel des besten Gleitens,', correct: false },
      { text: '2.   mit einem h??heren Anstellwinkel, das hei??t langsamer als bei Windstille,', correct: false },
      { text: '3.   mit einem tieferen Anstellwinkel, das hei??t etwas schneller als bei Windstille.', correct: true }
    ]
  },
  {
    question: '2131    Welcher Pilot fliegt bei gleichem Material und gleichen Konditionen l??nger?',
    answers: [
      { text: '1.   Der leichtere Pilot,', correct: true },
      { text: '2.   der schwerere Pilot,', correct: false },
      { text: '3.   der Pilot, der engere Kurven fliegt.', correct: false }
    ]
  },
  {
    question: '2132    Bei Gegenwind und gleichem Material fliegt der schwere Pilot:',
    answers: [
      { text: '1.   das schlechtere Gleiten als der leichte,', correct: false },
      { text: '2.   das selbe Gleiten wie der leichtere Pilot,', correct: false },
      { text: '3.   das bessere Gleiten als der leichte.', correct: true }
    ]
  },
  {
    question: '2133    Bei R??ckenwind und gleichem Material fliegt der schwere Pilot:',
    answers: [
      { text: '1.   das schlechtere Gleiten als der leichte,', correct: true },
      { text: '2.   das bessere Gleiten als der Leichte,', correct: false },
      { text: '3.   beide fliegen dasselbe Gleiten.', correct: false }
    ]
  },
  {
    question: '2134 Welcher Pilot ist bei schlechtem Flugwetter, wie starker Gegenwind, fallende Luftmassen, usw., und mit gleichem Material, im Nachteil ? ',
    answers: [
      { text: '1. Der schwere,', correct: false },
      { text: '2. der leichte,', correct: true },
      { text: '3. es gibt keinen Unterschied.', correct: false }
    ]
  },
  {
    question: '2135    Was versteht man unter dem Begriff ???Stall???(??berziehen)?',
    answers: [
      { text: '1.   Einen Str??mungsabriss wegen eines zu hohen Anstellwinkels,', correct: true },
      { text: '2.   ein starkes, pl??tzliches Sinken wegen eines zu tiefen Anstellwinkels,', correct: false },
      { text: '3.   ein starker Widerstand wegen zu hoher Geschwindigkeit.', correct: false }
    ]
  },
  {
    question: '2136    Wann kann ein Stall vorkommen?',
    answers: [
      { text: '1.   Bei geringer Geschwindigkeit und mit jedem Anstellwinkel,', correct: false },
      { text: '2.   nur bei geringer Geschwindigkeit und zu hohem Anstellwinkel,', correct: false },
      { text: '3.   bei jeder Geschwindigkeit, wenn der Anstellwinkel ??ber dem kritischen Punkt liegt.', correct: true }
    ]
  },
  {
    question: '2137 Sind im Kurvenflug die Mindestgeschwindigkeit und die Stallgeschwindigkeit gleich wie im Geradeausflug ? ',
    answers: [
      { text: '1. Nein, sie sind h??her,', correct: true },
      { text: '2. ja,', correct: false },
      { text: '3. nein, sie sind niedriger.', correct: false }
    ]
  },
  {
    question: '2138    Ist die Stallgeschwindigkeit von der Fl??chenbelastung abh??ngig?',
    answers: [
      { text: '1.   Nein,', correct: false },
      { text: '2.   ja, sie wird mit zunehmender Fl??chenbelastung h??her,', correct: true },
      { text: '3.   ja, sie wird mit zunehmender Fl??chenbelastung niedriger.', correct: false }
    ]
  },
  {
    question: '2139 Ist es m??glich, mit einem Drachen oder Gleitschirm bei hoher Fluggeschwindigkeit in Stallgefahr zu geraten ? ',
    answers: [
      { text: '1. Nein,', correct: false },
      { text: '2. nur im Kurvenflug,', correct: false },
      { text: '3. ja, wenn man den kritischen Punkt des Anstellwinkels ??berschreitet.', correct: true }
    ]
  },
  {
    question: '2140    Ein Fl??gel stallt bei jedem Anstellwinkel, es reicht eine Ver??nderung der Fl??chenbelastung:',
    answers: [
      { text: '1.   ja, der Stall ist nur von der Geschwindigkeit abh??ngig,', correct: false },
      { text: '2.   nein, der Stall ist nur vom Anstellwinkel abh??ngig,', correct: true },
      { text: '3.   nein, der Stall ist weder von der Geschwindigkeit noch vom Anstellwinkel abh??ngig.', correct: false }
    ]
  },
  {
    question: '2141 Was versteht man unter einem autostabilen Profil?',
    answers: [
      { text: '1. Es hat die Tendenz, bei Eingriff des Piloten den Anstellwinkel zu erh??hen und zu verringern,', correct: false },
      { text: '2. es beschleunigt nach einem Stall,', correct: false },
      { text: '3. es kehrt ohne Hilfe des Piloten in eine normale Fluglage zur??ck.', correct: true }
    ]
  },
  {
    question: '2142 Warum werden Drachen und Gleitschirme als autostabile Flugger??te bezeichnet?',
    answers: [
      {
        text: '1. Weil sie auf alle aerodynamischen Einfl??sse um alle drei Achsen reagieren und automatisch in eine normale Fluglage zur??ckkehren, ', correct: true
      },
      { text: '2. weil sie nur auf Bewegungen um die L??ngsachse reagieren und in eine normale Fluglage zur??ckkehren,', correct: false },
      { text: '3. weil sie nur auf Bewegungen um die Hochachse reagieren und in eine normale Fluglage zur??ckkehren.', correct: false }
    ]
  },
  {
    question: '2143 Was passiert mit dem System Fl??gel-Pilot, wenn man den Gesamtschwerpunkt bez??glich des Druckpunkts herabsetzt ? ',
    answers: [
      { text: '1. Es verbessert sich die Querstabilit??t,', correct: false },
      { text: '2. es verbessern sich die Querstabilit??t und die L??ngsstabilit??t,', correct: true },
      { text: '3. es verbessert sich nur das Handling.', correct: false }
    ]
  },
  {
    question: '2144    Ein tiefer Schwerpunkt, innerhalb bestimmter Grenzen, bewirkt bei einem Gleitschirm:',
    answers: [
      { text: '1.   eine h??here Stabilit??t,', correct: true },
      { text: '2.   eine geringere Stabilit??t,', correct: false },
      { text: '3.   einen geringeren Steuerdruck auf den Bremsen.', correct: false }
    ]
  },
  {
    question: '2145    Ein tiefer Schwerpunkt bei einem Gleitschirm bewirkt:',
    answers: [
      { text: '1.   eine geringere Stabilit??t,', correct: false },
      { text: '2.   einen geringeren Druck auf den Steuerleinen,', correct: false },
      { text: '3.   ein st??rkeres Pendeln bei hohen und kr??ftigen Steuerausschl??gen.', correct: true }
    ]
  },
  {
    question: '2146    Bewirkt die Fl??gelschr??nkung eine Verbesserung der Flugstabilit??t?',
    answers: [
      { text: '1.   Nein,', correct: false },
      { text: '2.   ja, nur beim Drachen,', correct: false },
      { text: '3.   ja, aber nur wenn sie sehr genau berechnet wird.', correct: true }
    ]
  },
  {
    question: '2147    Ein Drachen erh??ht in Bodenn??he seine Gleitleistung; worauf ist das zur??ckzuf??hren?',
    answers: [
      { text: '1.   Der Pilot erh??ht in Bodenn??he den Anstellwinkel,', correct: false },
      { text: '2.   auf den Bodeneffekt,', correct: true },
      { text: '3.   auf die Mikrothermik am Boden.', correct: false }
    ]
  },
  {
    question: '2148    Worauf ist der Bodeneffekt zur??ckzuf??hren?',
    answers: [
      { text: '1.   nur auf die Bildung eines Luftpolsters zwischen Fl??gel und Boden,', correct: false },
      { text: '2.   auf die Bildung eines Luftpolsters zwischen Fl??gel und Boden und ein Verringern des induzierten Widerstandes,', correct: true },
      { text: '3.   den Bodeneffekt gibt es nicht.', correct: false }
    ]
  },
  {
    question: '2149    Was versteht man unter einem un??blichen Flugzustand?',
    answers: [
      { text: '1.   Eine Flugsituation mit extrem schlechten meteorologischen Konditionen,', correct: false },
      { text: '2.   eine hohe Belastung wegen ??berladen des Ger??tes,', correct: false },
      { text: '3.   ein nicht vom Piloten gewolltes Verhalten des Flugger??tes, wie Tumbling, Einklapper, Trudeln, Sackflug, usw...', correct: true }
    ]
  },
  {
    question: '2150    Welcher Flugparameter kann einen un??blichen Flugzustand herbeif??hren?',
    answers: [
      { text: '1.   Ein zu hoher Anstellwinkel,', correct: true },
      { text: '2.   eine zu hohe Schr??gneigung (??ber 20 Grad) in der Kurve,', correct: false },
      { text: '3.   eine zu hohe Fluggeschwindigkeit in Bodenn??he.', correct: false }
    ]
  },
  {
    question: '3001 Nachdem man Erste Hilfe geleistet hat, sollte man daf??r sorgen, dass:',
    answers: [
      { text: '1. der Verletzte auf irgend eine Weise ins Krankenhaus gebracht wird,', correct: false },
      {
        text: '2. der Verletzte von Fachpersonal und mit geeigneten Mitteln transportiert wird, w??hrenddessen man sich um seine pers??nlichen Sachen k??mmert und eventuell Verwandte benachrichtigt, ', correct: true
      },
      { text: '3. man ruft die Polizei, die sich dann um alles Andere k??mmert.', correct: false }
    ]
  },
  {
    question: '3002    Wie begleitet man am besten einen gehf??higen Leichtverletzten?',
    answers: [
      { text: '1.   Man besorgt ihm ein Paar Kr??cken,', correct: false },
      { text: '2.   man tr??gt ihn auf dem R??cken,', correct: false },
      {
        text: '3.   man geht an seiner verletzten Seite mit und h??lt ihn an der H??fte.', correct: true
      }
    ]
  },
  {
    question: '3003 Wie verh??lt man sich, falls Verdacht auf innere Verletzungen besteht?',
    answers: [
      { text: '1. Man kontrolliert, wie gut sich der Verletzte bewegen kann, dann entscheidet man, wer gerufen wird,', correct: false },
      { text: '2. den Verletzten nicht bewegen, daf??r sorgen, dass er sich nicht bewegt, dann qualifizierte Hilfe rufen,', correct: true },
      { text: '3. man hilft ihm auf die Beine; sollte das nicht gelingen, dann ruft man den Krankenwagen.', correct: false }
    ]
  },
  {
    question: '3004    Du bist alleine, mit einem Verletzten mit starkem Trauma, wie sollst du dich verhalten?',
    answers: [
      { text: '1.   du holst einen Arzt, aus dem n??chsten Dorf.', correct: false },
      { text: '2.   du leistest erste Hilfe, so gut wie m??glich.', correct: false },
      {
        text: '3.   Sorge daf??r dass der Verletzte auf keinem Fall bewegt wird und alarmiere qualifiziertes Rettungspersonal, wie Krankenwagen, Hubschrauber u.s.w.', correct: true
      }
    ]
  },
  {
    question: '3005    Was sollte man bei stark blutenden Wunden tun?',
    answers: [
      { text: '1.   Man l??sst den Verletzten l??ngere Zeit bluten, damit sich die Wunde reinigt,', correct: false },
      { text: '2.   oberhalb der Verletzung (zwischen Wunde und Herz) abbinden oder die Wunde tamponieren,', correct: true },
      { text: '3.   den Verletzten mit der Wunde nach oben hinlegen.', correct: false }
    ]
  },
  {
    question: '3006    Wie leistet man Erste Hilfe bei einer Wunde?',
    answers: [
      { text: '1.   Man hilft dem Verletzten auf die Beine,', correct: false },
      { text: '2.   man l??sst die Wunde offen, nachdem man sie tamponiert hat,', correct: false },
      { text: '3.   man tamponiert die Wunde mit dem passenden Material und l??sst sie bis zur Ankunft des Fachpersonals zugedeckt.', correct: true }
    ]
  },
  {
    question: '3007 Was ist bei leichtem Nasenbluten zu empfehlen?',
    answers: [
      { text: '1. Kopf nach vorne beugen, um den Durchfluss von Blut und eventuellem Schleim zu beg??nstigen, Nacken und Stirn k??hlen,', correct: true },
      { text: '2. stark schn??uzen,', correct: false },
      { text: '3. mit den Fingern die Nase tamponieren.', correct: false }
    ]
  },
  {
    question: '3008    Was tun bei Erstickungserscheinungen?',
    answers: [
      { text: '1.   Warten, bis der Verletzte wieder normal atmet,', correct: false },
      { text: '2.   die Atemwege freimachen und kontrollieren, dass kein Erbrochenes die Atmung behindert,', correct: true },
      { text: '3.   als Erstes macht man die k??nstliche Beatmung.', correct: false }
    ]
  },
  {
    question: '3009    Was tun bei einem Verletzten unter Schock?',
    answers: [
      { text: '1.   Man befreit ihn von seiner Ausr??stung und unn??tzer Kleidung, um Schwitzen zu vermeiden,', correct: false },
      { text: '2.   man gibt ihm Kaffee und eventuell alkoholische Getr??nke,', correct: false },
      { text: '3.   man legt ihn auf dem R??cken, deckt ihn warm zu und sorgt daf??r, dass er so ruhig wie m??glich liegen bleibt.', correct: true }
    ]
  },
  {
    question: '3010 Wie sollten wir uns verhalten, wenn der Verdacht auf einen Knochenbruch besteht?',
    answers: [
      {
        text: '1. Auf jeden Fall versuchen, das Ausma?? des Bruches zu reduzieren, indem man die betroffene K??rperstelle bis zur Ankunft des Fachpersonals unter Zug setzt, ', correct: false
      },
      {
        text: '2. den Verletzten stilllegen, nur bei Gliedma??en eine m??glichst geeignete Schiene anlegen, und so schnell wie m??glich professionelle Hilfe rufen, ', correct: true
      },
      { text: '3. die betroffene K??rperstelle fest verbinden und auf geeignete Hilfe warten.', correct: false }
    ]
  },
  {
    question: '3011    Was tun, wenn ein Verletzter infolge eines Sch??del-Hirntraumas aus einem Ohr blutet?',
    answers: [
      { text: '1.   Das Ohr tamponieren,', correct: false },
      { text: '2.   den Verletzten hinlegen und auf die Seite drehen, wo das Blut aus dem Ohr kommt,', correct: true },
      { text: '3.   am Besten ist, der Verletzte sitzt.', correct: false }
    ]
  },
  {
    question: '3012.    Was tun bei einem starken Bauchtrauma?',
    answers: [
      { text: '1.   Aufstehen, dann vergeht der Schmerz,', correct: false },
      { text: '2.   ruhig lagern und Druck auf dem Bauch vermeiden,', correct: true },
      { text: '3.   bis zu Ankunft des Fachpersonals sollte man eine intensive Bauchmassage durchf??hren.', correct: false }
    ]
  },
  {
    question: '3013 Wenn ein Verletzter einen Stromschlag erleidet und mit einer Hochspannungsleitung in Kontakt bleibt, muss der Hilfeleistende: ',
    answers: [
      { text: '1. so nahe wie m??glich kommen, um zu helfen,', correct: false },
      { text: '2. auf Sicherheitsdistanz bleiben,', correct: true },
      { text: '3. den Verletzten so schnell wie m??glich entfernen, z.B. mit einem Stock.', correct: false }
    ]
  },
  {
    question: '3014 Wenn ein Verletzter bei einem Stromschlag mit einer Niederspannungsleitung in Kontakt bleibt, muss der Hilfeleistende: ',
    answers: [
      { text: '1. auf Sicherheitsdistanz bleiben,', correct: false },
      { text: '2. ihn am Bein oder am Arm ziehen und vom Strom entfernen,', correct: false },
      { text: '3. ihn mit einem nicht stromleitenden Gegenstand, z.B. einer Holzstange, vom Strom entfernen.', correct: true }
    ]
  },
  {
    question: '3015    Was tun wir im Falle einer Verrenkung?',
    answers: [
      { text: '1.   Viel laufen, um das Gelenk in Bewegung zu halten,', correct: false },
      { text: '2.   das Gelenk so gut wie m??glich ruhigstellen,', correct: true },
      { text: '3.   das Gelenk unter Zug halten und warme Umschl??ge machen.', correct: false }
    ]
  },
  {
    question: '3016    Wie erkennt man eine Schulter-Luxation?',
    answers: [
      { text: '1.   Durch den herunterh??ngenden Arm und eine Vertiefung am Schultergelenk,', correct: true },
      { text: '2.   durch starkes Anschwellen des Schultergelenkes,', correct: false },
      { text: '3.   durch Unterarm.', correct: false }
    ]
  },
  {
    question: '3017    Wie leistet man Erste Hilfe bei Verbrennungen (Feuer, Strom, usw.)?',
    answers: [
      { text: '1.   Man versucht, die verbrannte Stelle bis zur qualifizierten ??rztlichen Behandlung sauber zu halten,', correct: true },
      { text: '2.   auf keinen Fall die Kleider ausziehen oder gar die verbrannte Stelle ber??hren,', correct: false },
      { text: '3.   man sollte die verbrannte Stelle einfetten.', correct: false }
    ]
  },
  {
    question: '3018 Wie leistet man einem Bewusstlosen Erste Hilfe?',
    answers: [
      { text: '1. Man legt ihn auf den R??cken, den Kopf etwas h??her als die Beine,', correct: false },
      {
        text: '2. man legt ihn auf die Seite und hebt ein Bein und einen Arm hoch, um ein Ersticken an Erbrochenem zu vermeiden', correct: true
      },
      { text: '3. man k??hlt seine Stirn mit kaltem Wasser.', correct: false }
    ]
  },
  {
    question: '3019 Wie interveniert man, wenn die Gefahr besteht, dass jemand das Bewusstsein verliert?',
    answers: [
      { text: '1. Man versucht, ihn wach zu r??tteln und ruft die Erste Hilfe,', correct: false },
      {
        text: '2. man legt ihn auf den R??cken und hebt seine Beine h??her als den Kopf, kontrolliert seinen Puls und Atmung und ruft die Erste Hilfe.', correct: true
      },
      { text: '3. man legt ihn auf den R??cken und praktiziert die k??nstliche Beatmung.', correct: false }
    ]
  },
  {
    question: '3020    Was tut man am besten bei Erfrierungserscheinungen?',
    answers: [
      { text: '1.   Der Frierende sollte Alkohol trinken,', correct: false },
      { text: '2.   der Frierende sollte sich viel bewegen, um die Blutzirkulation anzuregen,', correct: false },
      { text: '3.   den betroffenen K??rperteil warm halten und warme Getr??nke einnehmen.', correct: true }
    ]
  },
  {
    question: '4001    Was geschieht mit dem Sauerstoff mit zunehmender H??he?',
    answers: [
      { text: '1.   Mehr H??he, weniger Sauerstoff,', correct: true },
      { text: '2.   der Sauerstoff ist nicht von der H??he abh??ngig,', correct: false },
      { text: '3.   mehr H??he, mehr Sauerstoff.', correct: false }
    ]
  },
  {
    question: '4002    Bei gro??er H??he und mangelndem Sauerstoff macht sich in uns etwas bemerkbar, was wir als:',
    answers: [
      { text: '1.   Hypothermie bezeichnen,', correct: false },
      { text: '2.   Hypoxie bezeichnen,', correct: true },
      { text: '3.   Hypotonie bezeichnen.', correct: false }
    ]
  },
  {
    question: '4003    Was versteht man unter Hypoxie?',
    answers: [
      { text: '1.   Eine starke K??rperunterk??hlung,', correct: false },
      { text: '2.   Stickstoffmangel in den Lungenalveolen,', correct: false },
      { text: '3.   Sauerstoffmangel in den Lungenalveolen.', correct: true }
    ]
  },
  {
    question: '4004    Wie macht sich Hypoxie (H??henrausch) bemerkbar?',
    answers: [
      { text: '1.   Verringern des Denkverm??gens, ??belkeit, Euphorie und starke Lungenventilation,', correct: true },
      { text: '2.   ??belkeit und zu hoher Blutdruck,', correct: false },
      { text: '3.   es ver??ndert sich nur der Blutdruck.', correct: false }
    ]
  },
  {
    question: '4005 Die Dekompression in gro??er H??he hat zur Folge, dass sich kleine Gasblasen im Blut befreien; was f??hrt am leichtesten dazu? ',
    answers: [
      { text: '1. Langsamer H??hengewinn bis 7000 Meter,', correct: false },
      { text: '2. schneller H??hengewinn bis 7000 Meter und dar??ber,', correct: true },
      { text: '3. Aufenthalt in gro??er H??he nach langer Akklimatisierung.', correct: false }
    ]
  },
  {
    question: '4006    Vertr??gt der menschliche K??rper beim Fliegen besser positive oder negative Beschleunigungen?',
    answers: [
      { text: '1.   Beide gleich,', correct: false },
      { text: '2.   die negativen,', correct: false },
      { text: '3.   die positiven.', correct: true }
    ]
  },
  {
    question: '4007 Die positiven Beschleunigungen mit zunehmender G-Belastung entstehen durch die Zentrifugalkraft. Wann kommt das vor? ',
    answers: [
      { text: '1. Bei einer richtig geflogenen Steilkurve,', correct: true },
      { text: '2. im normalen Geradeausflug,', correct: false },
      { text: '3. durch die starke Beschleunigung nach einem Stall.', correct: false }
    ]
  },
  {
    question: '4008    Wann kommt es zur negativen Lastvervielfachung?',
    answers: [
      { text: '1.   Beim Fliegen eines Loopings,', correct: false },
      { text: '2.   durch die starke Beschleunigung nach einem Stall,', correct: true },
      { text: '3.   beim ??ffnen des Rettungsschirms.', correct: false }
    ]
  },
  {
    question: '4009    Wann besteht die Gefahr, dass ein Pilot in den Blindeffektzustand ger??t?',
    answers: [
      { text: '1.   Bei starker, positiver Lastvervielfachung ??ber 4 G und l??nger als 4 Sekunden,', correct: true },
      { text: '2.   bei negativer Lastvervielfachung,', correct: false },
      {
        text: '3.   bei starkem Steigen mit dem Gleitschirm.', correct: false
      }
    ]
  },
  {
    question: '4010 Ist es laut physiologischen Charakteristiken m??glich, ohne die n??tigen Instrumente einen Blindflug durchzuf??hren, indem man sich nur auf ??u??ere Sinneseindr??cke und das eigene Gleichgewichtsgef??hl verl??sst ? ',
    answers: [
      { text: '1. Nein,', correct: true },
      { text: '2. ja.', correct: false },
      { text: '3. ja, nur mit autostabilem Flugger??t.', correct: false }
    ]
  },
  {
    question: '5001    Was ist die Atmosph??re?',
    answers: [
      { text: '1.   Eine sehr d??nne, gasf??rmige Masse, die die Erdoberfl??che umgibt,', correct: false },
      { text: '2.   eine 12 km dicke, gasf??rmige Masse, die die Erde umgibt,', correct: false },
      {
        text: '3.   eine gasf??rmige Masse eines bestimmten Durchmessers, die die Erde umgibt; die unterste Schicht nennt sich Troposph??re.', correct: true
      }
    ]
  },
  {
    question: '5002    Wie kann man die Troposph??re bezeichnen?',
    answers: [
      { text: '1.   Als die Schicht zwischen der Erdoberfl??che und der H??he, wo der atmosph??rische Druck gleich null ist,', correct: false },
      { text: '2.   als die Schicht zwischen der Erdoberfl??che und der H??he, wo die Luftfeuchtigkeit gleich null ist,', correct: false },
      { text: '3.   als die Schicht zwischen der Erdoberfl??che und der dar??ber liegenden Tropopause.', correct: true }
    ]
  },
  {
    question: '5003    Wo spielt sich das Wetter ab?',
    answers: [
      { text: '1.   Innerhalb der Troposph??re,', correct: true },
      { text: '2.   innerhalb der Atmosph??re,', correct: false },
      { text: '3.   in den unteren Schichten der Atmosph??re.', correct: false }
    ]
  },
  {
    question: '5004 Die H??he der Tropopause oder der obersten Grenze der Troposph??re betr??gt:',
    answers: [
      { text: '1. genau 12.000 Meter H??he,', correct: false },
      {
        text: '2. sie ist verschieden, je nach Jahreszeit und Breitengrad; generell zwischen 8Km am Nord- und S??dpol und 16Km am ??quator.', correct: true
      },
      { text: '3. genau 8 Km, sie ist nur vom Breitengrad abh??ngig.', correct: false }
    ]
  },
  {
    question: '5005    Die Luft ist eine Mischung von:',
    answers: [
      { text: '1.   Sauerstoff und Edelgasen,', correct: false },
      { text: '2.   Stickstoff, Sauerstoff, Wasserdampf und Edelgasen,', correct: true },
      { text: '3.   Stickstoff, Sauerstoff und kondensiertem Wasserdampf.', correct: false }
    ]
  },
  {
    question: '5006 Die physikalischen Eigenschaften der Luftmassen innerhalb der Troposph??re, welche zu den Wetterph??nomene f??hren, sind: ',
    answers: [
      { text: '1. Druck, Temperatur und Dichte,', correct: false },
      { text: '2. Druck, Geschwindigkeit der Luftmassen und deren Dichte,', correct: false },
      { text: '3. Druck, Temperatur und Luftfeuchtigkeit.', correct: true }
    ]
  },
  {
    question: '5007    Ist der Wasserdampf ein unsichtbares Gas, das in variablen Mengen in der Luft vorhanden ist?',
    answers: [
      { text: '1.   Ja,', correct: true },
      { text: '2.   nein,', correct: false },
      { text: '3.   nein, das ist kein Gas, sondern sichtbares Wasser in Form von kleinen Tropfen.', correct: false }
    ]
  },
  {
    question: '5008    Gibt es in der Natur normalerweise Luftmassen ohne Wasserdampf?',
    answers: [
      { text: '1.   Nein,', correct: true },
      { text: '2.   ja,', correct: false },
      { text: '3.   ja, in den W??stenregionen.', correct: false }
    ]
  },
  {
    question: '5009 Unter der absoluten Luftfeuchtigkeit versteht man:',
    answers: [
      { text: '1. die Menge Wasserdampf in g/m?? feuchter Luft,', correct: true },
      { text: '2. die Menge Wasserdampf in einem m?? Luft,', correct: false },
      {
        text: '3. die n??tige Feuchtigkeit, um eine Wolke zu bilden.', correct: false
      }
    ]
  },
  {
    question: '5010    Was ist die spezifische Luftfeuchtigkeit?',
    answers: [
      { text: '1.   Die Menge Wasser in einer Wolke,', correct: false },
      { text: '2.   die Menge Wasserdampf in einem m?? Luft,', correct: false },
      { text: '3.   die Menge Wasserdampf in g/kg feuchter Luft.', correct: true }
    ]
  },
  {
    question: '5011    Die relative Luftfeuchtigkeit ist:',
    answers: [
      { text: '1.   die Menge Wasserdampf in einem m?? Luft.', correct: false },
      { text: '2.   die Menge Wasserdampf in einem kg Luft.', correct: false },
      {
        text: '3.   das Verh??ltnis zwischen der Menge Wasserdampf in der Luft und die Menge, die man brauchen w??rde, um zur Kondensation zu kommen.', correct: true
      }
    ]
  },
  {
    question: '5012    Wie ver??ndert sich die relative Luftfeuchtigkeit beim Verringern der Temperatur?',
    answers: [
      { text: '1.   Die relative Luftfeuchtigkeit wird h??her und kann sogar 100% erreichen,', correct: true },
      { text: '2.   sie nimmt ab,', correct: false },
      { text: '3.   die relative Luftfeuchtigkeit ver??ndert sich nicht, solange der Druck gleich bleibt.', correct: false }
    ]
  },
  {
    question: '5013    Wie ver??ndert sich die relative Luftfeuchtigkeit beim Erh??hen des Luftdruckes?',
    answers: [
      { text: '1.   Die relative Luftfeuchtigkeit wird geringer,', correct: false },
      { text: '2.   die relative Luftfeuchtigkeit wird h??her und kann sogar 100% erreichen,', correct: true },
      { text: '3.   die relative Luftfeuchtigkeit ver??ndert sich nicht, solange die Temperatur gleich bleibt.', correct: false }
    ]
  },
  {
    question: '5014 Was ist der Taupunkt?',
    answers: [
      {
        text: '1. Der Taupunkt ist der Punkt, wo die Luft den S??ttigungsgrad erreicht, wenn sie sich genug abgek??hlt hat und ihr Druck gleich geblieben ist, ', correct: true
      },
      { text: '2. der Punkt, wo die Luft den S??ttigungsgrad erreicht, wenn sie genug erw??rmt wird,', correct: false },
      { text: '3. der Punkt, wo die Luft ges??ttigt und erw??rmt wird und der Druck um ein Millibar zunimmt.', correct: false }
    ]
  },
  {
    question: '5015    Was geschieht, wenn Luftmassen aus irgendeinem Grund 100% Luftfeuchtigkeit erreichen?',
    answers: [
      { text: '1.   Man spricht von ges??ttigten Luftmassen, ihr Wasserdampf kann kondensieren,', correct: true },
      { text: '2.   man spricht von ges??ttigten Luftmassen, ihr Wasserdampf kann nicht kondensieren,', correct: false },
      { text: '3.   Der Wasserdampf kondensiert, wenn die Luft gen??gend erw??rmt wird.', correct: false }
    ]
  },
  {
    question: '5016    Welche sind die Voraussetzungen f??r die Kondensation?',
    answers: [
      { text: '1.   Gleichzeitiges abnehmen der Temperatur und des Luftdruckes,', correct: false },
      { text: '2.   Abnehmen der Temperatur, der Luftdruck bleibt konstant,', correct: true },
      { text: '3.   Abnehmen des Druckes, die Temperatur bleibt konstant.', correct: false }
    ]
  }, {
    question: '5017 Wenn Wasserdampf kondensiert und in den fl??ssigen Zustand ??bergeht, kann man behaupten, dass dabei W??rmeenergie an die Au??enluft weitergeleitet wird? ',
    answers: [
      { text: '1. Ja,', correct: true },
      { text: '2. nein, dabei entsteht keine W??rme,', correct: false },
      { text: '3. nein, weil die dabei erzeugte W??rme nicht weitergeleitet werden kann.', correct: false }
    ]
  },
  {
    question: '5018.    Kann man bei Verdunstung des Wassers von einem endothermischen Ablauf sprechen?',
    answers: [
      { text: '1.   Nein, das ist kein endothermischer Vorgang,', correct: false },
      { text: '2.   ja, da die Temperatur des fl??ssigen Wassers w??hrend der Verdunstung abnimmt,', correct: true },
      {
        text: '3.   ja, da die Temperatur des fl??ssigen Wassers w??hrend der Verdunstung zunimmt.', correct: false
      }
    ]
  },
  {
    question: '5019. Wenn sich innerhalb einer Luftmasse ein Kondensationsprozess des Wasserdampfes abspielt, tendiert die Lufttemperatur: ',
    answers: [
      { text: '1. Abzunehmen,', correct: false },
      { text: '2. konstant zu bleiben, wenn keine anderen Faktoren eingreifen,', correct: false },
      { text: '3. zuzunehmen, wenn keine anderen Faktoren eingreifen.', correct: true }
    ]
  },
  {
    question: '5020.   Generell kann man behaupten, dass die Kondensations- und Verdampfungsprozesse des Wassers:',
    answers: [
      { text: '1.   den beteiligten Luftmassen jeweils W??rme zuf??hren oder entziehen,', correct: true },
      { text: '2.   den beteiligten Luftmassen weder W??rme zuf??hren noch W??rme entziehen,', correct: false },
      { text: '3.   sie k??nnen den beteiligten Luftmassen nur W??rme zuf??hren.', correct: false }
    ]
  },
  {
    question: '5021. Stimmt es, dass die meteorologischen Ph??nomene auch durch die Transformation des Wasserdampfes in fl??ssiges Wasser oder Eis und umgekehrt, verursacht werden, wegen der Abgabe oder Zufuhr von thermischer Energie? ',
    answers: [
      { text: '1. Nein, sie haben nichts damit zu tun,', correct: false },
      { text: '2. nein, sie werden ausschlie??lich durch die Verdampfungsprozesse des Wasserdampfes verursacht,', correct: false },
      { text: '3. ja.', correct: true }
    ]
  },
  {
    question: '5022.    Bestehen die Wolken aus Wasserdampf, wie der Rauch eines Topfes mit kochendem Wasser?',
    answers: [
      { text: '1.   Nein, sie bestehen aus Aerosolen oder winzigen Wassertr??pfchen in fl??ssigem Zustand,', correct: true },
      { text: '2.   ja, da sie aus Aerosolen bestehen, also aus sehr gro??en Gasmolek??len,', correct: false },
      { text: '3.   ja, denn bei bestimmten Bedingungen ist auch der Wasserdampf ein sichtbares Gas.', correct: false }
    ]
  },
  {
    question: '5023    Was versteht man unter Luftdruck?',
    answers: [
      { text: '1.   Das Gewicht einer 1013,2 Millimeter hohen Quecksilbers??ule,', correct: false },
      { text: '2.   das Gewicht einer Kolonne Luft mit einer einheitlichen H??he,', correct: false },
      { text: '3.   das Gewicht der Luftkolonne auf eine Fl??cheneinheit.', correct: true }
    ]
  },
  {
    question: '5024    Womit misst man den Luftdruck?',
    answers: [
      { text: '1.   Mit dem Anemometer,', correct: false },
      { text: '2.   mit dem Hygrometer,', correct: false },
      { text: '3.   mit dem Barometer.', correct: true }
    ]
  },
  {
    question: '5025 Mit zunehmender H??he nimmt der Luftdruck ab, das hei??t das Gewicht der Luftkolonne auf eine Fl??che wird geringer, das bezeichnet man als:',
    answers: [
      { text: '1. den horizontalen Luftdruckgradienten,', correct: false },
      { text: '2. den vertikalen Luftdruckgradienten,', correct: true },
      { text: '3. den vertikalen Temperaturgradienten.', correct: false }
    ]
  },
  {
    question: '5026    Der mittlere Luftdruck auf 5500 Meter Meeresh??he betr??gt:',
    answers: [
      { text: '1.   ungef??hr null,', correct: false },
      { text: '2.   ein Viertel des Drucks auf Meeresh??he,', correct: false },
      { text: '3.   die H??lfte des Drucks auf Meeresh??he (ungef??hr 500 Millibar).', correct: true }
    ]
  },
  {
    question: '5027    Der mittlere Luftdruck auf Meeresh??he betr??gt (wenn auch in Natur selten anzutreffen):',
    answers: [
      { text: '1.   1013,2 Millibar,', correct: true },
      { text: '2.   760 Millibar,', correct: false },
      { text: '3.   je nach Breitengrad.', correct: false }
    ]
  },
  {
    question: '5028    Wenn zwei Orte auf gleicher Meeresh??he unterschiedlichen Luftdruck haben, handelt es sich um:',
    answers: [
      { text: '1.   den vertikalen Luftdruckgradienten,', correct: false },
      { text: '2.   den vertikalen Temperaturgradienten,', correct: false },
      { text: '3.   den horizontalen Luftdruckgradienten.', correct: true }
    ]
  },
  {
    question: '5029    Was sind Isobaren?',
    answers: [
      { text: '1.   Linien, die Orte mit gleicher Meersh??he verbinden,', correct: false },
      { text: '2.   Linien, die Orte mit gleicher Temperatur verbinden,', correct: false },
      { text: '3.   Linien, die Orte mit gleichem Luftdruck verbinden.', correct: true }
    ]
  },
  {
    question: '5030    Was versteht man unter dem meteorologischen Wind?',
    answers: [
      { text: '1.   Die Bewegung der Luftmassen von einem Hochdruckgebiet in ein Tiefdruckgebiet,', correct: true },
      { text: '2.   die Bewegung der Luftmassen von einem Tiefdruckgebiet in ein Hochdruckgebiet,', correct: false },
      { text: '3.   der Wind, der durch Bodenerw??rmung entsteht.', correct: false }
    ]
  },
  {
    question: '5031    Warum ist die Windrichtung zwischen einem Hoch- und einem Tiefdruckgebiet nie geradlinig?',
    answers: [
      { text: '1.   Nur wegen der vielen Hindernisse auf der Erdoberfl??che,', correct: false },
      { text: '2.   nur wegen der vielen Tiefdruckgebiete rund um das Hochdruckgebiet,', correct: false },
      { text: '3.   haupts??chlich wegen der Corioliskraft und der vielen Hindernisse auf der Erdoberfl??che.', correct: true }
    ]
  },
  {
    question: '5032   Alle K??rper, Str??mungen und Gase, die sich gegen??ber der Erdoberfl??che bewegen, mit einer parallelen Komponente zu den Meridianen, erfahren eine Ablenkung von ihrer urspr??nglich geradlinigen Bahn. Wie hei??t die Kraft, die diese Ablenkung erzeugt und wodurch wird sie verursacht?',
    answers: [
      { text: '1. Coriolis-Kraft, sie wird durch die Drehung der Erde um ihre eigene Achse erzeugt,', correct: true },
      { text: '2. Coriolis-Kraft, sie wird durch die Revolution der Erde um die Sonne erzeugt,', correct: false },
      { text: '3. Abweichende Kraft, sie wird nur durch die Reibungskraft bei verschiedenen Bewegungsarten erzeugt.', correct: false }
    ]
  },
  {
    question: '5033 Auf der Nordhalbkugel erzeugt die Coriolis-Kraft eine Abweichung der Luftmassen, die sich von einem Hochdruckgebiet zu einem Tiefdruckgebiet bewegen, nach: (Achtung:Skript L??sung ist nicht korrekt!)',
    answers: [
      { text: '1. rechts,', correct: false },
      { text: '2. links,', correct: true },
      { text: '3. zu anderen benachbarten Hochdruckgebieten hin.', correct: false }
    ]
  },
  {
    question: '5034 Wie drehen die Luftmassen auf der n??rdlichen Hemisph??re, innerhalb eines Hochdruckgebietes?',
    answers: [
      { text: '1. Entgegen dem Uhrzeigersinn, von oben gesehen (z.B. vom Satelliten aus gesehen),', correct: false },
      { text: '2. im Uhrzeigersinn, von oben gesehen (z.B. vom Satelliten aus gesehen),', correct: true },
      { text: '3. im Uhrzeigersinn, von unten gesehen.', correct: false }
    ]
  },
  {
    question: '5035    Wie drehen Luftmassen auf der n??rdlichen Hemisph??re, innerhalb eines Tiefdruckgebietes?',
    answers: [
      { text: '1.   Entgegen dem Uhrzeigersinn, von unten gesehen,', correct: false },
      { text: '2.   im Uhrzeigersinn, von oben gesehen,', correct: false },
      { text: '3.   entgegen dem Uhrzeigersinn, von oben gesehen.', correct: true }
    ]
  },
  {
    question: '5036    Wie werden die typischen Luftdruckgestaltungen auf den Wetterkarten eingezeichnet?',
    answers: [
      { text: '1.   Antizyklon ???L??? (low pressure / tiefer Luftdruck) Zyklone ???H??? (high pressure / hoher Luftdruck),', correct: false },
      { text: '2.   Antizyklon ???H??? (high pressure / hoher Luftdruck) Zyklone ???L??? (low pressure / tiefer Luftdruck),', correct: true },
      { text: '3.   Zyklone ???H??? (high pressure / hoher Luftdruck) Antizyklone ???L??? (low pressure / tiefer Luftdruck).', correct: false }
    ]
  },
  {
    question: '5037    Worauf lassen eng aneinander liegende Isobaren schlie??en?',
    answers: [
      { text: '1.   geringer horizontaler Druckgradient und starker Wind,', correct: false },
      { text: '2.   hoher horizontaler Luftdruckgradient und infolgedessen starker Wind,', correct: true },
      { text: '3.   hoher vertikaler Luftdruckgradient und starker Wind.', correct: false }
    ]
  },
  {
    question: '5038    Die Isobaren auf einer Wetterkarte lassen uns folgendes erkennen:',
    answers: [
      { text: '1.   die Windrichtung, die Windst??rke und die Druckverteilung,', correct: true },
      { text: '2.   die Bew??lkung, haupts??chlich f??r die Wetterprognose,', correct: false },
      { text: '3.   den vertikalen Luftdruckgradienten.', correct: false }
    ]
  },
  {
    question: '5039    Was versteht man unter dem Begriff: meteorologischer Wind?',
    answers: [
      { text: '1.   Der Wind, der durch starke Gewitter und Niederschl??ge entsteht', correct: false },
      { text: '2.   Hangaufwind und Thermik,', correct: false },
      { text: '3.   der Wind, der durch die unterschiedlichen Luftdruckgebiete auf der Erdoberfl??che entsteht.', correct: true }
    ]
  },
  {
    question: '5040    Wind aus S??d kommt aus:',
    answers: [
      { text: '1.   135??', correct: false },
      { text: '2.   270??', correct: false },
      { text: '3.   180??', correct: true }
    ]
  },
  {
    question: '5041    Wind aus Nord-Ost kommt aus:',
    answers: [
      { text: '1.   45??', correct: true },
      { text: '2.   225??', correct: false },
      { text: '3.   135??', correct: false }
    ]
  },
  {
    question: '5042 Nordhalbkugel. Ein Tiefdruckgebiet hat ihr Zentrum n??rdlich eines bestimmten Punktes der Erdoberfl??che. In diesem Punkt erwartet man sich den meteorologischen Wind aus folgender Richtung:',
    answers: [
      { text: '1. Nord,', correct: false },
      { text: '2. West,', correct: true },
      { text: '3. Ost.', correct: false }
    ]
  },
  {
    question: '5043   Nordhalbkugel. Ein Tiefdruckgebiet hat ihr Zentrum ??stlich eines bestimmten Punktes der Erdoberfl??che. In diesem Punkt erwartet man sich den meteorologischen Wind aus folgender Richtung:',
    answers: [
      { text: '1. Nord,', correct: true },
      { text: '2. S??d,', correct: false },
      { text: '3. West.', correct: false }
    ]
  },
  {
    question: '5044 Nordhalbkugel. Ein Hochdruckgebiet hat ihr Zentrum n??rdlich eines bestimmten Punktes der Erdoberfl??che. In diesem Punkt erwartet man sich den meteorologischen Wind aus folgender Richtung:',
    answers: [
      { text: '1. West,', correct: false },
      { text: '2. Ost,', correct: true },
      { text: '3. Nord.', correct: false }
    ]
  },
  {
    question: '5045 Nordhalbkugel. Ein Hochdruckgebiet hat ihr Zentrum westlich eines bestimmten Punktes der Erdoberfl??che. In diesem Punkt erwartet man sich den meteorologischen Wind aus folgender Richtung:',
    answers: [
      { text: '1. S??d,', correct: false },
      { text: '2. Ost,', correct: false },
      { text: '3. Nord.', correct: true }
    ]
  },
  {
    question: '5046    Die Luft, innerhalb der Troposph??re wird direkt von der Sonne erw??rmt, stimmt das?',
    answers: [
      { text: '1.   Ja, durch direkte Einstrahlung,', correct: false },
      { text: '2.   nein, durch ein Hochdruckgebiet,', correct: false },
      { text: '3.   nein, nur indirekt, das hei??t, wiedergegebene W??rme vom Boden.', correct: true }
    ]
  },
  {
    question: '5047    Welcher ist der Erw??rmungsprozess der Luft durch die Sonne innerhalb der Troposph??re?',
    answers: [
      { text: '1.   Bodenerw??rmung, Weiterleiten der W??rme an die dar??berliegende Luft und konvektive Str??mungen,', correct: true },
      { text: '2.   Bodenerw??rmung und konvektive Str??mungen,', correct: false },
      { text: '3.   direkte Erw??rmung der Luft durch die Sonne und konvektive Str??mungen.', correct: false }
    ]
  },
  {
    question: '5048 Mit zunehmender H??he innerhalb der Troposph??re, ver??ndert sich die Lufttemperatur folgenderma??en:',
    answers: [
      { text: '1. sie nimmt zu,', correct: false },
      { text: '2. sie bleibt konstant,', correct: false },
      { text: '3. im Durchschnitt nimmt sie ab.', correct: true }
    ]
  },
  {
    question: '5049    Die Ver??nderung der Temperatur mit zunehmender H??he nennt man:',
    answers: [
      { text: '1.   horizontaler Temperaturgradient,', correct: false },
      { text: '2.   vertikaler Temperaturgradient,', correct: true },
      { text: '3.   vertikaler Luftdruckgradient.', correct: false }
    ]
  },
  {
    question: '5050    Die vertikale Temperaturdifferenz der Standardluft betr??gt:',
    answers: [
      { text: '1.   1?? C alle 100 Meter H??he,', correct: false },
      { text: '2.   0,65?? C alle 100 Meter H??he,', correct: true },
      { text: '3.   6,5?? C alle 100 Meter H??he.', correct: false }
    ]
  },
  {
    question: '5051    Die Kurve die man erh??lt, wenn man die Temperatur alle 100 m H??he misst, nennt sich:',
    answers: [
      { text: '1.   Zustandsdiagramm oder Zustandskurve der Atmosph??re in einem bestimmten Ort zu einer bestimmten Zeit,', correct: true },
      { text: '2.   die trockenadiabatische Kurve der Atmosph??re in einem bestimmten zu einer bestimmten Zeit,', correct: false },
      { text: '3.   die Isotherme in einem bestimmten Ort zu einer bestimmten Zeit.', correct: false }
    ]
  },
  {
    question: '5052   Der vertikale thermische Gradient der Atmosph??re in einem bestimmten Ort zu einer bestimmten Zeit erh??lt man:',
    answers: [
      { text: '1. aus der Zustandskurve der Atmosph??re f??r diesen bestimmten Ort und diese bestimmte Tageszeit,', correct: true },
      { text: '2. aus der Wetterkarte f??r diesen bestimmten Ort und diese bestimmte Tageszeit,', correct: false },
      { text: '3. aus dem Vergleich zwischen der trockenadiabatischen und der feuchtadiabatischen Kurve f??r diesen bestimmten Ort und diese bestimmte Tageszeit.', correct: false }
    ]
  },
  {
    question: '5053 Luftmassen steigen, dehnen sich aus, dabei sinkt die Temperatur. Wie nennt man diesen Vorgang?',
    answers: [
      { text: '1. Konvektives Steigen mit W??rmeaustausch mit der Au??enluft,', correct: false },
      { text: '2. dynamisches Steigen mit W??rmeaustausch mit der Au??enluft,', correct: false },
      { text: '3. adiabatisches Aufsteigen der Luft ohne Temperaturaustausch mit der Au??enluft.', correct: true }
    ]
  },
  {
    question: '5054    Luftmassen, die trockenadiabatisch aufsteigen und dabei nicht kondensieren, verlieren:',
    answers: [
      { text: '1.   6.5?? C alle 1000 Meter.', correct: false },
      { text: '2.   1?? C alle 100 Meter.', correct: true },
      { text: '3.   je nach Tagestemperaturgradient.', correct: false }
    ]
  },
  {
    question: '5055 Die Temperaturabnahme der Luft, die adiabatisch bis zu einer bestimmten H??he aufsteigt, ohne Kondensation des Wasserdampfes, nennt sich:',
    answers: [
      { text: '1. vertikaler Temperaturgradient, er h??ngt von der Zeit und dem Ort ab, wo er stattfindet,', correct: false },
      { text: '2. trockenadiabatischer Gradient, er h??ngt haupts??chlich von der Zeit und dem Ort ab, wo er stattfindet,', correct: false },
      { text: '3. trockenadiabatischer Gradient, und er h??ngt praktisch nicht von der Zeit und dem Ort ab, wo er stattfindet.', correct: true }
    ]
  },
  {
    question: '5056 Die adiabatisch aufsteigende Luft enth??lt eine bestimmte Menge Wasserdampf. Bei Temperaturabnahme wird der Taupunkt erreicht und der Wasserdampf beginnt zu kondensieren. Ein weiteres Aufsteigen der Luft bewirkt eine Temperaturabnahme von:',
    answers: [
      { text: '1. 1?? C alle 100 Meter (der Gradient ist praktisch konstant mit der H??he),', correct: false },
      { text: '2. etwa 0,5?? C alle 100 Meter (der Gradient ist nicht konstant und nimmt zu, wenn die Temperatur abnimmt),', correct: true },
      { text: '3. etwa 2?? C alle 100 Meter.', correct: false }
    ]
  },
  {
    question: '5057    Das Aufsteigen der Luftmassen innerhalb von Wolken bezeichnet man als:',
    answers: [
      { text: '1.   feuchtadiabatisches Aufsteigen der Luft,', correct: true },
      { text: '2.   feuchtadiabatisches Sinken der Luft, wegen ihrer Kondensation,', correct: false },
      { text: '3.   trockenadiabatisches Aufsteigen der nicht kondensierten Luftfeuchtigkeit.', correct: false }
    ]
  },
  {
    question: '5058    Wenn der vertikale Temperaturgradient h??her ist als 1?? C pro 100 Meter, bezeichnet man die Luft als:',
    answers: [
      { text: '1.   stabil,', correct: false },
      { text: '2.   labil,', correct: true },
      { text: '3.   indifferent.', correct: false }
    ]
  },
  {
    question: '5059 Welcher Faktor sagt uns, ob die Luftmassen stabil oder labil sind?',
    answers: [
      { text: '1. Der trockenadiabatische Gradient der Luft,', correct: false },
      { text: '2. der vertikale Temperaturgradient,', correct: true },
      { text: '3. der feuchtadiabatische Temperaturgradient.', correct: false }
    ]
  },
  {
    question: '5060    Was geschieht mit einem Luftpaket beim Steigen innerhalb von labilen Luftmassen?',
    answers: [
      { text: '1.   es steigt nur kurzzeitig und bleibt dann stehen,', correct: false },
      { text: '2.   es steigt und beschleunigt immer mehr,', correct: true },
      { text: '3.   es steigt anfangs und beginnt dann zu sinken.', correct: false }
    ]
  },
  {
    question: '5061    Luftmassen werden (auch wenn sie sehr feucht sind) als stabil bezeichnet, wenn:',
    answers: [
      { text: '1.   ihr vertikaler Temperaturgradient niedriger als 1?? C pro 100 Meter ist.', correct: true },
      { text: '2.   ihr vertikaler Temperaturgradient h??her als 1?? C pro 100 Meter ist,', correct: false },
      { text: '3.   ihr horizontaler Temperaturgradient niedriger ist als der feuchtadiabatische.', correct: false }
    ]
  },
  {
    question: '5062 Wenn der vertikale Temperaturgradient einer trockenen Luftmasse niedriger als 1?? C pro 100 Meter ist, bezeichnet man die Luft als:',
    answers: [
      { text: '1. stabil,', correct: true },
      { text: '2. labil,', correct: false },
      { text: '3. indifferent.', correct: false }
    ]
  },
  {
    question: '5063 Angenommen, auf einer bestimmten H??he betr??gt die Temperatur 12?? C: was passiert mit einem aufsteigenden Luftpaket (Luftblase), das auf gleicher H??he eine Temperatur von 14?? C hat?',
    answers: [
      { text: '1. Es bleibt sofort stehen,', correct: false },
      { text: '2. es beginnt zu sinken,', correct: false },
      { text: '3. es wird weitersteigen.', correct: true }
    ]
  },
  {
    question: '5064 Wenn ein sehr feuchtes Luftpaket durch eine konvektive Str??mung zu steigen beginnt, wie beeinflusst die Kondensation des Wasserdampfes sein Steigen?',
    answers: [
      { text: '1. Wahrscheinlich h??rt die Steigung auf,', correct: false },
      { text: '2. bestimmt wird das Steigen beschleunigt,', correct: true },
      { text: '3. wahrscheinlich beeinflusst die Kondensation des Wasserdampfes nicht die aufsteigende Bewegung.', correct: false }
    ]
  },
  {
    question: '5065 Was geschieht, wenn eine feuchte Luftmasse, die in labiler Luft zu steigen beginnt, weil sie st??rker erw??rmt wurde als die Au??enluft, den Kondensationspunkt erreicht?',
    answers: [
      { text: '1. Sie wird schneller steigen,', correct: true },
      { text: '2. sie wird stehen bleiben,', correct: false },
      { text: '3. sie wird schnell absinken.', correct: false }
    ]
  },
  {
    question: '5066 Wenn ein Luftpaket innerhalb stabiler Luftmassen steigt, dann wird es:',
    answers: [
      { text: '1. Steigen und immer mehr beschleunigen,', correct: false },
      { text: '2. Mindestens bis zum Kondensationspunkt steigen,', correct: false },
      { text: '3. Es steigt bis zum erreichen der Au??entemperatur.', correct: true }
    ]
  },
  {
    question: '5067 Wozu kann es bei starker Bodenerw??rmung und feuchten und sehr labilen Luftmassen f??hren?',
    answers: [
      { text: '1. Zu stark aufsteigenden Luftmassen (Thermik) und Cumulusaufbau,', correct: true },
      { text: '2. Zu stark aufsteigender Thermik ohne Entwicklung von Cumuluswolken,', correct: false },
      { text: '3. Zur Bildung von stratifizierter Bew??lkung und Nebel.', correct: false }
    ]
  },
  {
    question: '5068    Was versteht man unter Konvektionsstr??mung?',
    answers: [
      { text: '1.   Horizontale Str??mungen vom Hoch ins Tief,', correct: false },
      { text: '2.   vertikale, gel??ndebedingte Str??mungen,', correct: false },
      { text: '3.   vertikale Str??mungen, wegen ihrer h??heren Temperatur als die Au??enluft.', correct: true }
    ]
  },
  {
    question: '5069 Wozu kann die Bodenerw??rmung bei Windstille oder schwachem Wind in den T??lern und Ebenen f??hren?',
    answers: [
      { text: '1. Zu meteorologischem Wind,', correct: false },
      { text: '2. zu steigenden Luftmassen (Thermikblasen),', correct: true },
      { text: '3. zu stratifizierter Bew??lkung.', correct: false }
    ]
  },
  {
    question: '5070    Was erleichtert das Abl??sen von Thermikblasen?',
    answers: [
      { text: '1.   Windstille und ein Gel??nde ohne Hindernisse,', correct: false },
      { text: '2.   leichter Wind und Hindernisse an Boden,', correct: true },
      { text: '3.   leichter Wind und keine Hindernisse am Boden.', correct: false }
    ]
  },
  {
    question: '5071    Worauf sind thermisch-konvektive Str??mungen haupts??chlich zur??ckzuf??hren?',
    answers: [
      { text: '1.   Auf stabile Luftmassen,', correct: false },
      { text: '2.   auf eine sehr hohe Luftfeuchtigkeit,', correct: false },
      { text: '3.   auf die starke Bodenerw??rmung und die Abgabe der W??rme an die dar??ber liegende Luft.', correct: true }
    ]
  },
  {
    question: '5072    Die unterschiedliche Beschaffenheit und Farbe des Bodens beg??nstigt:',
    answers: [
      { text: '1.   das Entstehen von labilen Luftmassen,', correct: false },
      { text: '2.   das Ausl??sen von meteorologischem Wind,', correct: false },
      { text: '3.   die Abl??se von Thermik.', correct: true }
    ]
  },
  {
    question: '5073 Wenn wegen Mangel an Feuchtigkeit die Thermik nicht zur Kondensation f??hrt und keine Wolken entstehen, dann nennt man sie:',
    answers: [
      { text: '1. Blauthermik,', correct: true },
      { text: '2. adiabatische Thermik,', correct: false },
      { text: '3. konvektive Thermik.', correct: false }
    ]
  },
  {
    question: '5074 Wodurch kann man eine Thermik bei gen??gend Luftfeuchtigkeit erkennen?',
    answers: [
      { text: '1. Durch die Entstehung von stratifizierten Wolken in einer bestimmten H??he,', correct: false },
      { text: '2. durch die Entstehung von Kumulus-Wolken in einer bestimmten H??he,', correct: true },
      { text: '3. nur durch den blauen Himmel.', correct: false }
    ]
  },
  {
    question: '5075 Welche Bodenbeschaffenheit ist bei g??nstiger Sonneneinstrahlung f??r die Thermik am g??nstigsten?',
    answers: [
      { text: '1. Gr??ne Wiesen,', correct: false },
      { text: '2. gro??e Gew??sser,', correct: false },
      { text: '3. felsiges Gel??nde.', correct: true }
    ]
  },
  {
    question: '5076 Gibt es au??er der Konvektivstr??mung noch andere Ursachen f??r das Aufsteigen von Luftmassen?',
    answers: [
      { text: '1. Ja, Luftmassen, die auf Bodenerhebungen treffen, werden zum Aufsteigen gezwungen,', correct: true },
      { text: '2. ja, bei Wind in der Ebene werden Luftmassen zum Aufsteigen gezwungen,', correct: false },
      { text: '3. nein.', correct: false }
    ]
  },
  {
    question: '5077    Wie nennt man den Wind, der am Hang hochsteigt?',
    answers: [
      { text: '1.   Dynamischer Hangaufwind,', correct: true },
      { text: '2.   adiabatischer Aufwind,', correct: false },
      { text: '3.   thermischer Aufwind.', correct: false }
    ]
  },
  {
    question: '5078    Kann Hangaufwind w??hrend seines Steigens sich in reine Thermik verwandeln?',
    answers: [
      { text: '1.   Ja, bei stabilen Luftmassen,', correct: false },
      { text: '2.   ja, innerhalb von sehr labilen Luftmassen, am wahrscheinlichsten in H??hen oberhalb des Kondensationspunktes,', correct: true },
      { text: '3.   nein, auch nicht bei sehr labilen Luftmassen.', correct: false }
    ]
  },
  {
    question: '5079    Was kann geschehen, wenn sich bei m????igem Hangaufwind Thermikblasen abl??sen?',
    answers: [
      { text: '1.   Es k??nnen sich stark steigende Luftmassen bilden,', correct: true },
      { text: '2.   es entstehen nur starke Turbulenzen,', correct: false },
      { text: '3.   die Dynamik bleibt trotzdem dominant gegen??ber der Thermik.', correct: false }
    ]
  },
  {
    question: '5080    Was versteht man unter Inversion?',
    answers: [
      { text: '1.   Ein un??bliches Abnehmen der Temperatur in einer bestimmten H??he,', correct: false },
      { text: '2.   ein un??bliches Verhalten der Lufttemperatur, wenn sie mit gr????erer H??he zunimmt,', correct: true },
      { text: '3.   eine Thermikblase, die wieder sinkt, weil sie die Temperatur der Au??enluft erreicht hat.', correct: false }
    ]
  },
  {
    question: '5081    Bei Bodeninversion kann folgendes vorkommen:',
    answers: [
      { text: '1.   dass sich Kumuluswolken in Bodenn??he entwickeln,', correct: false },
      { text: '2.   dass sich in Bodenn??he die Sichtverh??ltnisse verbessern,', correct: false },
      { text: '3.   dass sich Bodennebel bildet, haupts??chlich in den Nachtstunden.', correct: true }
    ]
  },
  {
    question: '5082    Wie kann man am Starthang eine im Tal liegende Inversion erkennen?',
    answers: [
      { text: '1.   Durch einen Dunstschleier unterhalb der Inversionsschicht,', correct: true },
      { text: '2.   durch Konvektionswolken in Bodenn??he,', correct: false },
      { text: '3.   durch eine sehr klare Sicht unterhalb der Inversionsschicht.', correct: false }
    ]
  },
  {
    question: '5083    Worauf l??sst eine Inversionsschicht im Tal schlie??en?',
    answers: [
      { text: '1.   auf nichts Besonderes,', correct: false },
      { text: '2.   auf unruhige Luftschichtungen zwischen Inversionsschicht und der dar??ber liegenden Standardluft,', correct: true },
      { text: '3.   auf Kumuluswolken gleich oberhalb der Inversionsschicht.', correct: false }
    ]
  },
  {
    question: '5084 Was versteht man unter Front oder Perturbation?',
    answers: [
      { text: '1. Eine Grenzfl??che zwischen zwei Luftmassen mit unterschiedlichen physikalischen Eigenschaften und die damit verbundenen Wetterph??nomene,', correct: true },
      { text: '2. die Wolken, die entstehen, wenn der Luftdruck in Bodenn??he sich durch das Fortbewegen von Luftmassen rasch ver??ndert,', correct: false },
      { text: '3. die Wolken, die entstehen, wenn es durch die Bewegung von Luftmassen auf den Gebirgserhebungen starken Wind gibt.', correct: false }
    ]
  },
  {
    question: '5085    Was versteht man unter einer Warmfront?',
    answers: [
      { text: '1.   Eine Perturbation, die entsteht, wenn kalte Luftmassen auf w??rmere Luft treffen,', correct: false },
      { text: '2.   eine Perturbation, die entsteht, wenn warme Luftmassen auf k??ltere Luft treffen,', correct: true },
      { text: '3.   eine Perturbation, die nur eine Erh??hung der Bodentemperatur bewirkt.', correct: false }
    ]
  },
  {
    question: '5086 Welche Wetterlage herrscht beim Durchzug einer Warmfront?',
    answers: [
      { text: '1. Vertikaler Wolkenaufbau, wie Kumulus Congestus oder Kumulus Nimbus und starke Niederschl??ge von kurzer Dauer,', correct: false },
      { text: '2. stratifizierte Bew??lkung wie Nimbostratus, Altostratus und Stratus, anhaltende Niederschl??ge und leicht steigende Durchschnittstemperatur,', correct: true },
      { text: '3. stratifizierte Bew??lkung mit starken Niederschl??gen, aber von kurzer Dauer.', correct: false }
    ]
  },
  {
    question: '5087    Was versteht man unter einer Kaltfront?',
    answers: [
      { text: '1.   Eine Perturbation, die entsteht, wenn kalte Luftmassen auf w??rmere Luft treffen,', correct: true },
      { text: '2.   eine Perturbation, die entsteht, wenn warme Luftmassen auf k??ltere Luft treffen,', correct: false },
      { text: '3.   eine Perturbation, die nur eine Erniedrigung der Bodentemperatur bewirkt.', correct: false }
    ]
  },
  {
    question: '5088    Welche Wetterlage herrscht beim Durchzug einer Kaltfront?',
    answers: [
      { text: '1.   Horizontale Bew??lkung, schwache aber anhaltende Niederschl??ge und steigende Temperatur,', correct: false },
      { text: '2.   vertikale Bew??lkung, schwache und anhaltende Niederschl??ge,', correct: false },
      { text: '3.   vertikale Bew??lkung, starke Niederschl??ge von kurzer Dauer und sinkende Temperatur.', correct: true }
    ]
  },
  {
    question: '5089 Worauf lassen labile Luftmassen und starker vertikaler Wolkenaufbau, wie Cumulonimbus und Cumulocongestus, schlie??en?',
    answers: [
      { text: '1. Auf eine Kaltfront,', correct: true },
      { text: '2. auf eine Warmfront,', correct: false },
      { text: '3. auf eine Inversionsfront in mittleren H??hen.', correct: false }
    ]
  },
  {
    question: '5090    Worauf lassen stratifizierte Bew??lkung, wie Nimbostratus und Altostratus, schlie??en?',
    answers: [
      { text: '1.   Auf eine Kaltfront,', correct: false },
      { text: '2.   auf eine Warmfront,', correct: true },
      { text: '3.   auf eine Kaltfront ??ber Gebirgserhebungen.', correct: false }
    ]
  },
  {
    question: '5091    Was versteht man unter Okklusionsfront?',
    answers: [
      { text: '1.   Das Wetter beider Fronttypen, weil eine Kaltfront eine Warmfront eingeholt hat,', correct: true },
      { text: '2.   eine Kaltfront mit warmen Luftmassen.', correct: false },
      { text: '3.   eine Warmfront mit kalten Luftmassen.', correct: false }
    ]
  },
  {
    question: '5092    Welche Wolken geh??ren zu den tiefen Wolken?',
    answers: [
      { text: '1.   Stratus, Nimbostratus und Cirrostratus,', correct: false },
      { text: '2.   Stratus, Nimbostratus und Stratocumulus,', correct: true },
      { text: '3.   Cumulus, Cirrocumulus, Stratocumulus, Cumulonimbus.', correct: false }
    ]
  },
  {
    question: '5093    Welche Wolken geh??ren zu den mittleren Wolken?',
    answers: [
      { text: '1.   Altostratus und Altocumulus,', correct: true },
      { text: '2.   Cumulonimbus und Altostratus,', correct: false },
      { text: '3.   Altostratus, Altocumulus und Cirrocumulus.', correct: false }
    ]
  },
  {
    question: '5094    Welche Wolken geh??ren zu den hohen Wolken?',
    answers: [
      { text: '1.   Altocumulus und Altostratus,', correct: false },
      { text: '2.   Altocumulus und Cumulonimbus,', correct: false },
      { text: '3.   Cirrus, Cirrostratus und Cirrocumulus.', correct: true }
    ]
  },
  {
    question: '5095    Zu welcher Gruppe geh??ren die Cumulus- (Thermikwolken)?',
    answers: [
      { text: '1.   Zu den Wolken mit vertikalem Aufbau oder Konvektionswolken,', correct: true },
      { text: '2.   zu den mittleren Wolken mit vertikalem Aufbau,', correct: false },
      { text: '3.   zu den tiefen Wolken mit vertikalem Aufbau.', correct: false }
    ]
  },
  {
    question: '5096    Einen Cumulocongestus bezeichnet man als:',
    answers: [
      { text: '1.   einen Cumulus mit starker vertikaler Entwicklung und meist bereits dunkler Unterseite,', correct: true },
      { text: '2.   einen Cumulus am Anfang seiner Entwicklung,', correct: false },
      { text: '3.   einen Cumulus, der seine Energie nicht entladen kann.', correct: false }
    ]
  },
  {
    question: '5097 Was ist ein Cumulonimbus?',
    answers: [
      { text: '1. Eine Wolke mit horizontaler Entwicklung, ??hnlich wie ein Nimbostratus,', correct: false },
      { text: '2. ein Cumulus am H??hepunkt seiner starken, vertikalen Entwicklung, mit Erscheinungen wie: Niederschl??ge, Hagel, starke Turbulenzen, Blitz und starke Windscherungen,', correct: true },
      { text: '3. ein Cumulus mit Gewittererscheinungen, typisch f??r unsere Gebirgsregionen.', correct: false }
    ]
  },
  {
    question: '5098    Kann man einen Cumulonimbus beim Sport- und Wanderflug als gef??hrlich bezeichnen?',
    answers: [
      { text: '1.   Nein, es handelt sich um eine sehr n??tzliche Wolke,', correct: false },
      { text: '2.   ja, es handelt sich dabei um die gef??rchtete Gewitterwolke,', correct: true },
      { text: '3.   ja, wegen der schlechten Sicht am Boden.', correct: false }
    ]
  },
  {
    question: '5099    Welche ist die Sequenz des Cumulus-Aufbaues?',
    answers: [
      { text: '1.   Stratus, Altocumulus, Cumulonimbus und Cumulus,', correct: false },
      { text: '2.   Nimbostratus, Stratocumulus und Cumulonimbus,', correct: false },
      { text: '3.   Cumulohumilis, Cumulocongestus und Cumulonimbus.', correct: true }
    ]
  },
  {
    question: '5100    Sind stratifizierte Wolken (Schichtwolken) f??r den Sport- und Wanderflug interessant?',
    answers: [
      { text: '1.   Ja, sie eignen sich f??r lange Streckenfl??ge,', correct: false },
      { text: '2.   ja,', correct: false },
      { text: '3.   nein.', correct: true }
    ]
  },
  {
    question: '5101       Schlie??t das Vorhandensein von dichten Schichtwolken in verschiedenen H??hen einen starken Cumulus-Aufbau aus?',
    answers: [
      { text: '1. Ja, denn die Schichtwolken deuten auf eine Warmfront hin, Konvektivwolken gibt es nicht,', correct: false },
      { text: '2. nein, denn die Temperaturerh??hung, die bei einer Warmfront mit Schichtwolken auftritt, kann zu steigenden Luftmassen mit Bildung von Konvektivwolken f??hren,', correct: false },
      { text: '3. nein, die Schichtwolken k??nnen durch eine Okklusionsfront erzeugt werden, dabei k??nnen Konvektivwolken und sogar Gewitterwolken entstehen.', correct: true }
    ]
  },
  {
    question: '5102 Wenn starke Winde auf Gebirgsketten auflaufen, k??nnen dabei Wellen entstehen, die charakterisiert werden durch das Vorhandensein von:',
    answers: [
      { text: '1. hohen Schichtwolken wie Cirrocumulus, die sich in Cirrostratus und dann in Cumuluswolken verwandeln,', correct: false },
      { text: '2. tiefen Schichtwolken wie Stratus,', correct: false },
      { text: '3. linsenf??rmigen Wolken oder Lenticularis (meistens der Art Altocumulus, manchmal auch Stratocumulus oder Cirrocumulus) und Rotorwolken (Cumulus fractus), welche die durch Gebirgserh??hungen erzeugte Wellenbewegung anzeigen.', correct: true }
    ]
  },
  {
    question: '5103    Welche sind die typischen Kennzeichen einer Lenticularis?',
    answers: [
      { text: '1.   Ihre mandelf??rmige, aerodynamische Form,', correct: true },
      { text: '2.   ihre vertikale Entwicklung,', correct: false },
      { text: '3.   ihre schnelle Vorw??rtsbewegung.', correct: false }
    ]
  },
  {
    question: '5104    Typisch f??r das Mikroklima von gebirgigen Zonen sind, au??er dem meteorologischen Wind, auch noch:',
    answers: [
      { text: '1.   Bergwind am Abend und Talwind am Morgen,', correct: false },
      { text: '2.   Bergwind in der Nacht und am fr??hen Morgen, Talwind in den warmen Stunden des Tages,', correct: true },
      { text: '3.   Winde, die je nach Ort St??rke und Richtung ??ndern, aber zu jeder Tages- und Nachtzeit konstant sind.', correct: false }
    ]
  },
  {
    question: '5105 Aufgrund der unterschiedlichen Erw??rmung von Festland und Wasserfl??chen entstehen in Gebieten am Meer:',
    answers: [
      { text: '1. Meeresbrise in den warmen Tagesstunden, Landbrise in der Nacht,', correct: true },
      { text: '2. Landbrise in den warmen Tagesstunden, und umgekehrt in der Nacht,', correct: false },
      { text: '3. nur Meeresbrise w??hrend der warmen Tagesstunden.', correct: false }
    ]
  },
  {
    question: '5106 Erzeugen Talwinde normalerweise auch Hangaufwind auf den Seitenh??ngen eines Tales?',
    answers: [
      { text: '1. Ja, abh??ngig von der Bodenbeschaffenheit,', correct: true },
      { text: '2. ja, unabh??ngig von der Bodenbeschaffenheit,', correct: false },
      { text: '3. nein, nie.', correct: false }
    ]
  },
  {
    question: '5107 K??nnen im Laufe des Tages durch den Talwind auch starke Cumuluswolken entstehen?',
    answers: [
      { text: '1. Ja, denn der Talwind hebt die Luft an den Bergh??ngen, dadurch k??nnen Cumuluswolken entstehen, bei labiler Luft auch mit starker vertikaler Entwicklung,', correct: true },
      { text: '2. ja, denn der Talwind erw??rmt sich aufgrund der Reibung am Boden, beginnt bei labiler Luft zu steigen und f??hrt so zu einem vertikalen Wolkenaufbau,', correct: false },
      { text: '3. nein, Talwinde f??hren nie zu vertikalem Wolkenaufbau.', correct: false }
    ]
  },
  {
    question: '5108     Kann ein Talwind so stark sein, dass er f??r Sport- und Wanderflieger gef??hrlich wird?',
    answers: [
      { text: '1.   Ja, besonders an Gebirgsgraten,', correct: false },
      { text: '2.   ja, besonders an Einengungen oder starken Beugungen des Tales und des Talbodens, wegen des Venturi-Effekts,', correct: true },
      { text: '3.   nein, nie.', correct: false }
    ]
  },
  {
    question: '5109 Wenn ein starker Wind seitlich auf einen Gebirgsgrat oder -kamm trifft:',
    answers: [
      { text: '1. ist die Luft auf der Leeseite ruhig,', correct: false },
      { text: '2. ist die Luft auf der Luvseite sicherlich verwirbelt und turbulent,', correct: false },
      { text: '3. gibt es auf der Leeseite auf jeden Fall Rotoren und Turbulenzen.', correct: true }
    ]
  },

  {
    question: '5110 Was kann man sich erwarten, wenn durch ein Tal ein starker, seiner L??ngsachse paralleler Wind str??mt?',
    answers: [
      { text: '1. Starken laminaren Wind,', correct: false },
      { text: '2. starken b??igen Wind mit Rotoren, die parallel zu den Linien der maximalen Hangneigung an den Seitenh??ngen des Tales verlaufen,', correct: true },
      { text: '3. starken Wind mit kleinen Rotoren, meistens parallel zu der L??ngsachse des Tales.', correct: false }
    ]
  }, {
    question: '5111   Was kann man sich erwarten, wenn ein Tal von einem starken Wind angestr??mt wird, dessen Richtung einen gr????eren Winkel als 45?? zu der L??ngsachse des Tales bildet?',
    answers: [
      { text: '1. Windstille an den Talh??ngen, starker Wind auf dem Talboden,', correct: false },
      { text: '2. ??berall b??iger Wind mit pl??tzlich ??ndernder Richtung, der das Vorhandensein von stehenden und wandernden Rotoren anzeigt,', correct: true },
      { text: '3. starker, laminarer Wind mit konstanter Richtung.', correct: false }
    ]
  },
  {
    question: '5112   Wird eine allein stehende, rundliche Erhebung vom Wind angestr??mt, k??nnen sich leicht aufsteigende Luftstr??mungen bilden?',
    answers: [
      { text: '1. Ja, denn der Wind muss auf jeden Fall das Hindernis ??berwinden,', correct: false },
      { text: '2. das h??ngt nur von der Bodenbeschaffenheit ab,', correct: false },
      { text: '3. nein, denn der Wind hat die Tendenz, um das Hindernis herumzustr??men.', correct: true }
    ]
  },
  {
    question: '5113 Kann ein Rotor, der sich durch den Wind an einem Gebirgskamm oder -grat bildet, zur Entstehung eines konstanten Aufwindes f??hren?',
    answers: [
      { text: '1. Nein, nie,', correct: false },
      { text: '2. ja, aber nur auf der Aufwindseite,', correct: false },
      { text: '3. ja, auch auf der Leeseite, wenn der Rotor station??r ist und den Hang mit seiner aufsteigenden Seite anstr??mt.', correct: true }
    ]
  },
  {
    question: '5114 Das Vorhandensein von Rotoren auf der sonnenbeschienenen Leeseite einer Erh??hung:',
    answers: [
      { text: '1. erleichtert das Abl??sen von manchmal auch starker Thermik (Leethermik),', correct: true },
      { text: '2. hat nichts zu tun mit der thermischen Aktivit??t des Hanges,', correct: false },
      { text: '3. verhindert jegliche Thermikbildung.', correct: false }
    ]
  },
  {
    question: '5115 Manchmal ist die Leeseite, besonders an Gebirgsk??mmen und -graten, gekennzeichnet durch:',
    answers: [
      { text: '1. schnell wandernde Wolken,', correct: false },
      { text: '2. einen besonderen Dunst um die Leeseite des Hanges,', correct: false },
      { text: '3. das Vorhandensein von station??ren Rotorwolken, die sich st??ndig bilden und wieder aufl??sen.', correct: true }
    ]
  },
  {
    question: '5116   Wie werden die besonderen Ph??nomene genannt, die erzeugt werden, wenn eine Gebirgskette von sehr feuchten, aufsteigenden Luftmassen angestr??mt wird?',
    answers: [
      { text: '1. Aufwindstau mit starker Wolkenbildung und Niederschl??gen, F??hn auf der Leeseite mit warmem, trockenen, b??igen Wind,', correct: true },
      { text: '2. Aufwindf??hn mit warmem, trockenen, b??igen Wind, Leestau mit starker Wolkenbildung und Niederschl??gen,', correct: false },
      { text: '3. Stau und F??hn, mit gleichen meteorologischen Erscheinungen auf der Luv- und der Leeseite.', correct: false }
    ]
  },
  {
    question: '5117    Auf den H??ngen der Alpens??dseite gibt es bei Nordf??hn:',
    answers: [
      { text: '1.   Temperaturzunahme, starken, warmen, trockenen laminaren Wind, keine Rotoren oder Turbulenzen,', correct: false },
      { text: '2.   Temperaturzunahme, starken, warmen, trockenen b??igen Wind, Rotoren und Turbulenzen,', correct: true },
      { text: '3.   Temperaturzunahme, starken, warmen, feuchten laminaren Wind, keine Rotoren oder Turbulenzen.', correct: false }
    ]
  },
  {
    question: '5118   Von der Ebene trifft feuchte Luft mit einer Temperatur von 10?? C auf eine 3000 Meter hohe Gebirgskette, sie steigt auf, es bildet sich Stau bis zum Gebirgskamm und F??hn auf der Leeseite. Befindet sich die Kondensationsh??he auf der Luvseite auf 1000 Metern, welche Temperatur hat die Luft, wenn sie in die Ebene unterhalb der Gebirgskette gelangt?',
    answers: [
      { text: '1. Die gleiche wie auf der Aufwindseite, also 10?? C,', correct: false },
      { text: '2. 13?? C,', correct: false },
      { text: '3. etwa 20?? C.', correct: true }
    ]
  },
  {
    question: '5119   Von der Ebene trifft feuchte Luft mit einer Temperatur von 10?? C auf eine 3000 Meter hohe Gebirgskette, sie steigt auf, es bildet sich Stau bis zum Gebirgskamm und F??hn auf der Leeseite. Befindet sich die Kondensationsh??he auf der Luvseite auf 2000 Metern, welche Temperatur hat die Luft, wenn sie in die Ebene unterhalb der Gebirgskette gelangt?',
    answers: [
      { text: '1. Die gleiche wie auf der Aufwindseite, also 10?? C,', correct: false },
      { text: '2. etwa 15?? C,', correct: true },
      { text: '3. 20?? C.', correct: false }
    ]
  },
  {
    question: '5120   Welche Art von Mikroklima kann ein Ort haben, der sich direkt auf der Leeseite einer Gebirgskette wie den Alpen befindet, und von atlantischen Luftmassen getroffen wird, die meistens von der franz??sischen Ebene kommen?',
    answers: [
      { text: '1. Eher trocken und windig, wegen des F??hns,', correct: true },
      { text: '2. sehr feucht und regnerisch,', correct: false },
      { text: '3. viel k??lter als auf der Leeseite.', correct: false }
    ]
  },
  {
    question: '6001 Was ist ein H??henmesser?',
    answers: [
      { text: '1.   Ein Instrument, das immer den Abstand eines Flugger??tes vom Boden misst,', correct: false },
      { text: '2.   ein Instrument, das die vertikale Geschwindigkeit eines Flugger??tes misst,', correct: false },
      { text: '3.   ein Instrument, das die H??he eines Flugger??tes in Bezug zu einem bekannten Punkt, z.B. die Meeresh??he, misst.', correct: true }
    ]
  },
  {
    question: '6002 Wie funktioniert ein H??henmesser normalerweise?',
    answers: [
      { text: '1. Er misst durch eine Membrandose oder einen elektronischen Sensor den Luftdruck und somit die H??he, auf einer ablesbaren Skala,', correct: true },
      { text: '2. er misst die Meeresh??he mittels eines elektronischen Sensors,', correct: false },
      { text: '3. er misst die vertikale Geschwindigkeit gegen??ber der Luft mittels eines elektronischen Sensors.', correct: false }
    ]
  },
  {
    question: '6003    Warum muss ein H??henmesser reguliert werden?',
    answers: [
      { text: '1.   Weil sich die Lufttemperatur hinsichtlich der atmosph??rischen Bedingungen und der H??he ??ndert,', correct: false },
      { text: '2.   weil sich der Luftdruck auch hinsichtlich der atmosph??rischen Bedingungen und nicht nur mit der H??he ??ndert,', correct: true },
      { text: '3.   weil sich der Luftdruck mit der H??he ??ndert.', correct: false }
    ]
  },
  {
    question: '6004 Wenn wir vor dem Start den H??henmesser auf Starth??he einstellen und bei der Landung eine unterschiedliche H??he ablesen als die bekannte, was k??nnte passiert sein?',
    answers: [
      { text: '1. Der Luftdruck hat sich ver??ndert,', correct: true },
      { text: '2. der H??henmesser ist sicherlich kaputt,', correct: false },
      { text: '3. die Lufttemperatur hat sich ver??ndert.', correct: false }
    ]
  },
  {
    question: '6005    Was wissen wir, wenn wir unseren H??henmeter nach dem Luftdruck auf Meeresh??he (QNH) einstellen?',
    answers: [
      { text: '1.   Die geometrische H??he gegen??ber dem Grund,', correct: false },
      { text: '2.   die H??he gegen??ber der mittleren Meeresh??he,', correct: true },
      { text: '3.   die H??he gegen??ber der durchschnittlichen H??he der Erde.', correct: false }
    ]
  },
  {
    question: '6006    Was ist ein Variometer?',
    answers: [
      { text: '1.   Ein Instrument, das w??hrend des Fluges die vertikale Geschwindigkeit misst,', correct: true },
      { text: '2.   ein Instrument, das beim Fliegen die H??he gegen??ber der Meeresh??he misst,', correct: false },
      { text: '3.   ein Instrument, das beim Fliegen die Geschwindigkeit der Luft misst.', correct: false }
    ]
  },
  {
    question: '6007 Wie funktioniert ein Variometer?',
    answers: [
      { text: '1. Es misst die momentane Ver??nderung der Lufttemperatur mittels eines elektronischen Sensors,', correct: false },
      {
        text: '2. es misst auch kleinste Ver??nderungen des Luftdruckes mittels eines Differentialbarometers oder eines elektronischen Sensors, ', correct: true
      },
      { text: '3. es misst die Ver??nderungen des Luftdruckes mittels eines S??ulenbarometers.', correct: false }
    ]
  },
  {
    question: '6008 In welchen Situationen kann ein Variometer sehr hilfreich f??r ein sicheres Fliegen sein?',
    answers: [
      {
        text: '1. Wenn man z.B. bei Wolken oder unter einem Cumulus fliegt, k??nnen wir erkennen, ob wir hochgezogen werden und ob es ratsam w??re, schnell abzusteigen oder in eine andere, sichere Zone zu fliegen, ', correct: true
      },
      { text: '2. im Dynamikflug, da wir erkennen, wo man besser steigt und so sicher weiterfliegen kann,', correct: false },
      { text: '3. es gibt uns keine Hilfe f??r ein sichereres Fliegen, sondern ist nur ein Hilfsmittel beim Segeln.', correct: false }
    ]
  },
  {
    question: '6009    Was kann ein Anemometer w??hrend des Fliegens messen?',
    answers: [
      { text: '1.   Es misst die Geschwindigkeit gegen??ber der Luft im Flug (relative Geschwindigkeit),', correct: true },
      { text: '2.   es misst die Geschwindigkeit gegen??ber dem Grund beim Fliegen,', correct: false },
      { text: '3.   es misst die vertikale Geschwindigkeit beim Fliegen.', correct: false }
    ]
  },
  {
    question: '6010    Wie funktioniert ein Anemometer?',
    answers: [
      { text: '1.   Es misst den statischen Druck des relativen Windes und ??bersetzt ihn in eine Geschwindigkeitsangabe,', correct: false },
      { text: '2.   es misst direkt die kinetische Energie des Windes, und wandelt sie in W??rme um,', correct: false },
      {
        text: '3.   es misst den dynamischen Druck des relativen Windes oder seine Geschwindigkeit mittels mechanischer Vorrichtungen(kleine Propeller oder Venturirohr usw.) ', correct: true
      }
    ]
  },
  {
    question: '6011 In welchem Fall kann das Anemometer mit guter Ann??herung die Geschwindigkeit gegen??ber dem Grund anzeigen?',
    answers: [
      { text: '1. Wenn man in ruhiger Luft fliegt, ohne Wind und auf einer fast horizontalen Flugbahn,', correct: true },
      { text: '2. immer, unabh??ngig von der Flugbahn,', correct: false },
      { text: '3. nie.', correct: false }
    ]
  },
  {
    question: '6012    Was ist ein Kompass?',
    answers: [
      { text: '1.   Ein Instrument, das die Richtung des magnetischen Nordens anzeigt,', correct: true },
      { text: '2.   ein Instrument, das die Richtung des geographischen Nordens anzeigt,', correct: false },
      { text: '3.   ein Instrument, das den geographischen S??den anzeigt.', correct: false }
    ]
  },
  {
    question: '6013    Wie funktioniert ein Kompass?',
    answers: [
      { text: '1.   Er peilt den geographischen Norden mittels eines Magneten,', correct: false },
      { text: '2.   er peilt die Richtung des Erdmagnetfeldes und des magnetischen Nordens mittels eines Magneten,', correct: true },
      { text: '3.   er peilt die Richtung der Erdmeridiane mittels eines mechanischen Systems.', correct: false }
    ]
  },
  {
    question: '6014 Worauf muss man achten, damit der Kompass so genau wie m??glich funktioniert, wenn man ihn zwischen andere Instrumente setzt?',
    answers: [
      { text: '1. Auf nichts Besonderes, der Kompass zeigt immer den magnetischen Norden,', correct: false },
      { text: '2. ihn so zu installieren, dass der magnetische und der geographische Norden ??bereinstimmen,', correct: false },
      { text: '3. auf die elektromagnetische Interferenz mit anderen elektronischen Ger??ten, wie Radios und besonders Mobiltelefone, die, wenn sie angeschaltet werden, das elektromagnetische Feld st??ren und die Kompassnadel beeinflussen k??nnen.', correct: true }
    ]
  },
  {
    question: '6015    Kann man behaupten, dass der geographische und der magnetische Norden ??bereinstimmen?',
    answers: [
      { text: '1.   Ja,', correct: false },
      { text: '2.   es h??ngt von den Jahreszeiten ab,', correct: false },
      { text: '3.   nein.', correct: true }
    ]
  },
  {
    question: '6016 Kann man mit Hilfe von Kompass, H??henmesser, Anemometer und Variometer Instrumentalflug betreiben, z.B. in den Wolken?',
    answers: [
      { text: '1. Ja, wenn man ausreichend geschult ist,', correct: false },
      { text: '2. ja, aber nur kurzzeitig, da die Instrumentierung nicht vollst??ndig ist,', correct: false },
      { text: '3. nein, die Instrumentierung ist ??berhaupt nicht vollst??ndig, es fehlt die Information ??ber die Position im Luftraum.', correct: true }
    ]
  },
  {
    question: '6017    Was kann das GPS-Ger??t w??hrend des Fluges messen?',
    answers: [
      { text: '1.   Die Geschwindigkeit ??ber Grund,', correct: true },
      { text: '2.   die Geschwindigkeit gegen??ber der Luft,', correct: false },
      { text: '3.   die relative Feuchtigkeit.', correct: false }
    ]
  },
  {
    question: '6018 Kann man mit einem GPS-Ger??t problemlos innerhalb von Wolken fliegen?',
    answers: [
      { text: '1. Ja, der GPS gibt die Flugrichtung mit gro??er Genauigkeit an,', correct: false },
      { text: '2. nein, auch weil der Empfang der von den Satelliten ausgesandten Signale in der Wolke gest??rt sein kann und das Ger??t dann nicht mehr zuverl??ssig ist,', correct: true },
      { text: '3. ja, aber nur wenn man mit dem GPS auch einen nautischen Kompass ben??tzt.', correct: false }
    ]
  },
  {
    question: '6019 Wir fliegen bei starkem Wind Richtung S??DEN. Auf dem Bildschirm des GPS lesen wir jedoch eine Geschwindigkeit ab von 3 km/h Richtung NORDEN. Was ist los?',
    answers: [
      { text: '1. Das Ger??t ist offensichtlich kaputt', correct: false },
      { text: '2. Wenn ich sicher bin, das mein Flugger??t in Richtung S??den ausgerichtet ist, dann bedeutet das, dass ich r??ckw??rts fliege. Der Wind ist st??rker als meine Geschwindigkeit gegen??ber der Luft und ich muss so schnell wiem??glich meine Geschwindigkeit erh??hen', correct: true },
      { text: '3. Eine solche Situation kann sich nicht ereignen', correct: false }
    ]
  },
  {
    question: '6020 Wie funktioniert ein GPS-Ger??t?',
    answers: [
      { text: '1. Es berechnet die Position im Luftraum mittels eines Bewegungssensors', correct: false },
      { text: '2. Es berechnet die Position im Luftraum durch kronometrischem Vergleich mit den Signalen, von einigen Satellitenauf ihrer Bahn um die Erde', correct: true },
      { text: '3. Es berechnet die Position im Raum mittels eines Differentialbarometers', correct: false }
    ]
  },
  {
    question: '7001    Bevor man sich zum Startplatz begibt, ist es n??tig:',
    answers: [
      { text: '1.   die Bodenbedingungen zu ??berpr??fen,', correct: false },
      { text: '2.   die Bodenbeschaffenheiten der Landewiese ??berpr??fen, und schauen ob ein Windsack vorhanden ist,', correct: true },
      { text: '3.   den R??ckholdienst bereitzustellen.', correct: false }
    ]
  },
  {
    question: '7002 Bevor man einen Streckenflug unternimmt, muss man, zus??tzlich zu allem anderen:',
    answers: [
      { text: '1. sich ausreichend ern??hren, viel trinken, um ein Austrocknen zu vermeiden, die R??ckholung organisieren, sich mit Mitteln auszur??sten, um eventuell die Nacht irgendwo drau??en zu verbringen,', correct: false },
      { text: '2. daf??r sorgen, dass man am Morgen startet, um l??nger Licht zu haben,', correct: false },
      { text: '3. die Luftfahrtkarte des Gebietes ??berpr??fen, eventuelle Verbote und Landem??glichkeiten auf der Strecke aufzeichnen, sowie die meteorologischen Bedingungen genauestens absch??tzen.', correct: true }
    ]
  },
  {
    question: '7003 Welche Hangneigung wird, wenn ein korrekter und gradueller Anlauf gew??hrleistet ist, als optimal und sicher f??r einen Start angesehen?',
    answers: [
      { text: '1. Mehr als 20?? bis 35??, da sie schon so deutlich h??her als der erreichbare Gleitwinkel ist,', correct: true },
      { text: '2. von 35?? bis 45??, nur so ist sie h??her als der erreichbare Gleitwinkel,', correct: false },
      { text: '3. ??ber 45??, um schnell abzuheben und sicher alle Hindernisse auf der Flugbahn zu ??berfliegen.', correct: false }
    ]
  },
  {
    question: '7004    Wie sollte der Anlauf f??r den Start mit dem Drachen und dem Gleitschirm sein?',
    answers: [
      { text: '1.   Mit kurzen Schritten und konstanter Geschwindigkeit,', correct: false },
      { text: '2.   mit gr????er werdenden Schritten und zunehmender Geschwindigkeit,', correct: true },
      { text: '3.   ein schneller Sprint mit kurzen Schritten.', correct: false }
    ]
  },
  {
    question: '7005 Was muss man als Erstes direkt nach dem Start mit dem Drachen oder dem Gleitschirm tun, au??er der Kontrolle der Flugbahn?',
    answers: [
      { text: '1. Etwas mehr bremsen, um h??her zu fliegen,', correct: false },
      { text: '2. sich gut in den Sitz setzen,', correct: false },
      { text: '3. ein bisschen Geschwindigkeit aufnehmen, das bedeutet Sicherheit.', correct: true }
    ]
  },
  {
    question: '7006 Wie kann man das kleinstm??gliche Sinken mit dem Drachen oder Gleitschirm erlangen, von anderen Bedingungen abgesehen?',
    answers: [
      { text: '1. Im Geradeausflug und mit dem h??chstm??glichen Anstellwinkel,', correct: false },
      { text: '2. mit dem besten Gleiten bei Windstille,', correct: false },
      { text: '3. im Geradeausflug und mit einem Anstellwinkel zwischen dem besten Gleiten bei Windstille und dem Stallwinkel.', correct: true }
    ]
  },
  {
    question: '7007 Wie ver??ndert sich das Penetrationsverm??gen eines Fl??gels, bei Ver??ndern des Gegenwindes?',
    answers: [
      { text: '1.   Es wird besser,', correct: false },
      { text: '2.   es wird schlechter,', correct: false },
      { text: '3.   es ver??ndert sich nicht, weil es nur vom Anstellwinkel des Fl??gels abh??ngt.', correct: true }
    ]
  },
  {
    question: '7008    Wenn wir die l??ngste Flugstrecke mit dem Drachen oder Gleitschirm erreichen wollen, m??ssen wir:',
    answers: [
      { text: '1.   Die Man??ver m??glichst reduzieren,', correct: false },
      { text: '2.   mit dem besten Gleiten ??ber Grund m??glichst geradeaus fliegen,', correct: true },
      { text: '3.   mit dem geringsten Sinken m??glichst geradeaus fliegen.', correct: false }
    ]
  },
  {
    question: '7009    Wenn wir in bestimmten Konditionen m??glichst lange fliegen wollen, m??ssen wir:',
    answers: [
      { text: '1.   die Man??ver m??glichst reduzieren,', correct: false },
      { text: '2.   mit dem besten Gleiten ??ber Grund m??glichst geradeaus fliegen,', correct: false },
      { text: '3.   mit dem geringsten Sinken m??glichst geradeaus fliegen.', correct: true }
    ]
  },
  {
    question: '7010 Wie m??ssen wir die Geschwindigkeit ver??ndern, um das beste Gleiten zu erreichen, wenn die Konditionen von ruhiger Luft auf Gegenwind wechseln?',
    answers: [
      { text: '1. Die Geschwindigkeit verringern im Vergleich zu der des besten Gleitens bei Windstille,', correct: false },
      { text: '2. die Geschwindigkeit erh??hen im Vergleich zu der des besten Gleitens bei Windstille,', correct: true },
      { text: '3. auf jeden Fall die Geschwindigkeit erh??hen bis zur maximal m??glichen.', correct: false }
    ]
  },
  {
    question: '7011   Ver??ndert sich beim Fliegen mit dem Drachen oder Gleitschirm das beste Gleiten ??ber Grund, wenn sich die Geschwindigkeit des Gegenwinds ver??ndert?',
    answers: [
      { text: '1. Ja, immer,', correct: true },
      { text: '2. nur, wenn der Gegenwind st??rker wird,', correct: false },
      { text: '3. nein.', correct: false }
    ]
  },
  {
    question: '7012    Das Gleiten ??ber Grund:',
    answers: [
      { text: '1.   wird schlechter, wenn der Gegenwind schw??cher wird,', correct: false },
      { text: '2.   wird schlechter, wenn der Gegenwind st??rker wird,', correct: true },
      { text: '3.   wird besser, wenn der Gegenwind st??rker wird.', correct: false }
    ]
  },
  {
    question: '7013    Wie fliegt man, um bei steigenden Luftmassen das bestm??gliche Gleiten zu erreichen?',
    answers: [
      { text: '1.   Mit einem gr????eren Anstellwinkel als beim besten Gleiten bei Windstille,', correct: true },
      { text: '2.   mit einem kleineren Anstellwinkel als beim besten Gleiten bei Windstille,', correct: false },
      { text: '3.   mit dem gleichen Anstellwinkel wie beim besten Gleiten bei Windstille.', correct: false }
    ]
  },
  {
    question: '7014 Wie fliegt man, um bei sinkenden Luftmassen das bestm??gliche Gleiten zu erreichen?',
    answers: [
      { text: '1. Mit einem kleineren Anstellwinkel als beim besten Gleiten bei Windstille,', correct: true },
      { text: '2. mit einem gr????eren Anstellwinkel als beim besten Gleiten bei Windstille,', correct: false },
      { text: '3. mit dem gleichen Anstellwinkel wie beim besten Gleiten bei Windstille.', correct: false }
    ]
  },
  {
    question: '7015 Wir fliegen mit einer Geschwindigkeit von 10 km/h ??ber Grund und einem Gegenwind von 30 km/h. Welche Geschwindigkeit w??rde unser Anemometer anzeigen?',
    answers: [
      { text: '1. 10 km/h,', correct: false },
      { text: '2. 30 km/h,', correct: false },
      { text: '3. 40 km/h.', correct: true }
    ]
  },
  {
    question: '7016 Wir fliegen mit einer Geschwindigkeit von 60 km/h ??ber Grund und einem R??ckenwind von 30 km/h. Welche Geschwindigkeit w??rde unser Anemometer anzeigen?',
    answers: [
      { text: '1. 90 km/h,', correct: false },
      { text: '2. 30 km/h,', correct: true },
      { text: '3. 40 km/h.', correct: false }
    ]
  },
  {
    question: '7017    Wozu verwendet man beim Fliegen mit dem Gleitschirm das Speedsystem?',
    answers: [
      { text: '1.   um bei Gegenwind das bessere Gleiten ??ber Grund zu erzielen,', correct: true },
      { text: '2.   um das Sinken zu erh??hen und die Fluggeschwindigkeit zu verringern,', correct: false },
      { text: '3.   um bei Turbulenz den Neigungswinkel zu erh??hen.', correct: false }
    ]
  },
  {
    question: '7018 Wie fliegen wir bei meteorologischem Wind einen m??glichst runden Vollkreis?',
    answers: [
      { text: '1. Indem wir die Fl??gelneigung w??hrend der Drehung so ver??ndern, dass wir die Versetzung ??ber dem Grund ausgleichen,', correct: true },
      { text: '2. indem wir die seitliche Neigung verst??rken, wenn wir den Wind von vorne haben,', correct: false },
      { text: '3. indem wir die seitliche Neigung vermindern, wenn wir den Wind von der Seite haben.', correct: false }
    ]
  },
  {
    question: '7019   Wie fliegt man Kurven bei Dynamik am Hang, um in gr????ter Sicherheit die maximale Leistung zu erreichen?',
    answers: [
      { text: '1. Vollkreise so nahe wie m??glich am Hang,', correct: false },
      { text: '2. 180?? immer zum Hang hin,', correct: false },
      { text: '3. 180?? immer weg vom Hang und nicht zu steile Kurven.', correct: true }
    ]
  },
  {
    question: '7020    Warum fliegt man beim Thermikfliegen Vollkreise?',
    answers: [
      { text: '1.   Weil sich die Thermik dreht,', correct: false },
      { text: '2.   weil ihr Durchmesser nicht sehr gro?? ist,', correct: true },
      { text: '3.   weil wir beim stetigem Drehen weniger Sinken haben.', correct: false }
    ]
  },
  {
    question: '7021    Sobald man in einen thermischen oder dynamischen Aufwind eingeflogen ist, soll man:',
    answers: [
      { text: '1.   etwas anbremsen, um die atmosph??rischen Konditionen besser zu nutzen,', correct: true },
      { text: '2.   beschleunigen, um die Konditionen besser zu nutzen,', correct: false },
      { text: '3.   dieselbe Geschwindigkeit beibehalten, um die Konditionen gut zu nutzen.', correct: false }
    ]
  },
  {
    question: '7022     Kann im Fluge mit einem Gleitschirm bei ann??hernd maximaler Geschwindigkeit Stall-Gefahr bestehen?',
    answers: [
      { text: '1.   Nein,', correct: false },
      { text: '2.   ja, wenn man pl??tzlich den Anstellwinkel reduziert,', correct: false },
      { text: '3.   ja, bei zu hohem Anstellwinkel.', correct: true }
    ]
  },
  {
    question: '7023 Bei starker Turbulenz fliegt man:',
    answers: [
      { text: '1. so langsam wie m??glich, um das Material so wenig wie m??glich zu belasten und die Kammern des Gleitschirms unter Druck zu halten,', correct: false },
      { text: '2. mit der H??chstgeschwindigkeit, um m??glichst schnell aus dem turbulenten Gebiet herauszukommen,', correct: false },
      { text: '3. mit dem Drachen etwas schneller als die Geschwindigkeit des besten Gleitens und mit dem Gleitschirm etwas mehr angebremst, um Einklapper zu vermeiden.', correct: true }
    ]
  },
  {
    question: '7024 Wie kann man im Fluge die Windrichtung und die Windgeschwindigkeit am Boden feststellen?',
    answers: [
      { text: '1. Man beobachtet alles, was am Boden vom Wind bewegt wird: Fahnen, Rauch, B??ume, usw., und wie man beim Fliegen eines Vollkreises versetzt wird,', correct: true },
      { text: '2. indem man den Spion am Drachen oder Gleitschirm, wenn vorhanden, beobachtet,', correct: false },
      { text: '3. indem man die Bewegungen der Wolken beobachtet, dann wei?? man immer, wie der Wind am Boden ist.', correct: false }
    ]
  },
  {
    question: '7025 Was versteht man unter einem ???Achter??? - Landeanflug?',
    answers: [
      { text: '1. Mit wenigen Kurven erreicht der Pilot seinen Zielpunkt,', correct: false },
      { text: '2. Kurven von ??ber 180?? immer zur Landefl??che hin, so verliert der Pilot langsam an H??he und bleibt immer in der N??he und mit dem Blick auf den Landeplatz,', correct: true },
      { text: '3. enge Kurven, so verliert der Pilot schnell an H??he und bleibt immer in der N??he des Landeplatzes.', correct: false }
    ]
  },
  {
    question: '7026 Was versteht man unter einem ???C??? - oder Landeanflug mit Platzrunde (aeronautischer L.)?',
    answers: [
      { text: '1. Ein Landeanflug bestehend aus 3 Phasen: ???Gegenanflug???, ???Queranflug??? und ???Endanflug???, so gelangt man mit guter Genauigkeit zum Zielpunkt und muss in Bodenn??he nicht mehr viele Man??ver machen,', correct: true },
      { text: '2. ein sehr komplexer Landeanflug mit vielen verschiedenen Phasen und Man??vern in Bodenn??he,', correct: false },
      { text: '3. ein Landeanflug, der nur f??r Flugzeuge geeignet ist.', correct: false }
    ]
  },
  {
    question: '7027    Der Landeplatz ist sehr belebt. Wenn die anderen Bedingungen es erm??glichen, landen wir:',
    answers: [
      { text: '1.   mit der ???Achtertechnik???,', correct: false },
      { text: '2.   mit der Platzrunde ( ???C-Landung???),', correct: true },
      { text: '3.   mit einem direkten Landeanflug mit ???S???-Runden im Endanflug', correct: false }
    ]
  },
  {
    question: '7028    Bei einem Landeanflug mit vielen Drachen und Gleitschirmen in der Luft ist:',
    answers: [
      { text: '1.   auf die Flugregeln zu achten und die Platzrunde (???C???-Landung) zu fliegen, wer am Tiefsten ist, landet als Erster,', correct: true },
      { text: '2.   auf die Flugregeln zu achten und die ???Achtertechnik??? zu fliegen, wer am Tiefsten ist landet als Erster,', correct: false },
      { text: '3.   auf die Flugregeln zu achten und eine der beiden Landetechniken zu w??hlen.', correct: false }
    ]
  },
  {
    question: '7029    Wann ist es besonders wichtig, auf den Windgradienten zu achten?',
    answers: [
      { text: '1.   Beim Thermikfliegen,', correct: false },
      { text: '2.   beim Landen oder beim Fliegen am Hang,', correct: true },
      { text: '3.   beim Start, weil die Windgeschwindigkeit geringer wird, wenn man sich vom Boden entfernt.', correct: false }
    ]
  },
  {
    question: '7030    Wo muss man mit dem Queranflug beginnen, wenn man bei starkem Wind die ???C???-Landung fliegt?',
    answers: [
      { text: '1.   Weit hinter dem Landepunkt,', correct: false },
      { text: '2.   nicht ??ber 50 Meter H??he,', correct: false },
      { text: '3.   nicht zu weit hinter dem Landepunkt.', correct: true }
    ]
  },
  {
    question: '7031    Wenn bei einer Landeeinteilung, die Achter sehr nahe am Landepunkt geflogen werden, muss der Pilot;',
    answers: [
      { text: '1.   Den Endanflug sehr hoch ansetzen,', correct: false },
      { text: '2.   den Endanflug sehr steil fliegen,', correct: false },
      { text: '3.   mit weniger H??he die letzte Kurve fliegen.', correct: true }
    ]
  },
  {
    question: '7032 Bei starken Wind im Endanflug, muss der Pilot:',
    answers: [
      { text: '1. sich auf einen steilen Endanflug einstellen, die Geschwindigkeit erh??hen, um die Wirkung des Windgradienten oder des Windshears auszugleichen, m??glichst sanft und in Bodenn??he ausgleiten,', correct: true },
      { text: '2. m??glichst steil und mit der Geschwindigkeit des geringsten Sinkens anfliegen, aufgrund des Windgradienten m??glichst sanft und in Bodenn??he ausgleiten,', correct: false },
      { text: '3. unabh??ngig von der resultierenden Richtung so langsam wie m??glich fliegen und bei Windgradient stallen.', correct: false }
    ]
  },
  {
    question: '7033 Welche Wirkung kann der Windgradient in Bodenn??he bei der Landung haben?',
    answers: [
      { text: '1. Pl??tzlich st??rkeres Sinken mit Sackflug des Ger??tes, dem man durch h??here Geschwindigkeit vorbeugen kann,', correct: true },
      { text: '2. pl??tzliche Verminderung der Geschwindigkeit am Boden wegen des Gegenwindes, kein Problem f??r die Steuerung,', correct: false },
      { text: '3. pl??tzlicher H??henverlust, den man nicht ausgleichen kann, so erh??ht sich der Anstellwinkel.', correct: false }
    ]
  },
  {
    question: '7034     Eine h??here Geschwindigkeit beim Ausgleiten ist notwendig, um:',
    answers: [
      { text: '1.   in Bodenn??he besser zu stallen,', correct: false },
      { text: '2.   die negativen Wirkungen eines eventuellen Windgradienten oder Windshears zu vermeiden,', correct: true },
      { text: '3.   sich dem Boden mit einer steileren Linie zu n??hern.', correct: false }
    ]
  },
  {
    question: '7035 Wie sollte sich der Pilot verhalten, wenn er beim Landen mit dem Drachen oder Gleitschirm bei starkem Wind ein Hindernis ??berfliegen muss?',
    answers: [
      { text: '1. Die Geschwindigkeit erh??hen, so erh??lt er das beste Gleiten,', correct: true },
      { text: '2. die Geschwindigkeit vermindern, um so wenig wie m??glich zu sinken,', correct: false },
      { text: '3. mit der h??chsten Geschwindigkeit fliegen, um so wenig wie m??glich zu sinken.', correct: false }
    ]
  },
  {
    question: '7036    Wann muss man kontrollieren, ob die Leinen des Gleitschirms verknotet oder verwickelt sind?',
    answers: [
      { text: '1.   Sobald der Schirm aufgezogen ist und man ihn leicht angebremst hat,', correct: false },
      { text: '2.   gleich nach dem Landen, bevor man den Schirm wegpackt,', correct: false },
      { text: '3.   beim Auslegen des Schirms.', correct: true }
    ]
  },
  {
    question: '7037 Beim Streckenfliegen kann man nicht immer in den vorgesehenen Landepl??tzen landen.Was muss der Pilot in einem solchen Fall wissen?',
    answers: [
      { text: '1. Die korrekte Landetechnik am Hang oder einer engen Stelle,', correct: true },
      { text: '2. die ??berlebenstechniken im Gebirge, w??hrend er auf Rettung wartet,', correct: false },
      { text: '3. wie man auch mit starkem R??ckenwind an engen, mit Hindernissen umgebenen Stellen landet.', correct: false }
    ]
  },
  {
    question: '7038 Welche sind die Sicherheitskontrollen direkt vor dem Start?',
    answers: [
      { text: '1. Geschlossene Schuhe, korrekt angeschnalltes und eingestelltes Gurtzeug, Gurte und Fangleinen geordnet und richtig in der Hand, Segel richtig ausgelegt, g??nstige Wind- und Wetterbedingungen, Startraum frei,', correct: true },
      { text: '2. Helm und Handschuhe tragen, geeignetes offenes Gel??nde, richtig aufgezogener Schirm, g??nstiger Wind, freier Startraum,', correct: false },
      { text: '3. richtig angeschnallte Karabiner, kontrollieren, dass der Schirm nicht besch??digt ist, richtig angeschnalltes Gurtzeug, Bremsen frei.', correct: false }
    ]
  },
  {
    question: '7039   Der Pilot muss beim Gleitschirmfliegen eine korrekte Position einnehmen, und das Gurtzeug muss kompatibel mit dem Schirm sein, damit die von der Homologierung garantierten Eigenschaften nicht ver??ndert werden. Was muss sonst noch beachtet werden?',
    answers: [
      { text: '1. Das Gurtzeug so einzustellen, dass der Abstand zwischen den Fangleinen (rechts und links) mehr als 40 cm betr??gt,', correct: false },
      { text: '2. das Gurtzeug so einzustellen, dass der Pilot die vorderen Leinen weit ??ber den Maillons ergreifen kann.', correct: false },
      { text: '3. Das Gurtzeug so einzustellen, dass der Abstand zwischen den Fangleinen (rechts und links), sowie zwischen den Maillons und der Sitzfl??che dem auf dem Homologierungsschildchen angegebenen Abstand entspricht.', correct: true }
    ]
  },
  {
    question: '7040 Wie fliegt man mit einem nassen Gleitschirm am Sichersten?',
    answers: [
      { text: '1.   Ohren anlegen um schneller zu sinken,', correct: false },
      { text: '2.   Ein nasser Gleitschirm bedeutet ??berhaupt kein Problem,', correct: false },
      { text: '3.   Sanft steuern und im hohen Geschindigkeitsbereich fliegen.', correct: true }
    ]
  },
  {
    question: '7041 Das r??ckw??rts Aufziehen ist g??nstig bei:,',
    answers: [
      { text: '1.   starkem Wind,', correct: true },
      { text: '2.   Seitenwind,', correct: false },
      { text: '3.   wenig Wind oder v??lliger Windstille.', correct: false }
    ]
  },
  {
    question: '7042 Man k??nnte den Start in folgende Phasen einteilen:',
    answers: [
      { text: '1. Aufziehen, Anlauf, Start und dann Geschwindigkeitsaufnahme,', correct: false },
      { text: '2. Aufziehen, Anbremsen mit dem Schirm ??ber dem Kopf, Sichtkontrolle des Schirms, Anlauf und Abflug mit Geschwindigkeitsaufnahme, Beibehalten der vorgesehenen Flugbahn,', correct: true },
      { text: '3. Aufziehen, Anbremsen, Anlauf und Abflug, Beibehalten der vorgesehenen Flugbahn.', correct: false }
    ]
  },
  {
    question: '7043 Um nach dem R??ckw??rts-Aufziehen des Gleitschirms zu vermeiden, dass der Schirm einklappt oder vorschie??t, w??hrend man sich umdreht, ist es wichtig, dass:',
    answers: [
      { text: '1. der Pilot sich so schnell wie m??glich umdreht,', correct: false },
      { text: '2. der Pilot beim Umdrehen die Bremsen losl??sst und sie dann schnell wieder ergreift', correct: false },
      { text: '3. der Pilot mit Fangleinen und Bremsen den Schirm auf der Vertikalen kontrolliert, bevor er sich in Startrichtung dreht.', correct: true }
    ]
  },
  {
    question: '7044 Kann man bei leichtem Seitenwind mit einem Gleitschirm starten?',
    answers: [
      { text: '1.   Ja, ganz normal,', correct: false },
      { text: '2.   ja, den Schirm etwas gegen den Wind auslegen und aufziehen, und dann die beste Startlinie w??hlen,', correct: true },
      { text: '3.   nein, das ist auch f??r erfahrene Piloten nicht m??glich. ', correct: false }
    ]
  },
  {
    question: '7045 Wann ist ein Start mit dem Gleitschirm korrekt?',
    answers: [
      { text: '1.   Der Pilot kontrolliert w??hrend des Laufens den Auftrieb und h??rt auf zu laufen, um abzuheben,', correct: false },
      { text: '2.   der Pilot kontrolliert den Schirm und l??uft mit st??ndigem Blick auf den Schirm weiter, bis er abhebt,', correct: false },
      { text: '3.   nachdem der Pilot den Schirm kontrolliert hat, l??uft er, leicht nach vorne gebeugt und schneller werdend, weiter bis zum Abheben.', correct: true }
    ]
  },
  {
    question: '7046 Bei einem Startabbruch sollte man:',
    answers: [
      { text: '1. so schnell wie m??glich stehen bleiben und den Schirm vollst??ndig abbremsen,', correct: false },
      { text: '2. den Schirm so abbremsen, dass er als aerodynamische Bremse funktioniert, dann nach und nach beim Laufen langsamer werden,', correct: true },
      { text: '3. nach und nach beim Laufen langsamer werden ohne zu stolpern, man braucht nicht auf den Schirm zu achten, weil man ja ohnehin nicht fliegt.', correct: false }
    ]
  },
  {
    question: '7047 Wenn der Pilot beim Starten die vorderen Fangleinen nicht losl??sst, ist es wahrscheinlich, dass er:',
    answers: [
      { text: '1. sp??ter abhebt und l??nger laufen muss,', correct: false },
      { text: '2. den Start abbrechen muss, weil der Schirm frontal einklappt,', correct: true },
      { text: '3. einen Seitenklapper hat, den er erst nach dem Start korrigieren kann.', correct: false }
    ]
  },
  {
    question: '7048 Wie muss der Pilot sich verhalten, wenn er nach dem Start einen Seitenklapper hat?',
    answers: [
      { text: '1. Die Flugrichtung kontrollieren und versuchen, den Schirm wieder zu ??ffnen,', correct: true },
      { text: '2. sofort versuchen, den Schirm wieder zu ??ffnen, indem er die Bremse auf dieser Seite mehrmals zieht und losl??sst,', correct: false },
      { text: '3. sofort versuchen, den Schirm wieder zu ??ffnen, indem er die Bremse auf dieser Seite zieht und gezogen h??lt.', correct: false }
    ]
  },
  {
    question: '7049 Ist es m??glich, nur durch Gewichtsverlagerung Kurven zu fliegen?',
    answers: [
      { text: '1. Ja, mehr oder weniger stark, je nach Art und Einstellung des Gurtzeugs,', correct: true },
      { text: '2. ja, aber man riskiert dabei einen Stall,', correct: false },
      { text: '3. nein.', correct: false }
    ]
  },
  {
    question: '7050 Um die Leistung eines Gleitschirms besser auszun??tzen, sollte der Pilot durch Gewichtsverlagerung kurven, und somit:',
    answers: [
      { text: '1. beide Bremsen loslassen und dann die Innenbremse ziehen,', correct: false },
      { text: '2. die Au??enbremse loslassen und dann die Neigung mit beide Bremsen kontrollieren,', correct: true },
      { text: '3. die Innenbremse ziehen, um die h??chste Neigung zu erzeugen.', correct: false }
    ]
  },
  {
    question: '7051 Wie n??tzt mann am Besten die Langsamflugeigenschaften eines Gleitschirms beim fliegen in einer engen Thermik?',
    answers: [
      { text: '1. Einen guten Kompromiss zwischen der Querneigung des Schirms und der Sinkrate finden, so dass er die Steiggeschwindigkeit der Thermik ausn??tzen kann,', correct: true },
      { text: '2. so flach wie m??glich kreisen, damit er so wenig wie m??glich sinkt,', correct: false },
      { text: '3. ???Achter??? so fliegen, dass er in der Thermik bleibt.', correct: false }
    ]
  },
  {
    question: '7052 Kann man mit dem Gleitschirm einen Stallversuch innerhalb bestimmter Sicherheitsgrenzen machen?',
    answers: [
      { text: '1.   Ja, aber nur in gro??er H??he,', correct: false },
      { text: '2.   nein, denn jeder Stallversuch f??hrt zu anomalen Situationen,', correct: false },
      { text: '3.   ja, w??hrend eines Sicherheitstrainings ??ber dem Wasser, mit einem qualifizierten Lehrer, indem man die Bremsen langsam bis zur Stall-Grenze zieht und dann sofort wieder eine normale Fluggeschwindigkeit einnimmt, bevor der Schirm hinter dem Piloten kollidiert.', correct: true }
    ]
  },
  {
    question: '7053 Wie erkennt man einen Sackflug beim Gleitschirm?',
    answers: [
      { text: '1. Gut aufgeblasener Fl??gel, Geschwindigkeit praktisch null, starkes Sinken,', correct: true },
      { text: '2. gut aufgeblasener Fl??gel, Geschwindigkeit praktisch null, normales Sinken, starkes Zittern an den Bremsen,', correct: false },
      { text: '3. Seitenklapper, Geschwindigkeit praktisch null, Tendenz zur Autorotation.', correct: false }
    ]
  },
  {
    question: '7054 Im Falle eines Full-Stall, wegen zu langsamen Fliegens (zu hoher Anstellwinkel) muss der Pilot?',
    answers: [
      { text: '1. Die Bremsen schnell loslassen und dann stark ziehen, wenn der Schirm nach vorne schie??t,', correct: false },
      { text: '2. die Bremsen gezogen halten und warten, bis der Schirm vertikal ??ber dem Pilot ist, dann beide Bremsen langsam loslassen und das Pendeln kontrollieren,', correct: true },
      { text: '3. nach dem Stall sofort eine Bremse loslassen, um ins Trudeln zu kommen und Fahrt aufzunehmen.', correct: false }
    ]
  },
  {
    question: '7055 Was kann man tun, um mit dem Gleitschirm mehr oder weniger schnell H??he zu verlieren?',
    answers: [
      { text: '1. Viele Kurven fliegen,', correct: false },
      { text: '2. den Schirm stallen,', correct: false },
      { text: '3. ???Ohren???, ???Wing over??? und Steilspirale.', correct: true }
    ]
  },
  {
    question: '7056 Welche Wirkung hat ein leichtes und symmetrisches Ziehen der hinteren Fangleinen?',
    answers: [
      { text: '1. Zunahme der Geschwindigkeit und Verminderung des Auftriebs,', correct: false },
      { text: '2. Ver??nderung des Anstellwinkels, folgedessen des Gleitwinkels und der Geschwindigkeit,', correct: true },
      { text: '3. nur Verringerung des Anstellwinkels.', correct: false }
    ]
  },
  {
    question: '7057 Ist es m??glich, einen Gleitschirm nur mit den hinteren Fangleinen zu steuern?',
    answers: [
      { text: '1. Ja,', correct: true },
      { text: '2. ja, aber es ist nicht m??glich, die Geschwindigkeit zu ver??ndern,', correct: false },
      { text: '3. nein.', correct: false }
    ]
  },
  {
    question: '7058 Was kann der Pilot durch Bet??tigung des Speedsystems ver??ndern?',
    answers: [
      { text: '1. den Neigungswinkel, folgedessen den Anstellwinkel und die Geschwindigkeit,', correct: true },
      { text: '2. die Geschwindigkeit, wie er will, indem er den Gleitwinkel und den Anstellwinkel ver??ndert,', correct: false },
      { text: '3. den Anstellwinkel, die Geschwindigkeit und die Flugbahn.', correct: false }
    ]
  },
  {
    question: '7059 Wenn man beim Ausleiten einer Kurve durch eine ??berkorrektur in seitliches Pendeln kommt, sollte der Pilot:',
    answers: [
      { text: '1. die Korrektur fortsetzen,', correct: false },
      { text: '2. die Steuer loslassen und dann eine starke Rechts- oder Linksdrehung einleiten,', correct: false },
      { text: '3. anbremsen, indem er beide Bremsen gleichzeitig zieht, bis zur Stabilisierung der Kappe.', correct: true }
    ]
  },
  {
    question: '7060 Die korrekte Sequenz beim Landeanflug mit m????igem Wind f??r den Gleitschirm ist:',
    answers: [
      { text: '1. H??chstgeschwindigkeit bis etwa 1 Meter ??ber dem Grund, dann beide Bremsen ziehen, um den Schirm zu stallen,', correct: false },
      { text: '2. H??chstgeschwindigkeit ist m??glich bis 4-5 Meter ??ber dem Grund, Bremsen 20% ziehen, um Geschwindigkeit und Sinken zu reduzieren, in Bodenn??he bis zur Landung Bremsen progressiv durchziehen,', correct: true },
      { text: '3. geringstes Sinken bis etwa 2 Meter ??ber dem Grund, dann Bremsen langsam herunterdr??cken bis zum Stall.', correct: false }
    ]
  },
  {
    question: '7061 Der Wind am Startplatz reicht aus, um den Schirm r??ckw??rts aufzuziehen, die Richtung ist aber 25?? zur gr????ten Hangneigung:',
    answers: [
      { text: '1. wir legen den Schirm in die Richtung der gr????ten Hangneigung aus, um sie besser auszun??tzen,', correct: false },
      { text: '2. zum Aufziehen legen wir den Schirm gegen den Wind aus, dann laufen wir in die Richtung der gr????ter Hangneigung weiter,', correct: true },
      { text: '3. zum Aufziehen legen wir den Schirm gegen den Wind aus, dann laufen wir in diese Richtung weiter.', correct: false }
    ]
  },
  {
    question: '7062   Beim Start mit dem Drachen gibt es eine Sicherheitskontrolle, die besonders genau durchgef??hrt werden muss, da schon mehrere Unf??lle passiert sind:',
    answers: [
      { text: '1. die Position des Drachens kontrollieren,', correct: false },
      { text: '2. kontrollieren, dass der Pilot am Drachen richtig eingeh??ngt ist,', correct: true },
      { text: '3. kontrollieren, dass der Rettungsschirm richtig gepackt ist.', correct: false }
    ]
  },
  {
    question: '7063 Wie kann man am Besten kontrollieren, ob der Pilot am Drachen richtig eingeh??ngt ist?',
    answers: [
      { text: '1. Ein Helfer h??lt das Kielrohr des Drachens, der Pilot macht die Liegeprobe und kontrolliert au??er der korrekten Aufh??ngung auch die Position des K??rpers zum Steuerb??gel,', correct: true },
      { text: '2. man h??ngt den Karabiner ein und kontrolliert, ob er auch wirklich eingeh??ngt ist,', correct: false },
      { text: '3. ein Helfer kontrolliert, dass der Karabiner richtig eingeh??ngt ist.', correct: false }
    ]
  },
  {
    question: '7064 Was muss man beachten, wenn man bei starkem Wind mit dem Drachen starten m??chte?',
    answers: [
      { text: '1. Dass ein einziger Helfer direkt vor dem Start das Fl??gelende hochhebt,', correct: false },
      { text: '2. sichergehen, dass w??hrend des Starts kein Helfer den Drachen zur??ckh??lt,', correct: true },
      { text: '3. dass die Helfer w??hrend des Starts das Kielrohr richtig schieben.', correct: false }
    ]
  },
  {
    question: '7065 Ist es m??glich, mit dem Drachen bei Wind mit 45?? zur Startlinie zu starten und wie?',
    answers: [
      { text: '1. Nein, auch wenn er nicht stark ist,', correct: false },
      { text: '2. ja, wenn er nicht zu stark ist, indem man mit etwas Vorhaltewinkel in die gr????te Hangneigung startet,', correct: true },
      { text: '3. ja, auch wenn er stark ist, Hauptsache man l??uft gegen den Wind.', correct: false }
    ]
  },
  {
    question: '7066 Bei zu starkem Schieben am Steuerb??gel, w??hrend des Starts,',
    answers: [
      { text: '1. hebt er fr??her ab und kann leichter eventuelle Hindernisse ??berfliegen,', correct: false },
      { text: '2. hebt er langsamer ab und kann den Drachen nach dem Start besser kontrollieren,', correct: false },
      { text: '3. findet der Start mit einem zu hohen Anstellwinkel statt, daraus ergibt sich eine steile Flugbahn mit hoher Stall- Gefahr.', correct: true }
    ]
  },
  {
    question: '7067 Kann man mit dem Drachen den Start abbrechen, und welche Gefahren kann das mit sich f??hren?',
    answers: [
      { text: '1. Ja, nur wenn unbedingt notwendig, dabei kann der Drachen besch??digt werden und der Pilot sich verletzen,', correct: true },
      { text: '2. ja, immer wenn man es f??r n??tig h??lt, ohne besondere Gefahren, wenn man die richtige Technik kennt,', correct: false },
      { text: '3. ja, wenn man es direkt vor dem Abheben macht und gen??gend Erfahrung hat.', correct: false }
    ]
  },
  {
    question: '7068 Zu welchem Zeitpunkt nach dem Start mit dem Drachen soll der Pilot in die Liegeposition gehen?',
    answers: [
      { text: '1. Sobald wie m??glich nach dem Abheben,', correct: false },
      { text: '2. nachdem er vollkommen die Kontrolle ??ber die Richtung und die Geschwindigkeit erlangt hat, etwas weg vom Hang', correct: true },
      { text: '3. es gibt keine besonderen Einschr??nkungen oder Techniken daf??r.', correct: false }
    ]
  },

  {
    question: '7069 Wie kann man beim Drachenfliegen den Anstellwinkel ver??ndern?',
    answers: [
      { text: '1. Nur durch die ???Overdrive???-Vorrichtung,', correct: false },
      { text: '2. K??rpergewicht auf den Steuerb??gel, dann schieben oder ziehen,', correct: false },
      { text: '3. durch Schieben oder Ziehen des Steuerb??gels.', correct: true }
    ]
  },
  {
    question: '7070 Welche ist die richtige Sequenz f??r das Fliegen einer Kurve mit dem Drachen?',
    answers: [
      { text: '1. Fahrt aufnehmen, seitliche Gewichtsverlagerung und leichtes Schieben am Steuerb??gel, proportional zur Geschwindigkeit und zur Querneigung,', correct: true },
      { text: '2. Fahrt aufnehmen, K??rpergewicht auf die Seite und dann wieder in die Mitte verlagern,', correct: false },
      { text: '3. Fahrt aufnehmen, Steuerb??gel asymmetrisch schieben, damit sich der Drachen um seine eigene Achse dreht, K??rpergewicht auf die Seite und dann wieder in die Mitte verlagern.', correct: false }
    ]
  },
  {
    question: '7071 Welcher Steuerfehler verursacht meistens ein Abschmieren ??ber den Fl??gel beim Drachen?',
    answers: [
      { text: '1. Wegen einer Gewichtsverlagerung auf die zur Kurve entgegengesetzten Seite,', correct: false },
      { text: '2. falsch koordinierte Steuerbewegung und zu geringes Schieben in der Kurve im Verh??ltnis zur Querneigung,', correct: true },
      { text: '3. zu starkes Schieben des Steuerb??gels in der Kurve.', correct: false }
    ]
  },
  {
    question: '7072  Wie macht man eine Roll-Bewegung mit dem Drachen?',
    answers: [
      { text: '1. Man dreht den K??rper um die Achse des Steuerb??gels,', correct: false },
      { text: '2. man verlagert den K??rper seitlich und dreht ihn um die Achse des Steuerb??gels,', correct: false },
      { text: '3. man verlagert den K??rper nach rechts oder links, immer parallel zum Kielrohr.', correct: true }
    ]
  },
  {
    question: '7073  Ein Starrfl??gler dreht:',
    answers: [
      { text: '1. mit Hilfe einer aerodynamischen Steuerung, zus??tzlich zur Gewichtsverlagerung,', correct: true },
      { text: '2. durch eine aerodynamische Steuerung,', correct: false },
      { text: '3. durch die Gewichtsverlagerung.', correct: false }
    ]
  },
  {
    question: '7074 Wie f??hrt man in einer sicheren H??he einen korrekten Stall-Versuch mit dem Drachen durch?',
    answers: [
      { text: '1. Durch progressives Schieben am Steuerb??gel, um den Anstellwinkel zu erh??hen, gleich nach dem Str??mungsabriss wieder Fahrt aufnehmen,', correct: true },
      { text: '2. man dr??ckt die Segellatten nach vorne, um den Anstellwinkel zu erh??hen, und h??lt diese Position mindestens 30 Sekunden lang,', correct: false },
      { text: '3. nach der Fahrtaufnahme dr??ckt man den Steuerb??gel fest durch, um den Anstellwinkel schnell zu erh??hen.', correct: false }
    ]
  },
  {
    question: '7075 Wie kann ein Drachenflieger am Besten eine Thermik ausn??tzen?',
    answers: [
      { text: '1. Mit dem geringsten Sinken fliegen und Vollkreise drehen, um in der Thermik zu bleiben,', correct: true },
      { text: '2. mit der h??chsten Leistung fliegen und Vollkreise drehen, um in der Thermik zu bleiben,', correct: false },
      { text: '3. mit der Mindestgeschwindigkeit enge Vollkreise fliegen, um in der Thermik zu bleiben.', correct: false }
    ]
  },

  {
    question: '7076 Was versteht man unter ???Tumbling????',
    answers: [
      { text: '1. Ein akrobatisches Man??ver,', correct: false },
      { text: '2. ein Man??ver zum schnellen Abstieg,', correct: false },
      { text: '3. einen ??berschlag um die Querachse nach vorne, aufgrund starker Turbulenz, (z.B. Rotoren).', correct: true }
    ]
  },
  {
    question: '7077 Wie kann man die Trimmgeschwindigkeit beim Drachen vergr????ern?',
    answers: [
      { text: '1. Indem man den Aufh??ngepunkt des Piloten nach hinten versetzt,', correct: false },
      { text: '2. indem man den Aufh??ngepunkt des Piloten nach vorne versetzt,', correct: true },
      { text: '3. indem man den Aufh??ngepunkt des Piloten nach oben versetzt.', correct: false }
    ]
  },
  {
    question: '7078 Welche ist die richtige Endphase beim Landen mit dem Drachen bei starkem Wind?',
    answers: [
      { text: '1. Korrekter Anflug in Bodenn??he mit horizontaler Flugbahn bis zum Augenblick des ???Dr??ckens???, um den Drachen mit der Mindestgeschwindigkeit zu stallen,', correct: true },
      { text: '2. korrekter Endanflug in 4-5 Metern H??he, leicht Fahrt aufnehmen bis zum Augenblick des ???Dr??ckens???, um den Drachen mit guter Geschwindigkeit zu stallen,', correct: false },
      { text: '3. korrekter Endanflug in Bodenn??he mit horizontaler Flugbahn, um in der N??he des Landepunktes den Drachen entschlossen zu ???dr??cken???, unabh??ngig von der Geschwindigkeit.', correct: false }
    ]
  },
  {
    question: '7079 Wann richtet sich der Pilot beim Landen mit dem Drachen in die vertikale K??rperposition auf?',
    answers: [
      { text: '1. Sobald er merkt, dass der Drachen beim Endanflug durch den Bodeneffekt beeinflusst wird,', correct: false },
      { text: '2. in Bodenn??he beim Endanflug, kurz vor der Landung,', correct: true },
      { text: '3. so sp??t wie m??glich, um den Drachen zu stallen.', correct: false }
    ]
  },
  {
    question: '8001 Wo ist ein Schnitt auf dem Fl??gel am besorgniserregendsten?',
    answers: [
      { text: '1. In der Mitte der Anstr??mkante,', correct: true },
      { text: '2. seitlich hinten auf der Oberseite,', correct: false },
      { text: '3. seitlich hinten auf der Unterseite.', correct: false }
    ]
  },

  {
    question: '8002 Die Leinen des Gleitschirms sollen aus',
    answers: [
      { text: '1. m??glichst elastischem Material bestehen,', correct: false },
      { text: '2. m??glichst unelastischem und widerstandsf??higem Material bestehen,', correct: true },
      { text: '3. m??glichst widerstandsf??higem Material bestehen, unabh??ngig von der Elastizit??t.', correct: false }
    ]
  },
  {
    question: '8003  Welche Leinen sind beim Fliegen st??rker belastet?',
    answers: [
      { text: '1. Die vorderen,', correct: true },
      { text: '2. die hinteren,', correct: false },
      { text: '3. die seitlichen.', correct: false }
    ]
  },
  {
    question: '8004 Der Gleitschirm wird meistens aus sogenanntem ???Rip-Stop??? Material hergestellt. Was bedeutet das?',
    answers: [
      { text: '1. Das Gewebe kann geschnitten werden, aber nicht rei??en,', correct: false },
      { text: '2. ein Riss oder Schnitt im Gewebe kann sich leicht weiter verbreiten,', correct: false },
      { text: '3. die M??glichkeit, dass sich ein Riss oder Schnitt im Gewebe gef??hrlich verbreitet, ist gering.', correct: true }
    ]
  },
  {
    question: '8005 Das Gewebe, das f??r die Herstellung eines Gleitschirms verwendet wird, muss:',
    answers: [
      { text: '1. verschlei??fest, sehr elastisch und luftdurchl??ssig sein,', correct: false },
      { text: '2. verschlei??fest, unelastisch und luftdurchl??ssig sein,', correct: false },
      { text: '3. verschlei??fest, unelastisch und nicht luftdurchl??ssig sein.', correct: true }
    ]
  },
  {
    question: '8006 Welche ??u??eren Faktoren besch??digen am Meisten das Gewebe eines Gleitschirms und lassen es bruchanf??llig und luftdurchl??ssig werden?',
    answers: [
      { text: '1. Die Ultraviolettstrahlen und die Feuchtigkeit,', correct: true },
      { text: '2. die Infrarotstrahlen und die Feuchtigkeit,', correct: false },
      { text: '3. die Infrarotstrahlen und die trockene Hitze.', correct: false }
    ]
  },
  {
    question: '8007 Ist das Gewebe eines Gleitschirms por??s geworden:',
    answers: [
      { text: '1. so ist nur sein Aussehen nicht gut,', correct: false },
      { text: '2. so ist nur seine Leistung etwas geringer,', correct: false },
      { text: '3. so ist seine Leistung geringer und seine Flugtauglichkeit nicht mehr gew??hrleistet.', correct: true }
    ]
  },
  {
    question: '8008 Beim Packen des Gleitschirms sollte man darauf achten, dass:',
    answers: [
      { text: '1. er trocken ist und im Trockenen gelagert wird, entfernt von W??rmequellen und nicht dem direkten Sonnenlicht ausgesetzt,', correct: true },
      { text: '2. er trocken ist, feucht und warm gelagert wird und nicht dem direkten Sonnenlicht ausgesetzt wird,', correct: false },
      { text: '3. er, auch wenn er feucht ist, im Warmen gelagert wird, mit offenem Sack, damit die Feuchtigkeit verdampfen kann.', correct: false }
    ]
  },
  {
    question: '8009 Der Mantel einer Kevlarleine ist gerissen, ihre Seele ist jedoch intakt geblieben. Die Leine soll:',
    answers: [
      { text: '1. provisorisch mit einem Knoten verk??rzt werden, damit der h??llenlose Teil nicht zu stark gezogen wird,', correct: false },
      { text: '2. provisorisch mit Isolierband ??berdeckt werden, damit der h??llenlose Kevlarteil vor Licht und Sonnenstrahlen abgedeckt wird,', correct: true },
      { text: '3. an der offenen Stelle provisorisch mit einem Leinenst??ckchen verst??rkt werden.', correct: false }
    ]
  },
  {
    question: '8010 Wenn wir die Maillons des Gurtzeuges mit Karabinern austauschen wollen, achten wir darauf, dass diese:',
    answers: [
      { text: '1. homologiert sind und einen Schraub- oder Schnappverschluss haben,', correct: true },
      { text: '2. korrekt montiert werden,', correct: false },
      { text: '3. aus Leichtmaterial bestehen, um das Gurtzeug nicht noch schwerer zu machen.', correct: false }
    ]
  },
  {
    question: '8011 Worauf muss bei Kabel und Verspannungen des Drachens geachtet werden?',
    answers: [
      { text: '1. Dass sie unter den Pressh??lsen nicht besch??digt sind,', correct: false },
      { text: '2. nur, dass die Pressh??lsen in gutem Zustand sind,', correct: false },
      { text: '3. dass die Pressh??lsen in gutem Zustand sind und die Kabel und Verspannungen keine Verschlei??erscheinungen in der N??he der Pressh??lsen aufweisen.', correct: true }
    ]
  },
  {
    question: '8012 Wenn wir feststellen, dass ein Kabel des Drachens abgenutzt oder gesplissen ist:',
    answers: [
      { text: '1. ersetzen wir ihn sofort, bevor wir wieder fliegen,', correct: true },
      { text: '2. reparieren wir ihn, so gut es geht, denn wir k??nnen ihn nicht gleich ersetzen,', correct: false },
      { text: '3. starten wir und geben Acht, die Struktur nicht mit besonderen Man??vern zu belasten.', correct: false }
    ]
  },
  {
    question: '8013 Bei unserem letzten Flug hatten wir eine harte Landung, das Trapez und die Basis sind gebogen.',
    answers: [
      { text: '1. Wir ersetzen das Trapezrohr und biegen die Basis wieder perfekt gerade, bevor wir das n??chste Mal fliegen,', correct: false },
      { text: '2. wir fliegen erst wieder, nachdem wir die Basis und das Trapezrohr durch Originalersatzteile ersetzt haben,', correct: true },
      { text: '3. wir biegen das Trapezrohr und die Basis gerade, bevor wir das n??chste Mal fliegen.', correct: false }
    ]
  },
  {
    question: '8014 Die Impr??gnierung und Mylarbeschichtung eines Drachens leidet besonders unter:',
    answers: [
      { text: '1. den Infrarotstrahlen,', correct: false },
      { text: '2. den Ultraviolettstrahlen,', correct: true },
      { text: '3. einem besonders trockenen Klima.', correct: false }
    ]
  },
  {
    question: '8015 Wird ein Drachen l??ngere Zeit gelagert, sollte man darauf achten, dass:',
    answers: [
      { text: '1. er trocken ist und im eigenem Sack im Trockenen gelagert wird, entfernt von W??rmequellen und nicht dem direkten Sonnenlicht ausgesetzt,', correct: true },
      { text: '2. nach dem letzten Flug im eigenen Sack verpackt wird und im Keller auf den speziellen Wandst??tzen so gelagert wird, dass er nicht dem Sonnenlicht ausgesetzt ist,', correct: false },
      { text: '3. ohne den Sack zusammengelegt wird und im Keller oder in der Garage auf speziellen Wandst??tzen so gelagert wird, dass er vor Sonnenlicht gesch??tzt ist.', correct: false }
    ]
  },
  {
    question: '8016 Wenn man merkt, dass bestimmte Teile des Drachens verrostet sind:',
    answers: [
      { text: '1. sollte man ihn mit besonderen Rostentfernern entfernen,', correct: false },
      { text: '2. kann man trotzdem fliegen, wenn der betroffene Teil nicht besch??digt ist,', correct: false },
      { text: '3. sollte man noch vor dem n??chsten Flug den betroffenen Teil mit einem anderen Orginalteil ersetzen, der genau die gleichen Eigenschaften aufweist.', correct: true }
    ]
  },
  {
    question: '8017 Was muss bei der Instandhaltung des Rettungsschirmes beachtet werden?',
    answers: [
      { text: '1. Er darf nie ge??ffnet werden, man k??nnte einen Fehler beim Zusammenlegen machen,', correct: false },
      { text: '2. er soll an den vorgesehenen Terminen oder wenn er nass ist, ge??ffnet und unter Aufsicht kompetenter Personen gepackt werden,', correct: true },
      { text: '3. er soll ge??ffnet und getrocknet und nur befeuchtet wieder gepackt werden.', correct: false }
    ]
  },
  {
    question: '8018 Was soll hinsichtlich des Rettungsschirms vor jedem Flug kontrolliert werden?',
    answers: [
      { text: '1. Dass der ??ffnungsgriff sich innerhalb des Wurfkontainers befindet,', correct: false },
      { text: '2. dass er nur vom Hersteller zusammengelegt worden ist, weil er sich sonst nicht sicher ??ffnet,', correct: false },
      { text: '3. dass die Fangleine gut am Gurtzeug befestigt, der ??ffnungsgriff leicht erreichbar und aktivierbar ist.', correct: true }
    ]
  },
  {
    question: '8019 Warum ist ein Rettungsschirm nicht zuverl??ssig, wenn er nicht periodisch kontrolliert wird?',
    answers: [
      { text: '1. Weil das Material rasch verschlei??t, wenn es nicht regelm????ig an die Luft kommt,', correct: false },
      { text: '2. weil das Material aufgrund der Faltung ???verkleben??? und sich im Notfall nicht richtig ??ffnen k??nnte,', correct: true },
      { text: '3. die Fangleine muss hin und wieder kontrolliert werden, da sie sich abn??tzen und bei der Verwendung rei??en k??nnte', correct: false }
    ]
  },
  {
    question: '8020 Das Baumaterial und die Technologie der Rettungsschirme f??r den Sport- und Wanderflug garantieren die totale Sicherheit beim ??ffnen:',
    answers: [
      { text: '1. bei jeder Fallgeschwindigkeit,', correct: false },
      { text: '2. bei Fallgeschwindigkeiten innerhalb bestimmter, vom Hersteller angegebenen Grenzen,', correct: true },
      { text: '3. nur bei Fallgeschwindigkeiten gleich den maximalen Fallgeschwindigkeiten von Drachen und Gleitschirmen.', correct: false }
    ]
  },
  {
    question: '9001 Die Sicherheit beim Drachen- und Gleitschirmfliegen h??ngt stark vom Verh??ltnis zwischen der Erfahrung des Piloten und den Eigenschaften des verwendeten Ger??tes ab:',
    answers: [
      { text: '1. ja,', correct: true },
      { text: '2. bestimmt nicht,', correct: false },
      { text: '3. ja, aber nur beim Fliegen in starken Wetterbedingungen.', correct: false }
    ]
  },
  {
    question: '9002 Die Sicherheit beim Drachen- und Gleitschirmfliegen h??ngt unter anderem auch vom Verh??ltnis zwischen der Erfahrung des Piloten und den meteorologischen Bedingungen ab:',
    answers: [
      { text: '1. bestimmt nicht,', correct: false },
      { text: '2. ja,', correct: true },
      { text: '3. ja, aber nur beim Streckenfliegen.', correct: false }
    ]
  },
  {
    question: '9003 Wie sollten wir uns bez??glich der Sicherheit beim Fliegen verhalten, wenn uns der Kauf eines homologierten Flugger??tes angeboten wird, an dem zur Verbesserung der Flugeigenschaften einige Ver??nderungen angebracht worden sind?',
    answers: [
      { text: '1. Das Ger??t eventuell kaufen, aber nur nach einem Probeflug bis an die Grenzleistungen,', correct: false },
      { text: '2. das Ger??t nur kaufen, wenn wir den Anbieter gut kennen,', correct: false },
      { text: '3. das Angebot ablehnen und nur ein homologiertes Originalmodell kaufen.', correct: true }
    ]
  },
  {
    question: '9004 Wann sollte die periodische Revision von Flugger??ten durchgef??hrt werden?',
    answers: [
      { text: '1. Wenn man Leistungsver??nderungen oder Anomalien des Ger??ts bemerkt,', correct: false },
      { text: '2. periodisch, in vom Hersteller vorgeschriebenen Zeitr??umen, weil sich die Materialeigenschaften auch durch das Altern des Materials ver??ndern,', correct: true },
      { text: '3. periodisch, in vom Hersteller vorgeschriebenen Zeitr??umen, wenn man h??ufig fliegt, weniger oft, wenn man nicht soviel fliegt, Hauptsache man achtet gut auf das Material.', correct: false }
    ]
  },
  {
    question: '9005     Die Sicherheitskontrollen vor dem Flug zu unterlassen:',
    answers: [
      { text: '1. ist auf jeden Fall gef??hrlich,', correct: true },
      { text: '2. ist technisch nicht korrekt,', correct: false },
      { text: '3. ist nicht gef??hrlich, wenn man gen??gend Erfahrung besitzt.', correct: false }
    ]
  },
  {
    question: '9006 Wenn man zweifelt, ob man fliegen sollte, obwohl man die Meinung eines erfahrenen Piloten geh??rt hat, sollte man:',
    answers: [
      { text: '1. die Unsicherheit ??berwinden und fliegen, um Erfahrung zu sammeln,', correct: false },
      { text: '2. noch weitere Piloten befragen, bevor man fliegt,', correct: false },
      { text: '3. die eigenen Zweifel als guten und ausreichenden Grund ansehen, um nicht zu fliegen.', correct: true }
    ]
  },
  {
    question: '9007 Warum sollte ein Pilot mit geringer Erfahrung keinen Schirm mit hoher Leistung fliegen, auch wenn erfahrene Piloten ihn als sicher und leicht zu fliegen ansehen?',
    answers: [
      { text: '1. Weil Hochleistungsschirme nicht sicher sind, auch wenn man es nicht zugibt,', correct: false },
      { text: '2. die Sicherheit beim Fliegen h??ngt stark von dem Verh??ltnis zwischen der Erfahrung des Piloten und der Leistung des Schirmes ab, dieses muss sehr ausgewogen sein,', correct: true },
      { text: '3. weil er trotz sicheren Fliegens diese Leistung nicht ausn??tzen k??nnte.', correct: false }
    ]
  },
  {
    question: '9008 Ihr befindet euch am Startplatz eines Fluggebietes, das ihr nicht kennt. Trotz starker Konditionen starten alle gut. Wie solltet ihr euch hinsichtlich der Sicherheit verhalten?',
    answers: [
      { text: '1. Abwarten, bis die Konditionen ruhiger werden und dann fliegen, unter Ber??cksichtigung der Ratschl??ge jener Person, die euch am erfahrensten und ausgewogensten erscheinen,', correct: true },
      { text: '2. sich zum Fliegen vorbereiten, nachdem ihr die Ratschl??ge der Ortskundigen eingeholt habt,', correct: false },
      { text: '3. sich zum Fliegen vorbereiten und das Gleiche tun, was die Ortskundigen tun, um Erfahrung zu sammeln.', correct: false }
    ]
  },
  {
    question: '9009 Warum ist ein Start mit R??ckenwind gef??hrlich?',
    answers: [
      { text: '1. Nur weil die Flugbahn nach dem Start zu steil ist,', correct: false },
      { text: '2. wegen der zu gro??en Geschwindigkeit, die der Pilot beim Anlaufen erreichen muss und dem eventuell starken Sinkens nach dem Start,', correct: true },
      { text: '3. es k??nnen Probleme f??r die Autostabilit??t des Flugger??tes auftreten.', correct: false }
    ]
  },
  {
    question: '9010     Ein Klippenstart mit einem Gleitschirm ist:',
    answers: [
      { text: '1. auch bei gut aufgeblasenem Segel sehr gef??hrlich,', correct: true },
      { text: '2. technisch eher schwierig,', correct: false },
      { text: '3. bei gen??gend Erfahrung kein Problem.', correct: false }
    ]
  },
  {
    question: '9011    An einem Tag mit sehr labilem und starkem Thermikwetter ist auf folgende Gefahr zu achten:',
    answers: [
      { text: '1. dass jeden Moment der Blitz auf das Ger??t einschlagen k??nnte,', correct: false },
      { text: '2. dass das Steigen so stark ist, dass es unangenehme Turbulenzen mit sich bringt,', correct: false },
      { text: '3. dass das Steigen so stark wird, dass das Flugger??t schlecht steuerbar wird und sogar die Gefahr besteht, von Cumulus-Wolken aufgesaugt zu werden.', correct: true }
    ]
  },
  {
    question: '9012    Welche Gefahr besteht beim Fliegen in Wolken oder Nebel?',
    answers: [
      { text: '1. Nur die, mit anderen Flugger??ten in Kollision zu geraten,', correct: false },
      { text: '2. dass sich Eis auf der Anstr??mkante bildet und die Leistung reduziert wird,', correct: false },
      { text: '3. dass man die Orientierung und die Kontrolle ??ber das Flugger??t verliert, da die Gleichgewichtsorgane ohne visuelle Anhaltspunkte schlecht funktionieren.', correct: true }
    ]
  },
  {
    question: '9013 Der ???Wind shear??? ist besonders f??r den SWF gef??hrlich. Was versteht man darunter?',
    answers: [
      { text: '1. Nur eine pl??tzliche Zunahme der Windst??rke,', correct: false },
      { text: '2. eine pl??tzliche ??nderung der Windrichtung und/oder der Windgeschwindigkeit,', correct: true },
      { text: '3. eine pl??tzliche Zunahme des relativen Windes.', correct: false }
    ]
  },
  {
    question: '9014 Wir fliegen gegen einen starken Wind, der unsere Vorw??rtsbewegung ??ber Grund annulliert. Was passiert, wenn dieser Wind pl??tzlich nachl??sst?',
    answers: [
      { text: '1. Wir sind so lange im Stall, bis das Flugger??t wieder die n??tige Fluggeschwindigkeit aufgenommen hat,', correct: true },
      { text: '2. der Fl??gel fliegt gleich schnell weiter,', correct: false },
      { text: '3. man hat keine aerodynamischen Probleme.', correct: false }
    ]
  },
  {
    question: '9015 Was versteht man unter einer ungew??hnlichen Konfiguration eines Drachens oder Gleitschirms?',
    answers: [
      { text: '1. Eine Situation, die normal f??r den Fl??gel, aber neu f??r den Piloten ist,', correct: false },
      { text: '2. eine ungew??hnliche Situation des Fl??gels, au??erhalb der vorgesehenen Grenzen der Leistung und der Man??vrierbarkeit,', correct: true },
      { text: '3. eine Flugsituation an der Stall-Grenze.', correct: false }
    ]
  },
  {
    question: '9016 Ein zertifiziertes Flugger??t bietet gegen??ber einem nicht zertifizierten folgende Garantien:',
    answers: [
      { text: '1. die Reaktionen des zertifizierten Fl??gels sind immer kontrollierbar und ungef??hrlich, die des nicht zertifizierten sind gef??hrlich,', correct: false },
      { text: '2. die Reaktionen des nicht zertifizierten Ger??tes sind nicht bekannt, jene des zertifizierten Ger??tes sind bekannt (bez??glich der Homologierung des Ger??tes),', correct: true },
      { text: '3. ein zertifiziertes Ger??t eignet sich f??r den Durchschnittspiloten, die nicht zertifizierten Ger??te nur f??r Wettkampfpiloten.', correct: false }
    ]
  },
  {
    question: '9017   Warum kann ein langes und enges Tal bei einem Streckenflug f??r den Drachen- und Gleitschirmpiloten zu einer Falle werden?',
    answers: [
      { text: '1. Weil es da keine Aufwinde gibt,', correct: false },
      { text: '2. der Wind in einem engen Tal bewirkt einen D??seneffekt, besonders im Talboden kann es starke Winde und Turbulenzen geben,', correct: true },
      { text: '3. meistens gibt es im Talboden keine geeigneten Landepl??tze, unabh??ngig vom Wind.', correct: false }
    ]
  },
  {
    question: '9018    Ist das Landen bei starkem Wind auf der Leeseite von Hindernissen gef??hrlich?',
    answers: [
      { text: '1.   Die Landung ist m??glich, aber schwierig f??r unerfahrene Piloten,', correct: false },
      { text: '2.   nur sehr erfahrene Piloten k??nnen bei solchen Konditionen landen,', correct: false },
      { text: '3.   die Landung ist auch f??r sehr erfahrene Piloten gef??hrlich, weil man die Auswirkungen dieser Konditionen ??berhaupt nicht vorhersehen kann.', correct: true }
    ]
  },
  {
    question: '9019   Wie sollten wir uns verhalten, wenn der Wind beim Landen so stark ist, dass unser Vorw??rtskommen behindert wird?',
    answers: [
      { text: '1. Den Landeanflug mit der ???Achtertechnik??? durchf??hren, dadurch erhalten wir eine gewisse Geschwindigkeit ??ber Grund, das gibt Sicherheit in Bodenn??he,', correct: true },
      { text: '2. die Platzrunde fliegen, so m??ssen wir weniger kurven und brauchen nicht an das Vorw??rtskommen zu denken,', correct: false },
      { text: '3. die ???Achter??? fliegen und r??ckw??rts oder mit einer senkrechten Bahn landen, wenn wir es nicht vermeiden k??nnen.', correct: false }
    ]
  },
  {
    question: '9020   Der Wind hat zugenommen, wir erreichen die Landewiese nicht mehr und m??ssen im Wald notlanden. Wie verhalten wir uns am besten?',
    answers: [
      { text: '1. Wir landen gegen den Wind in die Baumkronen und sch??tzen dabei den K??rper mit Armen und Beinen. Sobald wir zum Stillstand gekommen sind, halten wir uns am ersten Ast fest,', correct: true },
      { text: '2. wir landen gegen den Wind zwischen zwei Baumst??mmen,', correct: false },
      { text: '3. wir machen eine Steilspirale ??ber eine Lichtung und versuchen dort zu landen, unabh??ngig vom Wind.', correct: false }
    ]
  },
  {
    question: '9021    Uns steht eine unvermeidbare Wasserlandung bevor. Wie verhalten wir uns?',
    answers: [
      { text: '1.   Erst nach der Landung ??ffnen wir das Gurtzeug,', correct: false },
      { text: '2.   wir sollten schon vor der Landung das Gurtzeug zum Teil ??ffnen, um uns im Wasser schnell befreien zu k??nnen,', correct: true },
      { text: '3.   wir landen entlang der Wellen.', correct: false }
    ]
  },
  {
    question: '9022    Warum muss die Steuerung in Bodenn??he besonders sanft und genau sein?',
    answers: [
      { text: '1.   Weil starke Pendelbewegungen starkes Sinken zu Folge haben und auch mit Bodenkontakt enden k??nnen,', correct: true },
      { text: '2.   weil der Fl??gel in Bodenn??he wegen der dichteren Luft st??rker reagiert,', correct: false },
      { text: '3.   weil der Bodeneffekt die Autostabilit??t des Flugger??tes beeintr??chtigen kann.', correct: false }
    ]
  },
  {
    question: '9023    Welche Folgen kann ein Nichtzuschnallen der Beinschleifen beim Flug mit einem Gleitschirm haben?',
    answers: [
      { text: '1.   H??chstens ein unbequemes Sitzen, aber der Brustgurt h??lt,', correct: false },
      { text: '2.   gro??e Gefahr, durch das Gurtzeug zu fallen,', correct: true },
      { text: '3.   nur dann eine Gefahr, wenn man sich nicht rechtzeitig an den Leinen halten kann.', correct: false }
    ]
  },
  {
    question: '9024 Was sollte man tun, wenn man gleich nach dem Start bemerkt, dass der Schirm sich nicht richtig ge??ffnet hat?',
    answers: [
      { text: '1. Schneller laufen und leicht die Bremsen ziehen, damit der Schirm sich vor dem Abheben ??ffnet,', correct: false },
      { text: '2. die Bremsen ziehen und den Start abbrechen, denn der Gleitschirm l??sst einen ungef??hrlichen Startabbruch zu,', correct: true },
      { text: '3. den Start fortsetzen und gleich danach mit den Steuerleinen die normale Flugkonfiguration wiederherstellen.', correct: false }
    ]
  },
  {
    question: '9025     Erh??ht es die Sicherheit, wenn man vorzeitig die f??r den Flug spezifische Wettervorhersage einholt?',
    answers: [
      { text: '1.   Nein, denn die ??rtliche Wetterlage kann nur vor Ort eingesch??tzt werden,', correct: false },
      { text: '2.   ja, denn eine positive Vorhersage garantiert einen sicheren Flug,', correct: false },
      { text: 'ja, dadurch erh??lt man wichtige Informationen f??r die Einsch??tzung der Wetterlage und ihrer m??glichen Entwicklung.', correct: true }
    ]
  },
  {
    question: '9026   Was kann passieren, wenn wir mit einer ???Krawatte??? starten, weil wir beim Auslegen nicht bemerkt haben, dass eine oder mehrere Leinen unter die Austrittskante des Fl??gels gekommen sind?',
    answers: [
      { text: '1. Nichts Besonderes, au??er einer leichten Leistungsreduzierung,', correct: false },
      { text: '2. die Tendenz zur Rotation des Fl??gels, die man jedoch durch Gewichtsverlagerung und Bremse ausgleichen kann,', correct: false },
      { text: '3. eine sehr gef??hrliche Situation, angefangen mit der Gefahr, zum Hang zur??ckzukehren, bis zu der, die Krawatte nicht l??sen und so den Schirm schlecht steuern zu k??nnen.', correct: true }
    ]
  },
  {
    question: '9027 Beim Bruch einer Steuerleine befindet man sich in einer Notlage. Wie verh??lt man sich?',
    answers: [
      { text: '1. Man steuert durch leichten Zug der beiden hinteren Fangleinen und fliegt m??glichst sanft nur die Man??ver, die n??tig sind, um auf die Landewiese zu gelangen,', correct: true },
      { text: '2. man steuert mit der intakten Bremse und versucht, mit wenigen Man??vern auf den Hang zur??ckzukehren,', correct: false },
      { text: '3. man steuert mit der intakten Bremse und auf der anderen Seite mit der hinteren Fangleine.', correct: false }
    ]
  },
  {
    question: '9028 Stimmt es, dass die europ??ische Homologierung f??r Gleitschirme einen sehr hohen Sicherheitsgrad garantiert, wenn man eine f??r die eigenen F??higkeiten geeignete Schirmklasse fliegt und alle Normen f??r den Typ und die Einstellung des Gurtzeugs beachtet, wie von der Homologierung vorgesehen sind?',
    answers: [
      { text: '1. Nein, diese Aussage ist nicht glaubw??rdig,', correct: false },
      { text: '2. ja, aber nur f??r Standardsegel,', correct: false },
      { text: '3. ja, es stimmt.', correct: true }
    ]
  },
  {
    question: '9029 Kann man behaupten, dass, hinsichtlich der Sicherheit beim Fliegen, ein homologierter Schirm der Basisklasse auch die Sicherheit eines unerfahrenen Piloten im Falle einer ungew??hnlichen Flugsituation garantiert?',
    answers: [
      { text: '1. Ja, unabh??ngig von anderen Faktoren,', correct: false },
      { text: '2. ganz sicher nicht,', correct: false },
      { text: '3. ja, aber nur wenn alle Normen f??r den Typ und die Einstellung des Gurtzeugs beachtet werden, wie von der Homologierung vorgesehen.', correct: true }
    ]
  },
  {
    question: '9030 Was muss ein Pilot f??r seine eigene Sicherheit wissen, wenn er einen homologierten Schirm fliegt, der nicht der Basisklasse angeh??rt, und in eine ungew??hnliche Flugsituation gelangt?',
    answers: [
      { text: '1. Dass er unmittelbar und korrekt eingreifen muss, um den normalen Flugzustand wieder herzustellen und nicht in eine gef??hrliche Sequenz von ungew??hnlichen Konfigurationen hineinzugeraten,', correct: true },
      { text: '2. dass es l??nger als 4 Sekunden braucht, bis der Schirm wieder normal fliegt,', correct: false },
      { text: '3. dass er so steuern muss, wie es ihm sein Instinkt in der jeweiligen Situation sagt.', correct: false }
    ]
  },
  {
    question: '9031    Ungew??hnliche Flugsituationen. Spontaner Seitenklapper, Tendenz des Fl??gels zur Autorotation. Der Pilot muss als Erstes die Kontrolle ??ber die Flugrichtung wiedererlangen und erst dann mit der Bremse eingreifen, um den Schirm wieder zu ??ffnen:',
    answers: [
      { text: '1. falsch. Die ??ffnung des Segels ist grundlegend, das muss man sofort tun,', correct: false },
      { text: '2. richtig. Man erlangt die Kontrolle der Flugrichtung zuerst durch Gewichtsverlagerung und dann mit der Bremse, nicht zu stark, um den Stall zu vermeiden (durch die reduzierte Fl??che, wegen des Einklappers ist der Schirm st??rker belastet),', correct: true },
      { text: '3. falsch. Man versucht, den Fl??gel zu ??ffnen, und falls das nicht m??glich ist, zieht man sofort den Rettungsschirm.', correct: false }
    ]
  },
  {
    question: '9032 Ungew??hnliche Flugsituationen. Frontaler Einklapper, der Fl??gel hat die Tendenz, hinter den Piloten zu schie??en. Der Pilot muss als Erstes beide Bremsen loslassen und dann bereit sein, das Vorschie??en des Fl??gels zu kontrollieren:',
    answers: [
      { text: '1. richtig, f??r gew??hnlich ist es kein Problem, den Schirm wieder zu ??ffnen, wenn man beide Bremsen losl??sst, aber das nachfolgende Pendeln k??nnte problematisch sein und muss kontrolliert werden,', correct: true },
      { text: '2. richtig, wenn auch das nachfolgende Pendeln kein Problem darstellt,', correct: false },
      { text: '3. falsch, man muss warten, bis der Fl??gel sich von alleine ??ffnet, um unn??tiges Pendeln zu vermeiden, und falls es trotzdem vorkommt, zieht man den Rettungsschirm.', correct: false }
    ]
  },
  {
    question: '9033   Ungew??hnliche Flugsituationen. Die Folge eines zu starken asymmetrischen Ziehens der Bremse ist der asymmetrische Stall, der zu einer pl??tzlichen Rotation des Fl??gels um die vertikale Achse, die flache Negativ-Spirale, f??hrt. Um dieser Konfiguration vorzubeugen, muss der Pilot:',
    answers: [
      { text: '1. auch die andere Bremse ziehen und dann beide Bremsen sanft loslassen,', correct: false },
      { text: '2. die st??rker gezogene Bremse loslassen und die andere gleichzeitig herunterziehen,', correct: false },
      { text: '3. beide Bremsen sofort symmetrisch loslassen und bereit sein, das eventuelle Vorschie??en des Schirms zu kontrollieren.', correct: true }
    ]
  },
  {
    question: '9034    Ungew??hnliche Flugsituationen. Was geschieht bei einem Post-Stall mit dem Gleitschirm?',
    answers: [
      { text: '1.   Nichts Besonderes,', correct: false },
      { text: '2.   das h??ngt davon ab, wie man wieder eine normale Flugsituation erlangt,', correct: false },
      { text: '3.   nach einem Stall kann der Fl??gel vollst??ndig in sich zusammenfallen, das kann sehr gef??hrlich sein.', correct: true }
    ]
  },
  {
    question: '9035   Ungew??hnliche Flugsituationen. Nach einem ???B???-Stall stellt man fest, dass man eine sehr hohe Sinkgeschwindigkeit hat und kaum vorw??rts kommt, obwohl der Fl??gel v??llig ge??ffnet und in der Vertikalen befindet. Was kann geschehen sein?',
    answers: [
      { text: '1. Man k??nnte in den Sackflug geraten sein, weil man die B-Leinen wahrscheinlich zu langsam losgelassen hat und/oder das Segelmaterial ist veraltert und por??s,', correct: true },
      { text: '2. man k??nnte in den Sackflug geraten sein, weil man die B-Leinen wahrscheinlich zu langsam losgelassen hat, die Porosit??t des Fl??gels hat aber damit nichts zu tun,', correct: false },
      { text: '3. nichts Besonderes, die hohe Sinkgeschwindigkeit ist normal beim Austritt aus dem ???B???-Stall.', correct: false }
    ]
  },
  {
    question: '9036 Ungew??hnliche Flugsituationen. Um aus einem Sackflug herauszukommen, sollte der Pilot, nachdem er beide Bremsen losgelassen hat:',
    answers: [
      { text: '1. mit Entschlossenheit eine der vorderen Fangleinen ziehen, und wenn das nicht wirkt, eine Bremse ziehen,', correct: false },
      { text: '2. die ???A???-Leinen nach vorne schieben und das Speedsystem bet??tigen. Falls das nicht funktioniert, beide Bremsen gleichzeitig ziehen und wieder loslassen, und nur als Notl??sung eine Bremse ganz durchziehen und wieder loslassen, dabei muss man sich eine starke Drehung oder eine ???flache Negativspirale??? erwarten,', correct: true },
      { text: '3. eine Bremse ganz durchziehen, beide Bremsen gleichzeitig ???pumpen???, als Notl??sung beide A-Leinen nach vorne schieben.', correct: false }
    ]
  },
  {
    question: '9037 Beim Start mit dem Drachen bei starkem Wind ist es gef??hrlich, wenn ein Helfer den Drachen beim Anlaufen festh??lt, denn:',
    answers: [
      { text: '1. der Helfer k??nnte mitgerissen oder sogar hochgezogen werden,', correct: false },
      { text: '2. nicht alle Helfer machen es richtig, auch wenn der Pilot es ihnen genauestens erkl??rt hat,', correct: false },
      { text: '3. auch ein erfahrener Helfer hat nicht die Sensibilit??t des Piloten und k??nnte die Position und die Startrichtung des Drachens gef??hrlich beeinflussen.', correct: true }
    ]
  },
  {
    question: '9038    Was passiert, wenn der Pilot sich in seinem Gurtzeug falsch oder gar nicht an den Drachen aufh??ngt?',
    answers: [
      { text: '1.   Das hat immer sehr schwerwiegende Folgen,', correct: true },
      { text: '2.   er muss so schnell wie m??glich landen,', correct: false },
      { text: '3.   er muss den Drachen so wenig man??vrieren wie m??glich, um nicht abzust??rzen.', correct: false }
    ]
  },
  {
    question: '9039    Sollte man trotz Pitch-Leinen in den Flattersturz geraten, muss man:',
    answers: [
      { text: '1.   versuchen, den Drachen mit dem Gewicht und dem Steuer zu lenken, der Rettungsschirm kann warten,', correct: false },
      { text: '2.   sofort den Rettungsschirm ziehen, bevor die Fallgeschwindigkeit zu hoch wird,', correct: true },
      { text: '3.   warten, bis man schnell genug f??llt, damit sich der Rettungsschirm sofort ??ffnet.', correct: false }
    ]
  },
  {
    question: '9040 Die Belastungen, durch die das Fliegen eines Loopings mit dem Drachen gef??hrlich wird, werden erzeugt durch:',
    answers: [
      { text: '1. die Geschwindigkeit, die man ben??tigt, um den Looping einzuleiten,', correct: false },
      { text: '2. die Lastvervielfachung w??hrend des gesamten Loopings,', correct: false },
      { text: '3. die Geschwindigkeit, die man ben??tigt, um den Looping einzuleiten und durch die Lastvervielfachung w??hrend des gesamten Loopings.', correct: true }
    ]
  },
  {
    question: '9041    Was versteht man unter einem Tumbling mit dem Drachen?',
    answers: [
      { text: '1.   Eine pl??tzliche, unkontrollierte Rotation um die Hochachse,', correct: false },
      { text: '2.   eine pl??tzliche, unkontrollierte Rotation um die Querachse,', correct: true },
      { text: '3.   eine pl??tzliche, unkontrollierte Rotation um die L??ngsachse.', correct: false }
    ]
  },
  {
    question: '9042    Welche der folgenden Elemente tragen dazu bei, ein Tumbling mit dem Drachen zu verursachen?',
    answers: [
      { text: '1.   Ein zu hoher Anstellwinkel bei starker Turbulenz,', correct: true },
      { text: '2.   eine zu hohe Fluggeschwindigkeit bei starker Turbulenz,', correct: false },
      { text: '3.   Kurvenflug bei aufsteigenden Luftmassen.', correct: false }
    ]
  },
  {
    question: '9043    Stimmt es, dass der Pilot beim SWF den Rettungsschirm nur als Notl??sung ziehen soll, also nur dann, wenn es nicht m??glich ist, das Flugger??t so zu steuern, dass man einen sicheren Landeplatz erreichen kann?',
    answers: [
      { text: '1. Nein, das ist Aberglaube, man sollte den Rettungsschirm in einer ungew??hnlichen Flugsituation immer so schnell wie m??glich ben??tzen,', correct: false },
      { text: '2. ja, aber man braucht sich dabei nicht beeilen,', correct: false },
      { text: '3. ja, aber wenn man entschlie??t, ihn zu ziehen, sollte man es so schnell wie m??glich tun, damit er sich rechtzeitig ??ffnet und er wegen der steigenden Fallgeschwindigkeit nicht zu stark belastet wird.', correct: true }
    ]
  },
  {
    question: '9044 In welchen Situationen, au??er dem Unwohlsein des Piloten, sollte man den Rettungsschirm ziehen und wie?',
    answers: [
      { text: '1. Bei starker Turbulenz, wenn die Steuerung des Flugger??tes schwierig ist, man zieht den Griff mit Entschlossenheit nach oben,', correct: false },
      { text: '2. wenn man durch eine starke Thermik in eine Wolke hochgesaugt wird; man zieht den Griff nach unten, damit der Rettungsschirm sich vom Fl??gel entfernt,', correct: false },
      { text: '3. bei einem Ger??tebruch oder einer ungew??hnlichen Flugsituation, wenn man keine M??glichkeit mehr hat, durch Gewichtsverlagerung oder Steuerung das Ger??t wieder in einen normalen Flugzustand zu bekommen und zu halten; man zieht den Griff mit Entschlossenheit und so, dass der Rettungsschirm sich m??glichst vom Fl??gel entfernt.', correct: true }
    ]
  },
  {
    question: '9045   Warum sollte man den Rettungsschirm nur als letzte Notl??sung ziehen, auch wenn aus statistischen Daten hervorgeht, dass er fast immer funktioniert?',
    answers: [
      { text: '1. Weil die Statistiken nicht glaubw??rdig sind,', correct: false },
      { text: '2. wenn er auch fast immer funktioniert, ist er kaum oder gar nicht steuerbar, so dass man nicht die M??glichkeit hat, einen sicheren Landeplatz auszuw??hlen,', correct: true },
      { text: '3. weil er meistens nicht n??tig ist: wenn man die Ruhe bewahrt, kommt man aus jeder ungew??hnlichen Flugsituation wieder heraus.', correct: false }
    ]
  }




























]
