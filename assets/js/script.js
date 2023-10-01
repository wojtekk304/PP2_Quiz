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

const bleach_questions_hard = [
    {
        question: "What's the full name of the captain commander?",
        answears: [
            {text: "Kurotsuchi Mayuri", correct: false},
            {text: "Ukitake Juushiro", correct: false},
            {text: "Yamamoto Genryuusai Shigekuni", correct: true},
            {text: "Aizen Sousuke", correct: false}
        ]
    },
    {
        question: "What is the name of Kuchiki Byakuya's grandfather?",
        answears: [
            {text: "Kuchiki Ginrei", correct: true},
            {text: "Kuchiki Soujun", correct: false},
            {text: "Kuchiki Kouga", correct: false},
            {text: "Kuchiki Kaien", correct: false}
        ]
    },
    {
        question: "What is the name of Sasabike Chojurou's zanpakutou (1st Squad's vice captain)?",
        answears: [
            {text: "Itegumo", correct: false},
            {text: "Hisagomaru", correct: false},
            {text: "Minazuki", correct: false},
            {text: "Gonryoomaru", correct: true}
        ]
    },
    {
        question: "Who created the research bureau?",
        answears: [
            {text: "Kurotsuchi Nemu", correct: false},
            {text: "Urahara Kisuke", correct: true},
            {text: "Akon", correct: false},
            {text: "Kurotsuchi Mayuri", correct: false}
        ]
    },
    {
        question: "Who is Hisagi Shuuhei often seen with?",
        answears: [
            {text: "Kira Izuru", correct: true},
            {text: "Matsumoto Rangiku", correct: false},
            {text: "Abarai Renji", correct: false},
            {text: "Iba Tetzusaemon", correct: false}
        ]
    },
    {
        question: "What is the name of the previous 5th Squad captain?",
        answears: [
            {text: "Muguruma Kensei", correct: false},
            {text: "Hirako Shinji", correct: true},
            {text: "Aikawa Love", correct: false},
            {text: "Rojuro Otoribashi ''Rose''", correct: false}
        ]
    },
    {
        question: "Which one of these captains turns out to be a good guy, after defecting to the Soul Society?",
        answears: [
            {text: "Aizen Sousuke", correct: false},
            {text: "Kuchiki Byakuya", correct: false},
            {text: "Tousen Kaname", correct: false},
            {text: "Ichimaru Gin", correct: true}
        ]
    },
    {
        question: "What is Matsumoto Rangiku no stranger to?",
        answears: [
            {text: "Sake (alcohol)", correct: true},
            {text: "Dumplings", correct: false},
            {text: "Sweets", correct: false},
            {text: "Soda", correct: false}
        ]
    },
    {
        question: "What is the first line we hear Abarai Renji say?",
        answears: [
            {text: "\"We finally found you, Kuchiki Rukia\"", correct: true},
            {text: "\"Captain, leave it to me\"", correct: false},
            {text: "\"You're coming with us Rukia\"", correct: false},
            {text: "\"Howl, Zabimaru!\"", correct: false}
        ]
    },
    {
        question: "What is the name of the shinigami that came to the real world to check on Kuchiki Rukia?",
        answears: [
            {text: "Kurumadani Zennosuke", correct: false},
            {text: "Saidou Eikichirou", correct: true},
            {text: "Ichinose Maki", correct: false},
            {text: "Rikichi", correct: false}
        ]
    }
];

const questionElement = document.getElementById("bleach_questions");
const answearButtons = document.getElementById("answear_btns");
const nextButton = document.getElementById("next_btn");
const welcomeText = document.getElementById("welcome_text");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    welcomeText.innerHTML = "Welcome to Bleach Quiz!"
    nextButton.innerHTML = "Next";
    questionElement.innerHTML = "Please select Your Trivia!";
    const button = document.createElement("button");
    button.innerHTML = "Test Your Knowledge Trivia";
    button.classList.add("ans_btn");
    const button2 = document.createElement("button");
    button2.innerHTML = "Hollows Trivia";
    button2.classList.add("ans_btn");
    const button3 = document.createElement("button");
    button3.innerHTML = "Gotei 13 Squad Trivia";
    button3.classList.add("ans_btn");
    answearButtons.appendChild(button);
    answearButtons.appendChild(button2);
    answearButtons.appendChild(button3);
    button.addEventListener("click", selectDifficulty);
    button2.addEventListener("click", selectDifficulty);
    button3.addEventListener("click", selectDifficulty);
}

function selectDifficulty(e){
    const selectButton = e.target;
    if(selectButton.innerHTML === "Test Your Knowledge Trivia"){
        bleach_questions = bleach_questions_easy;
        showQuestion();
    } else if(selectButton.innerHTML === "Hollows Trivia"){
        bleach_questions = bleach_questions_medium;
        showQuestion();
    } else {
        bleach_questions = bleach_questions_hard;
        showQuestion();
    }
}

function showQuestion(){
    
    resetState();

    let currentQuestion = bleach_questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    welcomeText.innerHTML = "Question: " + questionNo + " / " + bleach_questions.length;
    
    questionElement.innerHTML = currentQuestion.question;
    
    currentQuestion.answears.forEach(answears => {
        const button = document.createElement("button");
        button.innerHTML = answears.text;
        button.classList.add("ans_btn");
        answearButtons.appendChild(button);
        if(answears.correct){
            button.dataset.correct = answears.correct;
        }
        button.addEventListener("click", selectAnswear);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answearButtons.firstChild){
        answearButtons.removeChild(answearButtons.firstChild);
    }
}

function selectAnswear(e){
    const selectButton = e.target;
    const isCorrect = selectButton.dataset.correct === "true";
    if(isCorrect){
        selectButton.classList.add("correct");
        score++;
    } else {
        selectButton.classList.add("incorrect");
    }
    Array.from(answearButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < bleach_questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
})

function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < bleach_questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${bleach_questions.length}!`;
    nextButton.innerHTML = "Play Again.";
    nextButton.style.display = "block";
}

startQuiz();