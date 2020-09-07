
var noOfGuess = 10;
var pass = 5;
var guessChoices = ['star', 'circle', 'square', 'wave', 'plus'];
var rightAns = 0;
var winAudio = new Audio('sound/win.wav');
var mainCard = document.getElementById('maincard');
var choices = document.getElementsByClassName('choice');

for (i = 0; i < choices.length; i++) {
    let choice = choices[i];
    choice.addEventListener('click', function () {
        let randomIndex = Math.floor((Math.random() * guessChoices.length));
        let current = guessChoices[randomIndex];
        console.log(current);
        console.log(this.id);
        mainCard.src = 'images/' + current + '.svg';
        if (current == this.id) {
            rightAns++;
            winAudio.play();
        } else {
            window.navigator.vibrate(200);
        }
        noOfGuess--;
        if (noOfGuess == 0) {
            mainCard.src = 'images/back.svg';
            if (rightAns >= pass) {
                alert('Congratulations you have earned ESP!');
            } else {
                alert('Sorry you did not earn ESP!');
            }
        }
    });
}
