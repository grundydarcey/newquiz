/* eslint-disable no-console */
'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'Who was the first president of the US?',
      answers: [
        'George Washington',
        'Dr Phil',
        'Kim Kardashian',
        'Aretha Franklin'
      ],  
      correctAnswer: 'George Washington'
    },
    {
      question: 'Who is the star of Fresh Prince of Bel-Air?',
      answers: [
        'Tatiana Ali',
        'Alfonso Ribiero',
        'Will Smith',
        'Nia Long'
      ],
      correctAnswer: 'Will Smith'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  isCorrect: true
};


/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStartQuiz() {
  $('main').on('click', '#begin', function(evt) {
    store.quizStarted = true;
    render();
  });
}

handleStartQuiz();

function generateStartPage() {
  return `<div class="firstPage">
  <h2 class="intro">Welcome to my quiz, get tested on everyone's late 80's/early 90's TV shows.</h2>
  <img src="../images/download.jpg" alt="Group"><br><br>
  <button type="submit" class="button button1" id="begin">Begin Quiz</button>
 </div>`;
}

function generateQuestionPage() {
  let question = store.questions[store.questionNumber];
  let answers = question.answers.map((answer, idx) => {
    console.log(answer, idx);
    if (idx === 0) {
      return `<input type="radio" id="answer${idx}" name="answer" value="${answer}">
      <label for="answer${idx}">${answer}</label><br>`;
    }
    return `<input type="radio" id="answer${idx}" name="answer" value="${answer}">
    <label for="answer${idx}">${answer}</label><br>`;
  });
  console.log(answers);
  console.log(question);
  return `<div class="questionUn" id="questionUn">
  <h1>Question</h1>
  <p>Question: ${question.question}</p>
  ${answers.join("")} <br>  
  <button type="submit" id="questionOne">Submit</button>
  <p>Current Question: ${store.questionNumber + 1} Current Score: ${store.score}</p>
</div>`;
}


function handleQSubmit() {

}






function generatePositiveProgressPage() {
  return `<div id="yesQueTwo">
  <h2>You got it!</h2>
  <img src="../images/cheer.gif" alt="Cheering">
  <p>Congratulations, you know your stuff. ---more info here per question---</p>
  <p>Your score so far is --%.</p>
  <button type="submit">Next Question</button>
</div>`
}


function generateFinalPage() {

}

function render() {
  let html = '';
  if (store.quizStarted === false) {
    html = generateStartPage();
  } else if (store.quizStarted === true) {
    html = generateQuestionPage();
  } else if (store.isCorrect === true) {
    html = generatePositiveProgressPage();
  } ;
  

  $('main').html(html);
}

render();