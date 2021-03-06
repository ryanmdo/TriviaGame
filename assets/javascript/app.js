$(document).ready(function () {



    var gameStarted = false;//only used for isFirstClick
    var gameTime = 60;//60 seconds, this variable should be changing throughout execution
    var questionCount = 0;
    var correctAnswers = 0;

    var timerText = $('#timer-text');
    var questionText = $('#question-text')



   
    //recieving the choice, T/F, send the answer to the function....
    $('input').on('click', function () {

        console.log($(this).attr('data-choice') + ' was chosen')
        //start the Timer, for the first question
        if (gameStarted===false) {
            startTimer();
            //console.log('startTimer called')
        }
            //pass answer into the game logic
            checkAnswer($(this).attr('data-choice'));

            updateQuestionText()
    })

    var checkAnswer = function (answer) {
        if (questionCount < 11) {

            if (bank[questionCount].answer === answer) {
                correctAnswers++;
                console.log(correctAnswers)
            }

        }


        questionCount++;
    }



    //start Timer, ends with function that concludes game
    var startTimer = function () {
        gameStart = true;
        window.setTimeout(function () {
            console.log('Timer FINISHED, 60 seconds');


        }, 60000);
        //var refreshIntervalId = setInterval(fname, 10000);

        ///* later */
        //clearInterval(refreshIntervalId);
        var refreshInterval = window.setInterval(function () {
            if(gameTime > -1){
                //console.log(gameTime)
                gameTime--;
                updateTimer();
            }

            else {
                window.clearInterval(refreshInterval);
            }

        }, 1000);


        //conclude the game now that the time is up
        concludeGame();
    }

    //update question text
    var updateQuestionText = function () {
        questionText.text(bank[questionCount].question)
    }


    //update the timer HTML
    var updateTimer = function(){
        var txt = 'TIME LEFT: ';
        timerText.html(txt+ gameTime+'s');
    }

    //this is the 
    var countTime = function () {
        gameTime--;

    }




    var concludeGame = function () {
        clearInterval();
        var percentCorrect = correctAnswers * 10;
        console.log(percentCorrect)
    }




    updateQuestionText();
});