let bleach_questions = [];
const bleach_questions_easy = [
    {
        question: "Who was the first shinigami Ichigo met?",
        answears: [
            {text: "His Dad", correct: false},
            {text: "Renji", correct: false},
            {text: "Rukia", correct: true},
            {text: "Yuzu", correct: false}
        ]
    },
    {
        question: "What is Ichigo's Bankai?",
        answears: [
            {text: "Tensa Zangetsu", correct: true},
            {text: "Tenshi Zangetsu", correct: false},
            {text: "It was never said", correct: false},
            {text: "Getsuga Tensho", correct: false}
        ]
    },
    {
        question: "Who is the strongest espada in terms of their number?",
        answears: [
            {text: "Ulquiorra", correct: false},
            {text: "Yammy", correct: true},
            {text: "Stark", correct: false},
            {text: "Halibel", correct: false}
        ]
    },
    {
        question: "What is Aizen's shikai?",
        answears: [
            {text: "Kyoukosuigetsu", correct: false},
            {text: "Kyoukasuigetsu", correct: true},
            {text: "Kyoukasuigitsu", correct: false},
            {text: "Kyoukasoigetso", correct: false}
        ]
    },
    {
        question: "What purpose did Aizen give Wonderwise?",
        answears: [
            {text: "Kill Yamamoto", correct: false},
            {text: "To protect him", correct: false},
            {text: "Just like any other arrancar", correct: false},
            {text: "Seal Ryujin Jakka", correct: true}
        ]
    },
    {
        question: "What did Tosen replace his Bankai with?",
        answears: [
            {text: "Not replaced", correct: false},
            {text: "Hollowification", correct: true},
            {text: "An ultimate attack", correct: false},
            {text: "Different bankai", correct: false}
        ]
    },
    {
        question: "What is Komamura's bankai ability?",
        answears: [
            {text: "Summons a giant head with lazer eyes", correct: false},
            {text: "Summons a giant arm holding a sword", correct: false},
            {text: "Summon a giant Swordsman", correct: true},
            {text: "Summons a giant fist with knuckles", correct: false}
        ]
    },
    {
        question: "What is the name of Ichigo's dad?",
        answears: [
            {text: "Ishin", correct: false},
            {text: "Hishin", correct: false},
            {text: "Ishon", correct: false},
            {text: "Isshin", correct: true}
        ]
    },
    {
        question: "After Ichigo saved Rukia, what was given to him by the thirteen protection squads?",
        answears: [
            {text: "Nothing", correct: false},
            {text: "Captain's jacket", correct: false},
            {text: "Party", correct: false},
            {text: "Substitute shinigami badge", correct: true}
        ]
    },
    {
        question: "Who injured Hinamori when everyone was fighting Aizen?",
        answears: [
            {text: "Aizen", correct: false},
            {text: "Matsumoto", correct: false},
            {text: "Halibel's fracion", correct: false},
            {text: "Toshiro", correct: true}
        ]
    }
];

const bleach_questions_medium = [
    {
        question: "Which of these is the lowest level of a Menos?",
        answears: [
            {text: "Vasto Lorde", correct: false},
            {text: "Gillian", correct: true},
            {text: "Adjuchas", correct: false},
            {text: "Arrancar", correct: false}
        ]
    },
    {
        question: "Who is known as the 'Primera Espada'?",
        answears: [
            {text: "Yammy Llargo", correct: false},
            {text: "Coyote Starrk", correct: true},
            {text: "Ulquiorra Cifer", correct: false},
            {text: "Aizen Sousuke", correct: false}
        ]
    },
    {
        question: "Who's release command is \"Pray\"?",
        answears: [
            {text: "Rose Otoribashi", correct: false},
            {text: "Nnoitra Jiruga", correct: true},
            {text: "Szayel Aporro Granz", correct: false},
            {text: "Zommari Leroux", correct: false}
        ]
    },
    {
        question: "Which of the following characters gained hollow powers through his own free will?",
        answears: [
            {text: "Hirako Shinji", correct: false},
            {text: "Coyote Starrk", correct: false},
            {text: "Kurosaki Ichigo", correct: false},
            {text: "Tousen Kaname", correct: true}
        ]
    },
    {
        question: "Which of the following characters is not one of Grimmjow's Fraccion?",
        answears: [
            {text: "Il Forte Granz", correct: false},
            {text: "Shawlong Kufang", correct: false},
            {text: "D-Roy Rinker", correct: false},
            {text: "Ggio Vega", correct: true}
        ]
    },
    {
        question: "Which is the only Espada revealed to have a second release?",
        answears: [
            {text: "Grimmjow Jaegarjaques", correct: false},
            {text: "Ulquiorra Cifer", correct: true},
            {text: "Nnoitra Jiruga", correct: false},
            {text: "None of them, they each only have one release", correct: false}
        ]
    },
    {
        question: "Findor Carrias and Avirama Redder are the Fraccion of which Espada?",
        answears: [
            {text: "Six", correct: false},
            {text: "Eight", correct: false},
            {text: "Three", correct: false},
            {text: "Two", correct: true}
        ]
    },
    {
        question: "All of the espada and their fraccion are Vasto Lorde Arrancar.",
        answears: [
            {text: "True", correct: false},
            {text: "False", correct: true}
        ]
    },
    {
        question: "Who is the first Arrancar Ichigo encounters?",
        answears: [
            {text: "Yammy Llargo", correct: true},
            {text: "Grimmjow Jaegarjaques", correct: false},
            {text: "Grand Fisher", correct: false},
            {text: "Ulquiorra Cifer", correct: false}
        ]
    },
    {
        question: "Who kills the third Espada?",
        answears: [
            {text: "Hiyori", correct: false},
            {text: "Toushirou", correct: false},
            {text: "Aizen", correct: true},
            {text: "Ichigo", correct: false}
        ]
    }
];

