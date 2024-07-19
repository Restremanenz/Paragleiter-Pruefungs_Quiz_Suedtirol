const questionslist = [
    chapter1 = [
    {
        question: '1001 Wer darf den Sport- und Wanderflug (SWF) autonom ausüben?',
        answers: [
        { text: 'Jeder, der einen Flugkurs besucht hat', correct: false },
        { text: 'jeder, der im Besitz der gesetzlichen Voraussetzungen, wie gültigen Flugschein und Haftpflichtversicherung, ist', correct: true },
        { text: 'jeder, vorausgesetzt, dass er eine Prüfung des AeCI bestanden hat', correct: false }
        ]
    },
    {
        question: '1002 Wer ist der Alleinverantwortliche für die Steuerung des Drachens bzw. Gleitschirms?',
        answers: [
        { text: 'Der Pilot', correct: true },
        { text: 'der Pilot, aber nur wenn er über ausreichende Erfahrung verfügt', correct: false },
        { text: 'das Amt für die Luftfahrtkontrolle', correct: false }
        ]
    },
    {
        question: '1003 Welches ist, mit Einwilligung der Eltern, das Mindestalter für die Ausübung des Sport- und Wanderflugs(SWF)?',
        answers: [
        { text: '14 Jahre', correct: false },
        { text: '18 Jahre', correct: false },
        { text: '16 Jahre', correct: true }
        ]
    },
    {
        question: '1004 Das ärztliche Zeugnis hat im Normalfall eine Gültigkeit von:',
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
        { text: 'ja, aber nur für Piloten mit genügend Erfahrung', correct: false },
        { text: 'ja, bei Flügen von langer Dauer', correct: false }
        ]
    },
    {
        question: '1006 Welche sind beim Sport-und Wanderflug die generellen Vorflugregeln beim Start?',
        answers: [
        { text: 'Der Landende (Top Landing) hat das Vorflugrecht', correct: true },
        { text: 'der Startende hat das Vorflugrecht', correct: false },
        { text: 'Es gibt diesbezüglich keine Regeln', correct: false }
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
        { text: '2. innerhalb des von den Luftfahrtbehörden kontrollierten Luftraums,', correct: false },
        { text: '3. im nicht kontrolliertem Luftraum, ausgenommen Sondergenehmigungen oder Notam.', correct: true }
        ]
    },
    {
        question: '1009 Aus welchem Grund hat der Gesetzgeber dem SWF ganz bestimmte Höchsthöhen zugewiesen?',
        answers: [
        { text: '1. Weil Drachen- und Gleitschirmfliegen zweitrangige Sportarten sind,', correct: false },
        {
            text: '2. um den Sport- und Wanderflug (SWF) vom restlichen Zivil- und Militärluftverkehr zu trennen und Kollisionen zu vermeiden, ', correct: true
        },
        {
            text: '3. um zu vermeiden, dass Fluggeräte, wie Drachen und Gleitschirme, nicht über bestimmte Höhen fliegen, da sie dafür nicht flugtauglich sind.', correct: false
        }
        ]
    },
    {
        question: '1010 Welche Mindesthöhe muss beim Fliegen eingehalten werden?',
        answers: [
        { text: '1. An Werktagen 150 Meter über dem höchsten Punkt im Umkreis von 3 Kilometern, an Feiertagen 300 Meter,', correct: false },
        { text: ' 2. Es gibt keine Mindesthöhe, da das Überfliegen von Ortschaften generell verboten ist,', correct: false },
        {
            text: '3. die Höhe, die ausreicht, um notfalls problemlos zu landen und keinerlei Dinge und Personen in Gefahr zu bringen.', correct: true
        }
        ]
    },
    {
        question: '1011 Welche Distanz muss von den Wolken eingehalten werden?',
        answers: [
        { text: '1. 1000 Meter,', correct: false },
        { text: '2. es gibt keine genaue Regel,', correct: false },
        { text: '3. außerhalb von Wolken und mit Sichtkontakt zum Boden oder Wasser.', correct: true }
        ]
    },
    {
        question: '1012 Ist das Fliegen mit Drachen und Gleitschirm innerhalb von Wolken erlaubt?',
        answers: [
        {
            text: '1. Nein, da man wegen Orientierungsmangel die Kontrolle über das Fluggerät verlieren und gegen Hindernisse stoßen kann, ', correct: true
        },
        { text: '2. nein, weil Kollisionsgefahr besteht, obwohl das Fliegen in der Wolke mit Instrumenten keine Gefahr bedeutet,', correct: false },
        { text: '3. ja, vorausgesetzt, die Wolke reicht nicht bis zum Boden oder dem Hang, ansonsten wäre das Fliegen gefährlich.', correct: false }
        ]
    },
    {
        question: '1013    Aus welchem Grund bezieht man sich beim Fliegen auf den Sonnenuntergang (Ephemeriden)?',
        answers: [
        { text: '1.   Weil mit Hilfe der Sterne eine genaue Navigation möglich ist,', correct: false },
        { text: '2.   weil ein genaues Einschätzen der Höhe der Sonne am Horizont eine gute Orientierung ermöglicht,', correct: false },
        {
            text: '3.   um Tag für Tag eine Uhrzeit festzulegen, die sich auf den Sonnenaufgang und Sonnenuntergang bezieht, denn nur dazwischen ist der Sichtflug erlaubt, (30 Minuten vor Sonnenaufgang und 30 Minuten nach Sonnenuntergang)', correct: true
        }
        ]
    },
    {
        question: '1014    Ist es erlaubt, näher als 4 km an die Staatsgrenze heranzufliegen?',
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
        { text: '2.   als Geräte zum Sport- und Wanderflug,', correct: true },
        { text: '3.   als Luftfahrer', correct: false }
        ]
    },
    {
        question: '1016    Was versteht man unter kontrolliertem Luftraum?',
        answers: [
        { text: '1.   Einen Teil des nationalen Luftraumes mit Radarkontrolle,', correct: false },
        { text: '2.   einen Teil des nationalen Luftraumes mit Militärradarkontrolle über alle Flugzeuge,', correct: false },
        {
            text: '3.   einen Teil des nationalen Luftraumes, innerhalb dessen der Zivil- und Militärluftverkehr von den zuständigen Ämtern kontrolliert wird.', correct: true
        }
        ]
    },
    {
        question: '1017 Das italienische Gesetz sagt aus, dass:',
        answers: [
        {
            text: '1. Im kontrolliertem Luftraum nur Zivil-und Militärflugzeuge fliegen; Geräte für SWF haben Flugverbot, ausgenommen mit Sondergenehmigung, ', correct: true
        },
        { text: '2. im kontrolliertem Luftraum generell alle Flugzeuge und Geräte für SWF fliegen,', correct: false },
        { text: '3. im kontrolliertem Luftraum Zivil- und Militärflugzeuge und an Feiertagen auch Drachen und Gleitschirme fliegen.', correct: false }
        ]
    },
    {
        question: '1018    Ist der Sport- und Wanderflug (SWF) im kontrollierten Luftraum erlaubt?',
        answers: [
        { text: '1.   Nur mit Sondergenehmigung,', correct: true },
        { text: '2.   nur bei Sichtflugkonditionen (Visual Flight Rules),', correct: false },
        { text: '3.   nein, unabhängig von den bestehenden Umständen.', correct: false }
        ]
    },
    {
        question: '1019    Welcher Abstand muss beim Fliegen von einem nicht im ATZ liegenden Flugplatz gehalten werden?',
        answers: [
        { text: '1.   Mindestens 5 Kilometer,', correct: true },
        { text: '2.   mindestens 1 Kilometer,', correct: false },
        { text: '3.   mindestens 5 Kilometer und mehr als 500 Meter über Grund.', correct: false }
        ]
    },
    {
        question: '1020    Was ist ein ATZ?',
        answers: [
        { text: '1.   Ein kontrollierter Luftraum rund um einen Flugplatz und darüber, (Aerodrome Trafic Zone).', correct: true },
        { text: '2.   der Platz, wo Zivil- und Militärflugzeuge auf die Starterlaubnis warten,', correct: false },
        { text: '3.   eine Flugplatzverkehrszone.', correct: false }
        ]
    },
    {
        question: '1021    Dürfen Fluggeräte des SWF in eine ATZ einfliegen?',
        answers: [
        { text: '1.   Ja,', correct: false },
        { text: '2.   ja, wenn keine Flugzeuge landen und starten,', correct: false },
        { text: '3.   nein, ausgenommen mit Sondergenehmigung des Direktors des Flughafenbezirks („Circoscrizione aeroportuale“)', correct: true }
        ]
    },
    {
        question: '1022 Was ist ein CTR?',
        answers: [
        {
            text: '1. Ein Teil des kontrollierten Luftraumes, innerhalb dessen sich der Flugzeugverkehr abwickelt; und eventuell der Sport- und Wanderflug mit Sondergenehmigung, ', correct: true
        },
        {
            text: '2. ein Teil des nicht unbedingt kontrollierten Luftraumes, innerhalb dessen sich der Zivil- und Militärluftverkehr abwickelt, ', correct: false
        },
        { text: '3. ein Teil des kontrollierten Luftraumes, für An- und Abflüge der Militärflugzeuge.', correct: false }
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
        { text: '1.   Ein Teil des Luftraumes, der für Militärflüge reserviert ist,', correct: false },
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
        question: '1028    Was ist eine P- Zone („PAPA“)?',
        answers: [
        { text: '1.   Ein Gebiet, in dem jedes Fliegen verboten ist (Sperrgebiet),', correct: true },
        { text: '2.   ein Gebiet, in dem nur Gleitschirme fliegen dürfen,', correct: false },
        { text: '3.   ein Gebiet, in dem nur Militärflug erlaubt ist.', correct: false }
        ]
    },
    {
        question: '1029    Was bedeutet eine D- Zone („DELTA“)?',
        answers: [
        { text: '1.   Ein Gebiet, wo das Drachenfliegen erlaubt ist,', correct: false },
        { text: '2.   ein Gebiet, wo das Fliegen für alle gefährlich ist (Gefahrengebiet),', correct: true },
        { text: '3.   ein Gebiet, in dem nur spezielle Flugzeuge fliegen dürfen.', correct: false }
        ]
    },
    {
        question: '1030    Was bedeutet eine R- Zone („ROMEO “)?',
        answers: [
        { text: '1.   Ein Gebiet, in dem das Fliegen erlaubt ist,', correct: false },
        { text: '2.   ein Gebiet, in dem absolutes Flugverbot für alle herrscht,', correct: false },
        {
            text: '3.   ein Gebiet, in dem das Fliegen eingeschränkt ist (Restricted). Für SWF nur mit Sondergenehmigung.', correct: true
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
        question: '1033    Wer hat das Vorflugrecht zwischen einem Fluggerät mit Motor und einem Gerät für SWF?',
        answers: [
        { text: '1.   Das Fluggerät mit Motor, da es schneller fliegt,', correct: false },
        { text: '2.   das Fluggerät mit Motor, da es weniger manövrierfähig ist,', correct: false },
        { text: '3.   das Gerät für Sport- und Wanderflug.', correct: true }
        ]
    },
    {
        question: '1034    Begegnen sich zwei Fluggeräte auf gleicher Höhe, in entgegengesetzter Richtung (Kollisionskurs),',
        answers: [
        { text: '1.   fliegt einer gerade weiter und der andere vermeidet die Kollision,', correct: false },
        { text: '2.   der von rechts kommt, fliegt weiter und der andere weicht aus, um die Kollision zu vermeiden,', correct: false },
        { text: '3.   beide weichen rechts aus und behalten sich im Auge.', correct: true }
        ]
    },
    {
        question: '1035 Wenn sich zwei Fluggeräte ohne Motor beim Fliegen am Hang begegnen, müssen sich die Piloten folgendermaßen verhalten: ',
        answers: [
        { text: '1. der Pilot, der den Hang zu seiner Linken hat, fliegt gerade weiter und der andere weicht links aus,', correct: false },
        {
            text: '2. der Pilot, der den Hang rechts hat, fliegt gerade weiter, der andere hat den Hang links und muss rechts ausweichen, ', correct: true
        },
        {
            text: '3. beide fliegen gerade weiter und verändern ihre Höhe, um eine Kollision zu vermeiden.', correct: false
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
        question: '1037    Wie lautet generell die Regel bezüglich des Vorflugrechts bei der Landung?',
        answers: [
        { text: '1.   Alle Drachen und Gleitschirme haben das Vorflugrecht, unabhängig von ihrer Höhe,', correct: false },
        { text: '2.   das tiefste Fluggerät hat das Vorflugrecht,', correct: true },
        { text: '3.   die Piloten mit mehr Erfahrung haben das Vorflugrecht.', correct: false }
        ]
    },
    {
        question: '1038    Muss beim SWF das Fluggerät haftpflichtversichert sein?',
        answers: [
        { text: '1.   Nein,', correct: true },
        { text: '2.   ja,', correct: false },
        { text: '3.   ja, aber nur in Gebieten mit viel Flugverkehr.', correct: false }
        ]
    },
    {
        question: '1039    Welches ist das zuständige Amt für Meldungen wegen gesetzwidrigen Verhaltens beim SWF ?',
        answers: [
        { text: '1.   Die Staatspolizei.', correct: false },
        { text: '2.   die “Direzione Circoscrizionale di Aeroporto” (Direktion des Flughhafenbezirks),', correct: true },
        { text: '3.   die Carabinieri.', correct: false }
        ]
    },
    {
        question: '1040    Welche ist eine der Voraussetzungen zum Tandemfliegen?',
        answers: [
        { text: '1.   Gültiger Flugschein und die vom Aero- Club erlassene Befähigung zum Passagiertransport,', correct: true },
        { text: '2.   gültiger Flugschein und mindestens 30 Flugstunden,', correct: false },
        { text: '3.   gültiger Flugschein, viel Erfahrung und Flug nur bei geeignetem Wetter.', correct: false }
        ]
    },
    ],

    chapter2 = [
    {
        question: '2001    Was versteht man unter Aerodynamik?',
        answers: [
        { text: '1.   Die Lehre der Strömungen,', correct: false },
        { text: '2.   die Lehre von den Strömungen und Kräften von Gasen,', correct: true },
        {
            text: '3.   die Lehre der Strömungen innerhalb der Atmosphäre.', correct: false
        }
        ]
    },
    {
        question: '2002    Was ist ein Flügel?',
        answers: [
        { text: '1.   Eine Fläche mit einer ganz bestimmten Form, die immer Auftrieb erzeugt,', correct: false },
        { text: '2.   eine Fläche mit günstiger Form, die bei Vorwärtsbewegung gegenüber der Luft aerodynamische Kräfte erzeugt,', correct: true },
        { text: '3.   eine Fläche mit einer beliebigen Form, die immer Auftrieb erzeugt.', correct: false }
        ]
    },
    {
        question: '2003    Was versteht man unter dem Begriff „Flächenprofil“ ?',
        answers: [
        { text: '1.   Eine horizontale Fläche,', correct: false },
        { text: '2.   eine vertikal projizierte, zwischen den beiden Flügelenden liegende Fläche,', correct: false },
        { text: '3.   ein Teil des Flügels, rechtwinklig zur Querachse.', correct: true }
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
        question: '2005    Was versteht man unter Anströmkante und Austrittskante?',
        answers: [
        { text: '1.   Die beiden Flügelenden,', correct: false },
        { text: '2.   die Innen- und Außenseite des Flügels,', correct: false },
        { text: '3.   den vordersten und hintersten Punkt eines Flügels.', correct: true }
        ]
    },
    {
        question: '2006    Was versteht man unter dem Begriff „Profilsehne“?',
        answers: [
        { text: '1.   Eine gerade, durchlaufende Linie durch das Profil, die die Anströmkante und die Austrittskante verbindet,', correct: true },
        { text: '2.   eine Linie, die die Oberseite und die Unterseite des Segels verbindet,', correct: false },
        { text: '3.   die Distanz zwischen den beiden Flügelenden.', correct: false }
        ]
    },
    {
        question: '2007    Was versteht man unter dem Begriff „Obersegel und Untersegel“?',
        answers: [
        { text: '1.   Es gibt nur ein Obersegel,', correct: false },
        { text: '2.   die obere und die untere Seite des Flügels,', correct: true },
        { text: '3.   die Innenseite und die Außenseite des Flügels.', correct: false }
        ]
    },
    {
        question: '2008    Was versteht man unter Spannweite?',
        answers: [
        { text: '1.   Die Distanz zwischen den beiden Flügelenden,', correct: true },
        { text: '2.   die Distanz zwischen der Anströmkante und der Austrittskante,', correct: false },
        { text: '3.   die Distanz zwischen Ober- und Untersegel.', correct: false }
        ]
    },
    {
        question: '2009    Was versteht man unter Streckung eines Flügels?',
        answers: [
        { text: '1.   Die Distanz zwischen den beiden Flügelenden,', correct: false },
        { text: '2.   das Verhältnis zwischen der Fläche und der Spannweite,', correct: false },
        { text: '3.   das Verhältnis zwischen der Spannweite im Quadrat und der projizierten Fläche.', correct: true }
        ]
    },
    {
        question: '2010 Welche ist die Streckung eines Flügels mit einer Fläche von 25 Quadratmetern und einer Spannweite von 10 Metern ? ',
        answers: [
        { text: '1. 4 (vier),', correct: true },
        { text: '2. 2,5 (zwei komma fünf),', correct: false },
        { text: '3. 6,25 (sechs komma fünfundzwanzig).', correct: false }
        ]
    },
    {
        question: '2011    Wie heißen die Achsen, um die sich ein Flügel bewegt?',
        answers: [
        { text: '1.   Die Längs- und die Hochachse,', correct: false },
        { text: '2.   die Längsachse, die Querachse und die Hochachse,', correct: true },
        { text: '3.   die Längsachse und die Querachse.', correct: false }
        ]
    },
    {
        question: '2012    Wie bezeichnet man die Bewegung um die Längsachse?',
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
        question: '2015    Kann ein Flügel als Maschine bezeichnet werden?',
        answers: [
        { text: '1.   Nein, wegen Mangel an geeigneten Mechanismen,', correct: false },
        { text: '2.   nur bei variabler Fläche,', correct: false },
        { text: '3.   ja, weil er eine bestimmte Energie in eine andere umwandeln kann.', correct: true }
        ]
    },
    {
        question: '2016    Die Bewegung eines Flügels:',
        answers: [
        { text: '1.   stört die umliegende Luft innerhalb der Wirbelströmung,', correct: true },
        { text: '2.   stört keine Luft,', correct: false },
        { text: '3.   stört die Luft, aber außerhalb der Wirbelströmung.', correct: false }
        ]
    },
    {
        question: '2017    Warum bezieht man sich auch auf die Wirbelströmung, wenn die Rede von Aerodynamik ist?',
        answers: [
        { text: '1.   Weil das in der Physik gebräuchlich ist.', correct: false },
        { text: '2.   Die Wirbelströmung gibt es nicht.', correct: false },
        { text: '3.   Weil sich im Flug sämtliche Kräfte innerhalb der Wirbelströmung abspielen.', correct: true }
        ]
    },
    {
        question: '2018    Was ist die Wirbelströmung?',
        answers: [
        { text: '1.   Die Menge Luft, die vom Durchflug eines Flügels interessiert wird,', correct: true },
        { text: '2.   ein Messgerät für die Geschwindigkeit des Flügels,', correct: false },
        { text: '3.   die Verwirbelungen beim Fliegen.', correct: false }
        ]
    },
    {
        question: '2019 Innerhalb der Wirbelströmung:',
        answers: [
        { text: '1.   verwirbelt jeder Körper die Strömung.', correct: true },
        { text: '2.   Ein Körper mit günstiger Form erzeugt keine Verwirbelungen.', correct: false },
        { text: '3.   Ein Körper hat keinen Einfluss auf die Wirbelströmung.', correct: false }
        ]
    },
    {
        question: '2020    Ein Flügel, der vom Wind angeströmt wird, und ein Flügel der sich vorwärts bewegt:',
        answers: [
        { text: '1.   erzeugen keinen Auftrieb,', correct: false },
        { text: '2.   erzeugen, bei gleicher Windrichtung und Windstärke, die gleichen aerodynamischen Kräfte.', correct: true },
        { text: '3.   Das ist von der aerodynamischen Form abhängig.', correct: false }
        ]
    },
    {
        question: '2021    Was versteht man unter dem Begriff „Relativer Wind“?',
        answers: [
        { text: '1.   Die unterschiedliche Geschwindigkeit der Strömung zwischen Innen- und Außenflügel,', correct: false },
        { text: '2.   der Wind, dem ein Flügel begegnet, oder ein Flügel, der durch Vorwärtsbewegung dem Wind begegnet,', correct: true },
        { text: '3.   die Geschwindigkeitsdifferenz zwischen der Segelober- und Segelunterseite.', correct: false }
        ]
    },
    {
        question: '2022 Die Geschwindigkeit eines Flügels und die Kräfte, die während des Flugs auf ihn wirken, sind:',
        answers: [
        {
            text: '1. Physikalische Größen, die mit Vektoren (mit definierter Richtung, Betrag und Ansatzpunkt) dargestellt und untereinander zusammengesetzt und zerlegt werden können, ', correct: true
        },
        {
            text: '2. physikalische Größen, die nicht graphisch dargestellt werden können, die aber geometrisch addiert und subtrahiert werden können, ', correct: false
        },
        { text: '3. einfache numerische Größen, mit denen man jede Operation durchführen kann.', correct: false }
        ]
    },
    {
        question: '2023 Was versteht man unter dem Druck einer Strömung bzw. der Luft auf einer Oberfläche?',
        answers: [
        { text: '1. Das Produkt der Fläche mit der Kraft, welche die Strömung auf sie ausübt,', correct: false },
        { text: '2. das Verhältnis zwischen der Kraft, die die Strömung auf einer Fläche ausübt, und dem Quadrat der Fläche,', correct: false },
        { text: '3. die Kraft, die die Strömung auf eine Flächeneinheit ausübt.', correct: true }
        ]
    },
    {
        question: '2024    Der Gesamtdruck innerhalb der Wirbelströmung besteht aus:',
        answers: [
        { text: '1.   dynamischem Druck und Gewicht der Strömung,', correct: false },
        { text: '2.   dynamischem und statischem Druck,', correct: true },
        { text: '3.   dynamischem Druck und Widerstand der Strömung.', correct: false }
        ]
    },
    {
        question: '2025    Was versteht man unter dem statischen Druck einer Strömung?',
        answers: [
        { text: '1.   Das Verhältnis zwischen dem Gewicht und der Geschwindigkeit der Strömung,', correct: false },
        { text: '2.   das Verhältnis zwischen dem Gewicht der Strömung und ihrer Luftdichte,', correct: false },
        { text: '3.   das Gewicht der Strömung auf eine Flächeneinheit.', correct: true }
        ]
    },
    {
        question: '2026    Was versteht man unter dem dynamischen Druck einer Strömung?',
        answers: [
        { text: '1.   Das Verhältnis zwischen dem Gewicht und der Geschwindigkeit der Strömung,', correct: false },
        { text: '2.   das Verhältnis zwischen dem Gewicht und der Geschwindigkeit eines Körpers innerhalb der Strömung,', correct: false },
        { text: '3.   der Druck, den eine Strömung auf eine Fläche bewirkt.', correct: true }
        ]
    },
    {
        question: '2027    Was bedeutet der Ausdruck „1/2 ρ v2?',
        answers: [
        { text: '1.   Die Dichte der Luft bei einer bestimmten Geschwindigkeit,', correct: false },
        { text: '2.   der statische Druck einer Strömung, deren Dichte = ρ ist,', correct: false },
        {
            text: '3.   der dynamische Druck einer Strömung, deren Dichte = ρ und deren Geschwindigkeit = v ist.', correct: true
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
        question: '2029    Beim Erzeugen von Auftrieb läuft die Strömung folgenderweise über das Flügelprofil:',
        answers: [
        { text: '1.   mit unterschiedlicher Geschwindigkeit,', correct: true },
        { text: '2.   mit unterschiedlicher Dichte,', correct: false },
        { text: '3.   mit unterschiedlichen Molekülen.', correct: false }
        ]
    },
    {
        question: '2030    Die Geschwindigkeit der Strömung auf einem Flügel im Flug ist:',
        answers: [
        { text: '1.   auf der Segeloberseite höher,', correct: true },
        { text: '2.   auf der Segelunterseite höher,', correct: false },
        { text: '3.   auf beiden Seiten identisch.', correct: false }
        ]
    },
    {
        question: '2031    Der dynamische Druck auf einem Profil ist:',
        answers: [
        { text: '1.   auf der Segeloberseite höher,', correct: true },
        { text: '2.   auf der Segelunterseite höher,', correct: false },
        { text: '3.   auf beiden Seiten gleich.', correct: false }
        ]
    },
    {
        question: '2032    Der statische Druck auf einem Profil ist:',
        answers: [
        { text: '1.   auf beiden Seiten gleich,', correct: false },
        { text: '2.   auf der Segeloberseite höher,', correct: false },
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
        question: '2034 Was geschieht in einem Venturi-Rohr mit konstantem Fassungsvermögen?',
        answers: [
        { text: '1. Bei Veränderung des Durchmessers bleiben Druck und Geschwindigkeit unverändert,', correct: false },
        { text: '2. bei Veränderung des Durchmessers verändert sich nur der dynamische Druck,', correct: false },
        {
            text: '3. bei Veränderung des Durchmessers verändern sich die Geschwindigkeit, der statische und der dynamische Druck, während der totale Druck konstant bleibt.', correct: true
        }
        ]
    },
    {
        question: '2035    Beim Verändern des Durchmessers eines Venturi-Rohres mit konstantem Fassungsvermögen:',
        answers: [
        { text: '1.   verändert sich die Strömungsgeschwindigkeit,', correct: true },
        { text: '2.   bleibt die Strömungsgeschwindigkeit gleich,', correct: false },
        { text: '3.   verändert sich der Gesamtdruck.', correct: false }
        ]
    },
    {
        question: '2036 Die Summe aus dem statischen und dem dynamischen Druck der Strömung durch ein Venturi- Rohr mit konstantem Fassungsvermögen: ',
        answers: [
        { text: '1. verändert sich bei Veränderung des Durchmessers,', correct: false },
        { text: '2. bleibt konstant bei Veränderung des Durchmessers,', correct: true },
        {
            text: '3. das ist von der Luftdichte abhängig.', correct: false
        }
        ]
    },
    {
        question: '2037    Verringert sich der Durchmesser eines Venturi-Rohres mit konstantem Fassungsvermögen, so:',
        answers: [
        { text: '1.   nimmt die Geschwindigkeit der Strömung zu und ihr dynamischer Druck wird geringer,', correct: false },
        { text: '2.   nimmt die Geschwindigkeit der Strömung und des dynamischen Drucks zu,', correct: true },
        { text: '3.   nimmt die Geschwindigkeit der Strömung zu und der totale Druck wird größer.', correct: false }
        ]
    },
    {
        question: '2038    Vergrößert sich der Durchmesser eines Venturi-Rohres mit konstantem Fassungsvermögen, so:',
        answers: [
        { text: '1.   verringert sich die Geschwindigkeit der Strömung und ihr statischer Druck nimmt zu,', correct: true },
        { text: '2.   verringert sich die Geschwindigkeit der Strömung und ihr statischer Druck nimmt ab,', correct: false },
        { text: '3.   verringert sich die Geschwindigkeit der Strömung und der totale Druck verändert sich.', correct: false }
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
        question: '2041    Was versteht man unter der „ Luftkraftresultierenden“?',
        answers: [
        { text: '1.   die Resultierende aller Kräfte, die von einem Flügel im Flug erzeugt werden,', correct: true },
        { text: '2.   die Resultierende oder vektorielle Summe zwischen Auftrieb und Widerstand,', correct: false },
        { text: '3.   eine Kraft, die rechtwinklig zur Flugbahn wirkt.', correct: false }
        ]
    },
    {
        question: '2042    Die Luftkraftresultierende ist eine Kraft,',
        answers: [
        { text: '1.   die rechtwinklig zur Flugbahn oder dem relativen Wind wirkt,', correct: false },
        { text: '2.   die immer längs der Flugbahn wirkt,', correct: false },
        { text: '3.   die nach oben und entgegen der Gewichtskraft wirkt.', correct: true }
        ]
    },
    {
        question: '2043    Die Luftkraftresultierende resultiert aus:',
        answers: [
        { text: '1.   dem Auftrieb im rechten Winkel- und dem Widerstand parallel zur Profilsehne,', correct: false },
        { text: '2.   dem Auftrieb im rechten Winkel- und dem Widerstand längs der Flugbahn,', correct: true },
        { text: '3.   dem Auftrieb parallel- und dem Widerstand im rechten Winkel zur Flugbahn.', correct: false }
        ]
    },
    {
        question: '2044    Wenn ein Profil vom relativen Wind angeströmt wird, kann man behaupten, dass:',
        answers: [
        { text: '1.   Auftrieb erzeugt wird,', correct: false },
        { text: '2.   kein Auftrieb ohne Widerstand erzeugt wird,', correct: true },
        { text: '3.   der erzeugte Widerstand nur von Profil abhängig ist.', correct: false }
        ]
    },
    {
        question: '2045 Beim Drachen- und Gleitschirmfliegen kann man behaupten, dass:',
        answers: [
        { text: '1. der Widerstand längs der Flugbahn wirkt und der Geschwindigkeit gleich ist,', correct: false },
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
            text: '1. W = ½ ρ S Cw v²', correct: true
        },
        {
            text: '2. W = ½ ρ S² Cw v', correct: false
        },
        { text: '3. W = ½ ρ S Cw v', correct: false }
        ]
    },
    {
        question: '2048 Wie verändert sich der aerodynamische Widerstand eines Flügels beim Verändern der Flächengröße und der Luftdichte ? ',
        answers: [
        { text: '1. Er verändert sich nicht,', correct: false },
        { text: '2. er verändert sich proportional,', correct: true },
        { text: '3. er verändert sich umgekehrt proportional.', correct: false }
        ]
    },
    {
        question: '2049 Wie verhält sich der Form- oder aerodynamische Widerstand beim Verdreifachen der Geschwindigkeit ? ',
        answers: [
        { text: '1. Er verdreifacht sich,', correct: false },
        { text: '2. er verändert sich nicht,', correct: false },
        {
            text: '3. er verneunfacht sich.', correct: true
        }
        ]
    },
    {
        question: '2050    Was versteht man unter dem Widerstandskoeffizienten „Cw“?',
        answers: [
        { text: '1.   Ein numerischer Faktor, der von der Flügelbelastung abhängt,', correct: false },
        { text: '2.   ein numerischer Koeffizient, der von der Profilform und dem Anstellwinkel abhängig ist,', correct: true },
        { text: '3.   eine Kraft, die von der Profilform und dem Anstellwinkel abhängt.', correct: false }
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
        { text: '1.   Der Widerstand, der durch einen mehr oder weniger aerodynamischen Körper entsteht,', correct: true },
        { text: '2.   der Widerstand, der immer gleich groß ist,', correct: false },
        { text: '3.   der Widerstand, der bei sehr günstiger und aerodynamischer Form auf Null reduziert werden kann.', correct: false }
        ]
    },
    {
        question: '2053    Auf welchem Widerstand wirkt sich die Profilhöhe aus?',
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
        { text: '1.   Der Widerstand, der von der Größe der Fläche abhängig ist,', correct: false },
        { text: '2.   der Widerstand, der durch die Reibung auf einer Fläche entsteht,', correct: true },
        { text: '3.   der Widerstand, der durch die Randwirbel entsteht.', correct: false }
        ]
    },
    {
        question: '2056    Was versteht man unter der „Laminarschicht“?',
        answers: [
        { text: '1.   Die Luftschicht zwischen der Fläche des Flügels und der Wirbelströmung,', correct: false },
        { text: '2.   die Beschichtung des Segels zwischen der Ober- und Unterseite,', correct: false },
        {
            text: '3.   eine ganz dünne Luftschicht zwischen dem Flügel und der darüber strömenden Luft.', correct: true
        }
        ]
    },
    {
        question: '2057    Der Reibungswiderstand ist:',
        answers: [
        { text: '1.   auch von der Laminarschicht abhängig,', correct: true },
        { text: '2.   nicht von der Laminarschicht abhängig,', correct: false },
        { text: '3.   von der Größe und der Form des Flügels abhängig.', correct: false }
        ]
    },
    {
        question: '2058    Wie verändert sich der Reibungswiderstand beim Verändern der Geschwindigkeit?',
        answers: [
        { text: '1.   Er nimmt bei Verringerung der Geschwindigkeit zu,', correct: false },
        { text: '2.   er nimmt bei Erhöhung der Geschwindigkeit zu,', correct: true },
        { text: '3.   er bleibt immer konstant.', correct: false }
        ]
    },
    {
        question: '2059    Was ist der induzierte Widerstand?',
        answers: [
        { text: '1.   Der Widerstand, der durch die Randwirbel an den Flügelenden entsteht,', correct: true },
        { text: '2.   der Widerstand, der durch die Reibung auf der Fläche entsteht,', correct: false },
        { text: '3.   der Widerstand, der durch die Form und die Größe einer Fläche entsteht.', correct: false }
        ]
    },
    {
        question: '2060    Wodurch entsteht der induzierte Widerstand ? ',
        answers: [
        { text: '1.   Durch die Reibung auf einer Fläche,', correct: false },
        { text: '2.   durch die mehr oder weniger hohe Profilform,', correct: false },
        { text: '3.   durch den unterschiedlichen statischen Druck zwischen Segelober- und Segelunterseite.', correct: true }
        ]
    },
    {
        question: '2061    Ist der induzierte Widerstand von der Flügelstreckung abhängig?',
        answers: [
        { text: '1.   Ja, nur von der Streckung,', correct: false },
        { text: '2.   ja, auch davon, und er ist umso kleiner, desto höher die Streckung ist,', correct: true },
        { text: '3.   überhaupt nicht.', correct: false }
        ]
    },
    {
        question: '2062 Verändert sich der induzierte Widerstand, bei Veränderung der Geschwindigkeit?',
        answers: [
        { text: '1. Ja, er wird höher bei höherer Geschwindigkeit,', correct: false },
        { text: '2. nein,', correct: false },
        { text: '3. ja, er verringert sich bei Erhöhung der Geschwindigkeit.', correct: true }
        ]
    },
    {
        question: '2063    Ein Flügel mit mehr Streckung:',
        answers: [
        { text: '1.   hat mehr Leistung,', correct: true },
        { text: '2.   hat weniger Leistung,', correct: false },
        { text: '3.   ist strapazierfähiger.', correct: false }
        ]
    },
    {
        question: '2064    Welches ist der eigentliche Grund, warum der Hersteller die Streckung erhöht?',
        answers: [
        { text: '1.   Um den Formwiderstand zu verringern,', correct: false },
        { text: '2.   um den Reibungswiderstand zu verringern,', correct: false },
        { text: '3.   um den induzierten Widerstand zu verringern.', correct: true }
        ]
    },
    {
        question: '2065    Welcher Widerstand nimmt bei Erhöhung der Fluggeschwindigkeit ab?',
        answers: [
        { text: '1.   Der Reibungswiderstand,', correct: false },
        { text: '2.   der induzierte Widerstand,', correct: true },
        { text: '3.   der Formwiderstand.', correct: false }
        ]
    },
    {
        question: '2066    Wie verhält sich der aerodynamische Widerstand bei Veränderung der Geschwindigkeit?',
        answers: [
        { text: '1.   Direkt proportional,', correct: false },
        { text: '2.   er bleibt gleich,', correct: false },
        { text: '3.   Direkt proportional und im Quadrat zur Geschwindigkeit.', correct: true }
        ]
    },
    {
        question: '2067    Ein Gerät mit einem geringeren aerodynamischen Widerstand hat bei gleichen Bedingungen:',
        answers: [
        { text: '1.   eine höhere Leistung und ein besseres Gleiten,', correct: true },
        { text: '2.   nur eine höhere Geschwindigkeit,', correct: false },
        { text: '3.   nur ein geringeres Sinken.', correct: false }
        ]
    },
    {
        question: '2068    Verändert sich der Widerstand bei Veränderung des Anstellwinkels?',
        answers: [
        { text: '1.   Nein,', correct: false },
        { text: '2.   ja, aber nur im Kurvenflug,', correct: false },
        { text: '3.   ja.', correct: true }
        ]
    },
    {
        question: '2069    Ist es möglich, den Widerstand auf Null zu reduzieren?',
        answers: [
        { text: '1.   Ja, bei der Wahl des richtigen Anstellwinkels,', correct: false },
        { text: '2.   ja, man sollte sehr langsam fliegen,', correct: false },
        { text: '3.   nein.', correct: true }
        ]
    },
    {
        question: '2070    Wenn wir ein ganz dünnes Profil verwenden, verschwindet der Widerstand?',
        answers: [
        { text: '1.   Ja, bei einem Anstellwinkel von Null Grad,', correct: false },
        { text: '2.   es gibt keinen Auftrieb ohne Widerstand,', correct: true },
        { text: '3.   ja, mit einem sehr glatten Segel.', correct: false }
        ]
    },
    {
        question: '2071 Was versteht man unter „Auftrieb“ ?',
        answers: [
        { text: '1. Eine Kraft; diese ist eine Komponente der Luftkraftresultierenden, die längs der Flugbahn wirkt,', correct: false },
        { text: '2. eine Kraft; die horizontale Komponente der Luftkraftresultierenden,', correct: false },
        { text: '3. eine Komponente der Luftkraftresultierenden, die rechtwinklig zur Flugbahn oder dem relativen Wind wirkt.', correct: true }
        ]
    },
    {
        question: '2072    Auftrieb entsteht unter Anderem durch:',
        answers: [
        { text: '1.   Verringern des statischen Druckes auf der Segeloberseite,', correct: true },
        { text: '2.   Verringern des dynamischen Druckes auf der Segeloberseite,', correct: false },
        { text: '3.   Erhöhen des statischen Druckes auf der Oberseite.', correct: false }
        ]
    },
    {
        question: '2073    Wovon ist der Auftrieb abhängig?',
        answers: [
        { text: '1.   Von der Profilform, der Luftdichte, der Flächengröße, der Fluggeschwindigkeit und dem Anstellwinkel,', correct: true },
        { text: '2.   von der Profilform und dem Anstellwinkel,', correct: false },
        { text: '3.   nur vom Anstellwinkel.', correct: false }
        ]
    },
    {
        question: '2074 Wie lautet die Formel für den Auftrieb A?',
        answers: [
        {
            text: '1. A = ½ ρ S² Ca v', correct: false
        },
        { text: '2. A = ½ ρ S Ca v²', correct: true },
        { text: '3. A = ½ ρ S Ca v', correct: false }
        ]
    },
    {
        question: '2075    Was versteht man unter dem Auftriebskoeffizienten „Ca“ ?',
        answers: [
        { text: '1.   Eine Kraft, rechtwinklig zur Flugbahn oder dem relativen Wind,', correct: false },
        { text: '2.   eine Geschwindigkeit, die vom Anstellwinkel abhängig ist,', correct: false },
        { text: '3.   ein numerischer Faktor, der von der Profilform und dem Anstellwinkel abhängig ist.', correct: true }
        ]
    },
    {
        question: '2076    Hat die Profilhöhe Einfluss auf Auftrieb und Widerstand?',
        answers: [
        { text: '1. Ja, beim Erhöhen des Profils nimmt der Auftrieb zu und der Widerstand nimmt ab,', correct: false },
        { text: '2. Ja, beim Erhöhen des Profils nehmen Auftrieb und Widerstand zu,', correct: true },
        {
            text: '3. Ja, der Auftrieb nimmt zu und der Widerstand bleibt gleich.', correct: false
        }
        ]
    },
    {
        question: '2077    Sind Auftrieb und Widerstand auch von der Luftdichte abhängig?',
        answers: [
        { text: '1.   Ja,', correct: true },
        { text: '2.   nein,', correct: false },
        { text: '3.   nicht immer.', correct: false }
        ]
    },
    {
        question: '2078    Was ist der Anstellwinkel?',
        answers: [
        { text: '1.   Der Winkel zwischen Profilsehne und anströmender Luft (relativer Wind) oder Flugbahn,', correct: true },
        { text: '2.   der Winkel zwischen Profilsehne und Horizont,', correct: false },
        { text: '3.   der Winkel zwischen Profilsehne und dem meteorologischem Wind.', correct: false }
        ]
    },
    {
        question: '2079    Der Neigungswinkel unterscheidet sich ganz klar vom Anstellwinkel und ist der Winkel zwischen:',
        answers: [
        { text: '1.   der Profilsehne und der horizontalen Ebene,', correct: true },
        { text: '2.   der Profilsehne und dem relativen Wind oder der anströmenden Luft,', correct: false },
        {
            text: '3.   der Flugbahn und der horizontalen Ebene.', correct: false
        }
        ]
    },
    {
        question: '2080    Welche Flugrichtung hat ein Profil mit einem Neigungswinkel von +6° und einem Anstellwinkel von +10° ?',
        answers: [
        { text: '1.   steigend und gegenüber der horizontalen Ebene um 4° nach oben geneigt.', correct: false },
        { text: '2.   absteigend und gegenüber der horizontalen Ebene um 4° nach unten geneigt.', correct: true },
        { text: '3.   genau horizontal.', correct: false }
        ]
    },
    {
        question: '2081    Der Anstellwinkel und der Neigungswinkel wären im Fluge identisch:',
        answers: [
        { text: '1.   bei einem Flug mit horizontaler Flugbahn und Windstille.', correct: true },
        { text: '2.   bei einer horizontalen Flugbahn,', correct: false },
        { text: '3.   beim Kurvenfliegen.', correct: false }
        ]
    },
    {
        question: '2082 Aus welchem Grund erscheint in der Formel für den Widerstand W = ½ ρ Cw S v2 nicht der Anstellwinkel, obwohl sich bei dessen Veränderung der Widerstand verändert ? ',
        answers: [
        { text: '1. Bei Veränderung des Anstellwinkels verändert sich nur die projizierte Fläche,', correct: false },
        { text: '2. eine andere Formel zeigt den Zusammenhang zwischen Anstellwinkel und aerodynamischem Widerstand,', correct: false },
        { text: '3. bei Veränderung des Anstellwinkels verändert sich der Cw.', correct: true }
        ]
    },
    {
        question: '2083    Man erhöht den Auftrieb eines Profils, durch Erhöhen des Anstellwinkels.',
        answers: [
        { text: '1.   Ja, ein höherer Anstellwinkel bedeutet mehr Auftrieb,', correct: false },
        { text: '2.   ja, von null bis zwanzig Grad,', correct: false },
        { text: '3.   ja, aber innerhalb bestimmter Grenzen.', correct: true }
        ]
    },
    {
        question: '2084    Verändert sich der Auftrieb bei Veränderung des Anstellwinkels?',
        answers: [
        { text: '1.   Ja,', correct: true },
        { text: '2.   nein,', correct: false },
        {
            text: '3.   ja, aber der Widerstand bleibt gleich.', correct: false
        }
        ]
    },
    {
        question: '2085 Aus welchem Grund erscheint in der Formel für den Auftrieb A = ½ ρ Ca S v2 nicht der Anstellwinkel, obwohl sich bei dessen Veränderung der Auftrieb ändert ? ',
        answers: [
        { text: '1. Bei Veränderung des Anstellwinkels verändert sich nur die projizierte Fläche,', correct: false },
        { text: '2. eine andere Formel zeigt den Zusammenhang zwischen Anstellwinkel und Auftrieb,', correct: false },
        { text: '3. bei Veränderung des Anstellwinkels verändert sich Ca.', correct: true }
        ]
    },
    {
        question: '2086    Wie kann man während des Fluges den Auftrieb verändern?',
        answers: [
        { text: '1.   Man verringert den Widerstand,', correct: false },
        { text: '2.   man verändert den Anstellwinkel innerhalb bestimmter Grenzen,', correct: true },
        { text: '3.   man behält den gleichen Neigungswinkel.', correct: false }
        ]
    },
    {
        question: '2087 Das Gesamtgewicht ist eine der Luftkraftresultierenden entgegenwirkende Kraft und besteht aus folgenden Komponenten: ',
        answers: [
        {
            text: '1. dem Vortrieb längs der Flugbahn und der Auftriebsgegenkraft rechtwinklig zur Flugbahn oder der anströmenden Luft, ', correct: true
        },
        { text: '2. dem Vortrieb, rechtwinklig zur Flugbahn, und der Auftriebsgegenkraft gegen dem relativen Wind,', correct: false },
        { text: '3. dem Vortrieb längs der Flugbahn und der Auftriebsgegenkraft entgegen dem Widerstand.', correct: false }
        ]
    },
    {
        question: '2088 Die Energie (Schubkraft) beim Sport- und Wanderflug entsteht:',
        answers: [
        { text: '1. Durch natürliche und aerodynamische Kräfte,', correct: false },
        { text: '2. Durch die Gewichtskraft,', correct: true },
        { text: '3. Durch die kinetische Trägheit.', correct: false }
        ]
    },
    {
        question: '2089 Durch welche Energie ist ein Gleitflug möglich?',
        answers: [
        { text: '1. Thermische Energie,', correct: false },
        { text: '2. statische Energie,', correct: false },
        { text: '3. potentielle Energie.', correct: true }
        ]
    },
    {
        question: '2090 Was versteht man unter Vortrieb bzw. Schubkraft?',
        answers: [
        { text: '1. Eine Komponente der Gewichtskraft, die längs der Flugbahn wirkt,', correct: true },
        { text: '2. Eine Komponente der Gewichtskraft, die rechtwinklig zur Flugbahn wirkt.', correct: false },
        { text: '3. Eine Kraft, die nicht vom Gewicht abhängig ist.', correct: false }
        ]
    },
    {
        question: '2091 Wie kann man im Flug den Vortrieb verändern?',
        answers: [
        { text: '1. Er kann nicht verändert werden,', correct: false },
        { text: '2. Durch Verändern des Neigungswinkels,', correct: true },
        { text: '3. Nur durch Verändern des Widerstandes.', correct: false }
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
        question: '2093 Wie verändern sich im Kurvenflug die Auftriebsgegenkraft und die projizierte Fläche?',
        answers: [
        {
            text: '1. Beide werden größer, die Auftriebsgegenkraft wegen der Zentripetalkraft und die Fläche aus geometrischen Gründen, ', correct: false
        },
        {
            text: '2. die Auftriebsgegenkraft nimmt wegen der Zentrifugalkraft zu, während die projizierte Fläche wegen ihrer Schräglage abnimmt, ', correct: true
        },
        { text: '3. beide bleiben gleich.', correct: false }
        ]
    },
    {
        question: '2094    Welche sind die Folgen der Zentrifugalkraft und der Schräglage in der Kurve?',
        answers: [
        { text: '1.   die Auftriebsgegenkraft wird größer und die projizierte Fläche wird kleiner.', correct: true },
        { text: '2.   das Gewicht und die Fläche werden kleiner,', correct: false },
        { text: '3.   nur der aerodynamische Widerstand wird kleiner.', correct: false }
        ]
    },
    {
        question: '2095    Was versteht man unter Flächenbelastung?',
        answers: [
        { text: ' 1.   Das Verhältnis zwischen Abfluggewicht und projizierter Fläche,', correct: true },
        { text: '2.   das Verhältnis zwischen der Fläche und dem Abfluggewicht,', correct: false },
        { text: '3.   die Bruchbelastung eines Gerätes.', correct: false }
        ]
    },
    {
        question: '2096 Der Pilot wiegt 78 Kg, die Ausrüstung mit Zubehör 22 Kg. Wie hoch ist die Flächenbelastung(G - Wert), bei einer projetzierten Fläche von 25 Quadratmeter ? ',
        answers: [
        { text: '1. 6 Kg./Quadratmeter.', correct: false },
        { text: '2. 9 Kg./Quadratmeter.', correct: false },
        { text: '3. 4 Kg./Quadratmeter.', correct: true }
        ]
    },
    {
        question: '2097    In Folge eines Einklappers des Gleitschirmes verkleinert sich die Fläche. Das bedeutet dass:',
        answers: [
        { text: '1.   die Flächenbelastung gleich bleibt,', correct: false },
        { text: '2.   die Flächenbelastung zunimmt,', correct: true },
        { text: '3.   die Flächenbelastung geringer wird.', correct: false }
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
        question: '2099   In einer Kurve erfährt dem System Flügel-Pilot aufgrund der Zentrifugalkraft eine Beschleunigung von 2 G.Man kann sagen, dass: ',
        answers: [
        { text: '1. der Belastungsfaktor unverändert bleibt,', correct: false },
        { text: '2. der Belastungsfaktor verdoppelt wird, aber das Gewicht des Systems erscheint unverändert,', correct: false },
        { text: ' 3. der Belastungsfaktor verdoppelt sich und das Gewicht des Systems erscheint doppelt.', correct: true }
        ]
    },
    {
        question: '2100    Beim verdoppeln der G-Kraft, bleibt die Flächenbelastung konstant:',
        answers: [
        { text: '1.   das kann vorkommen,', correct: false },
        { text: '2.   nein, die Flächenbelastung hat sich verdoppelt,', correct: true },
        { text: '3.   nein, die Flächenbelastung hat sich halbiert.', correct: false }
        ]
    },
    {
        question: '2101    Was versteht man unter dem Begriff: Druckpunkt?',
        answers: [
        { text: '1.   Den Angriffspunkt der Gewichtskraft.', correct: false },
        { text: '2.   den Angriffspunkt der drei Achsenbewegungen,', correct: false },
        { text: '3.   der Angriffspunkt aller Luftkräfte am Flügel im Flug.', correct: true }
        ]
    },
    {
        question: '2102    Kann sich der Druckpunkt im Flug verschieben?',
        answers: [
        { text: '1.   Nein, seine Faktoren bleiben konstant,', correct: false },
        { text: '2.   ja, aber nur bei bestimmten Profilen,', correct: false },
        {
            text: '3.   ja, bei Verändern des Anstellwinkels.', correct: true
        }
        ]
    }, {
        question: '2103 Wie verändert sich der Druckpunkt, bei Verändern des Anstellwinkels mit autostabilem Profil ? ',
        answers: [
        { text: '1. bei tiefem Anstellwinkel nach vorn und bei hohem Anstellwinkel nach hinten.', correct: true },
        { text: '2. bei tiefen Anstellwinkel nach hinten und bei hohem Anstellwinkel nach vorne.', correct: false },
        { text: '3. er verschiebt sich nur selten.', correct: false }
        ]
    },
    {
        question: '2104    Was versteht man unter: Geräteschwerpunkt?',
        answers: [
        { text: '1.   Den Angriffspunkt der Gewichtskraft,', correct: true },
        { text: '2.   den Angriffspunkt der aerodynamischen Resultierenden,', correct: false },
        { text: '3.   den Achsenschnittpunkt des Gerätes.', correct: false }
        ]
    },
    {
        question: '2105    Wo befindet sich der Gesamtschwerpunkt?',
        answers: [
        { text: '1.   Beim Pilotenschwerpunkt,', correct: false },
        { text: '2.   zwischen dem Pilotenschwerpunkt und dem Geräteschwerpunkt,', correct: true },
        { text: '3.   er befindet sich am Schnittpunkt der drei Achsen des Systems.', correct: false }
        ]
    },
    {
        question: '2106    Wann verlagert sich der Gesamtschwerpunkt?',
        answers: [
        { text: '1.   Nur bei Bewegungen um die Querachse,', correct: false },
        { text: '2.   nur bei Bewegungen um die Längsachse,', correct: false },
        { text: '3.   bei Bewegungen um die Quer- und die Längsachse.', correct: true }
        ]
    },
    {
        question: '2107    Das Gleiten ist das Verhältnis zwischen:',
        answers: [
        { text: '1.   Auftrieb und Widerstand,', correct: true },
        { text: '2.   Flächenbelastung und Widerstand,', correct: false },
        { text: '3.   Fläche und Auftrieb.', correct: false }
        ]
    },
    {
        question: '2108    Das Gleiten ist das Verhältnis zwischen:',
        answers: [
        { text: '1.   Fläche und Gewicht,', correct: false },
        { text: '2.   Abfluggewicht und Höchstgeschwindigkeit,', correct: false },
        { text: '3.   Ca und Cw.', correct: true }
        ]
    },
    {
        question: '2109    Das Gleiten eines Profils resultiert aus:',
        answers: [
        { text: '1.   der horizontalen und der vertikalen Geschwindigkeit,', correct: true },
        { text: '2.   seiner Geschwindigkeit auf der Flugbahn,', correct: false },
        { text: '3.   dem Verhältnis zwischen Fläche und Gewicht.', correct: false }
        ]
    },
    {
        question: '2110 Aus dem Verhältnis zwischen Auftrieb und Widerstand ergibt sich das Gleiten; wann verändert es sich ? ',
        answers: [
        { text: '1. Beim Verändern des Anstellwinkels,', correct: true },
        { text: '2. beim Verändern der Fläche,', correct: false },
        { text: '3. beim Verändern der Flächenbelastung.', correct: false }
        ]
    },
    {
        question: '2111    Was bedeutet die Gleitzahl 8?',
        answers: [
        { text: '1.   bei Windstille: 1 Km gleiten und 800 Meter sinken,', correct: false },
        { text: '2.   das Verhältnis zwischen Profilsehne und Spannweite beträgt 8.', correct: false },
        { text: '3.   bei Windstille: 8 Km gleiten und 1000 Meter sinken.', correct: true }
        ]
    },
    {
        question: '2112    Verändert sich der Gleitwinkel beim Verändern des Anstellwinkels?',
        answers: [
        { text: '1.   Es verändert sich nur der Auftriebskoeffizient Ca,', correct: false },
        { text: '2.   es verändert sich nur der Widerstandskoeffizient Cw,', correct: false },
        {
            text: '3.   es verändern sich Ca und Cw; das bedeutet, dass der Gleitwinkel sich verändert.', correct: true
        }
        ]
    },
    {
        question: '2113    Verändert sich der Gleitwinkel beim Verändern der Flächenbelastung?',
        answers: [
        { text: '1.   Ja,', correct: false },
        { text: ' 2.   nicht bei Windstille und solange keine Flächenverformung eintritt,', correct: true },
        { text: '3.   nein, auch nicht bei hoher Flächenbelastung mit Flächenverformung.', correct: false }
        ]
    },
    {
        question: '2114    Zwei gleiche Fluggeräte fliegen, bei Windstille und mit unterschiedlicher Flächenbelastung:',
        answers: [
        { text: '1.   dieselbe Distanz mit unterschiedlicher Flugzeit,', correct: true },
        { text: '2.   unterschiedliche Distanzen mit gleicher Flugzeit.', correct: false },
        { text: '3.   unterschiedliche Distanzen mit unterschiedlichen Flugzeiten.', correct: false }
        ]
    },
    {
        question: '2115    Beim Verändern der Flächenbelastung ohne Flächenverformung und bei Windstille:',
        answers: [
        { text: '1.   verändert sich nur der Gleitwinkel,', correct: false },
        { text: '2.   verändern sich der Gleitwinkel und die Fluggeschwindigkeit, aber das Sinken bleibt gleich.', correct: false },
        { text: '3.   verändern sich die Fluggeschwindigkeit und das Sinken, aber der Gleitwinkel bleibt identisch.', correct: true }
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
        question: '2117    Was passiert, wenn wir im Flug mit einem bestimmten Anstellwinkel die Flächenbelastung erhöhen?',
        answers: [
        {
            text: '1.   Die Fluggeschwindigkeit und das Sinken werden größer, ', correct: true
        },
        { text: '2.   die Fluggeschwindigkeit und das Sinken werden geringer,', correct: false },
        { text: '3.   die Fluggeschwindigkeit wird höher und das Sinken geringer.', correct: false }
        ]
    },
    {
        question: '2118 Ist es beim SWF möglich, auf einer horizontalen Flugbahn zu fliegen?',
        answers: [
        { text: '1. Ja, mit ganz speziellen Profilen,', correct: false },
        {
            text: '2. nein, das würde bedeuten, dass der aerodynamische Widerstand und infolgedessen auch das Sinken annulliert würden, ', correct: true
        },
        { text: '3. ja, mit sehr wenig Flächenbelastung.', correct: false }
        ]
    },
    {
        question: '2119 Stabile horizontale Flugbahnen können beim Sport- und Wanderflug realisiert werden:',
        answers: [
        { text: '1.   nur gegenüber dem Boden, mit starkem Rückenwind,', correct: false },
        { text: '2.   nur gegenüber dem Boden, mit aufsteigenden Luftmassen,', correct: true },
        { text: '3.   nur gegenüber dem Boden, bei Windstille.', correct: false }
        ]
    },
    {
        question: '2120 Die Polare eines Flügels ist eine grafische Darstellung:',
        answers: [
        { text: '1.   der Geschwindigkeit über Grund bei verschiedenen Anstellwinkeln,', correct: false },
        { text: '2.   des Auftriebs- und Widerstandskoeffizienten beim Verändern des Neigungswinkels,', correct: false },
        { text: '3.   des Auftriebs- und Widerstandskoeffizienten beim Verändern des Anstellwinkels.', correct: true }
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
        question: '2122    Verändert sich die Polare beim Verändern der Flächenbelastung?',
        answers: [
        { text: '1.   Ja, aber nur die vertikalen Werte,', correct: false },
        { text: '2.   nein, sie verändert sich nicht,', correct: false },
        { text: '3.   nein, sie verändert sich nicht, verschiebt sich aber horizontal und vertikal.', correct: true }
        ]
    },
    {
        question: '2123    Welche Werte kann man aus einer Geschwindigkeitspolare ersehen?',
        answers: [
        { text: '1.   den Auftrieb beim Verändern des Anstellwinkels,', correct: false },
        { text: '2.   den Widerstand beim Verändern des Anstellwinkels,', correct: false },
        { text: '3.   die horizontale und die vertikale Geschwindigkeit beim Verändern des Anstellwinkels.', correct: true }
        ]
    },
    {
        question: '2124 Ein Flügel fliegt, laut der Polaren, das geringste Sinken:',
        answers: [
        { text: '1. Mit dem Anstellwinkel des geringsten Auftriebs,', correct: false },
        { text: '2. Mit dem Anstellwinkel des besten Gleitens bei Windstille,', correct: false },
        { text: '3. Mit einem höheren Anstellwinkel als der des besten Gleitens bei Windstille.', correct: true }
        ]
    },
    {
        question: '2125    Beim Fliegen mit Höchstgeschwindigkeit:',
        answers: [
        { text: '1.   ist der Widerstand größer als beim Fliegen des besten Gleitens,', correct: true },
        { text: '2.   ist der Anstellwinkel größer als der des besten Gleitens,', correct: false },
        { text: '3.   ist der Anstellwinkel auf seinem höchsten Punkt.', correct: false }
        ]
    },
    {
        question: '2126    Was ist das beste Gleiten bei Windstille?',
        answers: [
        { text: '1.   Das beste Verhältnis zwischen Widerstand und Gewicht,', correct: false },
        { text: '2.   das beste Verhältnis zwischen Auftrieb und Widerstand,', correct: true },
        { text: '3.   das beste Verhältnis zwischen Auftrieb und Gewicht.', correct: false }
        ]
    },
    {
        question: '2127    Wie fliegt man, um bei steigenden Luftmassen das bestmögliche Gleiten zu erzielen?',
        answers: [
        { text: '1.   Etwas schneller als bei Windstille,', correct: false },
        { text: '2.   etwas langsamer, als bei Windstille,', correct: true },
        { text: '3.   gleich schnell wie bei Windstille.', correct: false }
        ]
    },
    {
        question: '2128 Wie fliegt man, laut Polare, um bei sinkenden Luftmassen das bestmögliche Gleiten zu erzielen?',
        answers: [
        { text: '1. Etwas schneller als das beste Gleiten bei Windstille,', correct: true },
        { text: '2. etwas langsamer als das beste Gleiten bei Windstille,', correct: false },
        { text: '3. gleich schnell wie bei Windstille.', correct: false }
        ]
    },
    {
        question: '2129    Wie fliegt man, laut Polare, um bei Rückenwind das beste Gleiten zu erzielen?',
        answers: [
        { text: '1.   Mit einem höheren Anstellwinkel, das heißt etwas langsamer als bei Windstille,', correct: true },
        { text: '2.   mit einem tieferen Anstellwinkel, das heißt schneller als bei Windstille,', correct: false },
        { text: '3.   mit dem Anstellwinkel des besten Gleitens.', correct: false }
        ]
    },
    {
        question: '2130    Wie fliegt man, laut Polare, um bei Gegenwind das bestmögliche Gleiten zu erzielen?',
        answers: [
        { text: '1.   Mit dem Anstellwinkel des besten Gleitens,', correct: false },
        { text: '2.   mit einem höheren Anstellwinkel, das heißt langsamer als bei Windstille,', correct: false },
        { text: '3.   mit einem tieferen Anstellwinkel, das heißt etwas schneller als bei Windstille.', correct: true }
        ]
    },
    {
        question: '2131    Welcher Pilot fliegt bei gleichem Material und gleichen Konditionen länger?',
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
        question: '2133    Bei Rückenwind und gleichem Material fliegt der schwere Pilot:',
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
        question: '2135    Was versteht man unter dem Begriff „Stall“(Überziehen)?',
        answers: [
        { text: '1.   Einen Strömungsabriss wegen eines zu hohen Anstellwinkels,', correct: true },
        { text: '2.   ein starkes, plötzliches Sinken wegen eines zu tiefen Anstellwinkels,', correct: false },
        { text: '3.   ein starker Widerstand wegen zu hoher Geschwindigkeit.', correct: false }
        ]
    },
    {
        question: '2136    Wann kann ein Stall vorkommen?',
        answers: [
        { text: '1.   Bei geringer Geschwindigkeit und mit jedem Anstellwinkel,', correct: false },
        { text: '2.   nur bei geringer Geschwindigkeit und zu hohem Anstellwinkel,', correct: false },
        { text: '3.   bei jeder Geschwindigkeit, wenn der Anstellwinkel über dem kritischen Punkt liegt.', correct: true }
        ]
    },
    {
        question: '2137 Sind im Kurvenflug die Mindestgeschwindigkeit und die Stallgeschwindigkeit gleich wie im Geradeausflug ? ',
        answers: [
        { text: '1. Nein, sie sind höher,', correct: true },
        { text: '2. ja,', correct: false },
        { text: '3. nein, sie sind niedriger.', correct: false }
        ]
    },
    {
        question: '2138    Ist die Stallgeschwindigkeit von der Flächenbelastung abhängig?',
        answers: [
        { text: '1.   Nein,', correct: false },
        { text: '2.   ja, sie wird mit zunehmender Flächenbelastung höher,', correct: true },
        { text: '3.   ja, sie wird mit zunehmender Flächenbelastung niedriger.', correct: false }
        ]
    },
    {
        question: '2139 Ist es möglich, mit einem Drachen oder Gleitschirm bei hoher Fluggeschwindigkeit in Stallgefahr zu geraten ? ',
        answers: [
        { text: '1. Nein,', correct: false },
        { text: '2. nur im Kurvenflug,', correct: false },
        { text: '3. ja, wenn man den kritischen Punkt des Anstellwinkels überschreitet.', correct: true }
        ]
    },
    {
        question: '2140    Ein Flügel stallt bei jedem Anstellwinkel, es reicht eine Veränderung der Flächenbelastung:',
        answers: [
        { text: '1.   ja, der Stall ist nur von der Geschwindigkeit abhängig,', correct: false },
        { text: '2.   nein, der Stall ist nur vom Anstellwinkel abhängig,', correct: true },
        { text: '3.   nein, der Stall ist weder von der Geschwindigkeit noch vom Anstellwinkel abhängig.', correct: false }
        ]
    },
    {
        question: '2141 Was versteht man unter einem autostabilen Profil?',
        answers: [
        { text: '1. Es hat die Tendenz, bei Eingriff des Piloten den Anstellwinkel zu erhöhen und zu verringern,', correct: false },
        { text: '2. es beschleunigt nach einem Stall,', correct: false },
        { text: '3. es kehrt ohne Hilfe des Piloten in eine normale Fluglage zurück.', correct: true }
        ]
    },
    {
        question: '2142 Warum werden Drachen und Gleitschirme als autostabile Fluggeräte bezeichnet?',
        answers: [
        {
            text: '1. Weil sie auf alle aerodynamischen Einflüsse um alle drei Achsen reagieren und automatisch in eine normale Fluglage zurückkehren, ', correct: true
        },
        { text: '2. weil sie nur auf Bewegungen um die Längsachse reagieren und in eine normale Fluglage zurückkehren,', correct: false },
        { text: '3. weil sie nur auf Bewegungen um die Hochachse reagieren und in eine normale Fluglage zurückkehren.', correct: false }
        ]
    },
    {
        question: '2143 Was passiert mit dem System Flügel-Pilot, wenn man den Gesamtschwerpunkt bezüglich des Druckpunkts herabsetzt ? ',
        answers: [
        { text: '1. Es verbessert sich die Querstabilität,', correct: false },
        { text: '2. es verbessern sich die Querstabilität und die Längsstabilität,', correct: true },
        { text: '3. es verbessert sich nur das Handling.', correct: false }
        ]
    },
    {
        question: '2144    Ein tiefer Schwerpunkt, innerhalb bestimmter Grenzen, bewirkt bei einem Gleitschirm:',
        answers: [
        { text: '1.   eine höhere Stabilität,', correct: true },
        { text: '2.   eine geringere Stabilität,', correct: false },
        { text: '3.   einen geringeren Steuerdruck auf den Bremsen.', correct: false }
        ]
    },
    {
        question: '2145    Ein tiefer Schwerpunkt bei einem Gleitschirm bewirkt:',
        answers: [
        { text: '1.   eine geringere Stabilität,', correct: false },
        { text: '2.   einen geringeren Druck auf den Steuerleinen,', correct: false },
        { text: '3.   ein stärkeres Pendeln bei hohen und kräftigen Steuerausschlägen.', correct: true }
        ]
    },
    {
        question: '2146    Bewirkt die Flügelschränkung eine Verbesserung der Flugstabilität?',
        answers: [
        { text: '1.   Nein,', correct: false },
        { text: '2.   ja, nur beim Drachen,', correct: false },
        { text: '3.   ja, aber nur wenn sie sehr genau berechnet wird.', correct: true }
        ]
    },
    {
        question: '2147    Ein Drachen erhöht in Bodennähe seine Gleitleistung; worauf ist das zurückzuführen?',
        answers: [
        { text: '1.   Der Pilot erhöht in Bodennähe den Anstellwinkel,', correct: false },
        { text: '2.   auf den Bodeneffekt,', correct: true },
        { text: '3.   auf die Mikrothermik am Boden.', correct: false }
        ]
    },
    {
        question: '2148    Worauf ist der Bodeneffekt zurückzuführen?',
        answers: [
        { text: '1.   nur auf die Bildung eines Luftpolsters zwischen Flügel und Boden,', correct: false },
        { text: '2.   auf die Bildung eines Luftpolsters zwischen Flügel und Boden und ein Verringern des induzierten Widerstandes,', correct: true },
        { text: '3.   den Bodeneffekt gibt es nicht.', correct: false }
        ]
    },
    {
        question: '2149    Was versteht man unter einem unüblichen Flugzustand?',
        answers: [
        { text: '1.   Eine Flugsituation mit extrem schlechten meteorologischen Konditionen,', correct: false },
        { text: '2.   eine hohe Belastung wegen Überladen des Gerätes,', correct: false },
        { text: '3.   ein nicht vom Piloten gewolltes Verhalten des Fluggerätes, wie Tumbling, Einklapper, Trudeln, Sackflug, usw...', correct: true }
        ]
    },
    {
        question: '2150    Welcher Flugparameter kann einen unüblichen Flugzustand herbeiführen?',
        answers: [
        { text: '1.   Ein zu hoher Anstellwinkel,', correct: true },
        { text: '2.   eine zu hohe Schrägneigung (über 20 Grad) in der Kurve,', correct: false },
        { text: '3.   eine zu hohe Fluggeschwindigkeit in Bodennähe.', correct: false }
        ]
    },
    ],

    chapter3 = [
    {
        question: '3001 Nachdem man Erste Hilfe geleistet hat, sollte man dafür sorgen, dass:',
        answers: [
        { text: '1. der Verletzte auf irgend eine Weise ins Krankenhaus gebracht wird,', correct: false },
        {
            text: '2. der Verletzte von Fachpersonal und mit geeigneten Mitteln transportiert wird, währenddessen man sich um seine persönlichen Sachen kümmert und eventuell Verwandte benachrichtigt, ', correct: true
        },
        { text: '3. man ruft die Polizei, die sich dann um alles Andere kümmert.', correct: false }
        ]
    },
    {
        question: '3002    Wie begleitet man am besten einen gehfähigen Leichtverletzten?',
        answers: [
        { text: '1.   Man besorgt ihm ein Paar Krücken,', correct: false },
        { text: '2.   man trägt ihn auf dem Rücken,', correct: false },
        {
            text: '3.   man geht an seiner verletzten Seite mit und hält ihn an der Hüfte.', correct: true
        }
        ]
    },
    {
        question: '3003 Wie verhält man sich, falls Verdacht auf innere Verletzungen besteht?',
        answers: [
        { text: '1. Man kontrolliert, wie gut sich der Verletzte bewegen kann, dann entscheidet man, wer gerufen wird,', correct: false },
        { text: '2. den Verletzten nicht bewegen, dafür sorgen, dass er sich nicht bewegt, dann qualifizierte Hilfe rufen,', correct: true },
        { text: '3. man hilft ihm auf die Beine; sollte das nicht gelingen, dann ruft man den Krankenwagen.', correct: false }
        ]
    },
    {
        question: '3004    Du bist alleine, mit einem Verletzten mit starkem Trauma, wie sollst du dich verhalten?',
        answers: [
        { text: '1.   du holst einen Arzt, aus dem nächsten Dorf.', correct: false },
        { text: '2.   du leistest erste Hilfe, so gut wie möglich.', correct: false },
        {
            text: '3.   Sorge dafür dass der Verletzte auf keinem Fall bewegt wird und alarmiere qualifiziertes Rettungspersonal, wie Krankenwagen, Hubschrauber u.s.w.', correct: true
        }
        ]
    },
    {
        question: '3005    Was sollte man bei stark blutenden Wunden tun?',
        answers: [
        { text: '1.   Man lässt den Verletzten längere Zeit bluten, damit sich die Wunde reinigt,', correct: false },
        { text: '2.   oberhalb der Verletzung (zwischen Wunde und Herz) abbinden oder die Wunde tamponieren,', correct: true },
        { text: '3.   den Verletzten mit der Wunde nach oben hinlegen.', correct: false }
        ]
    },
    {
        question: '3006    Wie leistet man Erste Hilfe bei einer Wunde?',
        answers: [
        { text: '1.   Man hilft dem Verletzten auf die Beine,', correct: false },
        { text: '2.   man lässt die Wunde offen, nachdem man sie tamponiert hat,', correct: false },
        { text: '3.   man tamponiert die Wunde mit dem passenden Material und lässt sie bis zur Ankunft des Fachpersonals zugedeckt.', correct: true }
        ]
    },
    {
        question: '3007 Was ist bei leichtem Nasenbluten zu empfehlen?',
        answers: [
        { text: '1. Kopf nach vorne beugen, um den Durchfluss von Blut und eventuellem Schleim zu begünstigen, Nacken und Stirn kühlen,', correct: true },
        { text: '2. stark schnäuzen,', correct: false },
        { text: '3. mit den Fingern die Nase tamponieren.', correct: false }
        ]
    },
    {
        question: '3008    Was tun bei Erstickungserscheinungen?',
        answers: [
        { text: '1.   Warten, bis der Verletzte wieder normal atmet,', correct: false },
        { text: '2.   die Atemwege freimachen und kontrollieren, dass kein Erbrochenes die Atmung behindert,', correct: true },
        { text: '3.   als Erstes macht man die künstliche Beatmung.', correct: false }
        ]
    },
    {
        question: '3009    Was tun bei einem Verletzten unter Schock?',
        answers: [
        { text: '1.   Man befreit ihn von seiner Ausrüstung und unnützer Kleidung, um Schwitzen zu vermeiden,', correct: false },
        { text: '2.   man gibt ihm Kaffee und eventuell alkoholische Getränke,', correct: false },
        { text: '3.   man legt ihn auf dem Rücken, deckt ihn warm zu und sorgt dafür, dass er so ruhig wie möglich liegen bleibt.', correct: true }
        ]
    },
    {
        question: '3010 Wie sollten wir uns verhalten, wenn der Verdacht auf einen Knochenbruch besteht?',
        answers: [
        {
            text: '1. Auf jeden Fall versuchen, das Ausmaß des Bruches zu reduzieren, indem man die betroffene Körperstelle bis zur Ankunft des Fachpersonals unter Zug setzt, ', correct: false
        },
        {
            text: '2. den Verletzten stilllegen, nur bei Gliedmaßen eine möglichst geeignete Schiene anlegen, und so schnell wie möglich professionelle Hilfe rufen, ', correct: true
        },
        { text: '3. die betroffene Körperstelle fest verbinden und auf geeignete Hilfe warten.', correct: false }
        ]
    },
    {
        question: '3011    Was tun, wenn ein Verletzter infolge eines Schädel-Hirntraumas aus einem Ohr blutet?',
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
        { text: '3.   bis zu Ankunft des Fachpersonals sollte man eine intensive Bauchmassage durchführen.', correct: false }
        ]
    },
    {
        question: '3013 Wenn ein Verletzter einen Stromschlag erleidet und mit einer Hochspannungsleitung in Kontakt bleibt, muss der Hilfeleistende: ',
        answers: [
        { text: '1. so nahe wie möglich kommen, um zu helfen,', correct: false },
        { text: '2. auf Sicherheitsdistanz bleiben,', correct: true },
        { text: '3. den Verletzten so schnell wie möglich entfernen, z.B. mit einem Stock.', correct: false }
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
        { text: '2.   das Gelenk so gut wie möglich ruhigstellen,', correct: true },
        { text: '3.   das Gelenk unter Zug halten und warme Umschläge machen.', correct: false }
        ]
    },
    {
        question: '3016    Wie erkennt man eine Schulter-Luxation?',
        answers: [
        { text: '1.   Durch den herunterhängenden Arm und eine Vertiefung am Schultergelenk,', correct: true },
        { text: '2.   durch starkes Anschwellen des Schultergelenkes,', correct: false },
        { text: '3.   durch Unterarm.', correct: false }
        ]
    },
    {
        question: '3017    Wie leistet man Erste Hilfe bei Verbrennungen (Feuer, Strom, usw.)?',
        answers: [
        { text: '1.   Man versucht, die verbrannte Stelle bis zur qualifizierten ärztlichen Behandlung sauber zu halten,', correct: true },
        { text: '2.   auf keinen Fall die Kleider ausziehen oder gar die verbrannte Stelle berühren,', correct: false },
        { text: '3.   man sollte die verbrannte Stelle einfetten.', correct: false }
        ]
    },
    {
        question: '3018 Wie leistet man einem Bewusstlosen Erste Hilfe?',
        answers: [
        { text: '1. Man legt ihn auf den Rücken, den Kopf etwas höher als die Beine,', correct: false },
        {
            text: '2. man legt ihn auf die Seite und hebt ein Bein und einen Arm hoch, um ein Ersticken an Erbrochenem zu vermeiden', correct: true
        },
        { text: '3. man kühlt seine Stirn mit kaltem Wasser.', correct: false }
        ]
    },
    {
        question: '3019 Wie interveniert man, wenn die Gefahr besteht, dass jemand das Bewusstsein verliert?',
        answers: [
        { text: '1. Man versucht, ihn wach zu rütteln und ruft die Erste Hilfe,', correct: false },
        {
            text: '2. man legt ihn auf den Rücken und hebt seine Beine höher als den Kopf, kontrolliert seinen Puls und Atmung und ruft die Erste Hilfe.', correct: true
        },
        { text: '3. man legt ihn auf den Rücken und praktiziert die künstliche Beatmung.', correct: false }
        ]
    },
    {
        question: '3020    Was tut man am besten bei Erfrierungserscheinungen?',
        answers: [
        { text: '1.   Der Frierende sollte Alkohol trinken,', correct: false },
        { text: '2.   der Frierende sollte sich viel bewegen, um die Blutzirkulation anzuregen,', correct: false },
        { text: '3.   den betroffenen Körperteil warm halten und warme Getränke einnehmen.', correct: true }
        ]
    },
    ],

    chapter4 = [
    {
        question: '4001    Was geschieht mit dem Sauerstoff mit zunehmender Höhe?',
        answers: [
        { text: '1.   Mehr Höhe, weniger Sauerstoff,', correct: true },
        { text: '2.   der Sauerstoff ist nicht von der Höhe abhängig,', correct: false },
        { text: '3.   mehr Höhe, mehr Sauerstoff.', correct: false }
        ]
    },
    {
        question: '4002    Bei großer Höhe und mangelndem Sauerstoff macht sich in uns etwas bemerkbar, was wir als:',
        answers: [
        { text: '1.   Hypothermie bezeichnen,', correct: false },
        { text: '2.   Hypoxie bezeichnen,', correct: true },
        { text: '3.   Hypotonie bezeichnen.', correct: false }
        ]
    },
    {
        question: '4003    Was versteht man unter Hypoxie?',
        answers: [
        { text: '1.   Eine starke Körperunterkühlung,', correct: false },
        { text: '2.   Stickstoffmangel in den Lungenalveolen,', correct: false },
        { text: '3.   Sauerstoffmangel in den Lungenalveolen.', correct: true }
        ]
    },
    {
        question: '4004    Wie macht sich Hypoxie (Höhenrausch) bemerkbar?',
        answers: [
        { text: '1.   Verringern des Denkvermögens, Übelkeit, Euphorie und starke Lungenventilation,', correct: true },
        { text: '2.   Übelkeit und zu hoher Blutdruck,', correct: false },
        { text: '3.   es verändert sich nur der Blutdruck.', correct: false }
        ]
    },
    {
        question: '4005 Die Dekompression in großer Höhe hat zur Folge, dass sich kleine Gasblasen im Blut befreien; was führt am leichtesten dazu? ',
        answers: [
        { text: '1. Langsamer Höhengewinn bis 7000 Meter,', correct: false },
        { text: '2. schneller Höhengewinn bis 7000 Meter und darüber,', correct: true },
        { text: '3. Aufenthalt in großer Höhe nach langer Akklimatisierung.', correct: false }
        ]
    },
    {
        question: '4006    Verträgt der menschliche Körper beim Fliegen besser positive oder negative Beschleunigungen?',
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
        { text: '3.   beim Öffnen des Rettungsschirms.', correct: false }
        ]
    },
    {
        question: '4009    Wann besteht die Gefahr, dass ein Pilot in den Blindeffektzustand gerät?',
        answers: [
        { text: '1.   Bei starker, positiver Lastvervielfachung über 4 G und länger als 4 Sekunden,', correct: true },
        { text: '2.   bei negativer Lastvervielfachung,', correct: false },
        {
            text: '3.   bei starkem Steigen mit dem Gleitschirm.', correct: false
        }
        ]
    },
    {
        question: '4010 Ist es laut physiologischen Charakteristiken möglich, ohne die nötigen Instrumente einen Blindflug durchzuführen, indem man sich nur auf äußere Sinneseindrücke und das eigene Gleichgewichtsgefühl verlässt ? ',
        answers: [
        { text: '1. Nein,', correct: true },
        { text: '2. ja.', correct: false },
        { text: '3. ja, nur mit autostabilem Fluggerät.', correct: false }
        ]
    },
    ],

    chapter5 = [
    {
        question: '5001    Was ist die Atmosphäre?',
        answers: [
        { text: '1.   Eine sehr dünne, gasförmige Masse, die die Erdoberfläche umgibt,', correct: false },
        { text: '2.   eine 12 km dicke, gasförmige Masse, die die Erde umgibt,', correct: false },
        {
            text: '3.   eine gasförmige Masse eines bestimmten Durchmessers, die die Erde umgibt; die unterste Schicht nennt sich Troposphäre.', correct: true
        }
        ]
    },
    {
        question: '5002    Wie kann man die Troposphäre bezeichnen?',
        answers: [
        { text: '1.   Als die Schicht zwischen der Erdoberfläche und der Höhe, wo der atmosphärische Druck gleich null ist,', correct: false },
        { text: '2.   als die Schicht zwischen der Erdoberfläche und der Höhe, wo die Luftfeuchtigkeit gleich null ist,', correct: false },
        { text: '3.   als die Schicht zwischen der Erdoberfläche und der darüber liegenden Tropopause.', correct: true }
        ]
    },
    {
        question: '5003    Wo spielt sich das Wetter ab?',
        answers: [
        { text: '1.   Innerhalb der Troposphäre,', correct: true },
        { text: '2.   innerhalb der Atmosphäre,', correct: false },
        { text: '3.   in den unteren Schichten der Atmosphäre.', correct: false }
        ]
    },
    {
        question: '5004 Die Höhe der Tropopause oder der obersten Grenze der Troposphäre beträgt:',
        answers: [
        { text: '1. genau 12.000 Meter Höhe,', correct: false },
        {
            text: '2. sie ist verschieden, je nach Jahreszeit und Breitengrad; generell zwischen 8Km am Nord- und Südpol und 16Km am Äquator.', correct: true
        },
        { text: '3. genau 8 Km, sie ist nur vom Breitengrad abhängig.', correct: false }
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
        question: '5006 Die physikalischen Eigenschaften der Luftmassen innerhalb der Troposphäre, welche zu den Wetterphänomene führen, sind: ',
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
        { text: '3.   ja, in den Wüstenregionen.', correct: false }
        ]
    },
    {
        question: '5009 Unter der absoluten Luftfeuchtigkeit versteht man:',
        answers: [
        { text: '1. die Menge Wasserdampf in g/m³ feuchter Luft,', correct: true },
        { text: '2. die Menge Wasserdampf in einem m³ Luft,', correct: false },
        {
            text: '3. die nötige Feuchtigkeit, um eine Wolke zu bilden.', correct: false
        }
        ]
    },
    {
        question: '5010    Was ist die spezifische Luftfeuchtigkeit?',
        answers: [
        { text: '1.   Die Menge Wasser in einer Wolke,', correct: false },
        { text: '2.   die Menge Wasserdampf in einem m³ Luft,', correct: false },
        { text: '3.   die Menge Wasserdampf in g/kg feuchter Luft.', correct: true }
        ]
    },
    {
        question: '5011    Die relative Luftfeuchtigkeit ist:',
        answers: [
        { text: '1.   die Menge Wasserdampf in einem m³ Luft.', correct: false },
        { text: '2.   die Menge Wasserdampf in einem kg Luft.', correct: false },
        {
            text: '3.   das Verhältnis zwischen der Menge Wasserdampf in der Luft und die Menge, die man brauchen würde, um zur Kondensation zu kommen.', correct: true
        }
        ]
    },
    {
        question: '5012    Wie verändert sich die relative Luftfeuchtigkeit beim Verringern der Temperatur?',
        answers: [
        { text: '1.   Die relative Luftfeuchtigkeit wird höher und kann sogar 100% erreichen,', correct: true },
        { text: '2.   sie nimmt ab,', correct: false },
        { text: '3.   die relative Luftfeuchtigkeit verändert sich nicht, solange der Druck gleich bleibt.', correct: false }
        ]
    },
    {
        question: '5013    Wie verändert sich die relative Luftfeuchtigkeit beim Erhöhen des Luftdruckes?',
        answers: [
        { text: '1.   Die relative Luftfeuchtigkeit wird geringer,', correct: false },
        { text: '2.   die relative Luftfeuchtigkeit wird höher und kann sogar 100% erreichen,', correct: true },
        { text: '3.   die relative Luftfeuchtigkeit verändert sich nicht, solange die Temperatur gleich bleibt.', correct: false }
        ]
    },
    {
        question: '5014 Was ist der Taupunkt?',
        answers: [
        {
            text: '1. Der Taupunkt ist der Punkt, wo die Luft den Sättigungsgrad erreicht, wenn sie sich genug abgekühlt hat und ihr Druck gleich geblieben ist, ', correct: true
        },
        { text: '2. der Punkt, wo die Luft den Sättigungsgrad erreicht, wenn sie genug erwärmt wird,', correct: false },
        { text: '3. der Punkt, wo die Luft gesättigt und erwärmt wird und der Druck um ein Millibar zunimmt.', correct: false }
        ]
    },
    {
        question: '5015    Was geschieht, wenn Luftmassen aus irgendeinem Grund 100% Luftfeuchtigkeit erreichen?',
        answers: [
        { text: '1.   Man spricht von gesättigten Luftmassen, ihr Wasserdampf kann kondensieren,', correct: true },
        { text: '2.   man spricht von gesättigten Luftmassen, ihr Wasserdampf kann nicht kondensieren,', correct: false },
        { text: '3.   Der Wasserdampf kondensiert, wenn die Luft genügend erwärmt wird.', correct: false }
        ]
    },
    {
        question: '5016    Welche sind die Voraussetzungen für die Kondensation?',
        answers: [
        { text: '1.   Gleichzeitiges abnehmen der Temperatur und des Luftdruckes,', correct: false },
        { text: '2.   Abnehmen der Temperatur, der Luftdruck bleibt konstant,', correct: true },
        { text: '3.   Abnehmen des Druckes, die Temperatur bleibt konstant.', correct: false }
        ]
    }, {
        question: '5017 Wenn Wasserdampf kondensiert und in den flüssigen Zustand übergeht, kann man behaupten, dass dabei Wärmeenergie an die Außenluft weitergeleitet wird? ',
        answers: [
        { text: '1. Ja,', correct: true },
        { text: '2. nein, dabei entsteht keine Wärme,', correct: false },
        { text: '3. nein, weil die dabei erzeugte Wärme nicht weitergeleitet werden kann.', correct: false }
        ]
    },
    {
        question: '5018.    Kann man bei Verdunstung des Wassers von einem endothermischen Ablauf sprechen?',
        answers: [
        { text: '1.   Nein, das ist kein endothermischer Vorgang,', correct: false },
        { text: '2.   ja, da die Temperatur des flüssigen Wassers während der Verdunstung abnimmt,', correct: true },
        {
            text: '3.   ja, da die Temperatur des flüssigen Wassers während der Verdunstung zunimmt.', correct: false
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
        { text: '1.   den beteiligten Luftmassen jeweils Wärme zuführen oder entziehen,', correct: true },
        { text: '2.   den beteiligten Luftmassen weder Wärme zuführen noch Wärme entziehen,', correct: false },
        { text: '3.   sie können den beteiligten Luftmassen nur Wärme zuführen.', correct: false }
        ]
    },
    {
        question: '5021. Stimmt es, dass die meteorologischen Phänomene auch durch die Transformation des Wasserdampfes in flüssiges Wasser oder Eis und umgekehrt, verursacht werden, wegen der Abgabe oder Zufuhr von thermischer Energie? ',
        answers: [
        { text: '1. Nein, sie haben nichts damit zu tun,', correct: false },
        { text: '2. nein, sie werden ausschließlich durch die Verdampfungsprozesse des Wasserdampfes verursacht,', correct: false },
        { text: '3. ja.', correct: true }
        ]
    },
    {
        question: '5022.    Bestehen die Wolken aus Wasserdampf, wie der Rauch eines Topfes mit kochendem Wasser?',
        answers: [
        { text: '1.   Nein, sie bestehen aus Aerosolen oder winzigen Wassertröpfchen in flüssigem Zustand,', correct: true },
        { text: '2.   ja, da sie aus Aerosolen bestehen, also aus sehr großen Gasmolekülen,', correct: false },
        { text: '3.   ja, denn bei bestimmten Bedingungen ist auch der Wasserdampf ein sichtbares Gas.', correct: false }
        ]
    },
    {
        question: '5023    Was versteht man unter Luftdruck?',
        answers: [
        { text: '1.   Das Gewicht einer 1013,2 Millimeter hohen Quecksilbersäule,', correct: false },
        { text: '2.   das Gewicht einer Kolonne Luft mit einer einheitlichen Höhe,', correct: false },
        { text: '3.   das Gewicht der Luftkolonne auf eine Flächeneinheit.', correct: true }
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
        question: '5025 Mit zunehmender Höhe nimmt der Luftdruck ab, das heißt das Gewicht der Luftkolonne auf eine Fläche wird geringer, das bezeichnet man als:',
        answers: [
        { text: '1. den horizontalen Luftdruckgradienten,', correct: false },
        { text: '2. den vertikalen Luftdruckgradienten,', correct: true },
        { text: '3. den vertikalen Temperaturgradienten.', correct: false }
        ]
    },
    {
        question: '5026    Der mittlere Luftdruck auf 5500 Meter Meereshöhe beträgt:',
        answers: [
        { text: '1.   ungefähr null,', correct: false },
        { text: '2.   ein Viertel des Drucks auf Meereshöhe,', correct: false },
        { text: '3.   die Hälfte des Drucks auf Meereshöhe (ungefähr 500 Millibar).', correct: true }
        ]
    },
    {
        question: '5027    Der mittlere Luftdruck auf Meereshöhe beträgt (wenn auch in Natur selten anzutreffen):',
        answers: [
        { text: '1.   1013,2 Millibar,', correct: true },
        { text: '2.   760 Millibar,', correct: false },
        { text: '3.   je nach Breitengrad.', correct: false }
        ]
    },
    {
        question: '5028    Wenn zwei Orte auf gleicher Meereshöhe unterschiedlichen Luftdruck haben, handelt es sich um:',
        answers: [
        { text: '1.   den vertikalen Luftdruckgradienten,', correct: false },
        { text: '2.   den vertikalen Temperaturgradienten,', correct: false },
        { text: '3.   den horizontalen Luftdruckgradienten.', correct: true }
        ]
    },
    {
        question: '5029    Was sind Isobaren?',
        answers: [
        { text: '1.   Linien, die Orte mit gleicher Meershöhe verbinden,', correct: false },
        { text: '2.   Linien, die Orte mit gleicher Temperatur verbinden,', correct: false },
        { text: '3.   Linien, die Orte mit gleichem Luftdruck verbinden.', correct: true }
        ]
    },
    {
        question: '5030    Was versteht man unter dem meteorologischen Wind?',
        answers: [
        { text: '1.   Die Bewegung der Luftmassen von einem Hochdruckgebiet in ein Tiefdruckgebiet,', correct: true },
        { text: '2.   die Bewegung der Luftmassen von einem Tiefdruckgebiet in ein Hochdruckgebiet,', correct: false },
        { text: '3.   der Wind, der durch Bodenerwärmung entsteht.', correct: false }
        ]
    },
    {
        question: '5031    Warum ist die Windrichtung zwischen einem Hoch- und einem Tiefdruckgebiet nie geradlinig?',
        answers: [
        { text: '1.   Nur wegen der vielen Hindernisse auf der Erdoberfläche,', correct: false },
        { text: '2.   nur wegen der vielen Tiefdruckgebiete rund um das Hochdruckgebiet,', correct: false },
        { text: '3.   hauptsächlich wegen der Corioliskraft und der vielen Hindernisse auf der Erdoberfläche.', correct: true }
        ]
    },
    {
        question: '5032   Alle Körper, Strömungen und Gase, die sich gegenüber der Erdoberfläche bewegen, mit einer parallelen Komponente zu den Meridianen, erfahren eine Ablenkung von ihrer ursprünglich geradlinigen Bahn. Wie heißt die Kraft, die diese Ablenkung erzeugt und wodurch wird sie verursacht?',
        answers: [
        { text: '1. Coriolis-Kraft, sie wird durch die Drehung der Erde um ihre eigene Achse erzeugt,', correct: true },
        { text: '2. Coriolis-Kraft, sie wird durch die Revolution der Erde um die Sonne erzeugt,', correct: false },
        { text: '3. Abweichende Kraft, sie wird nur durch die Reibungskraft bei verschiedenen Bewegungsarten erzeugt.', correct: false }
        ]
    },
    {
        question: '5033 Auf der Nordhalbkugel erzeugt die Coriolis-Kraft eine Abweichung der Luftmassen, die sich von einem Hochdruckgebiet zu einem Tiefdruckgebiet bewegen, nach: (Achtung:Skript Lösung ist nicht korrekt!)',
        answers: [
        { text: '1. rechts,', correct: false },
        { text: '2. links,', correct: true },
        { text: '3. zu anderen benachbarten Hochdruckgebieten hin.', correct: false }
        ]
    },
    {
        question: '5034 Wie drehen die Luftmassen auf der nördlichen Hemisphäre, innerhalb eines Hochdruckgebietes?',
        answers: [
        { text: '1. Entgegen dem Uhrzeigersinn, von oben gesehen (z.B. vom Satelliten aus gesehen),', correct: false },
        { text: '2. im Uhrzeigersinn, von oben gesehen (z.B. vom Satelliten aus gesehen),', correct: true },
        { text: '3. im Uhrzeigersinn, von unten gesehen.', correct: false }
        ]
    },
    {
        question: '5035    Wie drehen Luftmassen auf der nördlichen Hemisphäre, innerhalb eines Tiefdruckgebietes?',
        answers: [
        { text: '1.   Entgegen dem Uhrzeigersinn, von unten gesehen,', correct: false },
        { text: '2.   im Uhrzeigersinn, von oben gesehen,', correct: false },
        { text: '3.   entgegen dem Uhrzeigersinn, von oben gesehen.', correct: true }
        ]
    },
    {
        question: '5036    Wie werden die typischen Luftdruckgestaltungen auf den Wetterkarten eingezeichnet?',
        answers: [
        { text: '1.   Antizyklon „L“ (low pressure / tiefer Luftdruck) Zyklone „H“ (high pressure / hoher Luftdruck),', correct: false },
        { text: '2.   Antizyklon „H“ (high pressure / hoher Luftdruck) Zyklone „L“ (low pressure / tiefer Luftdruck),', correct: true },
        { text: '3.   Zyklone “H” (high pressure / hoher Luftdruck) Antizyklone “L” (low pressure / tiefer Luftdruck).', correct: false }
        ]
    },
    {
        question: '5037    Worauf lassen eng aneinander liegende Isobaren schließen?',
        answers: [
        { text: '1.   geringer horizontaler Druckgradient und starker Wind,', correct: false },
        { text: '2.   hoher horizontaler Luftdruckgradient und infolgedessen starker Wind,', correct: true },
        { text: '3.   hoher vertikaler Luftdruckgradient und starker Wind.', correct: false }
        ]
    },
    {
        question: '5038    Die Isobaren auf einer Wetterkarte lassen uns folgendes erkennen:',
        answers: [
        { text: '1.   die Windrichtung, die Windstärke und die Druckverteilung,', correct: true },
        { text: '2.   die Bewölkung, hauptsächlich für die Wetterprognose,', correct: false },
        { text: '3.   den vertikalen Luftdruckgradienten.', correct: false }
        ]
    },
    {
        question: '5039    Was versteht man unter dem Begriff: meteorologischer Wind?',
        answers: [
        { text: '1.   Der Wind, der durch starke Gewitter und Niederschläge entsteht', correct: false },
        { text: '2.   Hangaufwind und Thermik,', correct: false },
        { text: '3.   der Wind, der durch die unterschiedlichen Luftdruckgebiete auf der Erdoberfläche entsteht.', correct: true }
        ]
    },
    {
        question: '5040    Wind aus Süd kommt aus:',
        answers: [
        { text: '1.   135°', correct: false },
        { text: '2.   270°', correct: false },
        { text: '3.   180°', correct: true }
        ]
    },
    {
        question: '5041    Wind aus Nord-Ost kommt aus:',
        answers: [
        { text: '1.   45°', correct: true },
        { text: '2.   225°', correct: false },
        { text: '3.   135°', correct: false }
        ]
    },
    {
        question: '5042 Nordhalbkugel. Ein Tiefdruckgebiet hat ihr Zentrum nördlich eines bestimmten Punktes der Erdoberfläche. In diesem Punkt erwartet man sich den meteorologischen Wind aus folgender Richtung:',
        answers: [
        { text: '1. Nord,', correct: false },
        { text: '2. West,', correct: true },
        { text: '3. Ost.', correct: false }
        ]
    },
    {
        question: '5043   Nordhalbkugel. Ein Tiefdruckgebiet hat ihr Zentrum östlich eines bestimmten Punktes der Erdoberfläche. In diesem Punkt erwartet man sich den meteorologischen Wind aus folgender Richtung:',
        answers: [
        { text: '1. Nord,', correct: true },
        { text: '2. Süd,', correct: false },
        { text: '3. West.', correct: false }
        ]
    },
    {
        question: '5044 Nordhalbkugel. Ein Hochdruckgebiet hat ihr Zentrum nördlich eines bestimmten Punktes der Erdoberfläche. In diesem Punkt erwartet man sich den meteorologischen Wind aus folgender Richtung:',
        answers: [
        { text: '1. West,', correct: false },
        { text: '2. Ost,', correct: true },
        { text: '3. Nord.', correct: false }
        ]
    },
    {
        question: '5045 Nordhalbkugel. Ein Hochdruckgebiet hat ihr Zentrum westlich eines bestimmten Punktes der Erdoberfläche. In diesem Punkt erwartet man sich den meteorologischen Wind aus folgender Richtung:',
        answers: [
        { text: '1. Süd,', correct: false },
        { text: '2. Ost,', correct: false },
        { text: '3. Nord.', correct: true }
        ]
    },
    {
        question: '5046    Die Luft, innerhalb der Troposphäre wird direkt von der Sonne erwärmt, stimmt das?',
        answers: [
        { text: '1.   Ja, durch direkte Einstrahlung,', correct: false },
        { text: '2.   nein, durch ein Hochdruckgebiet,', correct: false },
        { text: '3.   nein, nur indirekt, das heißt, wiedergegebene Wärme vom Boden.', correct: true }
        ]
    },
    {
        question: '5047    Welcher ist der Erwärmungsprozess der Luft durch die Sonne innerhalb der Troposphäre?',
        answers: [
        { text: '1.   Bodenerwärmung, Weiterleiten der Wärme an die darüberliegende Luft und konvektive Strömungen,', correct: true },
        { text: '2.   Bodenerwärmung und konvektive Strömungen,', correct: false },
        { text: '3.   direkte Erwärmung der Luft durch die Sonne und konvektive Strömungen.', correct: false }
        ]
    },
    {
        question: '5048 Mit zunehmender Höhe innerhalb der Troposphäre, verändert sich die Lufttemperatur folgendermaßen:',
        answers: [
        { text: '1. sie nimmt zu,', correct: false },
        { text: '2. sie bleibt konstant,', correct: false },
        { text: '3. im Durchschnitt nimmt sie ab.', correct: true }
        ]
    },
    {
        question: '5049    Die Veränderung der Temperatur mit zunehmender Höhe nennt man:',
        answers: [
        { text: '1.   horizontaler Temperaturgradient,', correct: false },
        { text: '2.   vertikaler Temperaturgradient,', correct: true },
        { text: '3.   vertikaler Luftdruckgradient.', correct: false }
        ]
    },
    {
        question: '5050    Die vertikale Temperaturdifferenz der Standardluft beträgt:',
        answers: [
        { text: '1.   1° C alle 100 Meter Höhe,', correct: false },
        { text: '2.   0,65° C alle 100 Meter Höhe,', correct: true },
        { text: '3.   6,5° C alle 100 Meter Höhe.', correct: false }
        ]
    },
    {
        question: '5051    Die Kurve die man erhält, wenn man die Temperatur alle 100 m Höhe misst, nennt sich:',
        answers: [
        { text: '1.   Zustandsdiagramm oder Zustandskurve der Atmosphäre in einem bestimmten Ort zu einer bestimmten Zeit,', correct: true },
        { text: '2.   die trockenadiabatische Kurve der Atmosphäre in einem bestimmten zu einer bestimmten Zeit,', correct: false },
        { text: '3.   die Isotherme in einem bestimmten Ort zu einer bestimmten Zeit.', correct: false }
        ]
    },
    {
        question: '5052   Der vertikale thermische Gradient der Atmosphäre in einem bestimmten Ort zu einer bestimmten Zeit erhält man:',
        answers: [
        { text: '1. aus der Zustandskurve der Atmosphäre für diesen bestimmten Ort und diese bestimmte Tageszeit,', correct: true },
        { text: '2. aus der Wetterkarte für diesen bestimmten Ort und diese bestimmte Tageszeit,', correct: false },
        { text: '3. aus dem Vergleich zwischen der trockenadiabatischen und der feuchtadiabatischen Kurve für diesen bestimmten Ort und diese bestimmte Tageszeit.', correct: false }
        ]
    },
    {
        question: '5053 Luftmassen steigen, dehnen sich aus, dabei sinkt die Temperatur. Wie nennt man diesen Vorgang?',
        answers: [
        { text: '1. Konvektives Steigen mit Wärmeaustausch mit der Außenluft,', correct: false },
        { text: '2. dynamisches Steigen mit Wärmeaustausch mit der Außenluft,', correct: false },
        { text: '3. adiabatisches Aufsteigen der Luft ohne Temperaturaustausch mit der Außenluft.', correct: true }
        ]
    },
    {
        question: '5054    Luftmassen, die trockenadiabatisch aufsteigen und dabei nicht kondensieren, verlieren:',
        answers: [
        { text: '1.   6.5° C alle 1000 Meter.', correct: false },
        { text: '2.   1° C alle 100 Meter.', correct: true },
        { text: '3.   je nach Tagestemperaturgradient.', correct: false }
        ]
    },
    {
        question: '5055 Die Temperaturabnahme der Luft, die adiabatisch bis zu einer bestimmten Höhe aufsteigt, ohne Kondensation des Wasserdampfes, nennt sich:',
        answers: [
        { text: '1. vertikaler Temperaturgradient, er hängt von der Zeit und dem Ort ab, wo er stattfindet,', correct: false },
        { text: '2. trockenadiabatischer Gradient, er hängt hauptsächlich von der Zeit und dem Ort ab, wo er stattfindet,', correct: false },
        { text: '3. trockenadiabatischer Gradient, und er hängt praktisch nicht von der Zeit und dem Ort ab, wo er stattfindet.', correct: true }
        ]
    },
    {
        question: '5056 Die adiabatisch aufsteigende Luft enthält eine bestimmte Menge Wasserdampf. Bei Temperaturabnahme wird der Taupunkt erreicht und der Wasserdampf beginnt zu kondensieren. Ein weiteres Aufsteigen der Luft bewirkt eine Temperaturabnahme von:',
        answers: [
        { text: '1. 1° C alle 100 Meter (der Gradient ist praktisch konstant mit der Höhe),', correct: false },
        { text: '2. etwa 0,5° C alle 100 Meter (der Gradient ist nicht konstant und nimmt zu, wenn die Temperatur abnimmt),', correct: true },
        { text: '3. etwa 2° C alle 100 Meter.', correct: false }
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
        question: '5058    Wenn der vertikale Temperaturgradient höher ist als 1° C pro 100 Meter, bezeichnet man die Luft als:',
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
        { text: '1.   ihr vertikaler Temperaturgradient niedriger als 1° C pro 100 Meter ist.', correct: true },
        { text: '2.   ihr vertikaler Temperaturgradient höher als 1° C pro 100 Meter ist,', correct: false },
        { text: '3.   ihr horizontaler Temperaturgradient niedriger ist als der feuchtadiabatische.', correct: false }
        ]
    },
    {
        question: '5062 Wenn der vertikale Temperaturgradient einer trockenen Luftmasse niedriger als 1° C pro 100 Meter ist, bezeichnet man die Luft als:',
        answers: [
        { text: '1. stabil,', correct: true },
        { text: '2. labil,', correct: false },
        { text: '3. indifferent.', correct: false }
        ]
    },
    {
        question: '5063 Angenommen, auf einer bestimmten Höhe beträgt die Temperatur 12° C: was passiert mit einem aufsteigenden Luftpaket (Luftblase), das auf gleicher Höhe eine Temperatur von 14° C hat?',
        answers: [
        { text: '1. Es bleibt sofort stehen,', correct: false },
        { text: '2. es beginnt zu sinken,', correct: false },
        { text: '3. es wird weitersteigen.', correct: true }
        ]
    },
    {
        question: '5064 Wenn ein sehr feuchtes Luftpaket durch eine konvektive Strömung zu steigen beginnt, wie beeinflusst die Kondensation des Wasserdampfes sein Steigen?',
        answers: [
        { text: '1. Wahrscheinlich hört die Steigung auf,', correct: false },
        { text: '2. bestimmt wird das Steigen beschleunigt,', correct: true },
        { text: '3. wahrscheinlich beeinflusst die Kondensation des Wasserdampfes nicht die aufsteigende Bewegung.', correct: false }
        ]
    },
    {
        question: '5065 Was geschieht, wenn eine feuchte Luftmasse, die in labiler Luft zu steigen beginnt, weil sie stärker erwärmt wurde als die Außenluft, den Kondensationspunkt erreicht?',
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
        { text: '3. Es steigt bis zum erreichen der Außentemperatur.', correct: true }
        ]
    },
    {
        question: '5067 Wozu kann es bei starker Bodenerwärmung und feuchten und sehr labilen Luftmassen führen?',
        answers: [
        { text: '1. Zu stark aufsteigenden Luftmassen (Thermik) und Cumulusaufbau,', correct: true },
        { text: '2. Zu stark aufsteigender Thermik ohne Entwicklung von Cumuluswolken,', correct: false },
        { text: '3. Zur Bildung von stratifizierter Bewölkung und Nebel.', correct: false }
        ]
    },
    {
        question: '5068    Was versteht man unter Konvektionsströmung?',
        answers: [
        { text: '1.   Horizontale Strömungen vom Hoch ins Tief,', correct: false },
        { text: '2.   vertikale, geländebedingte Strömungen,', correct: false },
        { text: '3.   vertikale Strömungen, wegen ihrer höheren Temperatur als die Außenluft.', correct: true }
        ]
    },
    {
        question: '5069 Wozu kann die Bodenerwärmung bei Windstille oder schwachem Wind in den Tälern und Ebenen führen?',
        answers: [
        { text: '1. Zu meteorologischem Wind,', correct: false },
        { text: '2. zu steigenden Luftmassen (Thermikblasen),', correct: true },
        { text: '3. zu stratifizierter Bewölkung.', correct: false }
        ]
    },
    {
        question: '5070    Was erleichtert das Ablösen von Thermikblasen?',
        answers: [
        { text: '1.   Windstille und ein Gelände ohne Hindernisse,', correct: false },
        { text: '2.   leichter Wind und Hindernisse an Boden,', correct: true },
        { text: '3.   leichter Wind und keine Hindernisse am Boden.', correct: false }
        ]
    },
    {
        question: '5071    Worauf sind thermisch-konvektive Strömungen hauptsächlich zurückzuführen?',
        answers: [
        { text: '1.   Auf stabile Luftmassen,', correct: false },
        { text: '2.   auf eine sehr hohe Luftfeuchtigkeit,', correct: false },
        { text: '3.   auf die starke Bodenerwärmung und die Abgabe der Wärme an die darüber liegende Luft.', correct: true }
        ]
    },
    {
        question: '5072    Die unterschiedliche Beschaffenheit und Farbe des Bodens begünstigt:',
        answers: [
        { text: '1.   das Entstehen von labilen Luftmassen,', correct: false },
        { text: '2.   das Auslösen von meteorologischem Wind,', correct: false },
        { text: '3.   die Ablöse von Thermik.', correct: true }
        ]
    },
    {
        question: '5073 Wenn wegen Mangel an Feuchtigkeit die Thermik nicht zur Kondensation führt und keine Wolken entstehen, dann nennt man sie:',
        answers: [
        { text: '1. Blauthermik,', correct: true },
        { text: '2. adiabatische Thermik,', correct: false },
        { text: '3. konvektive Thermik.', correct: false }
        ]
    },
    {
        question: '5074 Wodurch kann man eine Thermik bei genügend Luftfeuchtigkeit erkennen?',
        answers: [
        { text: '1. Durch die Entstehung von stratifizierten Wolken in einer bestimmten Höhe,', correct: false },
        { text: '2. durch die Entstehung von Kumulus-Wolken in einer bestimmten Höhe,', correct: true },
        { text: '3. nur durch den blauen Himmel.', correct: false }
        ]
    },
    {
        question: '5075 Welche Bodenbeschaffenheit ist bei günstiger Sonneneinstrahlung für die Thermik am günstigsten?',
        answers: [
        { text: '1. Grüne Wiesen,', correct: false },
        { text: '2. große Gewässer,', correct: false },
        { text: '3. felsiges Gelände.', correct: true }
        ]
    },
    {
        question: '5076 Gibt es außer der Konvektivströmung noch andere Ursachen für das Aufsteigen von Luftmassen?',
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
        question: '5078    Kann Hangaufwind während seines Steigens sich in reine Thermik verwandeln?',
        answers: [
        { text: '1.   Ja, bei stabilen Luftmassen,', correct: false },
        { text: '2.   ja, innerhalb von sehr labilen Luftmassen, am wahrscheinlichsten in Höhen oberhalb des Kondensationspunktes,', correct: true },
        { text: '3.   nein, auch nicht bei sehr labilen Luftmassen.', correct: false }
        ]
    },
    {
        question: '5079    Was kann geschehen, wenn sich bei mäßigem Hangaufwind Thermikblasen ablösen?',
        answers: [
        { text: '1.   Es können sich stark steigende Luftmassen bilden,', correct: true },
        { text: '2.   es entstehen nur starke Turbulenzen,', correct: false },
        { text: '3.   die Dynamik bleibt trotzdem dominant gegenüber der Thermik.', correct: false }
        ]
    },
    {
        question: '5080    Was versteht man unter Inversion?',
        answers: [
        { text: '1.   Ein unübliches Abnehmen der Temperatur in einer bestimmten Höhe,', correct: false },
        { text: '2.   ein unübliches Verhalten der Lufttemperatur, wenn sie mit größerer Höhe zunimmt,', correct: true },
        { text: '3.   eine Thermikblase, die wieder sinkt, weil sie die Temperatur der Außenluft erreicht hat.', correct: false }
        ]
    },
    {
        question: '5081    Bei Bodeninversion kann folgendes vorkommen:',
        answers: [
        { text: '1.   dass sich Kumuluswolken in Bodennähe entwickeln,', correct: false },
        { text: '2.   dass sich in Bodennähe die Sichtverhältnisse verbessern,', correct: false },
        { text: '3.   dass sich Bodennebel bildet, hauptsächlich in den Nachtstunden.', correct: true }
        ]
    },
    {
        question: '5082    Wie kann man am Starthang eine im Tal liegende Inversion erkennen?',
        answers: [
        { text: '1.   Durch einen Dunstschleier unterhalb der Inversionsschicht,', correct: true },
        { text: '2.   durch Konvektionswolken in Bodennähe,', correct: false },
        { text: '3.   durch eine sehr klare Sicht unterhalb der Inversionsschicht.', correct: false }
        ]
    },
    {
        question: '5083    Worauf lässt eine Inversionsschicht im Tal schließen?',
        answers: [
        { text: '1.   auf nichts Besonderes,', correct: false },
        { text: '2.   auf unruhige Luftschichtungen zwischen Inversionsschicht und der darüber liegenden Standardluft,', correct: true },
        { text: '3.   auf Kumuluswolken gleich oberhalb der Inversionsschicht.', correct: false }
        ]
    },
    {
        question: '5084 Was versteht man unter Front oder Perturbation?',
        answers: [
        { text: '1. Eine Grenzfläche zwischen zwei Luftmassen mit unterschiedlichen physikalischen Eigenschaften und die damit verbundenen Wetterphänomene,', correct: true },
        { text: '2. die Wolken, die entstehen, wenn der Luftdruck in Bodennähe sich durch das Fortbewegen von Luftmassen rasch verändert,', correct: false },
        { text: '3. die Wolken, die entstehen, wenn es durch die Bewegung von Luftmassen auf den Gebirgserhebungen starken Wind gibt.', correct: false }
        ]
    },
    {
        question: '5085    Was versteht man unter einer Warmfront?',
        answers: [
        { text: '1.   Eine Perturbation, die entsteht, wenn kalte Luftmassen auf wärmere Luft treffen,', correct: false },
        { text: '2.   eine Perturbation, die entsteht, wenn warme Luftmassen auf kältere Luft treffen,', correct: true },
        { text: '3.   eine Perturbation, die nur eine Erhöhung der Bodentemperatur bewirkt.', correct: false }
        ]
    },
    {
        question: '5086 Welche Wetterlage herrscht beim Durchzug einer Warmfront?',
        answers: [
        { text: '1. Vertikaler Wolkenaufbau, wie Kumulus Congestus oder Kumulus Nimbus und starke Niederschläge von kurzer Dauer,', correct: false },
        { text: '2. stratifizierte Bewölkung wie Nimbostratus, Altostratus und Stratus, anhaltende Niederschläge und leicht steigende Durchschnittstemperatur,', correct: true },
        { text: '3. stratifizierte Bewölkung mit starken Niederschlägen, aber von kurzer Dauer.', correct: false }
        ]
    },
    {
        question: '5087    Was versteht man unter einer Kaltfront?',
        answers: [
        { text: '1.   Eine Perturbation, die entsteht, wenn kalte Luftmassen auf wärmere Luft treffen,', correct: true },
        { text: '2.   eine Perturbation, die entsteht, wenn warme Luftmassen auf kältere Luft treffen,', correct: false },
        { text: '3.   eine Perturbation, die nur eine Erniedrigung der Bodentemperatur bewirkt.', correct: false }
        ]
    },
    {
        question: '5088    Welche Wetterlage herrscht beim Durchzug einer Kaltfront?',
        answers: [
        { text: '1.   Horizontale Bewölkung, schwache aber anhaltende Niederschläge und steigende Temperatur,', correct: false },
        { text: '2.   vertikale Bewölkung, schwache und anhaltende Niederschläge,', correct: false },
        { text: '3.   vertikale Bewölkung, starke Niederschläge von kurzer Dauer und sinkende Temperatur.', correct: true }
        ]
    },
    {
        question: '5089 Worauf lassen labile Luftmassen und starker vertikaler Wolkenaufbau, wie Cumulonimbus und Cumulocongestus, schließen?',
        answers: [
        { text: '1. Auf eine Kaltfront,', correct: true },
        { text: '2. auf eine Warmfront,', correct: false },
        { text: '3. auf eine Inversionsfront in mittleren Höhen.', correct: false }
        ]
    },
    {
        question: '5090    Worauf lassen stratifizierte Bewölkung, wie Nimbostratus und Altostratus, schließen?',
        answers: [
        { text: '1.   Auf eine Kaltfront,', correct: false },
        { text: '2.   auf eine Warmfront,', correct: true },
        { text: '3.   auf eine Kaltfront über Gebirgserhebungen.', correct: false }
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
        question: '5092    Welche Wolken gehören zu den tiefen Wolken?',
        answers: [
        { text: '1.   Stratus, Nimbostratus und Cirrostratus,', correct: false },
        { text: '2.   Stratus, Nimbostratus und Stratocumulus,', correct: true },
        { text: '3.   Cumulus, Cirrocumulus, Stratocumulus, Cumulonimbus.', correct: false }
        ]
    },
    {
        question: '5093    Welche Wolken gehören zu den mittleren Wolken?',
        answers: [
        { text: '1.   Altostratus und Altocumulus,', correct: true },
        { text: '2.   Cumulonimbus und Altostratus,', correct: false },
        { text: '3.   Altostratus, Altocumulus und Cirrocumulus.', correct: false }
        ]
    },
    {
        question: '5094    Welche Wolken gehören zu den hohen Wolken?',
        answers: [
        { text: '1.   Altocumulus und Altostratus,', correct: false },
        { text: '2.   Altocumulus und Cumulonimbus,', correct: false },
        { text: '3.   Cirrus, Cirrostratus und Cirrocumulus.', correct: true }
        ]
    },
    {
        question: '5095    Zu welcher Gruppe gehören die Cumulus- (Thermikwolken)?',
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
        { text: '1. Eine Wolke mit horizontaler Entwicklung, ähnlich wie ein Nimbostratus,', correct: false },
        { text: '2. ein Cumulus am Höhepunkt seiner starken, vertikalen Entwicklung, mit Erscheinungen wie: Niederschläge, Hagel, starke Turbulenzen, Blitz und starke Windscherungen,', correct: true },
        { text: '3. ein Cumulus mit Gewittererscheinungen, typisch für unsere Gebirgsregionen.', correct: false }
        ]
    },
    {
        question: '5098    Kann man einen Cumulonimbus beim Sport- und Wanderflug als gefährlich bezeichnen?',
        answers: [
        { text: '1.   Nein, es handelt sich um eine sehr nützliche Wolke,', correct: false },
        { text: '2.   ja, es handelt sich dabei um die gefürchtete Gewitterwolke,', correct: true },
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
        question: '5100    Sind stratifizierte Wolken (Schichtwolken) für den Sport- und Wanderflug interessant?',
        answers: [
        { text: '1.   Ja, sie eignen sich für lange Streckenflüge,', correct: false },
        { text: '2.   ja,', correct: false },
        { text: '3.   nein.', correct: true }
        ]
    },
    {
        question: '5101       Schließt das Vorhandensein von dichten Schichtwolken in verschiedenen Höhen einen starken Cumulus-Aufbau aus?',
        answers: [
        { text: '1. Ja, denn die Schichtwolken deuten auf eine Warmfront hin, Konvektivwolken gibt es nicht,', correct: false },
        { text: '2. nein, denn die Temperaturerhöhung, die bei einer Warmfront mit Schichtwolken auftritt, kann zu steigenden Luftmassen mit Bildung von Konvektivwolken führen,', correct: false },
        { text: '3. nein, die Schichtwolken können durch eine Okklusionsfront erzeugt werden, dabei können Konvektivwolken und sogar Gewitterwolken entstehen.', correct: true }
        ]
    },
    {
        question: '5102 Wenn starke Winde auf Gebirgsketten auflaufen, können dabei Wellen entstehen, die charakterisiert werden durch das Vorhandensein von:',
        answers: [
        { text: '1. hohen Schichtwolken wie Cirrocumulus, die sich in Cirrostratus und dann in Cumuluswolken verwandeln,', correct: false },
        { text: '2. tiefen Schichtwolken wie Stratus,', correct: false },
        { text: '3. linsenförmigen Wolken oder Lenticularis (meistens der Art Altocumulus, manchmal auch Stratocumulus oder Cirrocumulus) und Rotorwolken (Cumulus fractus), welche die durch Gebirgserhöhungen erzeugte Wellenbewegung anzeigen.', correct: true }
        ]
    },
    {
        question: '5103    Welche sind die typischen Kennzeichen einer Lenticularis?',
        answers: [
        { text: '1.   Ihre mandelförmige, aerodynamische Form,', correct: true },
        { text: '2.   ihre vertikale Entwicklung,', correct: false },
        { text: '3.   ihre schnelle Vorwärtsbewegung.', correct: false }
        ]
    },
    {
        question: '5104    Typisch für das Mikroklima von gebirgigen Zonen sind, außer dem meteorologischen Wind, auch noch:',
        answers: [
        { text: '1.   Bergwind am Abend und Talwind am Morgen,', correct: false },
        { text: '2.   Bergwind in der Nacht und am frühen Morgen, Talwind in den warmen Stunden des Tages,', correct: true },
        { text: '3.   Winde, die je nach Ort Stärke und Richtung ändern, aber zu jeder Tages- und Nachtzeit konstant sind.', correct: false }
        ]
    },
    {
        question: '5105 Aufgrund der unterschiedlichen Erwärmung von Festland und Wasserflächen entstehen in Gebieten am Meer:',
        answers: [
        { text: '1. Meeresbrise in den warmen Tagesstunden, Landbrise in der Nacht,', correct: true },
        { text: '2. Landbrise in den warmen Tagesstunden, und umgekehrt in der Nacht,', correct: false },
        { text: '3. nur Meeresbrise während der warmen Tagesstunden.', correct: false }
        ]
    },
    {
        question: '5106 Erzeugen Talwinde normalerweise auch Hangaufwind auf den Seitenhängen eines Tales?',
        answers: [
        { text: '1. Ja, abhängig von der Bodenbeschaffenheit,', correct: true },
        { text: '2. ja, unabhängig von der Bodenbeschaffenheit,', correct: false },
        { text: '3. nein, nie.', correct: false }
        ]
    },
    {
        question: '5107 Können im Laufe des Tages durch den Talwind auch starke Cumuluswolken entstehen?',
        answers: [
        { text: '1. Ja, denn der Talwind hebt die Luft an den Berghängen, dadurch können Cumuluswolken entstehen, bei labiler Luft auch mit starker vertikaler Entwicklung,', correct: true },
        { text: '2. ja, denn der Talwind erwärmt sich aufgrund der Reibung am Boden, beginnt bei labiler Luft zu steigen und führt so zu einem vertikalen Wolkenaufbau,', correct: false },
        { text: '3. nein, Talwinde führen nie zu vertikalem Wolkenaufbau.', correct: false }
        ]
    },
    {
        question: '5108     Kann ein Talwind so stark sein, dass er für Sport- und Wanderflieger gefährlich wird?',
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
        question: '5110 Was kann man sich erwarten, wenn durch ein Tal ein starker, seiner Längsachse paralleler Wind strömt?',
        answers: [
        { text: '1. Starken laminaren Wind,', correct: false },
        { text: '2. starken böigen Wind mit Rotoren, die parallel zu den Linien der maximalen Hangneigung an den Seitenhängen des Tales verlaufen,', correct: true },
        { text: '3. starken Wind mit kleinen Rotoren, meistens parallel zu der Längsachse des Tales.', correct: false }
        ]
    }, {
        question: '5111   Was kann man sich erwarten, wenn ein Tal von einem starken Wind angeströmt wird, dessen Richtung einen größeren Winkel als 45° zu der Längsachse des Tales bildet?',
        answers: [
        { text: '1. Windstille an den Talhängen, starker Wind auf dem Talboden,', correct: false },
        { text: '2. überall böiger Wind mit plötzlich ändernder Richtung, der das Vorhandensein von stehenden und wandernden Rotoren anzeigt,', correct: true },
        { text: '3. starker, laminarer Wind mit konstanter Richtung.', correct: false }
        ]
    },
    {
        question: '5112   Wird eine allein stehende, rundliche Erhebung vom Wind angeströmt, können sich leicht aufsteigende Luftströmungen bilden?',
        answers: [
        { text: '1. Ja, denn der Wind muss auf jeden Fall das Hindernis überwinden,', correct: false },
        { text: '2. das hängt nur von der Bodenbeschaffenheit ab,', correct: false },
        { text: '3. nein, denn der Wind hat die Tendenz, um das Hindernis herumzuströmen.', correct: true }
        ]
    },
    {
        question: '5113 Kann ein Rotor, der sich durch den Wind an einem Gebirgskamm oder -grat bildet, zur Entstehung eines konstanten Aufwindes führen?',
        answers: [
        { text: '1. Nein, nie,', correct: false },
        { text: '2. ja, aber nur auf der Aufwindseite,', correct: false },
        { text: '3. ja, auch auf der Leeseite, wenn der Rotor stationär ist und den Hang mit seiner aufsteigenden Seite anströmt.', correct: true }
        ]
    },
    {
        question: '5114 Das Vorhandensein von Rotoren auf der sonnenbeschienenen Leeseite einer Erhöhung:',
        answers: [
        { text: '1. erleichtert das Ablösen von manchmal auch starker Thermik (Leethermik),', correct: true },
        { text: '2. hat nichts zu tun mit der thermischen Aktivität des Hanges,', correct: false },
        { text: '3. verhindert jegliche Thermikbildung.', correct: false }
        ]
    },
    {
        question: '5115 Manchmal ist die Leeseite, besonders an Gebirgskämmen und -graten, gekennzeichnet durch:',
        answers: [
        { text: '1. schnell wandernde Wolken,', correct: false },
        { text: '2. einen besonderen Dunst um die Leeseite des Hanges,', correct: false },
        { text: '3. das Vorhandensein von stationären Rotorwolken, die sich ständig bilden und wieder auflösen.', correct: true }
        ]
    },
    {
        question: '5116   Wie werden die besonderen Phänomene genannt, die erzeugt werden, wenn eine Gebirgskette von sehr feuchten, aufsteigenden Luftmassen angeströmt wird?',
        answers: [
        { text: '1. Aufwindstau mit starker Wolkenbildung und Niederschlägen, Föhn auf der Leeseite mit warmem, trockenen, böigen Wind,', correct: true },
        { text: '2. Aufwindföhn mit warmem, trockenen, böigen Wind, Leestau mit starker Wolkenbildung und Niederschlägen,', correct: false },
        { text: '3. Stau und Föhn, mit gleichen meteorologischen Erscheinungen auf der Luv- und der Leeseite.', correct: false }
        ]
    },
    {
        question: '5117    Auf den Hängen der Alpensüdseite gibt es bei Nordföhn:',
        answers: [
        { text: '1.   Temperaturzunahme, starken, warmen, trockenen laminaren Wind, keine Rotoren oder Turbulenzen,', correct: false },
        { text: '2.   Temperaturzunahme, starken, warmen, trockenen böigen Wind, Rotoren und Turbulenzen,', correct: true },
        { text: '3.   Temperaturzunahme, starken, warmen, feuchten laminaren Wind, keine Rotoren oder Turbulenzen.', correct: false }
        ]
    },
    {
        question: '5118   Von der Ebene trifft feuchte Luft mit einer Temperatur von 10° C auf eine 3000 Meter hohe Gebirgskette, sie steigt auf, es bildet sich Stau bis zum Gebirgskamm und Föhn auf der Leeseite. Befindet sich die Kondensationshöhe auf der Luvseite auf 1000 Metern, welche Temperatur hat die Luft, wenn sie in die Ebene unterhalb der Gebirgskette gelangt?',
        answers: [
        { text: '1. Die gleiche wie auf der Aufwindseite, also 10° C,', correct: false },
        { text: '2. 13° C,', correct: false },
        { text: '3. etwa 20° C.', correct: true }
        ]
    },
    {
        question: '5119   Von der Ebene trifft feuchte Luft mit einer Temperatur von 10° C auf eine 3000 Meter hohe Gebirgskette, sie steigt auf, es bildet sich Stau bis zum Gebirgskamm und Föhn auf der Leeseite. Befindet sich die Kondensationshöhe auf der Luvseite auf 2000 Metern, welche Temperatur hat die Luft, wenn sie in die Ebene unterhalb der Gebirgskette gelangt?',
        answers: [
        { text: '1. Die gleiche wie auf der Aufwindseite, also 10° C,', correct: false },
        { text: '2. etwa 15° C,', correct: true },
        { text: '3. 20° C.', correct: false }
        ]
    },
    {
        question: '5120   Welche Art von Mikroklima kann ein Ort haben, der sich direkt auf der Leeseite einer Gebirgskette wie den Alpen befindet, und von atlantischen Luftmassen getroffen wird, die meistens von der französischen Ebene kommen?',
        answers: [
        { text: '1. Eher trocken und windig, wegen des Föhns,', correct: true },
        { text: '2. sehr feucht und regnerisch,', correct: false },
        { text: '3. viel kälter als auf der Leeseite.', correct: false }
        ]
    },
    ],

    chapter6 = [
    {
        question: '6001 Was ist ein Höhenmesser?',
        answers: [
        { text: '1.   Ein Instrument, das immer den Abstand eines Fluggerätes vom Boden misst,', correct: false },
        { text: '2.   ein Instrument, das die vertikale Geschwindigkeit eines Fluggerätes misst,', correct: false },
        { text: '3.   ein Instrument, das die Höhe eines Fluggerätes in Bezug zu einem bekannten Punkt, z.B. die Meereshöhe, misst.', correct: true }
        ]
    },
    {
        question: '6002 Wie funktioniert ein Höhenmesser normalerweise?',
        answers: [
        { text: '1. Er misst durch eine Membrandose oder einen elektronischen Sensor den Luftdruck und somit die Höhe, auf einer ablesbaren Skala,', correct: true },
        { text: '2. er misst die Meereshöhe mittels eines elektronischen Sensors,', correct: false },
        { text: '3. er misst die vertikale Geschwindigkeit gegenüber der Luft mittels eines elektronischen Sensors.', correct: false }
        ]
    },
    {
        question: '6003    Warum muss ein Höhenmesser reguliert werden?',
        answers: [
        { text: '1.   Weil sich die Lufttemperatur hinsichtlich der atmosphärischen Bedingungen und der Höhe ändert,', correct: false },
        { text: '2.   weil sich der Luftdruck auch hinsichtlich der atmosphärischen Bedingungen und nicht nur mit der Höhe ändert,', correct: true },
        { text: '3.   weil sich der Luftdruck mit der Höhe ändert.', correct: false }
        ]
    },
    {
        question: '6004 Wenn wir vor dem Start den Höhenmesser auf Starthöhe einstellen und bei der Landung eine unterschiedliche Höhe ablesen als die bekannte, was könnte passiert sein?',
        answers: [
        { text: '1. Der Luftdruck hat sich verändert,', correct: true },
        { text: '2. der Höhenmesser ist sicherlich kaputt,', correct: false },
        { text: '3. die Lufttemperatur hat sich verändert.', correct: false }
        ]
    },
    {
        question: '6005    Was wissen wir, wenn wir unseren Höhenmeter nach dem Luftdruck auf Meereshöhe (QNH) einstellen?',
        answers: [
        { text: '1.   Die geometrische Höhe gegenüber dem Grund,', correct: false },
        { text: '2.   die Höhe gegenüber der mittleren Meereshöhe,', correct: true },
        { text: '3.   die Höhe gegenüber der durchschnittlichen Höhe der Erde.', correct: false }
        ]
    },
    {
        question: '6006    Was ist ein Variometer?',
        answers: [
        { text: '1.   Ein Instrument, das während des Fluges die vertikale Geschwindigkeit misst,', correct: true },
        { text: '2.   ein Instrument, das beim Fliegen die Höhe gegenüber der Meereshöhe misst,', correct: false },
        { text: '3.   ein Instrument, das beim Fliegen die Geschwindigkeit der Luft misst.', correct: false }
        ]
    },
    {
        question: '6007 Wie funktioniert ein Variometer?',
        answers: [
        { text: '1. Es misst die momentane Veränderung der Lufttemperatur mittels eines elektronischen Sensors,', correct: false },
        {
            text: '2. es misst auch kleinste Veränderungen des Luftdruckes mittels eines Differentialbarometers oder eines elektronischen Sensors, ', correct: true
        },
        { text: '3. es misst die Veränderungen des Luftdruckes mittels eines Säulenbarometers.', correct: false }
        ]
    },
    {
        question: '6008 In welchen Situationen kann ein Variometer sehr hilfreich für ein sicheres Fliegen sein?',
        answers: [
        {
            text: '1. Wenn man z.B. bei Wolken oder unter einem Cumulus fliegt, können wir erkennen, ob wir hochgezogen werden und ob es ratsam wäre, schnell abzusteigen oder in eine andere, sichere Zone zu fliegen, ', correct: true
        },
        { text: '2. im Dynamikflug, da wir erkennen, wo man besser steigt und so sicher weiterfliegen kann,', correct: false },
        { text: '3. es gibt uns keine Hilfe für ein sichereres Fliegen, sondern ist nur ein Hilfsmittel beim Segeln.', correct: false }
        ]
    },
    {
        question: '6009    Was kann ein Anemometer während des Fliegens messen?',
        answers: [
        { text: '1.   Es misst die Geschwindigkeit gegenüber der Luft im Flug (relative Geschwindigkeit),', correct: true },
        { text: '2.   es misst die Geschwindigkeit gegenüber dem Grund beim Fliegen,', correct: false },
        { text: '3.   es misst die vertikale Geschwindigkeit beim Fliegen.', correct: false }
        ]
    },
    {
        question: '6010    Wie funktioniert ein Anemometer?',
        answers: [
        { text: '1.   Es misst den statischen Druck des relativen Windes und übersetzt ihn in eine Geschwindigkeitsangabe,', correct: false },
        { text: '2.   es misst direkt die kinetische Energie des Windes, und wandelt sie in Wärme um,', correct: false },
        {
            text: '3.   es misst den dynamischen Druck des relativen Windes oder seine Geschwindigkeit mittels mechanischer Vorrichtungen(kleine Propeller oder Venturirohr usw.) ', correct: true
        }
        ]
    },
    {
        question: '6011 In welchem Fall kann das Anemometer mit guter Annäherung die Geschwindigkeit gegenüber dem Grund anzeigen?',
        answers: [
        { text: '1. Wenn man in ruhiger Luft fliegt, ohne Wind und auf einer fast horizontalen Flugbahn,', correct: true },
        { text: '2. immer, unabhängig von der Flugbahn,', correct: false },
        { text: '3. nie.', correct: false }
        ]
    },
    {
        question: '6012    Was ist ein Kompass?',
        answers: [
        { text: '1.   Ein Instrument, das die Richtung des magnetischen Nordens anzeigt,', correct: true },
        { text: '2.   ein Instrument, das die Richtung des geographischen Nordens anzeigt,', correct: false },
        { text: '3.   ein Instrument, das den geographischen Süden anzeigt.', correct: false }
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
        question: '6014 Worauf muss man achten, damit der Kompass so genau wie möglich funktioniert, wenn man ihn zwischen andere Instrumente setzt?',
        answers: [
        { text: '1. Auf nichts Besonderes, der Kompass zeigt immer den magnetischen Norden,', correct: false },
        { text: '2. ihn so zu installieren, dass der magnetische und der geographische Norden übereinstimmen,', correct: false },
        { text: '3. auf die elektromagnetische Interferenz mit anderen elektronischen Geräten, wie Radios und besonders Mobiltelefone, die, wenn sie angeschaltet werden, das elektromagnetische Feld stören und die Kompassnadel beeinflussen können.', correct: true }
        ]
    },
    {
        question: '6015    Kann man behaupten, dass der geographische und der magnetische Norden übereinstimmen?',
        answers: [
        { text: '1.   Ja,', correct: false },
        { text: '2.   es hängt von den Jahreszeiten ab,', correct: false },
        { text: '3.   nein.', correct: true }
        ]
    },
    {
        question: '6016 Kann man mit Hilfe von Kompass, Höhenmesser, Anemometer und Variometer Instrumentalflug betreiben, z.B. in den Wolken?',
        answers: [
        { text: '1. Ja, wenn man ausreichend geschult ist,', correct: false },
        { text: '2. ja, aber nur kurzzeitig, da die Instrumentierung nicht vollständig ist,', correct: false },
        { text: '3. nein, die Instrumentierung ist überhaupt nicht vollständig, es fehlt die Information über die Position im Luftraum.', correct: true }
        ]
    },
    {
        question: '6017    Was kann das GPS-Gerät während des Fluges messen?',
        answers: [
        { text: '1.   Die Geschwindigkeit über Grund,', correct: true },
        { text: '2.   die Geschwindigkeit gegenüber der Luft,', correct: false },
        { text: '3.   die relative Feuchtigkeit.', correct: false }
        ]
    },
    {
        question: '6018 Kann man mit einem GPS-Gerät problemlos innerhalb von Wolken fliegen?',
        answers: [
        { text: '1. Ja, der GPS gibt die Flugrichtung mit großer Genauigkeit an,', correct: false },
        { text: '2. nein, auch weil der Empfang der von den Satelliten ausgesandten Signale in der Wolke gestört sein kann und das Gerät dann nicht mehr zuverlässig ist,', correct: true },
        { text: '3. ja, aber nur wenn man mit dem GPS auch einen nautischen Kompass benützt.', correct: false }
        ]
    },
    {
        question: '6019 Wir fliegen bei starkem Wind Richtung SÜDEN. Auf dem Bildschirm des GPS lesen wir jedoch eine Geschwindigkeit ab von 3 km/h Richtung NORDEN. Was ist los?',
        answers: [
        { text: '1. Das Gerät ist offensichtlich kaputt', correct: false },
        { text: '2. Wenn ich sicher bin, das mein Fluggerät in Richtung Süden ausgerichtet ist, dann bedeutet das, dass ich rückwärts fliege. Der Wind ist stärker als meine Geschwindigkeit gegenüber der Luft und ich muss so schnell wiemöglich meine Geschwindigkeit erhöhen', correct: true },
        { text: '3. Eine solche Situation kann sich nicht ereignen', correct: false }
        ]
    },
    {
        question: '6020 Wie funktioniert ein GPS-Gerät?',
        answers: [
        { text: '1. Es berechnet die Position im Luftraum mittels eines Bewegungssensors', correct: false },
        { text: '2. Es berechnet die Position im Luftraum durch kronometrischem Vergleich mit den Signalen, von einigen Satellitenauf ihrer Bahn um die Erde', correct: true },
        { text: '3. Es berechnet die Position im Raum mittels eines Differentialbarometers', correct: false }
        ]
    },
    ],

    chapter7 = [
    {
        question: '7001    Bevor man sich zum Startplatz begibt, ist es nötig:',
        answers: [
        { text: '1.   die Bodenbedingungen zu überprüfen,', correct: false },
        { text: '2.   die Bodenbeschaffenheiten der Landewiese überprüfen, und schauen ob ein Windsack vorhanden ist,', correct: true },
        { text: '3.   den Rückholdienst bereitzustellen.', correct: false }
        ]
    },
    {
        question: '7002 Bevor man einen Streckenflug unternimmt, muss man, zusätzlich zu allem anderen:',
        answers: [
        { text: '1. sich ausreichend ernähren, viel trinken, um ein Austrocknen zu vermeiden, die Rückholung organisieren, sich mit Mitteln auszurüsten, um eventuell die Nacht irgendwo draußen zu verbringen,', correct: false },
        { text: '2. dafür sorgen, dass man am Morgen startet, um länger Licht zu haben,', correct: false },
        { text: '3. die Luftfahrtkarte des Gebietes überprüfen, eventuelle Verbote und Landemöglichkeiten auf der Strecke aufzeichnen, sowie die meteorologischen Bedingungen genauestens abschätzen.', correct: true }
        ]
    },
    {
        question: '7003 Welche Hangneigung wird, wenn ein korrekter und gradueller Anlauf gewährleistet ist, als optimal und sicher für einen Start angesehen?',
        answers: [
        { text: '1. Mehr als 20° bis 35°, da sie schon so deutlich höher als der erreichbare Gleitwinkel ist,', correct: true },
        { text: '2. von 35° bis 45°, nur so ist sie höher als der erreichbare Gleitwinkel,', correct: false },
        { text: '3. über 45°, um schnell abzuheben und sicher alle Hindernisse auf der Flugbahn zu überfliegen.', correct: false }
        ]
    },
    {
        question: '7004    Wie sollte der Anlauf für den Start mit dem Drachen und dem Gleitschirm sein?',
        answers: [
        { text: '1.   Mit kurzen Schritten und konstanter Geschwindigkeit,', correct: false },
        { text: '2.   mit größer werdenden Schritten und zunehmender Geschwindigkeit,', correct: true },
        { text: '3.   ein schneller Sprint mit kurzen Schritten.', correct: false }
        ]
    },
    {
        question: '7005 Was muss man als Erstes direkt nach dem Start mit dem Drachen oder dem Gleitschirm tun, außer der Kontrolle der Flugbahn?',
        answers: [
        { text: '1. Etwas mehr bremsen, um höher zu fliegen,', correct: false },
        { text: '2. sich gut in den Sitz setzen,', correct: false },
        { text: '3. ein bisschen Geschwindigkeit aufnehmen, das bedeutet Sicherheit.', correct: true }
        ]
    },
    {
        question: '7006 Wie kann man das kleinstmögliche Sinken mit dem Drachen oder Gleitschirm erlangen, von anderen Bedingungen abgesehen?',
        answers: [
        { text: '1. Im Geradeausflug und mit dem höchstmöglichen Anstellwinkel,', correct: false },
        { text: '2. mit dem besten Gleiten bei Windstille,', correct: false },
        { text: '3. im Geradeausflug und mit einem Anstellwinkel zwischen dem besten Gleiten bei Windstille und dem Stallwinkel.', correct: true }
        ]
    },
    {
        question: '7007 Wie verändert sich das Penetrationsvermögen eines Flügels, bei Verändern des Gegenwindes?',
        answers: [
        { text: '1.   Es wird besser,', correct: false },
        { text: '2.   es wird schlechter,', correct: false },
        { text: '3.   es verändert sich nicht, weil es nur vom Anstellwinkel des Flügels abhängt.', correct: true }
        ]
    },
    {
        question: '7008    Wenn wir die längste Flugstrecke mit dem Drachen oder Gleitschirm erreichen wollen, müssen wir:',
        answers: [
        { text: '1.   Die Manöver möglichst reduzieren,', correct: false },
        { text: '2.   mit dem besten Gleiten über Grund möglichst geradeaus fliegen,', correct: true },
        { text: '3.   mit dem geringsten Sinken möglichst geradeaus fliegen.', correct: false }
        ]
    },
    {
        question: '7009    Wenn wir in bestimmten Konditionen möglichst lange fliegen wollen, müssen wir:',
        answers: [
        { text: '1.   die Manöver möglichst reduzieren,', correct: false },
        { text: '2.   mit dem besten Gleiten über Grund möglichst geradeaus fliegen,', correct: false },
        { text: '3.   mit dem geringsten Sinken möglichst geradeaus fliegen.', correct: true }
        ]
    },
    {
        question: '7010 Wie müssen wir die Geschwindigkeit verändern, um das beste Gleiten zu erreichen, wenn die Konditionen von ruhiger Luft auf Gegenwind wechseln?',
        answers: [
        { text: '1. Die Geschwindigkeit verringern im Vergleich zu der des besten Gleitens bei Windstille,', correct: false },
        { text: '2. die Geschwindigkeit erhöhen im Vergleich zu der des besten Gleitens bei Windstille,', correct: true },
        { text: '3. auf jeden Fall die Geschwindigkeit erhöhen bis zur maximal möglichen.', correct: false }
        ]
    },
    {
        question: '7011   Verändert sich beim Fliegen mit dem Drachen oder Gleitschirm das beste Gleiten über Grund, wenn sich die Geschwindigkeit des Gegenwinds verändert?',
        answers: [
        { text: '1. Ja, immer,', correct: true },
        { text: '2. nur, wenn der Gegenwind stärker wird,', correct: false },
        { text: '3. nein.', correct: false }
        ]
    },
    {
        question: '7012    Das Gleiten über Grund:',
        answers: [
        { text: '1.   wird schlechter, wenn der Gegenwind schwächer wird,', correct: false },
        { text: '2.   wird schlechter, wenn der Gegenwind stärker wird,', correct: true },
        { text: '3.   wird besser, wenn der Gegenwind stärker wird.', correct: false }
        ]
    },
    {
        question: '7013    Wie fliegt man, um bei steigenden Luftmassen das bestmögliche Gleiten zu erreichen?',
        answers: [
        { text: '1.   Mit einem größeren Anstellwinkel als beim besten Gleiten bei Windstille,', correct: true },
        { text: '2.   mit einem kleineren Anstellwinkel als beim besten Gleiten bei Windstille,', correct: false },
        { text: '3.   mit dem gleichen Anstellwinkel wie beim besten Gleiten bei Windstille.', correct: false }
        ]
    },
    {
        question: '7014 Wie fliegt man, um bei sinkenden Luftmassen das bestmögliche Gleiten zu erreichen?',
        answers: [
        { text: '1. Mit einem kleineren Anstellwinkel als beim besten Gleiten bei Windstille,', correct: true },
        { text: '2. mit einem größeren Anstellwinkel als beim besten Gleiten bei Windstille,', correct: false },
        { text: '3. mit dem gleichen Anstellwinkel wie beim besten Gleiten bei Windstille.', correct: false }
        ]
    },
    {
        question: '7015 Wir fliegen mit einer Geschwindigkeit von 10 km/h über Grund und einem Gegenwind von 30 km/h. Welche Geschwindigkeit würde unser Anemometer anzeigen?',
        answers: [
        { text: '1. 10 km/h,', correct: false },
        { text: '2. 30 km/h,', correct: false },
        { text: '3. 40 km/h.', correct: true }
        ]
    },
    {
        question: '7016 Wir fliegen mit einer Geschwindigkeit von 60 km/h über Grund und einem Rückenwind von 30 km/h. Welche Geschwindigkeit würde unser Anemometer anzeigen?',
        answers: [
        { text: '1. 90 km/h,', correct: false },
        { text: '2. 30 km/h,', correct: true },
        { text: '3. 40 km/h.', correct: false }
        ]
    },
    {
        question: '7017    Wozu verwendet man beim Fliegen mit dem Gleitschirm das Speedsystem?',
        answers: [
        { text: '1.   um bei Gegenwind das bessere Gleiten über Grund zu erzielen,', correct: true },
        { text: '2.   um das Sinken zu erhöhen und die Fluggeschwindigkeit zu verringern,', correct: false },
        { text: '3.   um bei Turbulenz den Neigungswinkel zu erhöhen.', correct: false }
        ]
    },
    {
        question: '7018 Wie fliegen wir bei meteorologischem Wind einen möglichst runden Vollkreis?',
        answers: [
        { text: '1. Indem wir die Flügelneigung während der Drehung so verändern, dass wir die Versetzung über dem Grund ausgleichen,', correct: true },
        { text: '2. indem wir die seitliche Neigung verstärken, wenn wir den Wind von vorne haben,', correct: false },
        { text: '3. indem wir die seitliche Neigung vermindern, wenn wir den Wind von der Seite haben.', correct: false }
        ]
    },
    {
        question: '7019   Wie fliegt man Kurven bei Dynamik am Hang, um in größter Sicherheit die maximale Leistung zu erreichen?',
        answers: [
        { text: '1. Vollkreise so nahe wie möglich am Hang,', correct: false },
        { text: '2. 180° immer zum Hang hin,', correct: false },
        { text: '3. 180° immer weg vom Hang und nicht zu steile Kurven.', correct: true }
        ]
    },
    {
        question: '7020    Warum fliegt man beim Thermikfliegen Vollkreise?',
        answers: [
        { text: '1.   Weil sich die Thermik dreht,', correct: false },
        { text: '2.   weil ihr Durchmesser nicht sehr groß ist,', correct: true },
        { text: '3.   weil wir beim stetigem Drehen weniger Sinken haben.', correct: false }
        ]
    },
    {
        question: '7021    Sobald man in einen thermischen oder dynamischen Aufwind eingeflogen ist, soll man:',
        answers: [
        { text: '1.   etwas anbremsen, um die atmosphärischen Konditionen besser zu nutzen,', correct: true },
        { text: '2.   beschleunigen, um die Konditionen besser zu nutzen,', correct: false },
        { text: '3.   dieselbe Geschwindigkeit beibehalten, um die Konditionen gut zu nutzen.', correct: false }
        ]
    },
    {
        question: '7022     Kann im Fluge mit einem Gleitschirm bei annähernd maximaler Geschwindigkeit Stall-Gefahr bestehen?',
        answers: [
        { text: '1.   Nein,', correct: false },
        { text: '2.   ja, wenn man plötzlich den Anstellwinkel reduziert,', correct: false },
        { text: '3.   ja, bei zu hohem Anstellwinkel.', correct: true }
        ]
    },
    {
        question: '7023 Bei starker Turbulenz fliegt man:',
        answers: [
        { text: '1. so langsam wie möglich, um das Material so wenig wie möglich zu belasten und die Kammern des Gleitschirms unter Druck zu halten,', correct: false },
        { text: '2. mit der Höchstgeschwindigkeit, um möglichst schnell aus dem turbulenten Gebiet herauszukommen,', correct: false },
        { text: '3. mit dem Drachen etwas schneller als die Geschwindigkeit des besten Gleitens und mit dem Gleitschirm etwas mehr angebremst, um Einklapper zu vermeiden.', correct: true }
        ]
    },
    {
        question: '7024 Wie kann man im Fluge die Windrichtung und die Windgeschwindigkeit am Boden feststellen?',
        answers: [
        { text: '1. Man beobachtet alles, was am Boden vom Wind bewegt wird: Fahnen, Rauch, Bäume, usw., und wie man beim Fliegen eines Vollkreises versetzt wird,', correct: true },
        { text: '2. indem man den Spion am Drachen oder Gleitschirm, wenn vorhanden, beobachtet,', correct: false },
        { text: '3. indem man die Bewegungen der Wolken beobachtet, dann weiß man immer, wie der Wind am Boden ist.', correct: false }
        ]
    },
    {
        question: '7025 Was versteht man unter einem „Achter“ - Landeanflug?',
        answers: [
        { text: '1. Mit wenigen Kurven erreicht der Pilot seinen Zielpunkt,', correct: false },
        { text: '2. Kurven von über 180° immer zur Landefläche hin, so verliert der Pilot langsam an Höhe und bleibt immer in der Nähe und mit dem Blick auf den Landeplatz,', correct: true },
        { text: '3. enge Kurven, so verliert der Pilot schnell an Höhe und bleibt immer in der Nähe des Landeplatzes.', correct: false }
        ]
    },
    {
        question: '7026 Was versteht man unter einem „C“ - oder Landeanflug mit Platzrunde (aeronautischer L.)?',
        answers: [
        { text: '1. Ein Landeanflug bestehend aus 3 Phasen: „Gegenanflug“, „Queranflug“ und „Endanflug“, so gelangt man mit guter Genauigkeit zum Zielpunkt und muss in Bodennähe nicht mehr viele Manöver machen,', correct: true },
        { text: '2. ein sehr komplexer Landeanflug mit vielen verschiedenen Phasen und Manövern in Bodennähe,', correct: false },
        { text: '3. ein Landeanflug, der nur für Flugzeuge geeignet ist.', correct: false }
        ]
    },
    {
        question: '7027    Der Landeplatz ist sehr belebt. Wenn die anderen Bedingungen es ermöglichen, landen wir:',
        answers: [
        { text: '1.   mit der „Achtertechnik“,', correct: false },
        { text: '2.   mit der Platzrunde ( „C-Landung“),', correct: true },
        { text: '3.   mit einem direkten Landeanflug mit „S“-Runden im Endanflug', correct: false }
        ]
    },
    {
        question: '7028    Bei einem Landeanflug mit vielen Drachen und Gleitschirmen in der Luft ist:',
        answers: [
        { text: '1.   auf die Flugregeln zu achten und die Platzrunde („C“-Landung) zu fliegen, wer am Tiefsten ist, landet als Erster,', correct: true },
        { text: '2.   auf die Flugregeln zu achten und die „Achtertechnik“ zu fliegen, wer am Tiefsten ist landet als Erster,', correct: false },
        { text: '3.   auf die Flugregeln zu achten und eine der beiden Landetechniken zu wählen.', correct: false }
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
        question: '7030    Wo muss man mit dem Queranflug beginnen, wenn man bei starkem Wind die „C“-Landung fliegt?',
        answers: [
        { text: '1.   Weit hinter dem Landepunkt,', correct: false },
        { text: '2.   nicht über 50 Meter Höhe,', correct: false },
        { text: '3.   nicht zu weit hinter dem Landepunkt.', correct: true }
        ]
    },
    {
        question: '7031    Wenn bei einer Landeeinteilung, die Achter sehr nahe am Landepunkt geflogen werden, muss der Pilot;',
        answers: [
        { text: '1.   Den Endanflug sehr hoch ansetzen,', correct: false },
        { text: '2.   den Endanflug sehr steil fliegen,', correct: false },
        { text: '3.   mit weniger Höhe die letzte Kurve fliegen.', correct: true }
        ]
    },
    {
        question: '7032 Bei starken Wind im Endanflug, muss der Pilot:',
        answers: [
        { text: '1. sich auf einen steilen Endanflug einstellen, die Geschwindigkeit erhöhen, um die Wirkung des Windgradienten oder des Windshears auszugleichen, möglichst sanft und in Bodennähe ausgleiten,', correct: true },
        { text: '2. möglichst steil und mit der Geschwindigkeit des geringsten Sinkens anfliegen, aufgrund des Windgradienten möglichst sanft und in Bodennähe ausgleiten,', correct: false },
        { text: '3. unabhängig von der resultierenden Richtung so langsam wie möglich fliegen und bei Windgradient stallen.', correct: false }
        ]
    },
    {
        question: '7033 Welche Wirkung kann der Windgradient in Bodennähe bei der Landung haben?',
        answers: [
        { text: '1. Plötzlich stärkeres Sinken mit Sackflug des Gerätes, dem man durch höhere Geschwindigkeit vorbeugen kann,', correct: true },
        { text: '2. plötzliche Verminderung der Geschwindigkeit am Boden wegen des Gegenwindes, kein Problem für die Steuerung,', correct: false },
        { text: '3. plötzlicher Höhenverlust, den man nicht ausgleichen kann, so erhöht sich der Anstellwinkel.', correct: false }
        ]
    },
    {
        question: '7034     Eine höhere Geschwindigkeit beim Ausgleiten ist notwendig, um:',
        answers: [
        { text: '1.   in Bodennähe besser zu stallen,', correct: false },
        { text: '2.   die negativen Wirkungen eines eventuellen Windgradienten oder Windshears zu vermeiden,', correct: true },
        { text: '3.   sich dem Boden mit einer steileren Linie zu nähern.', correct: false }
        ]
    },
    {
        question: '7035 Wie sollte sich der Pilot verhalten, wenn er beim Landen mit dem Drachen oder Gleitschirm bei starkem Wind ein Hindernis überfliegen muss?',
        answers: [
        { text: '1. Die Geschwindigkeit erhöhen, so erhält er das beste Gleiten,', correct: true },
        { text: '2. die Geschwindigkeit vermindern, um so wenig wie möglich zu sinken,', correct: false },
        { text: '3. mit der höchsten Geschwindigkeit fliegen, um so wenig wie möglich zu sinken.', correct: false }
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
        question: '7037 Beim Streckenfliegen kann man nicht immer in den vorgesehenen Landeplätzen landen.Was muss der Pilot in einem solchen Fall wissen?',
        answers: [
        { text: '1. Die korrekte Landetechnik am Hang oder einer engen Stelle,', correct: true },
        { text: '2. die Überlebenstechniken im Gebirge, während er auf Rettung wartet,', correct: false },
        { text: '3. wie man auch mit starkem Rückenwind an engen, mit Hindernissen umgebenen Stellen landet.', correct: false }
        ]
    },
    {
        question: '7038 Welche sind die Sicherheitskontrollen direkt vor dem Start?',
        answers: [
        { text: '1. Geschlossene Schuhe, korrekt angeschnalltes und eingestelltes Gurtzeug, Gurte und Fangleinen geordnet und richtig in der Hand, Segel richtig ausgelegt, günstige Wind- und Wetterbedingungen, Startraum frei,', correct: true },
        { text: '2. Helm und Handschuhe tragen, geeignetes offenes Gelände, richtig aufgezogener Schirm, günstiger Wind, freier Startraum,', correct: false },
        { text: '3. richtig angeschnallte Karabiner, kontrollieren, dass der Schirm nicht beschädigt ist, richtig angeschnalltes Gurtzeug, Bremsen frei.', correct: false }
        ]
    },
    {
        question: '7039   Der Pilot muss beim Gleitschirmfliegen eine korrekte Position einnehmen, und das Gurtzeug muss kompatibel mit dem Schirm sein, damit die von der Homologierung garantierten Eigenschaften nicht verändert werden. Was muss sonst noch beachtet werden?',
        answers: [
        { text: '1. Das Gurtzeug so einzustellen, dass der Abstand zwischen den Fangleinen (rechts und links) mehr als 40 cm beträgt,', correct: false },
        { text: '2. das Gurtzeug so einzustellen, dass der Pilot die vorderen Leinen weit über den Maillons ergreifen kann.', correct: false },
        { text: '3. Das Gurtzeug so einzustellen, dass der Abstand zwischen den Fangleinen (rechts und links), sowie zwischen den Maillons und der Sitzfläche dem auf dem Homologierungsschildchen angegebenen Abstand entspricht.', correct: true }
        ]
    },
    {
        question: '7040 Wie fliegt man mit einem nassen Gleitschirm am Sichersten?',
        answers: [
        { text: '1.   Ohren anlegen um schneller zu sinken,', correct: false },
        { text: '2.   Ein nasser Gleitschirm bedeutet überhaupt kein Problem,', correct: false },
        { text: '3.   Sanft steuern und im hohen Geschindigkeitsbereich fliegen.', correct: true }
        ]
    },
    {
        question: '7041 Das rückwärts Aufziehen ist günstig bei:,',
        answers: [
        { text: '1.   starkem Wind,', correct: true },
        { text: '2.   Seitenwind,', correct: false },
        { text: '3.   wenig Wind oder völliger Windstille.', correct: false }
        ]
    },
    {
        question: '7042 Man könnte den Start in folgende Phasen einteilen:',
        answers: [
        { text: '1. Aufziehen, Anlauf, Start und dann Geschwindigkeitsaufnahme,', correct: false },
        { text: '2. Aufziehen, Anbremsen mit dem Schirm über dem Kopf, Sichtkontrolle des Schirms, Anlauf und Abflug mit Geschwindigkeitsaufnahme, Beibehalten der vorgesehenen Flugbahn,', correct: true },
        { text: '3. Aufziehen, Anbremsen, Anlauf und Abflug, Beibehalten der vorgesehenen Flugbahn.', correct: false }
        ]
    },
    {
        question: '7043 Um nach dem Rückwärts-Aufziehen des Gleitschirms zu vermeiden, dass der Schirm einklappt oder vorschießt, während man sich umdreht, ist es wichtig, dass:',
        answers: [
        { text: '1. der Pilot sich so schnell wie möglich umdreht,', correct: false },
        { text: '2. der Pilot beim Umdrehen die Bremsen loslässt und sie dann schnell wieder ergreift', correct: false },
        { text: '3. der Pilot mit Fangleinen und Bremsen den Schirm auf der Vertikalen kontrolliert, bevor er sich in Startrichtung dreht.', correct: true }
        ]
    },
    {
        question: '7044 Kann man bei leichtem Seitenwind mit einem Gleitschirm starten?',
        answers: [
        { text: '1.   Ja, ganz normal,', correct: false },
        { text: '2.   ja, den Schirm etwas gegen den Wind auslegen und aufziehen, und dann die beste Startlinie wählen,', correct: true },
        { text: '3.   nein, das ist auch für erfahrene Piloten nicht möglich. ', correct: false }
        ]
    },
    {
        question: '7045 Wann ist ein Start mit dem Gleitschirm korrekt?',
        answers: [
        { text: '1.   Der Pilot kontrolliert während des Laufens den Auftrieb und hört auf zu laufen, um abzuheben,', correct: false },
        { text: '2.   der Pilot kontrolliert den Schirm und läuft mit ständigem Blick auf den Schirm weiter, bis er abhebt,', correct: false },
        { text: '3.   nachdem der Pilot den Schirm kontrolliert hat, läuft er, leicht nach vorne gebeugt und schneller werdend, weiter bis zum Abheben.', correct: true }
        ]
    },
    {
        question: '7046 Bei einem Startabbruch sollte man:',
        answers: [
        { text: '1. so schnell wie möglich stehen bleiben und den Schirm vollständig abbremsen,', correct: false },
        { text: '2. den Schirm so abbremsen, dass er als aerodynamische Bremse funktioniert, dann nach und nach beim Laufen langsamer werden,', correct: true },
        { text: '3. nach und nach beim Laufen langsamer werden ohne zu stolpern, man braucht nicht auf den Schirm zu achten, weil man ja ohnehin nicht fliegt.', correct: false }
        ]
    },
    {
        question: '7047 Wenn der Pilot beim Starten die vorderen Fangleinen nicht loslässt, ist es wahrscheinlich, dass er:',
        answers: [
        { text: '1. später abhebt und länger laufen muss,', correct: false },
        { text: '2. den Start abbrechen muss, weil der Schirm frontal einklappt,', correct: true },
        { text: '3. einen Seitenklapper hat, den er erst nach dem Start korrigieren kann.', correct: false }
        ]
    },
    {
        question: '7048 Wie muss der Pilot sich verhalten, wenn er nach dem Start einen Seitenklapper hat?',
        answers: [
        { text: '1. Die Flugrichtung kontrollieren und versuchen, den Schirm wieder zu öffnen,', correct: true },
        { text: '2. sofort versuchen, den Schirm wieder zu öffnen, indem er die Bremse auf dieser Seite mehrmals zieht und loslässt,', correct: false },
        { text: '3. sofort versuchen, den Schirm wieder zu öffnen, indem er die Bremse auf dieser Seite zieht und gezogen hält.', correct: false }
        ]
    },
    {
        question: '7049 Ist es möglich, nur durch Gewichtsverlagerung Kurven zu fliegen?',
        answers: [
        { text: '1. Ja, mehr oder weniger stark, je nach Art und Einstellung des Gurtzeugs,', correct: true },
        { text: '2. ja, aber man riskiert dabei einen Stall,', correct: false },
        { text: '3. nein.', correct: false }
        ]
    },
    {
        question: '7050 Um die Leistung eines Gleitschirms besser auszunützen, sollte der Pilot durch Gewichtsverlagerung kurven, und somit:',
        answers: [
        { text: '1. beide Bremsen loslassen und dann die Innenbremse ziehen,', correct: false },
        { text: '2. die Außenbremse loslassen und dann die Neigung mit beide Bremsen kontrollieren,', correct: true },
        { text: '3. die Innenbremse ziehen, um die höchste Neigung zu erzeugen.', correct: false }
        ]
    },
    {
        question: '7051 Wie nützt mann am Besten die Langsamflugeigenschaften eines Gleitschirms beim fliegen in einer engen Thermik?',
        answers: [
        { text: '1. Einen guten Kompromiss zwischen der Querneigung des Schirms und der Sinkrate finden, so dass er die Steiggeschwindigkeit der Thermik ausnützen kann,', correct: true },
        { text: '2. so flach wie möglich kreisen, damit er so wenig wie möglich sinkt,', correct: false },
        { text: '3. „Achter“ so fliegen, dass er in der Thermik bleibt.', correct: false }
        ]
    },
    {
        question: '7052 Kann man mit dem Gleitschirm einen Stallversuch innerhalb bestimmter Sicherheitsgrenzen machen?',
        answers: [
        { text: '1.   Ja, aber nur in großer Höhe,', correct: false },
        { text: '2.   nein, denn jeder Stallversuch führt zu anomalen Situationen,', correct: false },
        { text: '3.   ja, während eines Sicherheitstrainings über dem Wasser, mit einem qualifizierten Lehrer, indem man die Bremsen langsam bis zur Stall-Grenze zieht und dann sofort wieder eine normale Fluggeschwindigkeit einnimmt, bevor der Schirm hinter dem Piloten kollidiert.', correct: true }
        ]
    },
    {
        question: '7053 Wie erkennt man einen Sackflug beim Gleitschirm?',
        answers: [
        { text: '1. Gut aufgeblasener Flügel, Geschwindigkeit praktisch null, starkes Sinken,', correct: true },
        { text: '2. gut aufgeblasener Flügel, Geschwindigkeit praktisch null, normales Sinken, starkes Zittern an den Bremsen,', correct: false },
        { text: '3. Seitenklapper, Geschwindigkeit praktisch null, Tendenz zur Autorotation.', correct: false }
        ]
    },
    {
        question: '7054 Im Falle eines Full-Stall, wegen zu langsamen Fliegens (zu hoher Anstellwinkel) muss der Pilot?',
        answers: [
        { text: '1. Die Bremsen schnell loslassen und dann stark ziehen, wenn der Schirm nach vorne schießt,', correct: false },
        { text: '2. die Bremsen gezogen halten und warten, bis der Schirm vertikal über dem Pilot ist, dann beide Bremsen langsam loslassen und das Pendeln kontrollieren,', correct: true },
        { text: '3. nach dem Stall sofort eine Bremse loslassen, um ins Trudeln zu kommen und Fahrt aufzunehmen.', correct: false }
        ]
    },
    {
        question: '7055 Was kann man tun, um mit dem Gleitschirm mehr oder weniger schnell Höhe zu verlieren?',
        answers: [
        { text: '1. Viele Kurven fliegen,', correct: false },
        { text: '2. den Schirm stallen,', correct: false },
        { text: '3. „Ohren“, „Wing over“ und Steilspirale.', correct: true }
        ]
    },
    {
        question: '7056 Welche Wirkung hat ein leichtes und symmetrisches Ziehen der hinteren Fangleinen?',
        answers: [
        { text: '1. Zunahme der Geschwindigkeit und Verminderung des Auftriebs,', correct: false },
        { text: '2. Veränderung des Anstellwinkels, folgedessen des Gleitwinkels und der Geschwindigkeit,', correct: true },
        { text: '3. nur Verringerung des Anstellwinkels.', correct: false }
        ]
    },
    {
        question: '7057 Ist es möglich, einen Gleitschirm nur mit den hinteren Fangleinen zu steuern?',
        answers: [
        { text: '1. Ja,', correct: true },
        { text: '2. ja, aber es ist nicht möglich, die Geschwindigkeit zu verändern,', correct: false },
        { text: '3. nein.', correct: false }
        ]
    },
    {
        question: '7058 Was kann der Pilot durch Betätigung des Speedsystems verändern?',
        answers: [
        { text: '1. den Neigungswinkel, folgedessen den Anstellwinkel und die Geschwindigkeit,', correct: true },
        { text: '2. die Geschwindigkeit, wie er will, indem er den Gleitwinkel und den Anstellwinkel verändert,', correct: false },
        { text: '3. den Anstellwinkel, die Geschwindigkeit und die Flugbahn.', correct: false }
        ]
    },
    {
        question: '7059 Wenn man beim Ausleiten einer Kurve durch eine Überkorrektur in seitliches Pendeln kommt, sollte der Pilot:',
        answers: [
        { text: '1. die Korrektur fortsetzen,', correct: false },
        { text: '2. die Steuer loslassen und dann eine starke Rechts- oder Linksdrehung einleiten,', correct: false },
        { text: '3. anbremsen, indem er beide Bremsen gleichzeitig zieht, bis zur Stabilisierung der Kappe.', correct: true }
        ]
    },
    {
        question: '7060 Die korrekte Sequenz beim Landeanflug mit mäßigem Wind für den Gleitschirm ist:',
        answers: [
        { text: '1. Höchstgeschwindigkeit bis etwa 1 Meter über dem Grund, dann beide Bremsen ziehen, um den Schirm zu stallen,', correct: false },
        { text: '2. Höchstgeschwindigkeit ist möglich bis 4-5 Meter über dem Grund, Bremsen 20% ziehen, um Geschwindigkeit und Sinken zu reduzieren, in Bodennähe bis zur Landung Bremsen progressiv durchziehen,', correct: true },
        { text: '3. geringstes Sinken bis etwa 2 Meter über dem Grund, dann Bremsen langsam herunterdrücken bis zum Stall.', correct: false }
        ]
    },
    {
        question: '7061 Der Wind am Startplatz reicht aus, um den Schirm rückwärts aufzuziehen, die Richtung ist aber 25° zur größten Hangneigung:',
        answers: [
        { text: '1. wir legen den Schirm in die Richtung der größten Hangneigung aus, um sie besser auszunützen,', correct: false },
        { text: '2. zum Aufziehen legen wir den Schirm gegen den Wind aus, dann laufen wir in die Richtung der größter Hangneigung weiter,', correct: true },
        { text: '3. zum Aufziehen legen wir den Schirm gegen den Wind aus, dann laufen wir in diese Richtung weiter.', correct: false }
        ]
    },
    {
        question: '7062   Beim Start mit dem Drachen gibt es eine Sicherheitskontrolle, die besonders genau durchgeführt werden muss, da schon mehrere Unfälle passiert sind:',
        answers: [
        { text: '1. die Position des Drachens kontrollieren,', correct: false },
        { text: '2. kontrollieren, dass der Pilot am Drachen richtig eingehängt ist,', correct: true },
        { text: '3. kontrollieren, dass der Rettungsschirm richtig gepackt ist.', correct: false }
        ]
    },
    {
        question: '7063 Wie kann man am Besten kontrollieren, ob der Pilot am Drachen richtig eingehängt ist?',
        answers: [
        { text: '1. Ein Helfer hält das Kielrohr des Drachens, der Pilot macht die Liegeprobe und kontrolliert außer der korrekten Aufhängung auch die Position des Körpers zum Steuerbügel,', correct: true },
        { text: '2. man hängt den Karabiner ein und kontrolliert, ob er auch wirklich eingehängt ist,', correct: false },
        { text: '3. ein Helfer kontrolliert, dass der Karabiner richtig eingehängt ist.', correct: false }
        ]
    },
    {
        question: '7064 Was muss man beachten, wenn man bei starkem Wind mit dem Drachen starten möchte?',
        answers: [
        { text: '1. Dass ein einziger Helfer direkt vor dem Start das Flügelende hochhebt,', correct: false },
        { text: '2. sichergehen, dass während des Starts kein Helfer den Drachen zurückhält,', correct: true },
        { text: '3. dass die Helfer während des Starts das Kielrohr richtig schieben.', correct: false }
        ]
    },
    {
        question: '7065 Ist es möglich, mit dem Drachen bei Wind mit 45° zur Startlinie zu starten und wie?',
        answers: [
        { text: '1. Nein, auch wenn er nicht stark ist,', correct: false },
        { text: '2. ja, wenn er nicht zu stark ist, indem man mit etwas Vorhaltewinkel in die größte Hangneigung startet,', correct: true },
        { text: '3. ja, auch wenn er stark ist, Hauptsache man läuft gegen den Wind.', correct: false }
        ]
    },
    {
        question: '7066 Bei zu starkem Schieben am Steuerbügel, während des Starts,',
        answers: [
        { text: '1. hebt er früher ab und kann leichter eventuelle Hindernisse überfliegen,', correct: false },
        { text: '2. hebt er langsamer ab und kann den Drachen nach dem Start besser kontrollieren,', correct: false },
        { text: '3. findet der Start mit einem zu hohen Anstellwinkel statt, daraus ergibt sich eine steile Flugbahn mit hoher Stall- Gefahr.', correct: true }
        ]
    },
    {
        question: '7067 Kann man mit dem Drachen den Start abbrechen, und welche Gefahren kann das mit sich führen?',
        answers: [
        { text: '1. Ja, nur wenn unbedingt notwendig, dabei kann der Drachen beschädigt werden und der Pilot sich verletzen,', correct: true },
        { text: '2. ja, immer wenn man es für nötig hält, ohne besondere Gefahren, wenn man die richtige Technik kennt,', correct: false },
        { text: '3. ja, wenn man es direkt vor dem Abheben macht und genügend Erfahrung hat.', correct: false }
        ]
    },
    {
        question: '7068 Zu welchem Zeitpunkt nach dem Start mit dem Drachen soll der Pilot in die Liegeposition gehen?',
        answers: [
        { text: '1. Sobald wie möglich nach dem Abheben,', correct: false },
        { text: '2. nachdem er vollkommen die Kontrolle über die Richtung und die Geschwindigkeit erlangt hat, etwas weg vom Hang', correct: true },
        { text: '3. es gibt keine besonderen Einschränkungen oder Techniken dafür.', correct: false }
        ]
    },

    {
        question: '7069 Wie kann man beim Drachenfliegen den Anstellwinkel verändern?',
        answers: [
        { text: '1. Nur durch die „Overdrive“-Vorrichtung,', correct: false },
        { text: '2. Körpergewicht auf den Steuerbügel, dann schieben oder ziehen,', correct: false },
        { text: '3. durch Schieben oder Ziehen des Steuerbügels.', correct: true }
        ]
    },
    {
        question: '7070 Welche ist die richtige Sequenz für das Fliegen einer Kurve mit dem Drachen?',
        answers: [
        { text: '1. Fahrt aufnehmen, seitliche Gewichtsverlagerung und leichtes Schieben am Steuerbügel, proportional zur Geschwindigkeit und zur Querneigung,', correct: true },
        { text: '2. Fahrt aufnehmen, Körpergewicht auf die Seite und dann wieder in die Mitte verlagern,', correct: false },
        { text: '3. Fahrt aufnehmen, Steuerbügel asymmetrisch schieben, damit sich der Drachen um seine eigene Achse dreht, Körpergewicht auf die Seite und dann wieder in die Mitte verlagern.', correct: false }
        ]
    },
    {
        question: '7071 Welcher Steuerfehler verursacht meistens ein Abschmieren über den Flügel beim Drachen?',
        answers: [
        { text: '1. Wegen einer Gewichtsverlagerung auf die zur Kurve entgegengesetzten Seite,', correct: false },
        { text: '2. falsch koordinierte Steuerbewegung und zu geringes Schieben in der Kurve im Verhältnis zur Querneigung,', correct: true },
        { text: '3. zu starkes Schieben des Steuerbügels in der Kurve.', correct: false }
        ]
    },
    {
        question: '7072  Wie macht man eine Roll-Bewegung mit dem Drachen?',
        answers: [
        { text: '1. Man dreht den Körper um die Achse des Steuerbügels,', correct: false },
        { text: '2. man verlagert den Körper seitlich und dreht ihn um die Achse des Steuerbügels,', correct: false },
        { text: '3. man verlagert den Körper nach rechts oder links, immer parallel zum Kielrohr.', correct: true }
        ]
    },
    {
        question: '7073  Ein Starrflügler dreht:',
        answers: [
        { text: '1. mit Hilfe einer aerodynamischen Steuerung, zusätzlich zur Gewichtsverlagerung,', correct: true },
        { text: '2. durch eine aerodynamische Steuerung,', correct: false },
        { text: '3. durch die Gewichtsverlagerung.', correct: false }
        ]
    },
    {
        question: '7074 Wie führt man in einer sicheren Höhe einen korrekten Stall-Versuch mit dem Drachen durch?',
        answers: [
        { text: '1. Durch progressives Schieben am Steuerbügel, um den Anstellwinkel zu erhöhen, gleich nach dem Strömungsabriss wieder Fahrt aufnehmen,', correct: true },
        { text: '2. man drückt die Segellatten nach vorne, um den Anstellwinkel zu erhöhen, und hält diese Position mindestens 30 Sekunden lang,', correct: false },
        { text: '3. nach der Fahrtaufnahme drückt man den Steuerbügel fest durch, um den Anstellwinkel schnell zu erhöhen.', correct: false }
        ]
    },
    {
        question: '7075 Wie kann ein Drachenflieger am Besten eine Thermik ausnützen?',
        answers: [
        { text: '1. Mit dem geringsten Sinken fliegen und Vollkreise drehen, um in der Thermik zu bleiben,', correct: true },
        { text: '2. mit der höchsten Leistung fliegen und Vollkreise drehen, um in der Thermik zu bleiben,', correct: false },
        { text: '3. mit der Mindestgeschwindigkeit enge Vollkreise fliegen, um in der Thermik zu bleiben.', correct: false }
        ]
    },

    {
        question: '7076 Was versteht man unter „Tumbling“?',
        answers: [
        { text: '1. Ein akrobatisches Manöver,', correct: false },
        { text: '2. ein Manöver zum schnellen Abstieg,', correct: false },
        { text: '3. einen Überschlag um die Querachse nach vorne, aufgrund starker Turbulenz, (z.B. Rotoren).', correct: true }
        ]
    },
    {
        question: '7077 Wie kann man die Trimmgeschwindigkeit beim Drachen vergrößern?',
        answers: [
        { text: '1. Indem man den Aufhängepunkt des Piloten nach hinten versetzt,', correct: false },
        { text: '2. indem man den Aufhängepunkt des Piloten nach vorne versetzt,', correct: true },
        { text: '3. indem man den Aufhängepunkt des Piloten nach oben versetzt.', correct: false }
        ]
    },
    {
        question: '7078 Welche ist die richtige Endphase beim Landen mit dem Drachen bei starkem Wind?',
        answers: [
        { text: '1. Korrekter Anflug in Bodennähe mit horizontaler Flugbahn bis zum Augenblick des „Drückens“, um den Drachen mit der Mindestgeschwindigkeit zu stallen,', correct: true },
        { text: '2. korrekter Endanflug in 4-5 Metern Höhe, leicht Fahrt aufnehmen bis zum Augenblick des „Drückens“, um den Drachen mit guter Geschwindigkeit zu stallen,', correct: false },
        { text: '3. korrekter Endanflug in Bodennähe mit horizontaler Flugbahn, um in der Nähe des Landepunktes den Drachen entschlossen zu „drücken“, unabhängig von der Geschwindigkeit.', correct: false }
        ]
    },
    {
        question: '7079 Wann richtet sich der Pilot beim Landen mit dem Drachen in die vertikale Körperposition auf?',
        answers: [
        { text: '1. Sobald er merkt, dass der Drachen beim Endanflug durch den Bodeneffekt beeinflusst wird,', correct: false },
        { text: '2. in Bodennähe beim Endanflug, kurz vor der Landung,', correct: true },
        { text: '3. so spät wie möglich, um den Drachen zu stallen.', correct: false }
        ]
    },
    ],

    chapter8 = [
    {
        question: '8001 Wo ist ein Schnitt auf dem Flügel am besorgniserregendsten?',
        answers: [
        { text: '1. In der Mitte der Anströmkante,', correct: true },
        { text: '2. seitlich hinten auf der Oberseite,', correct: false },
        { text: '3. seitlich hinten auf der Unterseite.', correct: false }
        ]
    },

    {
        question: '8002 Die Leinen des Gleitschirms sollen aus',
        answers: [
        { text: '1. möglichst elastischem Material bestehen,', correct: false },
        { text: '2. möglichst unelastischem und widerstandsfähigem Material bestehen,', correct: true },
        { text: '3. möglichst widerstandsfähigem Material bestehen, unabhängig von der Elastizität.', correct: false }
        ]
    },
    {
        question: '8003  Welche Leinen sind beim Fliegen stärker belastet?',
        answers: [
        { text: '1. Die vorderen,', correct: true },
        { text: '2. die hinteren,', correct: false },
        { text: '3. die seitlichen.', correct: false }
        ]
    },
    {
        question: '8004 Der Gleitschirm wird meistens aus sogenanntem „Rip-Stop“ Material hergestellt. Was bedeutet das?',
        answers: [
        { text: '1. Das Gewebe kann geschnitten werden, aber nicht reißen,', correct: false },
        { text: '2. ein Riss oder Schnitt im Gewebe kann sich leicht weiter verbreiten,', correct: false },
        { text: '3. die Möglichkeit, dass sich ein Riss oder Schnitt im Gewebe gefährlich verbreitet, ist gering.', correct: true }
        ]
    },
    {
        question: '8005 Das Gewebe, das für die Herstellung eines Gleitschirms verwendet wird, muss:',
        answers: [
        { text: '1. verschleißfest, sehr elastisch und luftdurchlässig sein,', correct: false },
        { text: '2. verschleißfest, unelastisch und luftdurchlässig sein,', correct: false },
        { text: '3. verschleißfest, unelastisch und nicht luftdurchlässig sein.', correct: true }
        ]
    },
    {
        question: '8006 Welche äußeren Faktoren beschädigen am Meisten das Gewebe eines Gleitschirms und lassen es bruchanfällig und luftdurchlässig werden?',
        answers: [
        { text: '1. Die Ultraviolettstrahlen und die Feuchtigkeit,', correct: true },
        { text: '2. die Infrarotstrahlen und die Feuchtigkeit,', correct: false },
        { text: '3. die Infrarotstrahlen und die trockene Hitze.', correct: false }
        ]
    },
    {
        question: '8007 Ist das Gewebe eines Gleitschirms porös geworden:',
        answers: [
        { text: '1. so ist nur sein Aussehen nicht gut,', correct: false },
        { text: '2. so ist nur seine Leistung etwas geringer,', correct: false },
        { text: '3. so ist seine Leistung geringer und seine Flugtauglichkeit nicht mehr gewährleistet.', correct: true }
        ]
    },
    {
        question: '8008 Beim Packen des Gleitschirms sollte man darauf achten, dass:',
        answers: [
        { text: '1. er trocken ist und im Trockenen gelagert wird, entfernt von Wärmequellen und nicht dem direkten Sonnenlicht ausgesetzt,', correct: true },
        { text: '2. er trocken ist, feucht und warm gelagert wird und nicht dem direkten Sonnenlicht ausgesetzt wird,', correct: false },
        { text: '3. er, auch wenn er feucht ist, im Warmen gelagert wird, mit offenem Sack, damit die Feuchtigkeit verdampfen kann.', correct: false }
        ]
    },
    {
        question: '8009 Der Mantel einer Kevlarleine ist gerissen, ihre Seele ist jedoch intakt geblieben. Die Leine soll:',
        answers: [
        { text: '1. provisorisch mit einem Knoten verkürzt werden, damit der hüllenlose Teil nicht zu stark gezogen wird,', correct: false },
        { text: '2. provisorisch mit Isolierband überdeckt werden, damit der hüllenlose Kevlarteil vor Licht und Sonnenstrahlen abgedeckt wird,', correct: true },
        { text: '3. an der offenen Stelle provisorisch mit einem Leinenstückchen verstärkt werden.', correct: false }
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
        { text: '1. Dass sie unter den Presshülsen nicht beschädigt sind,', correct: false },
        { text: '2. nur, dass die Presshülsen in gutem Zustand sind,', correct: false },
        { text: '3. dass die Presshülsen in gutem Zustand sind und die Kabel und Verspannungen keine Verschleißerscheinungen in der Nähe der Presshülsen aufweisen.', correct: true }
        ]
    },
    {
        question: '8012 Wenn wir feststellen, dass ein Kabel des Drachens abgenutzt oder gesplissen ist:',
        answers: [
        { text: '1. ersetzen wir ihn sofort, bevor wir wieder fliegen,', correct: true },
        { text: '2. reparieren wir ihn, so gut es geht, denn wir können ihn nicht gleich ersetzen,', correct: false },
        { text: '3. starten wir und geben Acht, die Struktur nicht mit besonderen Manövern zu belasten.', correct: false }
        ]
    },
    {
        question: '8013 Bei unserem letzten Flug hatten wir eine harte Landung, das Trapez und die Basis sind gebogen.',
        answers: [
        { text: '1. Wir ersetzen das Trapezrohr und biegen die Basis wieder perfekt gerade, bevor wir das nächste Mal fliegen,', correct: false },
        { text: '2. wir fliegen erst wieder, nachdem wir die Basis und das Trapezrohr durch Originalersatzteile ersetzt haben,', correct: true },
        { text: '3. wir biegen das Trapezrohr und die Basis gerade, bevor wir das nächste Mal fliegen.', correct: false }
        ]
    },
    {
        question: '8014 Die Imprägnierung und Mylarbeschichtung eines Drachens leidet besonders unter:',
        answers: [
        { text: '1. den Infrarotstrahlen,', correct: false },
        { text: '2. den Ultraviolettstrahlen,', correct: true },
        { text: '3. einem besonders trockenen Klima.', correct: false }
        ]
    },
    {
        question: '8015 Wird ein Drachen längere Zeit gelagert, sollte man darauf achten, dass:',
        answers: [
        { text: '1. er trocken ist und im eigenem Sack im Trockenen gelagert wird, entfernt von Wärmequellen und nicht dem direkten Sonnenlicht ausgesetzt,', correct: true },
        { text: '2. nach dem letzten Flug im eigenen Sack verpackt wird und im Keller auf den speziellen Wandstützen so gelagert wird, dass er nicht dem Sonnenlicht ausgesetzt ist,', correct: false },
        { text: '3. ohne den Sack zusammengelegt wird und im Keller oder in der Garage auf speziellen Wandstützen so gelagert wird, dass er vor Sonnenlicht geschützt ist.', correct: false }
        ]
    },
    {
        question: '8016 Wenn man merkt, dass bestimmte Teile des Drachens verrostet sind:',
        answers: [
        { text: '1. sollte man ihn mit besonderen Rostentfernern entfernen,', correct: false },
        { text: '2. kann man trotzdem fliegen, wenn der betroffene Teil nicht beschädigt ist,', correct: false },
        { text: '3. sollte man noch vor dem nächsten Flug den betroffenen Teil mit einem anderen Orginalteil ersetzen, der genau die gleichen Eigenschaften aufweist.', correct: true }
        ]
    },
    {
        question: '8017 Was muss bei der Instandhaltung des Rettungsschirmes beachtet werden?',
        answers: [
        { text: '1. Er darf nie geöffnet werden, man könnte einen Fehler beim Zusammenlegen machen,', correct: false },
        { text: '2. er soll an den vorgesehenen Terminen oder wenn er nass ist, geöffnet und unter Aufsicht kompetenter Personen gepackt werden,', correct: true },
        { text: '3. er soll geöffnet und getrocknet und nur befeuchtet wieder gepackt werden.', correct: false }
        ]
    },
    {
        question: '8018 Was soll hinsichtlich des Rettungsschirms vor jedem Flug kontrolliert werden?',
        answers: [
        { text: '1. Dass der Öffnungsgriff sich innerhalb des Wurfkontainers befindet,', correct: false },
        { text: '2. dass er nur vom Hersteller zusammengelegt worden ist, weil er sich sonst nicht sicher öffnet,', correct: false },
        { text: '3. dass die Fangleine gut am Gurtzeug befestigt, der Öffnungsgriff leicht erreichbar und aktivierbar ist.', correct: true }
        ]
    },
    {
        question: '8019 Warum ist ein Rettungsschirm nicht zuverlässig, wenn er nicht periodisch kontrolliert wird?',
        answers: [
        { text: '1. Weil das Material rasch verschleißt, wenn es nicht regelmäßig an die Luft kommt,', correct: false },
        { text: '2. weil das Material aufgrund der Faltung „verkleben“ und sich im Notfall nicht richtig öffnen könnte,', correct: true },
        { text: '3. die Fangleine muss hin und wieder kontrolliert werden, da sie sich abnützen und bei der Verwendung reißen könnte', correct: false }
        ]
    },
    {
        question: '8020 Das Baumaterial und die Technologie der Rettungsschirme für den Sport- und Wanderflug garantieren die totale Sicherheit beim Öffnen:',
        answers: [
        { text: '1. bei jeder Fallgeschwindigkeit,', correct: false },
        { text: '2. bei Fallgeschwindigkeiten innerhalb bestimmter, vom Hersteller angegebenen Grenzen,', correct: true },
        { text: '3. nur bei Fallgeschwindigkeiten gleich den maximalen Fallgeschwindigkeiten von Drachen und Gleitschirmen.', correct: false }
        ]
    },
    ],

    chapter9 = [
    {
        question: '9001 Die Sicherheit beim Drachen- und Gleitschirmfliegen hängt stark vom Verhältnis zwischen der Erfahrung des Piloten und den Eigenschaften des verwendeten Gerätes ab:',
        answers: [
        { text: '1. ja,', correct: true },
        { text: '2. bestimmt nicht,', correct: false },
        { text: '3. ja, aber nur beim Fliegen in starken Wetterbedingungen.', correct: false }
        ]
    },
    {
        question: '9002 Die Sicherheit beim Drachen- und Gleitschirmfliegen hängt unter anderem auch vom Verhältnis zwischen der Erfahrung des Piloten und den meteorologischen Bedingungen ab:',
        answers: [
        { text: '1. bestimmt nicht,', correct: false },
        { text: '2. ja,', correct: true },
        { text: '3. ja, aber nur beim Streckenfliegen.', correct: false }
        ]
    },
    {
        question: '9003 Wie sollten wir uns bezüglich der Sicherheit beim Fliegen verhalten, wenn uns der Kauf eines homologierten Fluggerätes angeboten wird, an dem zur Verbesserung der Flugeigenschaften einige Veränderungen angebracht worden sind?',
        answers: [
        { text: '1. Das Gerät eventuell kaufen, aber nur nach einem Probeflug bis an die Grenzleistungen,', correct: false },
        { text: '2. das Gerät nur kaufen, wenn wir den Anbieter gut kennen,', correct: false },
        { text: '3. das Angebot ablehnen und nur ein homologiertes Originalmodell kaufen.', correct: true }
        ]
    },
    {
        question: '9004 Wann sollte die periodische Revision von Fluggeräten durchgeführt werden?',
        answers: [
        { text: '1. Wenn man Leistungsveränderungen oder Anomalien des Geräts bemerkt,', correct: false },
        { text: '2. periodisch, in vom Hersteller vorgeschriebenen Zeiträumen, weil sich die Materialeigenschaften auch durch das Altern des Materials verändern,', correct: true },
        { text: '3. periodisch, in vom Hersteller vorgeschriebenen Zeiträumen, wenn man häufig fliegt, weniger oft, wenn man nicht soviel fliegt, Hauptsache man achtet gut auf das Material.', correct: false }
        ]
    },
    {
        question: '9005     Die Sicherheitskontrollen vor dem Flug zu unterlassen:',
        answers: [
        { text: '1. ist auf jeden Fall gefährlich,', correct: true },
        { text: '2. ist technisch nicht korrekt,', correct: false },
        { text: '3. ist nicht gefährlich, wenn man genügend Erfahrung besitzt.', correct: false }
        ]
    },
    {
        question: '9006 Wenn man zweifelt, ob man fliegen sollte, obwohl man die Meinung eines erfahrenen Piloten gehört hat, sollte man:',
        answers: [
        { text: '1. die Unsicherheit überwinden und fliegen, um Erfahrung zu sammeln,', correct: false },
        { text: '2. noch weitere Piloten befragen, bevor man fliegt,', correct: false },
        { text: '3. die eigenen Zweifel als guten und ausreichenden Grund ansehen, um nicht zu fliegen.', correct: true }
        ]
    },
    {
        question: '9007 Warum sollte ein Pilot mit geringer Erfahrung keinen Schirm mit hoher Leistung fliegen, auch wenn erfahrene Piloten ihn als sicher und leicht zu fliegen ansehen?',
        answers: [
        { text: '1. Weil Hochleistungsschirme nicht sicher sind, auch wenn man es nicht zugibt,', correct: false },
        { text: '2. die Sicherheit beim Fliegen hängt stark von dem Verhältnis zwischen der Erfahrung des Piloten und der Leistung des Schirmes ab, dieses muss sehr ausgewogen sein,', correct: true },
        { text: '3. weil er trotz sicheren Fliegens diese Leistung nicht ausnützen könnte.', correct: false }
        ]
    },
    {
        question: '9008 Ihr befindet euch am Startplatz eines Fluggebietes, das ihr nicht kennt. Trotz starker Konditionen starten alle gut. Wie solltet ihr euch hinsichtlich der Sicherheit verhalten?',
        answers: [
        { text: '1. Abwarten, bis die Konditionen ruhiger werden und dann fliegen, unter Berücksichtigung der Ratschläge jener Person, die euch am erfahrensten und ausgewogensten erscheinen,', correct: true },
        { text: '2. sich zum Fliegen vorbereiten, nachdem ihr die Ratschläge der Ortskundigen eingeholt habt,', correct: false },
        { text: '3. sich zum Fliegen vorbereiten und das Gleiche tun, was die Ortskundigen tun, um Erfahrung zu sammeln.', correct: false }
        ]
    },
    {
        question: '9009 Warum ist ein Start mit Rückenwind gefährlich?',
        answers: [
        { text: '1. Nur weil die Flugbahn nach dem Start zu steil ist,', correct: false },
        { text: '2. wegen der zu großen Geschwindigkeit, die der Pilot beim Anlaufen erreichen muss und dem eventuell starken Sinkens nach dem Start,', correct: true },
        { text: '3. es können Probleme für die Autostabilität des Fluggerätes auftreten.', correct: false }
        ]
    },
    {
        question: '9010     Ein Klippenstart mit einem Gleitschirm ist:',
        answers: [
        { text: '1. auch bei gut aufgeblasenem Segel sehr gefährlich,', correct: true },
        { text: '2. technisch eher schwierig,', correct: false },
        { text: '3. bei genügend Erfahrung kein Problem.', correct: false }
        ]
    },
    {
        question: '9011    An einem Tag mit sehr labilem und starkem Thermikwetter ist auf folgende Gefahr zu achten:',
        answers: [
        { text: '1. dass jeden Moment der Blitz auf das Gerät einschlagen könnte,', correct: false },
        { text: '2. dass das Steigen so stark ist, dass es unangenehme Turbulenzen mit sich bringt,', correct: false },
        { text: '3. dass das Steigen so stark wird, dass das Fluggerät schlecht steuerbar wird und sogar die Gefahr besteht, von Cumulus-Wolken aufgesaugt zu werden.', correct: true }
        ]
    },
    {
        question: '9012    Welche Gefahr besteht beim Fliegen in Wolken oder Nebel?',
        answers: [
        { text: '1. Nur die, mit anderen Fluggeräten in Kollision zu geraten,', correct: false },
        { text: '2. dass sich Eis auf der Anströmkante bildet und die Leistung reduziert wird,', correct: false },
        { text: '3. dass man die Orientierung und die Kontrolle über das Fluggerät verliert, da die Gleichgewichtsorgane ohne visuelle Anhaltspunkte schlecht funktionieren.', correct: true }
        ]
    },
    {
        question: '9013 Der „Wind shear“ ist besonders für den SWF gefährlich. Was versteht man darunter?',
        answers: [
        { text: '1. Nur eine plötzliche Zunahme der Windstärke,', correct: false },
        { text: '2. eine plötzliche Änderung der Windrichtung und/oder der Windgeschwindigkeit,', correct: true },
        { text: '3. eine plötzliche Zunahme des relativen Windes.', correct: false }
        ]
    },
    {
        question: '9014 Wir fliegen gegen einen starken Wind, der unsere Vorwärtsbewegung über Grund annulliert. Was passiert, wenn dieser Wind plötzlich nachlässt?',
        answers: [
        { text: '1. Wir sind so lange im Stall, bis das Fluggerät wieder die nötige Fluggeschwindigkeit aufgenommen hat,', correct: true },
        { text: '2. der Flügel fliegt gleich schnell weiter,', correct: false },
        { text: '3. man hat keine aerodynamischen Probleme.', correct: false }
        ]
    },
    {
        question: '9015 Was versteht man unter einer ungewöhnlichen Konfiguration eines Drachens oder Gleitschirms?',
        answers: [
        { text: '1. Eine Situation, die normal für den Flügel, aber neu für den Piloten ist,', correct: false },
        { text: '2. eine ungewöhnliche Situation des Flügels, außerhalb der vorgesehenen Grenzen der Leistung und der Manövrierbarkeit,', correct: true },
        { text: '3. eine Flugsituation an der Stall-Grenze.', correct: false }
        ]
    },
    {
        question: '9016 Ein zertifiziertes Fluggerät bietet gegenüber einem nicht zertifizierten folgende Garantien:',
        answers: [
        { text: '1. die Reaktionen des zertifizierten Flügels sind immer kontrollierbar und ungefährlich, die des nicht zertifizierten sind gefährlich,', correct: false },
        { text: '2. die Reaktionen des nicht zertifizierten Gerätes sind nicht bekannt, jene des zertifizierten Gerätes sind bekannt (bezüglich der Homologierung des Gerätes),', correct: true },
        { text: '3. ein zertifiziertes Gerät eignet sich für den Durchschnittspiloten, die nicht zertifizierten Geräte nur für Wettkampfpiloten.', correct: false }
        ]
    },
    {
        question: '9017   Warum kann ein langes und enges Tal bei einem Streckenflug für den Drachen- und Gleitschirmpiloten zu einer Falle werden?',
        answers: [
        { text: '1. Weil es da keine Aufwinde gibt,', correct: false },
        { text: '2. der Wind in einem engen Tal bewirkt einen Düseneffekt, besonders im Talboden kann es starke Winde und Turbulenzen geben,', correct: true },
        { text: '3. meistens gibt es im Talboden keine geeigneten Landeplätze, unabhängig vom Wind.', correct: false }
        ]
    },
    {
        question: '9018    Ist das Landen bei starkem Wind auf der Leeseite von Hindernissen gefährlich?',
        answers: [
        { text: '1.   Die Landung ist möglich, aber schwierig für unerfahrene Piloten,', correct: false },
        { text: '2.   nur sehr erfahrene Piloten können bei solchen Konditionen landen,', correct: false },
        { text: '3.   die Landung ist auch für sehr erfahrene Piloten gefährlich, weil man die Auswirkungen dieser Konditionen überhaupt nicht vorhersehen kann.', correct: true }
        ]
    },
    {
        question: '9019   Wie sollten wir uns verhalten, wenn der Wind beim Landen so stark ist, dass unser Vorwärtskommen behindert wird?',
        answers: [
        { text: '1. Den Landeanflug mit der „Achtertechnik“ durchführen, dadurch erhalten wir eine gewisse Geschwindigkeit über Grund, das gibt Sicherheit in Bodennähe,', correct: true },
        { text: '2. die Platzrunde fliegen, so müssen wir weniger kurven und brauchen nicht an das Vorwärtskommen zu denken,', correct: false },
        { text: '3. die „Achter“ fliegen und rückwärts oder mit einer senkrechten Bahn landen, wenn wir es nicht vermeiden können.', correct: false }
        ]
    },
    {
        question: '9020   Der Wind hat zugenommen, wir erreichen die Landewiese nicht mehr und müssen im Wald notlanden. Wie verhalten wir uns am besten?',
        answers: [
        { text: '1. Wir landen gegen den Wind in die Baumkronen und schützen dabei den Körper mit Armen und Beinen. Sobald wir zum Stillstand gekommen sind, halten wir uns am ersten Ast fest,', correct: true },
        { text: '2. wir landen gegen den Wind zwischen zwei Baumstämmen,', correct: false },
        { text: '3. wir machen eine Steilspirale über eine Lichtung und versuchen dort zu landen, unabhängig vom Wind.', correct: false }
        ]
    },
    {
        question: '9021    Uns steht eine unvermeidbare Wasserlandung bevor. Wie verhalten wir uns?',
        answers: [
        { text: '1.   Erst nach der Landung öffnen wir das Gurtzeug,', correct: false },
        { text: '2.   wir sollten schon vor der Landung das Gurtzeug zum Teil öffnen, um uns im Wasser schnell befreien zu können,', correct: true },
        { text: '3.   wir landen entlang der Wellen.', correct: false }
        ]
    },
    {
        question: '9022    Warum muss die Steuerung in Bodennähe besonders sanft und genau sein?',
        answers: [
        { text: '1.   Weil starke Pendelbewegungen starkes Sinken zu Folge haben und auch mit Bodenkontakt enden können,', correct: true },
        { text: '2.   weil der Flügel in Bodennähe wegen der dichteren Luft stärker reagiert,', correct: false },
        { text: '3.   weil der Bodeneffekt die Autostabilität des Fluggerätes beeinträchtigen kann.', correct: false }
        ]
    },
    {
        question: '9023    Welche Folgen kann ein Nichtzuschnallen der Beinschleifen beim Flug mit einem Gleitschirm haben?',
        answers: [
        { text: '1.   Höchstens ein unbequemes Sitzen, aber der Brustgurt hält,', correct: false },
        { text: '2.   große Gefahr, durch das Gurtzeug zu fallen,', correct: true },
        { text: '3.   nur dann eine Gefahr, wenn man sich nicht rechtzeitig an den Leinen halten kann.', correct: false }
        ]
    },
    {
        question: '9024 Was sollte man tun, wenn man gleich nach dem Start bemerkt, dass der Schirm sich nicht richtig geöffnet hat?',
        answers: [
        { text: '1. Schneller laufen und leicht die Bremsen ziehen, damit der Schirm sich vor dem Abheben öffnet,', correct: false },
        { text: '2. die Bremsen ziehen und den Start abbrechen, denn der Gleitschirm lässt einen ungefährlichen Startabbruch zu,', correct: true },
        { text: '3. den Start fortsetzen und gleich danach mit den Steuerleinen die normale Flugkonfiguration wiederherstellen.', correct: false }
        ]
    },
    {
        question: '9025     Erhöht es die Sicherheit, wenn man vorzeitig die für den Flug spezifische Wettervorhersage einholt?',
        answers: [
        { text: '1.   Nein, denn die örtliche Wetterlage kann nur vor Ort eingeschätzt werden,', correct: false },
        { text: '2.   ja, denn eine positive Vorhersage garantiert einen sicheren Flug,', correct: false },
        { text: 'ja, dadurch erhält man wichtige Informationen für die Einschätzung der Wetterlage und ihrer möglichen Entwicklung.', correct: true }
        ]
    },
    {
        question: '9026   Was kann passieren, wenn wir mit einer „Krawatte“ starten, weil wir beim Auslegen nicht bemerkt haben, dass eine oder mehrere Leinen unter die Austrittskante des Flügels gekommen sind?',
        answers: [
        { text: '1. Nichts Besonderes, außer einer leichten Leistungsreduzierung,', correct: false },
        { text: '2. die Tendenz zur Rotation des Flügels, die man jedoch durch Gewichtsverlagerung und Bremse ausgleichen kann,', correct: false },
        { text: '3. eine sehr gefährliche Situation, angefangen mit der Gefahr, zum Hang zurückzukehren, bis zu der, die Krawatte nicht lösen und so den Schirm schlecht steuern zu können.', correct: true }
        ]
    },
    {
        question: '9027 Beim Bruch einer Steuerleine befindet man sich in einer Notlage. Wie verhält man sich?',
        answers: [
        { text: '1. Man steuert durch leichten Zug der beiden hinteren Fangleinen und fliegt möglichst sanft nur die Manöver, die nötig sind, um auf die Landewiese zu gelangen,', correct: true },
        { text: '2. man steuert mit der intakten Bremse und versucht, mit wenigen Manövern auf den Hang zurückzukehren,', correct: false },
        { text: '3. man steuert mit der intakten Bremse und auf der anderen Seite mit der hinteren Fangleine.', correct: false }
        ]
    },
    {
        question: '9028 Stimmt es, dass die europäische Homologierung für Gleitschirme einen sehr hohen Sicherheitsgrad garantiert, wenn man eine für die eigenen Fähigkeiten geeignete Schirmklasse fliegt und alle Normen für den Typ und die Einstellung des Gurtzeugs beachtet, wie von der Homologierung vorgesehen sind?',
        answers: [
        { text: '1. Nein, diese Aussage ist nicht glaubwürdig,', correct: false },
        { text: '2. ja, aber nur für Standardsegel,', correct: false },
        { text: '3. ja, es stimmt.', correct: true }
        ]
    },
    {
        question: '9029 Kann man behaupten, dass, hinsichtlich der Sicherheit beim Fliegen, ein homologierter Schirm der Basisklasse auch die Sicherheit eines unerfahrenen Piloten im Falle einer ungewöhnlichen Flugsituation garantiert?',
        answers: [
        { text: '1. Ja, unabhängig von anderen Faktoren,', correct: false },
        { text: '2. ganz sicher nicht,', correct: false },
        { text: '3. ja, aber nur wenn alle Normen für den Typ und die Einstellung des Gurtzeugs beachtet werden, wie von der Homologierung vorgesehen.', correct: true }
        ]
    },
    {
        question: '9030 Was muss ein Pilot für seine eigene Sicherheit wissen, wenn er einen homologierten Schirm fliegt, der nicht der Basisklasse angehört, und in eine ungewöhnliche Flugsituation gelangt?',
        answers: [
        { text: '1. Dass er unmittelbar und korrekt eingreifen muss, um den normalen Flugzustand wieder herzustellen und nicht in eine gefährliche Sequenz von ungewöhnlichen Konfigurationen hineinzugeraten,', correct: true },
        { text: '2. dass es länger als 4 Sekunden braucht, bis der Schirm wieder normal fliegt,', correct: false },
        { text: '3. dass er so steuern muss, wie es ihm sein Instinkt in der jeweiligen Situation sagt.', correct: false }
        ]
    },
    {
        question: '9031    Ungewöhnliche Flugsituationen. Spontaner Seitenklapper, Tendenz des Flügels zur Autorotation. Der Pilot muss als Erstes die Kontrolle über die Flugrichtung wiedererlangen und erst dann mit der Bremse eingreifen, um den Schirm wieder zu öffnen:',
        answers: [
        { text: '1. falsch. Die Öffnung des Segels ist grundlegend, das muss man sofort tun,', correct: false },
        { text: '2. richtig. Man erlangt die Kontrolle der Flugrichtung zuerst durch Gewichtsverlagerung und dann mit der Bremse, nicht zu stark, um den Stall zu vermeiden (durch die reduzierte Fläche, wegen des Einklappers ist der Schirm stärker belastet),', correct: true },
        { text: '3. falsch. Man versucht, den Flügel zu öffnen, und falls das nicht möglich ist, zieht man sofort den Rettungsschirm.', correct: false }
        ]
    },
    {
        question: '9032 Ungewöhnliche Flugsituationen. Frontaler Einklapper, der Flügel hat die Tendenz, hinter den Piloten zu schießen. Der Pilot muss als Erstes beide Bremsen loslassen und dann bereit sein, das Vorschießen des Flügels zu kontrollieren:',
        answers: [
        { text: '1. richtig, für gewöhnlich ist es kein Problem, den Schirm wieder zu öffnen, wenn man beide Bremsen loslässt, aber das nachfolgende Pendeln könnte problematisch sein und muss kontrolliert werden,', correct: true },
        { text: '2. richtig, wenn auch das nachfolgende Pendeln kein Problem darstellt,', correct: false },
        { text: '3. falsch, man muss warten, bis der Flügel sich von alleine öffnet, um unnötiges Pendeln zu vermeiden, und falls es trotzdem vorkommt, zieht man den Rettungsschirm.', correct: false }
        ]
    },
    {
        question: '9033   Ungewöhnliche Flugsituationen. Die Folge eines zu starken asymmetrischen Ziehens der Bremse ist der asymmetrische Stall, der zu einer plötzlichen Rotation des Flügels um die vertikale Achse, die flache Negativ-Spirale, führt. Um dieser Konfiguration vorzubeugen, muss der Pilot:',
        answers: [
        { text: '1. auch die andere Bremse ziehen und dann beide Bremsen sanft loslassen,', correct: false },
        { text: '2. die stärker gezogene Bremse loslassen und die andere gleichzeitig herunterziehen,', correct: false },
        { text: '3. beide Bremsen sofort symmetrisch loslassen und bereit sein, das eventuelle Vorschießen des Schirms zu kontrollieren.', correct: true }
        ]
    },
    {
        question: '9034    Ungewöhnliche Flugsituationen. Was geschieht bei einem Post-Stall mit dem Gleitschirm?',
        answers: [
        { text: '1.   Nichts Besonderes,', correct: false },
        { text: '2.   das hängt davon ab, wie man wieder eine normale Flugsituation erlangt,', correct: false },
        { text: '3.   nach einem Stall kann der Flügel vollständig in sich zusammenfallen, das kann sehr gefährlich sein.', correct: true }
        ]
    },
    {
        question: '9035   Ungewöhnliche Flugsituationen. Nach einem „B“-Stall stellt man fest, dass man eine sehr hohe Sinkgeschwindigkeit hat und kaum vorwärts kommt, obwohl der Flügel völlig geöffnet und in der Vertikalen befindet. Was kann geschehen sein?',
        answers: [
        { text: '1. Man könnte in den Sackflug geraten sein, weil man die B-Leinen wahrscheinlich zu langsam losgelassen hat und/oder das Segelmaterial ist veraltert und porös,', correct: true },
        { text: '2. man könnte in den Sackflug geraten sein, weil man die B-Leinen wahrscheinlich zu langsam losgelassen hat, die Porosität des Flügels hat aber damit nichts zu tun,', correct: false },
        { text: '3. nichts Besonderes, die hohe Sinkgeschwindigkeit ist normal beim Austritt aus dem „B“-Stall.', correct: false }
        ]
    },
    {
        question: '9036 Ungewöhnliche Flugsituationen. Um aus einem Sackflug herauszukommen, sollte der Pilot, nachdem er beide Bremsen losgelassen hat:',
        answers: [
        { text: '1. mit Entschlossenheit eine der vorderen Fangleinen ziehen, und wenn das nicht wirkt, eine Bremse ziehen,', correct: false },
        { text: '2. die „A“-Leinen nach vorne schieben und das Speedsystem betätigen. Falls das nicht funktioniert, beide Bremsen gleichzeitig ziehen und wieder loslassen, und nur als Notlösung eine Bremse ganz durchziehen und wieder loslassen, dabei muss man sich eine starke Drehung oder eine „flache Negativspirale“ erwarten,', correct: true },
        { text: '3. eine Bremse ganz durchziehen, beide Bremsen gleichzeitig „pumpen“, als Notlösung beide A-Leinen nach vorne schieben.', correct: false }
        ]
    },
    {
        question: '9037 Beim Start mit dem Drachen bei starkem Wind ist es gefährlich, wenn ein Helfer den Drachen beim Anlaufen festhält, denn:',
        answers: [
        { text: '1. der Helfer könnte mitgerissen oder sogar hochgezogen werden,', correct: false },
        { text: '2. nicht alle Helfer machen es richtig, auch wenn der Pilot es ihnen genauestens erklärt hat,', correct: false },
        { text: '3. auch ein erfahrener Helfer hat nicht die Sensibilität des Piloten und könnte die Position und die Startrichtung des Drachens gefährlich beeinflussen.', correct: true }
        ]
    },
    {
        question: '9038    Was passiert, wenn der Pilot sich in seinem Gurtzeug falsch oder gar nicht an den Drachen aufhängt?',
        answers: [
        { text: '1.   Das hat immer sehr schwerwiegende Folgen,', correct: true },
        { text: '2.   er muss so schnell wie möglich landen,', correct: false },
        { text: '3.   er muss den Drachen so wenig manövrieren wie möglich, um nicht abzustürzen.', correct: false }
        ]
    },
    {
        question: '9039    Sollte man trotz Pitch-Leinen in den Flattersturz geraten, muss man:',
        answers: [
        { text: '1.   versuchen, den Drachen mit dem Gewicht und dem Steuer zu lenken, der Rettungsschirm kann warten,', correct: false },
        { text: '2.   sofort den Rettungsschirm ziehen, bevor die Fallgeschwindigkeit zu hoch wird,', correct: true },
        { text: '3.   warten, bis man schnell genug fällt, damit sich der Rettungsschirm sofort öffnet.', correct: false }
        ]
    },
    {
        question: '9040 Die Belastungen, durch die das Fliegen eines Loopings mit dem Drachen gefährlich wird, werden erzeugt durch:',
        answers: [
        { text: '1. die Geschwindigkeit, die man benötigt, um den Looping einzuleiten,', correct: false },
        { text: '2. die Lastvervielfachung während des gesamten Loopings,', correct: false },
        { text: '3. die Geschwindigkeit, die man benötigt, um den Looping einzuleiten und durch die Lastvervielfachung während des gesamten Loopings.', correct: true }
        ]
    },
    {
        question: '9041    Was versteht man unter einem Tumbling mit dem Drachen?',
        answers: [
        { text: '1.   Eine plötzliche, unkontrollierte Rotation um die Hochachse,', correct: false },
        { text: '2.   eine plötzliche, unkontrollierte Rotation um die Querachse,', correct: true },
        { text: '3.   eine plötzliche, unkontrollierte Rotation um die Längsachse.', correct: false }
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
        question: '9043    Stimmt es, dass der Pilot beim SWF den Rettungsschirm nur als Notlösung ziehen soll, also nur dann, wenn es nicht möglich ist, das Fluggerät so zu steuern, dass man einen sicheren Landeplatz erreichen kann?',
        answers: [
        { text: '1. Nein, das ist Aberglaube, man sollte den Rettungsschirm in einer ungewöhnlichen Flugsituation immer so schnell wie möglich benützen,', correct: false },
        { text: '2. ja, aber man braucht sich dabei nicht beeilen,', correct: false },
        { text: '3. ja, aber wenn man entschließt, ihn zu ziehen, sollte man es so schnell wie möglich tun, damit er sich rechtzeitig öffnet und er wegen der steigenden Fallgeschwindigkeit nicht zu stark belastet wird.', correct: true }
        ]
    },
    {
        question: '9044 In welchen Situationen, außer dem Unwohlsein des Piloten, sollte man den Rettungsschirm ziehen und wie?',
        answers: [
        { text: '1. Bei starker Turbulenz, wenn die Steuerung des Fluggerätes schwierig ist, man zieht den Griff mit Entschlossenheit nach oben,', correct: false },
        { text: '2. wenn man durch eine starke Thermik in eine Wolke hochgesaugt wird; man zieht den Griff nach unten, damit der Rettungsschirm sich vom Flügel entfernt,', correct: false },
        { text: '3. bei einem Gerätebruch oder einer ungewöhnlichen Flugsituation, wenn man keine Möglichkeit mehr hat, durch Gewichtsverlagerung oder Steuerung das Gerät wieder in einen normalen Flugzustand zu bekommen und zu halten; man zieht den Griff mit Entschlossenheit und so, dass der Rettungsschirm sich möglichst vom Flügel entfernt.', correct: true }
        ]
    },
    {
        question: '9045   Warum sollte man den Rettungsschirm nur als letzte Notlösung ziehen, auch wenn aus statistischen Daten hervorgeht, dass er fast immer funktioniert?',
        answers: [
        { text: '1. Weil die Statistiken nicht glaubwürdig sind,', correct: false },
        { text: '2. wenn er auch fast immer funktioniert, ist er kaum oder gar nicht steuerbar, so dass man nicht die Möglichkeit hat, einen sicheren Landeplatz auszuwählen,', correct: true },
        { text: '3. weil er meistens nicht nötig ist: wenn man die Ruhe bewahrt, kommt man aus jeder ungewöhnlichen Flugsituation wieder heraus.', correct: false }
        ]
    }

    ],
]