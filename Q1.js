console.log('all good');

var questions = {
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
var x = questions.question1;

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
  $question.text(x.question);
};

var answerRender1 = function() {
  //create answer div, pull text from questions object,
  //append new div to answerContainer div
  var $answer1 = $('<div>')
    .attr({ class: 'answer', id: 'answer1' })
    .click(gameLogic.checkAnswer);
  $answerContainer.append($answer1);
  $answer1.text(x.answer1);
};

var answerRender2 = function() {
  var $answer2 = $('<div>')
    .attr({ class: 'answer', id: 'answer2' })
    .click(gameLogic.checkAnswer);
  $answerContainer.append($answer2);
  $answer2.text(x.answer2);
};

var answerRender3 = function() {
  var $answer3 = $('<div>')
    .attr({ class: 'answer', id: 'answer3' })
    .click(gameLogic.checkAnswer);
  $answerContainer.append($answer3);
  $answer3.text(x.answer3);
};

var answerRender4 = function() {
  var $answer4 = $('<div>')
    .attr({ class: 'answer', id: 'answer4' })
    .click(gameLogic.checkAnswer);
  $answerContainer.append($answer4);
  $answer4.text(x.answer4);
};

var updateRender = function() {
  $('#question').text(x.question);
  $('#answer1').text(x.answer1);
  $('#answer2').text(x.answer2);
  $('#answer3').text(x.answer3);
  $('#answer4').text(x.answer4);
};

var checkAnswer = function(answer) {
  //check answer, add score if applicaple, advance round
  //remove event listener
  if (x.answer1 === answer.target.innerHTML) {
    alert('You win');
    scoreTotal += 10;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else {
    alert('You lose');
    roundNum += 1;
    roundRender();
    gameLogic.nextQuestion();
  }
};

var nextQuestion = function() {
  if (roundNum === 2) {
    x = questions.question2;
    renderBoard.updateRender();
  } else if (roundNum === 3) {
    x = questions.question3;
    renderBoard.updateRender();
  } else if (roundNum === 4) {
    x = questions.question4;
    renderBoard.updateRender();
  } else if (roundNum === 5 && scoreTotal >= 25) {
    x = questions.question5W;
    renderBoard.updateRender();
  } else if (roundNum === 5 && scoreTotal < 25) {
    x = questions.question5L;
    renderBoard.updateRender();
  }
};

// $('.answer').off('click', checkAnswer);

var renderBoard = {
  //create divs for question and answers, append to DOM
  //add appropriate styling classes and click events
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
