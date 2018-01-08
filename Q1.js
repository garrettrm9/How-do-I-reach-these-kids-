var questions = {
  //text data for questions and answers
  question1: {
    question: 'What does 5x5 equal?',
    answer1: '25',
    answer2: '57',
    answer3: '5',
    answer4: '7',
  },

  question2: {
    question: 'What does 43-38 equal?',
    answer1: '69',
    answer2: '6',
    answer3: '9',
    answer4: '5',
  },

  question3: {
    question: 'What does 23x4 equal?',
    answer1: '13',
    answer2: '92',
    answer3: '1',
    answer4: '3',
  },

  question4: {
    question: 'What does 37+97 equal?',
    answer1: '63',
    answer2: '6',
    answer3: '134',
    answer4: '3',
  },

  question5W: {
    question: 'Do you have faith, winner?',
    answer1: 'Yes',
    answer2: 'No',
    answer3: 'Meh',
    answer4: 'Eh',
  },

  question5L: {
    question: 'Do you have faith, loser?',
    answer1: 'Eh',
    answer2: 'Meh',
    answer3: 'No',
    answer4: 'Yes',
  },
};

var $container = $('.container');
var $header = $('.header');
var $answerContainer = $('<div>').attr('id', 'answerContainer');
$container.append($answerContainer);
var $round = $('<div>').attr('id', 'round');
var $score = $('<div>').attr('id', 'score');

var roundNum = 1;
var scoreTotal = 0;
var roundCounter = questions.question1;

var roundRender = function() {
  $header.prepend($round);
  $round.text('Round: ' + roundNum);
};

var scoreRender = function() {
  $header.append($score);
  $score.text('Score: ' + scoreTotal);
};

var questionRender = function() {
  //create question div, pull text from questions object,
  //prepend div to container div
  var $question = $('<div>');
  $container.prepend($question);
  $question.attr('id', 'question');
  $question.text(roundCounter.question);
};

var answerRender1 = function() {
  //create answer div, pull text from questions object,
  //append new div to answerContainer div
  var $answer1 = $('<div>')
    .attr({ class: 'answer', id: 'answer1' })
    .click(gameLogic.checkAnswer);
  $answerContainer.append($answer1);
  $answer1.text(roundCounter.answer1);
};

var answerRender2 = function() {
  var $answer2 = $('<div>')
    .attr({ class: 'answer', id: 'answer2' })
    .click(gameLogic.checkAnswer);
  $answerContainer.append($answer2);
  $answer2.text(roundCounter.answer2);
};

var answerRender3 = function() {
  var $answer3 = $('<div>')
    .attr({ class: 'answer', id: 'answer3' })
    .click(gameLogic.checkAnswer);
  $answerContainer.append($answer3);
  $answer3.text(roundCounter.answer3);
};

var answerRender4 = function() {
  var $answer4 = $('<div>')
    .attr({ class: 'answer', id: 'answer4' })
    .click(gameLogic.checkAnswer);
  $answerContainer.append($answer4);
  $answer4.text(roundCounter.answer4);
};

var updateRender = function() {
  //updates questions and answer divs with next question
  $('#question').text(roundCounter.question);
  $('#answer1').text(roundCounter.answer1);
  $('#answer2').text(roundCounter.answer2);
  $('#answer3').text(roundCounter.answer3);
  $('#answer4').text(roundCounter.answer4);
};

var checkAnswer = function(answer) {
  //check answer, add score if applicaple, advance round
  //NEEDS CONDITION FOR IF IT'S Q5!!
  if (roundNum === 1 && event.target.innerHTML === roundCounter.answer1) {
    alert('You win');
    scoreTotal += 10;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 2 &&
    event.target.innerHTML === roundCounter.answer4
  ) {
    alert('You win');
    scoreTotal += 10;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 3 &&
    event.target.innerHTML === roundCounter.answer2
  ) {
    alert('You win');
    scoreTotal += 10;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 4 &&
    event.target.innerHTML === roundCounter.answer4
  ) {
    alert('You win');
    scoreTotal += 10;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 1 ||
    roundNum === 2 ||
    roundNum === 3 ||
    roundNum === 4
  ) {
    alert('You lose');
    roundNum += 1;
    roundRender();
    gameLogic.nextQuestion();
  }
};

var nextQuestion = function() {
  //updates roundCounter based on roundNum, re-renders question and
  //answer divs accordingly
  if (roundNum === 2) {
    roundCounter = questions.question2;
    renderBoard.updateRender();
  } else if (roundNum === 3) {
    roundCounter = questions.question3;
    renderBoard.updateRender();
  } else if (roundNum === 4) {
    roundCounter = questions.question4;
    renderBoard.updateRender();
  } else if (roundNum === 5 && scoreTotal >= 25) {
    roundCounter = questions.question5W;
    renderBoard.updateRender();
  } else if (roundNum === 5 && scoreTotal < 25) {
    roundCounter = questions.question5L;
    renderBoard.updateRender();
  }
};
// $('.answer').off('click', checkAnswer);
// remove event listener code for later

var renderBoard = {
  //create divs for question and answers, append to DOM
  //add appropriate styling classes and click events
  //re-renders text for new questions after user makes selection
  scoreRender: scoreRender,
  roundRender: roundRender,
  questionRender: questionRender,
  answerRender1: answerRender1,
  answerRender2: answerRender2,
  answerRender3: answerRender3,
  answerRender4: answerRender4,
  updateRender: updateRender,
};

var gameLogic = {
  //checks is answer is correct, adds point if correct, advances round by 1
  //re-renders score and round ... pulls new text and calls updateTender
  //from renderBoard obj
  checkAnswer: checkAnswer,
  nextQuestion: nextQuestion,
};

renderBoard.roundRender();
renderBoard.scoreRender();
renderBoard.questionRender();
renderBoard.answerRender1();
renderBoard.answerRender2();
renderBoard.answerRender3();
renderBoard.answerRender4();
