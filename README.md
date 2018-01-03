# How-do-I-reach-these-kids-
A text adventure game for a school project

Name of the game:

‘How do I reach these kids?’

Rules:

A simple text adventure putting the user through a variety of (comic) situations where they have to make the correct multiple-choice selection to best teach their class of rowdy, would-be developers the proper way to code.

If the player’s score is high enough, the class graduates and becomes rich and famous. If not, the class fails and is forced to turn to lives of crime.

MVP for this project:

A simple, cut-and-dry text adventure game with 5 multiple-choice scenarios, a visible running score for the user that also indicates how close they are to getting the class to “pass” with simple static backgrounds or no images at all, just styled text.

Reach Goals:

-Write out a high number of questions (at least 20) as part of several branching narratives
-Instead of multiple-choice questions, make it a true text adventure game where the user enters commands
-Create an effect where every time the user has to answer questions, the screen transitions to a “battle screen” a la Pokemon or most any RPG games
-A high-scorer page

Foreseen challenges or obstacles:

-Having to write out a large amount of text that is both factually correct and funny, but also making sure the “story” of the game makes sense throughout
-Creating an interface to hold the actual questions and for the user to make their selections
-Largest, most ambitious assignment to date in my young coding life, so the sheer volume of it is bound to be overwhelming and confusing

Timeline:

-Wednesday, 1-3: Map out the simplest form of the game with only 5 questions using pseudocode. Will use simple fill-in math problems instead of actual coding questions. Once completed, scale up and map out a more complex game narrative with two possible ‘conclusions’ using pseudocode and potentially scale up even further for several conclusions based on player’s score. Research other text adventures for inspiration. Create markup for tutorial page.

-Thursday, 1-4: Create markup for main game page. Start programming game logic for basic 5-question model. If successful, start styling game.

-Friday, 1-5: Finish styling game. If complete and functional, remove placeholder math questions and use actual coding questions.

-Saturday, 1-6 and Sunday, 1-7: If time allows, work on advance functions and increase game scope: increase question total to 10, add 2 additional branching questions that are determined by the user's score. If still time allows, create high scorer page, do necessary research for storing data of high scores, then work on classic text adventure user input model instead of multiple choice questions, then on transition effect described in "Reach goals" above.

-Monday, 1-8: Create slides and practice presentation. Continiue working on advanced features if time allows.

-Tuesday, 1-9: Project due!

Technology:

HTML
CSS
JavaScript
jQuery 

Repo link:

https://git.generalassemb.ly/GarrettRaskoMartinis/How-do-I-reach-these-kids-

Workflow example:

//user's first question
1. Is coding fun?
//possible answers
A. Yes // increase score by 10
B. No // decrease score by 10
C. Depends // increase score by 5
D. Undecided // no score change

(repeat for another 3 questions)

//question 5 if score is above some threshold, maybe 35?
5. The class is looking great! Do you think they'll succeed in life?
//possible answers
A. Yes // display message: "They're skilled and you believe in them! That's all they needed! Congrats, they became rich and famous! You're pay stays the same, but hey you beat the game!"
B. No // display message: "Well, the score says they're good at coding, but you don't believe in them ... such ability but no confidence is a dangerous thing. They all turn to a life of crime, but now they're highly-trained criminals. So ... good job?"
C. I'm not sure // display message: "something else funny"
D. Maybe they should take the class one more time // display message: "something else funny" // restart game

//question 5 if score is under threshold?
5. Well, either your students are terrible, or you are. Either way, they have no hope of making it in this business. Do you agree?
//possible answers
A. Yes, lousy good-for-nothin's // display message: "Well look at that! Against all odds, and in what was surely an amazing montage, they turned into ace developers over night! Apparently your terrible teaching skills and complete lack of faith were all they needed! You win the game and prove the greatest logic of all: two wrongs do make a right!"
B. No, it's not their fault, the failure is mine // display message: "Yeah, obviously, thanks. The score kinda proved that. Your honesty is refreshing, I suppose. But they still didn't learn anything. You lose the game!
C. I'm not sure // display message: "something else funny"
D. Maybe they should take the class one more time // display message: "something else funny" // restart game
