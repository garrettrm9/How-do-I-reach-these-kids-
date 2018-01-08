console.log('all good');

var questions = {
  question: 'What does 5x5 equal?',
  answer1: '25',
  answer2: '57',
  answer3: '5',
  answer4: '7',
};

var $container = $('.container');
var $header = $('.header');
var $answerContainer = $('<div>').attr('id', 'answerContainer');
$container.append($answerContainer);
var $round = $('<div>').attr('id', 'round');
var $score = $('<div>').attr('id', 'score');

var roundNum = 1;
var scoreTotal = 0;

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
  $question.attr('class', 'question');
  $question.text(questions.question);
};

var answerRender1 = function() {
  //create answer div, pull text from questions object,
  //append new div to answerContainer div
  var $answer1 = $('<div>')
    .attr('class', 'answer')
    .click(gameLogic.checkAnswer);
  $answerContainer.append($answer1);
  $answer1.text(questions.answer1);
};

var answerRender2 = function() {
  var $answer2 = $('<div>')
    .attr('class', 'answer')
    .click(gameLogic.checkAnswer);
  $answerContainer.append($answer2);
  $answer2.text(questions.answer2);
};

var answerRender3 = function() {
  var $answer3 = $('<div>')
    .attr('class', 'answer')
    .click(gameLogic.checkAnswer);
  $answerContainer.append($answer3);
  $answer3.text(questions.answer3);
};

var answerRender4 = function() {
  var $answer4 = $('<div>')
    .attr('class', 'answer')
    .click(gameLogic.checkAnswer);
  $answerContainer.append($answer4);
  $answer4.text(questions.answer4);
};

var checkAnswer = function(answer) {
  //check answer, add score if applicaple, advance round
  //remove event listener
  if (questions.answer1 === answer.target.innerHTML) {
    alert('You win');
    scoreTotal += 10;
    roundNum += 1;
    scoreRender();
    roundRender();
    $('.answer').off('click', checkAnswer);
  } else {
    alert('You lose');
    roundNum += 1;
    roundRender();
    $('.answer').off('click', checkAnswer);
  }
};

var nextQuestion = function() {
  if (roundNum === 2) {
  } else if (roundNum === 3) {
  } else if (roundNum === 4) {
  } else if (roundNum === 5 && scoreTotal >= 25) {
  } else if (roundNum === 5 && scoreTotal < 25) {
  }
};

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
