const questionElement = document.getElementById('question')
const nextButton = document.getElementById('next-button')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestions
function startGame(){
    console.log('GAME STARTED')
    shuffledQuestions = question.sort(()=>Math.random() - .5)
    currentQuestions = 0
    nextQuestion()
}
function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestions])
}
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){

}
const question = [
    {
        question: "Who wields the dark side and want to rule the galaxy?",
        answers: [
            {text: 'The Jedi', correct: false},
            {text: 'Jar Jar Binks', correct: false},
            {text: 'The Clone Troopers', correct: false},
            {text: 'The Sith', correc: true}
        ]

    
    }
//     {
//         question: "What is baby yodas real name?",
//         answers: {
//             a: 'Yoda',
//             b: 'Gragah',
//             c: 'Grogu',
//             d: 'Palpatine'
//         },

//     correctAnswer: "c"
    
//     },
//     {
//         question: "Who is Palpatine's granddaughter?",
//         answers: {
//             a: 'Rey',
//             b: 'Padme',
//             c: 'Leia',
//             d: 'Satine'
//         },

//     correctAnswer: "a"
    
//     },
//     {
//         question: "Who adopted Anakin and Padme's daughter?",
//         answers: {
//             a: 'Bail Organa',
//             b: 'The Mandalorian',
//             c: 'Mace Windu',
//             d: 'Palpatine'
//         },

//     correctAnswer: "a"
    
//     },
//     {
//         question: "What color was Mace Windu's lightsaber?",
//         answers: {
//             a: 'Green',
//             b: 'Blue',
//             c: 'Red',
//             d: 'Purple'
//         },

//     correctAnswer: "d"
    
//     },
//     {
//         question: "What was Galen Erso's nickname for his daughter?",
//         answers: {
//             a: 'Stardust',
//             b: 'Sunshine',
//             c: 'Hyperdrive',
//             d: 'Daughter'
//         },

//     correctAnswer: "a"
    
//     },
//     {
//         question: "Who does BB-8 belong to?",
//         answers: {
//             a: 'Anakin Skywalker',
//             b: 'Poe Dameron',
//             c: 'Princess Leia',
//             d: 'Luke Skywalker'
//         },

//     correctAnswer: "b"
    
//     },
]