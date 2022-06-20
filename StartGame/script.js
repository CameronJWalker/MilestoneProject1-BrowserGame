// select the question element
const questionElement = document.getElementById('question')
const nextButton = document.getElementById('next-button')
// select the answer buttons element
const answerButtonsElement = document.getElementById('answer-buttons')
//creates two new variables to be used later in a function
let shuffledQuestions, currentQuestions
let score = 0
//call the next button so when clicked it runs the two functions and sets the next question
nextButton.addEventListener('click',() => {
    currentQuestions++
    nextQuestion()
    removeLightsaber()
})
// when page is loaded this function will shuffle the questions and display the first question, starting the game
function startGame(){
    console.log('GAME STARTED')
    // randomises the questions
    shuffledQuestions = question.sort(()=>Math.random() - .5)
    currentQuestions = 0
    nextQuestion()
}
// when the next button is clicked it will reset the game state that way the new question and answer is displayed
function nextQuestion() {
    resetGame()
    showQuestion(shuffledQuestions[currentQuestions])
}
// takes a question object from the question array and shows the question and given answers in the buttons
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
// resets the state of the game so that the old answers are not left in the buttons 
function resetGame(){
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
// function for when an answer button is clicked it states correct or wrong
function selectAnswer(e){
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStatus(document.body, correct)
    //returns a collection of the correct answers for each button 
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatus(button, button.dataset.correct)
    })
    const showGreenLightSaber = () => {
        document.getElementById("greenlightsaber").style.display ='block';
    }
    const showRedLightSaber = () =>{
        document.getElementById("redlightsaber").style.display ='block';
    }
    // function to show a green light saber for correct and a red light saber for wrong
    function showLightSaber(){
        if(correct){
                showGreenLightSaber()
         }else{
                 showRedLightSaber()
            }}
    showLightSaber()
    // function to display score and increment it every time a correct answer is given
    function scores(){
        if(correct){
            score ++
            document.getElementById('scoreboard').innerHTML = "Score: " + score;
        }
    }
    scores()
    function endGame(){
        if(score == 10){
            document.getElementById('scoreboard').innerHTML = "YOU WIN";
        }
    }
    endGame()
}

// remove the lightsaber image so the next answer can be clicked
function removeLightsaber(){
    document.getElementById('greenlightsaber').style.display="none";
    document.getElementById('redlightsaber').style.display="none";
 }
//  if the button clicked is correct, it adds correct to the class list and vice versa
function setStatus(element, correct){
    clearStatus(element)
    if(correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
//     const showGreenLightSaber = () => {
//         document.getElementById("greenlightsaber").style.display ='block';
//     }
//     const showRedLightSaber = () =>{
//         document.getElementById("redlightsaber").style.display ='block';
//     }
//     function showLightSaber(){
//         if(correct){
//                 showGreenLightSaber()
//          }
//                  showRedLightSaber()
//             }
//     showLightSaber()
 }
//  removes the classes 
function clearStatus(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
// create a function to display the score

// array of all the questions
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
    
        
    },
    {
        question: "Who is Lukes father?",
            answers: [
                {text: "Kit Phisto", correct:false},
                {text: "Qui Gon Jinn", correct:false},
                {text: "Palpatine", correct:false},
                {text: "Darth Vader", correct:true}
            ]
    },
    {
        question: "When did the first Star Wars come out?",
            answers: [
                {text: "1978", correct:false},
                {text: "1987", correct:false},
                {text: "1977", correct:true},
                {text: "1969", correct:false}
            ]
    },
    {
        question: "Who is the only non Jedi in the original Star Wars trilogy to use a lightsaber?",
            answers: [
                {text: "Chewbacca", correct:false},
                {text: "Han Solo", correct:true},
                {text: "R2-D2", correct:false},
                {text: "Owen", correct:false}
            ]
    },
    {
        question: "How many languages can C-3PO speak?",
            answers: [
                {text: "6 thousand", correct:false},
                {text: "6 million", correct:true},
                {text: "6 billion", correct:false},
                {text: "6 trillion", correct:false}
            ]
    },
    {
        question: "What is Count Dooku's Sith name?",
            answers: [
                {text: "Darth Tyranus", correct:true},
                {text: "Darth Maul", correct:false},
                {text: "Darth Revan", correct:false},
                {text: "Darth Bane", correct:false}
            ]
    },
    {
        question: "Han Solo was frozen in what?",
            answers: [
                {text: "Stone", correct:false},
                {text: "Bacta", correct:false},
                {text: "Carbonite", correct:true},
                {text: "Duracrete", correct:false}
            ]
    },
    {
        question: "Padme was Queen of what?",
            answers: [
                {text: "Alderaan", correct:false},
                {text: "Naboo", correct:true},
                {text: "Tatooine", correct:false},
                {text: "Coruscant", correct:false}
            ]
    },
    {
        question: "In Rogue One, what is the Empire removing from the holy city on Jedha?",
            answers: [
                {text: "Force Sensitive Users", correct:false},
                {text: "Jedi texts", correct:false},
                {text: "Kyber Crystals", correct:true},
                {text: "Tibanna Gas", correct:false}
            ]
    },
    {
        question: "In The Empire Strikes Back, which All Terrain Walker does the Empire use to capture the rebel base?",
            answers: [
                {text: "AT-ST", correct:false},
                {text: "AT-TE", correct:false},
                {text: "AT-AT", correct:true},
                {text: "AT-HS", correct:false}
            ]
    },
    {
        question: "In The Force Awakens, what are Han and Chewie hauling on their freighter?",
            answers: [
                {text: "Rancors", correct:false},
                {text: "Sarlaccs", correct:false},
                {text: "Wampas", correct:false},
                {text: "Rathtars", correct:true}
            ]
    },
    {
        question: "What was the name of the clone who ordered the shooting of Obi Wan Kenobi?",
            answers: [
                {text: "Commander Cody", correct:true},
                {text: "Wolf", correct:false},
                {text: "Captain Rex", correct:false},
                {text: "Palpatine", correct:false}
            ]
    }
]