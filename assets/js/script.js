

const questions = [
    {
        question: "Which alternative way to ask a question is correct?",
        answers: [

             {text: "You are actor ?", correct: false},
             {text: "Am I chefs ?", correct: false},
             {text: "She is a teacher ?", correct: false},
             {text: "Is he a student ?", correct: true},

        ]
    },

    {
        question: "Which sentence corresponds: Eles são bonitos ?",
        answers: [

             {text: "He is handsome", correct: false},
             {text: "She is pretty", correct: false},
             {text: "They're good looking", correct: true},
             {text: "Is she cute ?", correct: false},

        ]
    },

    {
        question: "Which of the alternatives corresponds to the number 150?",
        answers: [

             {text: "One hundred Fifty", correct: true},
             {text: "Fifty one", correct: false},
             {text: "Six", correct: false},
             {text: "One hundred Twenty seven", correct: false},

        ]
    },

    {
        question: "Which alternative corresponds to - Qual é a idade do seu irmão ?",
        answers: [

             {text: "How old is your dog?", correct: false},
             {text: "How old are they ?", correct: false},
             {text: "How old is she?", correct: false},
             {text: "How old is your brother?", correct: true},

        ]
    },

    {
        question: "Which of the alternatives corresponds to the number 6239?",
        answers: [
            
             {text: "Two Hundred", correct: false},
             {text: "Seven Hundred Thrity Four", correct: false},
             {text: "Six thousand Two hundred Thrity Nine", correct: true},
             {text: "Twenty Two", correct: false},

        ]
    }


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){

            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);

    });

}

function resetState(){

    nextButton.style.display = "none";
    while(answerButtons.firstChild){

        answerButtons.removeChild(answerButtons.firstChild);

    }


}


function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){

        selectedBtn.classList.add("correct");
        score++;

    }else{

        selectedBtn.classList.add("incorrect");
        
    }

    Array.from(answerButtons.children).forEach(button =>{

        if(button.dataset.correct === "true"){

            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){

    resetState();
    questionElement.innerHTML = `You scored 
    ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    
}

function handleNextButton(){

    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){

        showQuestion();

    }else{

        showScore();

    }

}

nextButton.addEventListener("click", ()=>{

    if(currentQuestionIndex < questions.length){

        handleNextButton();

    }else{

        startQuiz();
    }
});

startQuiz();




