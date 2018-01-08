var questions = {
  question1: {
    question: 'What does 5x5 equal?',
    answer1: '25',
    answer2: '57',
    answer3: '57',
    answer4: '57',
  },

  question2: {
    question: 'What does 43-38 equal?',
    answer1: '69',
    answer2: '69',
    answer3: '69',
    answer4: '5',
  },

  question3: {
    question: 'What does 23x4 equal?',
    answer1: '13',
    answer2: '92',
    answer3: '13',
    answer4: '13',
  },

  question4: {
    question: 'What does 37+97 equal?',
    answer1: '63',
    answer2: '63',
    answer3: '134',
    answer4: '63',
  },

  question5W: {
    question: 'Do you have faith, winner?',
    answer1: 'Yes',
    answer2: 'No',
    answer3: 'No',
    answer4: 'No',
  },

  question5L: {
    question: 'Do you have faith, loser?',
    answer1: 'No',
    answer2: 'No',
    answer3: 'No',
    answer4: 'Yes',
  },
};

// var questions = [
//   {
//     question: 'What does 5x5 equal?',
//     choices: [25, 45, 23, 22],
//     answer: 25,
//   },

var round = 5;
var x = 0;
var score = 5;

if (round === 1) {
  x = questions.question1;
} else if (round === 2) {
  x = questions.question2;
} else if (round === 3) {
  x = questions.question3;
} else if (round === 4) {
  x = questions.question4;
} else if (round === 5 && score >= 25) {
  x = questions.question5W;
} else if (round === 5 && score < 25) {
  x = questions.question5L;
}

console.log(x.answer1);
