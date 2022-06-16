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
            {text: 'The Sith', correct: true}
        ]

    
    },
    {
    question: "What is baby yodas real name?",
        answers: [
            {text: 'Yoda', correct: false},
            {text: 'Grogu', correct: true},
            {text: 'Palpatine', correct: false},
            {text: 'Graga', correct: false}
            
        ]

    
    },
    {
        question: "Who is Palpatine's granddaughter?",
            answers: [
                {text: 'Rey', correct: true},
                {text: 'Padme', correct: false},
                {text: 'Leia', correct: false},
                {text: 'Satine', correct: false}
                
            ]
    
        
    },
    {
        question: "Who adopted Anakin and Padme's daughter?",
            answers: [
                {text: 'Bail Organa', correct: true},
                {text: 'The Mandalorian', correct: false},
                {text: 'Mace Windu', correct: false},
                {text: 'Palpatine', correct: false}
                
            ]
    
        
    }, 
    {
        question: "What color was Mace Windu's lightsaber?",
            answers: [
                {text: 'Green', correct: false},
                {text: 'Blue', correct: false},
                {text: 'Red', correct: false},
                {text: 'Purple', correct: true}
                
            ]
    
        
    },   
    {
        question: "What was Galen Erso's nickname for his daughter?",
            answers: [
                {text: 'Stardust', correct: true},
                {text: 'Sunshine', correct: false},
                {text: 'Hyperdrive', correct: false},
                {text: 'Spaceway', correct: false}
                
            ]
    
        
    },  
    {
        question: "Who does BB-8 belong to?",
            answers: [
                {text: 'Anakin Skywalker', correct: false},
                {text: 'Poe Dameron', correct: true},
                {text: 'Princess Leia', correct: false},
                {text: 'Luke Skywalker', correct: false}
                
            ]
    
        
    }
]