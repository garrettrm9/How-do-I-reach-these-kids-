console.log('all good');

var questions = {
  question: 'What does 5x5 equal?',
  answer1: '25',
  answer2: '57',
  answer3: '5',
  answer4: '7',
};

var $score = $('.score');
$score.text = '100';

var $container = $('.container');
var $answerContainer = $('<div>').attr('id', 'answerContainer');
$container.append($answerContainer);

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
    .click(checkAnswer);
  $answerContainer.append($answer1);
  $answer1.text(questions.answer1);
};

var answerRender2 = function() {
  var $answer2 = $('<div>')
    .attr('class', 'answer')
    .click(checkAnswer);
  $answerContainer.append($answer2);
  $answer2.text(questions.answer2);
};

var answerRender3 = function() {
  var $answer3 = $('<div>')
    .attr('class', 'answer')
    .click(checkAnswer);
  $answerContainer.append($answer3);
  $answer3.text(questions.answer3);
};

var answerRender4 = function() {
  var $answer4 = $('<div>')
    .attr('class', 'answer')
    .click(checkAnswer);
  $answerContainer.append($answer4);
  $answer4.text(questions.answer4);
};

var divRender = {
  //create divs for question and answers, append to DOM
  //add appropriate styling classes and click events
  questionRender: questionRender,
  answerRender1: answerRender1,
  answerRender2: answerRender2,
  answerRender3: answerRender3,
  answerRender4: answerRender4,
};

var checkAnswer = function(answer) {
  if (questions.answer1 === answer.target.innerHTML) {
    alert('You win');
  } else {
    alert('You lose');
  }
};

divRender.questionRender();
divRender.answerRender1();
divRender.answerRender2();
divRender.answerRender3();
divRender.answerRender4();
