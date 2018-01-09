var questions = {
  //text data for questions and answers
  question1: {
    question:
      '1. You enter your class, a group of 20 rambunctious students stand in front of you. You exclaim, "All right, class! Time to begin." But they do not respond. What do you do?',
    answer1:
      'A. Use your most assertive, yet friendly voice to get their attention.',
    answer2:
      'B. Scream curse words and naughty jokes until they realize how "cool" you are.',
    answer3:
      "C. Stand meekly in the front of the room until they figure out you're in charge.",
    answer4: "D. Rely on your T.A. to introduce you, you're above such things.",
  },

  question2: {
    question:
      "Now that the class knows who you are, it's time to start teaching. But how do you approach this?",
    answer1:
      "A. Step aside, let the T.A. teach the material. They know what they're doing.",
    answer2:
      'B. No need to rush, these kids look smart. Let them look it up themselves. You got shopping to do.',
    answer3:
      'C. Teach the material, but why be patient? Scream at them when they mess up.',
    answer4:
      "D. Start teaching the material, give them lots of breaks, don't yell at them.",
  },

  question3: {
    question:
      '3. These kids are asking a lot of questions! How will you react to this challenge?',
    answer1:
      'A. Answer the question quickly, and ignore their inevitable follow-up queries.',
    answer2:
      'B. Break it down for them piece-by-piece, and answer their follow-up questions with care and respect.',
    answer3:
      'C. Tell the students to ask the T.A. after class. You got bigger problems to deal with.',
    answer4:
      "D. Ignore them, they'll figure it out for themselves. Or fail, who cares?",
  },

  question4: {
    question:
      "4. Wow, those 3 months really flew by! The students are working on their final projects and they're asking for help. How will you handle this?",
    answer1: 'A. You know the drill by now. That grunt work is for the T.A.',
    answer2:
      "B. Identify the 'smart kid' in the class, help them, then tell them they have to help the other students.",
    answer3:
      'C. Sit down with them one-by-one until all their projects are top-notch.',
    answer4:
      'D. It be nice to help them with their projects, but it would be way funnier to purposely sabotage them and offer bad advice.',
  },

  question5W: {
    question:
      "5. Well the students all graduated with honors. Their projects are ground-breaking and their prodigious skills are undeniable. There's only one question remaining: do you believe in your students?",
    answer1: 'A. Of course I do.',
    answer2: "B. Who's to say?",
    answer3: "C. Well, I don't NOT believe in them.",
    answer4: 'D. These idiots? Are you kidding me?',
  },

  question5L: {
    question:
      '5. Well, either your students are terrible, or you are. In either case, they have no hope of making it in this business. Or do you disagree?',
    answer1: "A. No, I agree - they're a bunch of lousy good-for-nothin's.",
    answer2: "B. It's not their fault, the failure is mine.",
    answer3:
      "C. It isn't that they have no hope, so much as they have NO HOPE.",
    answer4: "D. Wait, I'm still working that job?",
  },
};

var $container = $('.container');
var $header = $('.header');
var $footer = $('.footer');
var $answerContainer = $('<div>').attr('id', 'answerContainer');
$container.append($answerContainer);
var $round = $('<div>').attr('id', 'round');
var $score = $('<div>').attr('id', 'score');

var $button = $('button');
$button.click(function() {
  location.reload();
});

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

var checkAnswer = function(event) {
  //check answer, add score if applicaple, advance round
  //NEEDS CONDITION FOR IF IT'S Q5!!
  if (roundNum === 1 && event.target.innerHTML === roundCounter.answer1) {
    $footer.text('Way to take control of the situation! 10 points');
    scoreTotal += 10;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 1 &&
    event.target.innerHTML === roundCounter.answer2
  ) {
    $footer.text(
      'You are definitely cool, but maybe not the best educational approach. 2.5 points'
    );
    scoreTotal += 2.5;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 1 &&
    event.target.innerHTML === roundCounter.answer3
  ) {
    $footer.text('Did you actually think that would work? 0 points');
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 1 &&
    event.target.innerHTML === roundCounter.answer4
  ) {
    $footer.text(
      'I guess that got the job done, not exactly relateable though ... 5 points'
    );
    scoreTotal += 5;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 2 &&
    event.target.innerHTML === roundCounter.answer1
  ) {
    $footer.text(
      "The students are learning the material, but they don't respect you much. 5 points"
    );
    scoreTotal += 5;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 2 &&
    event.target.innerHTML === roundCounter.answer2
  ) {
    $footer.text(
      'Sure, that does sorta work. But you have like zero integrity, huh? 2.5 points'
    );
    scoreTotal += 2.5;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 2 &&
    event.target.innerHTML === roundCounter.answer3
  ) {
    $footer.text(
      "Turns out being a jerk doesn't make you a good teacher. Strange ... 0 points"
    );
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 2 &&
    event.target.innerHTML === roundCounter.answer4
  ) {
    $footer.text(
      "You are a teaching wiz! They'll be seasoned in no time! 10 points"
    );
    scoreTotal += 10;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 3 &&
    event.target.innerHTML === roundCounter.answer1
  ) {
    $footer.text(
      "Well, the student asking the question didn't learn anything. But you didn't confuse them any further, so that's something. 2.5 points"
    );
    scoreTotal += 2.5;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 3 &&
    event.target.innerHTML === roundCounter.answer2
  ) {
    $footer.text(
      'Your knowledge of programming is matched only by your empathy and patience! 10 points'
    );
    scoreTotal += 10;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 3 &&
    event.target.innerHTML === roundCounter.answer3
  ) {
    $footer.text(
      "Good thing your T.A. is so dependable. But I hope you won't take credit when the students achieve fame and fortune. 5 points"
    );
    scoreTotal += 5;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 3 &&
    event.target.innerHTML === roundCounter.answer4
  ) {
    $footer.text(
      'Well, if your strategy is for the students to fail, your approach makes sense. 0 points'
    );
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 4 &&
    event.target.innerHTML === roundCounter.answer1
  ) {
    $footer.text(
      'Sheesh, hope the T.A. is at least getting paid for this. 5 points'
    );
    scoreTotal += 5;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 4 &&
    event.target.innerHTML === roundCounter.answer2
  ) {
    $footer.text(
      'Your lazy ways yield minor results. Way to shoot low! 2.5 points'
    );
    scoreTotal += 2.5;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 4 &&
    event.target.innerHTML === roundCounter.answer3
  ) {
    $footer.text(
      "You are basically the perfect teacher. Or you figured out how this game works and you're just telling me what I want to hear. 10 points"
    );
    scoreTotal += 10;
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundNum === 4 &&
    event.target.innerHTML === roundCounter.answer4
  ) {
    $footer.text(
      'That is funny! But man, you are really unqualified for this job. 0 points'
    );
    roundNum += 1;
    scoreRender();
    roundRender();
    gameLogic.nextQuestion();
  } else if (
    roundCounter === questions.question5W &&
    event.target.innerHTML === roundCounter.answer1
  ) {
    $footer.text(
      'Your faith in them was the missing ingredient. Congrats, they became rich and famous! Your pay stays the same, but hey you beat the game!'
    );
    $('.answer').off('click', checkAnswer);
  } else if (
    roundCounter === questions.question5W &&
    event.target.innerHTML === roundCounter.answer2
  ) {
    $footer.text(
      "Well, you're an authority! I mean, look at that score. Your students are confused by your attitude, but they still become rich and famous. I'd say you won the game, but who's to say?"
    );
    $('.answer').off('click', checkAnswer);
  } else if (
    roundCounter === questions.question5W &&
    event.target.innerHTML === roundCounter.answer3
  ) {
    $footer.text(
      "That's a stupid thing to say, and a double-negative. Despite your students' talents, your answer is so dumb I just decided that you lose - your students turn to a life of crime."
    );
    $('.answer').off('click', checkAnswer);
  } else if (
    roundCounter === questions.question5W &&
    event.target.innerHTML === roundCounter.answer4
  ) {
    $footer.text(
      "Well, the score says they're good at coding, but you don't believe in them ... such ability but no confidence is a dangerous thing. They all turn to a life of crime, but now they're highly-trained criminals. So ... good job?"
    );
    $('.answer').off('click', checkAnswer);
  } else if (
    roundCounter === questions.question5L &&
    event.target.innerHTML === roundCounter.answer1
  ) {
    $footer.text(
      'Look at that! Against all odds, and in what was surely an amazing montage, they turned into ace developers overnight! Apparently your terrible teaching skills and complete lack of faith were all they needed! You win the game and prove once again that two wrongs do make a right!'
    );
    $('.answer').off('click', checkAnswer);
  } else if (
    roundCounter === questions.question5L &&
    event.target.innerHTML === roundCounter.answer2
  ) {
    $footer.text(
      "Yeah, obviously, thanks. The score kinda proved that. Your honesty is refreshing, I suppose. But they still didn't learn anything. You lose the game."
    );
    $('.answer').off('click', checkAnswer);
  } else if (
    roundCounter === questions.question5L &&
    event.target.innerHTML === roundCounter.answer3
  ) {
    $footer.text(
      "Damn, you're terrible. You're awful at teaching and even more awful at being a human. You lose the game and your students win the lottery forever ... asshole."
    );
    $('.answer').off('click', checkAnswer);
  } else if (
    roundCounter === questions.question5L &&
    event.target.innerHTML === roundCounter.answer4
  ) {
    $footer.text(
      "That's a refreshingly honest answer. In case there was any question, your students are all job-less criminals now. You lose the game with distinction."
    );
    $('.answer').off('click', checkAnswer);
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
