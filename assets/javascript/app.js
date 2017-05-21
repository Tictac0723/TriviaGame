var question1 = {
    question: "What is the magical creature with one horn?",
    choices: ["Unicorn", "Horse", "Patagonian", "Naked Mole Rat"],
    answerIndex: 0,
    resultDescription: "The Unicorn is a mythical horse-like beast, with a horn attached on its forehead. Unicorns can live to be hundreds, perhaps even thousands of years old if left untouched by evil hands. There is little genuine fact known about the animal, due to it being mainly a creature of myth and legend.",
    resultImage: "assets/images/unicorn.gif",
};
var question2 = {
    question: "Who gave Harry Potter his famous lightning bolt shaped scar?",
    choices: ["Draco Malfoy", "Severus Snape", "Lord Voldemort", "Dobby the House elf"],
    answerIndex: 2,
    resultDescription: "Voldemort is the main antagonist of the Harry Potter book and film franchise. He is a very powerful Dark Wizard and the Dark Lord of the Death Eaters; who aims to take over the wizarding world and shape it following his supremacist views.",
    resultImage: "assets/images/voldemort.gif",
};
var question3 = {
    question: "What creature sucks human blood?",
    choices: ["Lochness Monster", "Vampire", "Werewolf", "Dragon"],
    answerIndex: 1,
    resultDescription: "A vampire is a being from folklore who subsists by feeding on the life essence (generally in the form of blood) of the living. ... They wore shrouds and were often described as bloated and of ruddy or dark countenance, markedly different from today's gaunt, pale vampire which dates from the early 19th century.",
    resultImage: "assets/images/vampire.gif",
};
var question4 = {
    question: "What movie does Channing Tatum work in a strip club?",
    choices: ["Step Up", "21 Jump Street", "Dear John", "Magic Mike"],
    answerIndex: 3,
    resultDescription: "Channing Tatum as Michael 'Magic Mike' Lane, a male stripper who performs at Xquisite. Alex Pettyfer as Adam 'The Kid', Mike's protege who befriends him. Olivia Munn as Joanna, Mike's on-again, off-again lover. Matthew McConaughey as Dallas, a former stripper who owns Xquisite and is Mike's boss.",
    resultImage: "assets/images/magicMike.gif",
};
var question5 = {
    question: "Who is the most well known magician?",
    choices: ["David Blaine", "Penn and Teller", "Harry Houdini", "Criss Angel"],
    answerIndex: 2,
    resultDescription: "Harry Houdini (born Erik Weisz, later Ehrich Weiss or Harry Weiss; March 24, 1874 – October 31, 1926) was a Hungarian-American illusionist and stunt performer, noted for his sensational escape acts. ... He was also quick to sue anyone who imitated his escape stunts.",
    resultImage: "assets/images/magic.gif",
};
var question6 = {
    question: "What kind of magic did Donald Trump use to win the election?",
    choices: ["his yuge words/brain", "James Comey", "alternative facts", "Russian medeling"],
    answerIndex: 3,
    resultDescription: "Donald Trump is the cheeto of a man that won the 2016 presidental election. No one quite knows why he won the election. We are all still in shock.",
    resultImage: "assets/images/donaldTrump.gif",
};
var question7 = {
    question: "What is one of the most popular card games relating to magic?",
    choices: ["Magic Ace", "Cards Against Humanity", "Munchkins", "Magic: the Gathering"],
    answerIndex: 3,
    resultDescription: "Magic: The Gathering (MTG; also known as Magic) is a trading card game created by Richard Garfield. First published in 1993 by Wizards of the Coast, Magic was the first trading card game produced and it continues to thrive, with approximately twenty million players as of 2015.",
    resultImage: "assets/images/magicTheGathering.gif",
}
var questions = [question1, question2, question3, question4, question5, question6, question7];
var questionsIndex = 0;
var timer;
window.onload = function() {
    $("#nextQuestion").hide();
    $("#question").hide();
    $("#answers").hide();

function timer() {
    seconds = 15;
     timer = setInterval(function() {
     	$("#timeLeft").text(seconds--);
     	if (seconds === 0) {
     		clearInterval(timer);
     		lose();
     		$("#timeLeft").hide();
     	}
     },1000);
 }

    $("#startButton").on("click", function() {
        questionSetup();
        $("#startButton").hide();
        timer();
    });

    $("#choice1").on("click", function() {
        if (questions[questionsIndex].answerIndex === 0) {
            win();
        } else {
            lose();
        }
        hideTimer();
    })
    $("#choice2").on("click", function() {
        if (questions[questionsIndex].answerIndex === 1) {
            win();
        } else {
            lose();
        }
        hideTimer();
    })
    $("#choice3").on("click", function() {
        if (questions[questionsIndex].answerIndex === 2) {
            win();
        } else {
            lose();
        }
        hideTimer();
    })
    $("#choice4").on("click", function() {
        if (questions[questionsIndex].answerIndex === 3) {
            win();
        } else {
            lose();
        }
        hideTimer();
    })

    $("#nextQuestion").on("click", function() {
        nextQuestion();
    })


    function win() {
        $("#question").hide();
        $("#choice1").hide();
        $("#choice2").hide();
        $("#choice3").hide();
        $("#choice4").hide();
        $("#results").show();
        $("#outcome").html("You must be using magic! That's right!")
        $("#resultDescription").html(questions[questionsIndex].resultDescription);
        $("#resultImage").attr("src", questions[questionsIndex].resultImage);
        if (questionsIndex === 6) {
            $("#nextQuestion").hide();
        } else {
            $("#nextQuestion").show();
        }
    }

    function lose() {
        $("#question").hide();
        $("#choice1").hide();
        $("#choice2").hide();
        $("#choice3").hide();
        $("#choice4").hide();
        $("#results").show();
        $("#outcome").html("What a muggle! You're wrong!")
        $("#resultDescription").html(questions[questionsIndex].resultDescription);
        $("#resultImage").attr("src", questions[questionsIndex].resultImage);
        if (questionsIndex === 6) {
            $("#nextQuestion").hide();
        } else {
            $("#nextQuestion").show();
        }
    }

    function nextQuestion() {
        questionsIndex++;
        $("#question").show();
        $("#choice1").show();
        $("#choice2").show();
        $("#choice3").show();
        $("#choice4").show();
        $("#results").hide();
        questionSetup();
    }

    function questionSetup() {
    	$("#question").show();
    	$("#answers").show();
        $("#question").html(questions[questionsIndex].question);
        $("#choice1").html(questions[questionsIndex].choices[0]);
        $("#choice2").html(questions[questionsIndex].choices[1]);
        $("#choice3").html(questions[questionsIndex].choices[2]);
        $("#choice4").html(questions[questionsIndex].choices[3]);
    }

   function hideTimer() {
   	clearInterval(timer);
   	$("#timeLeft").hide();
   }
}
