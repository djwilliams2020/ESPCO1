 
var noOfGuess = 10;
var pass = 5;
var guessChoices = ['star', 'circle', 'square', 'wave', 'plus'];
var rightAns = 0;
var winAudio = new Audio('sound/win.wav');
var mainCard = document.getElementById('maincard');
var choices = document.getElementsByClassName('choice');
var msg = 'Congratulations you have earned ESP!';
var score = 0;
var score = 0;

for (i = 0; i < choices.length; i++) {
    let choice = choices[i];
    choice.addEventListener('click', function () {
        let randomIndex = Math.floor((Math.random() * guessChoices.length));
        console.log('the randome index is', randomIndex)
        let current = guessChoices[randomIndex];
        console.log('this is the guess choive at index', guessChoices)
        console.log('this is current', current);
        console.log(this.id);
        mainCard.src = 'images/' + current + '.svg';
        console.log('show me the main card', mainCard.src)
        console.log('this is this.id', this.id)
        if (current == this.id) {
            score++
            document.getElementById('score').innerHTML = "score:" + score;
            rightAns++;
            winAudio.play();
        } else {
            window.navigator.vibrate(200);
        }
        noOfGuess--;
        document.getElementById('guess').innerHTML = "Guess:" + noOfGuess;
        if (noOfGuess == 0) {
            mainCard.src = 'images/back.svg';
            if (rightAns >= pass) {
                alert('Your score is: ' + rightAns + "\n" + msg);
            } else {
                alert('Your score is: ' + rightAns + "\n" + 'Sorry you did not earn ESP!');

            }
            location.reload();
        }
    });
}
