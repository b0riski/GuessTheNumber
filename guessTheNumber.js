function guessANumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let computerGuess = Math.floor(Math.random() * 100);
    let guess;
    let tries = 10;
    console.clear()
    console.log(`You have 10 tries! Can you guess the number from 0 to 100? (づ ◕‿◕ )づ`)
    let recursiveAsyncReadLine = function () {
        readline.question(`Pick a number: `, number => {
            console.clear()
            guess = Number(number);
            if (tries >= 1) {
                if (guess <= 100 && guess >= 0) {
                    if (guess == computerGuess) {
                        console.log('You guessed it! (─‿─) ♡');
                        return readline.close();
                    } else if (guess < computerGuess) {
                        tries--
                        if (tries == 1) {
                            console.log(`Too Low! ${tries} try left (ಥ‿ಥ )`);
                            recursiveAsyncReadLine()
                        } else if (tries !== 0) {
                            console.log(`Too Low! ${tries} tries left`);
                            recursiveAsyncReadLine()
                        }
                    } else if (guess > computerGuess) {
                        tries--
                        if (tries == 1) {
                            console.log(`Too High! ${tries} try left (ಥ‿ಥ )`);
                            recursiveAsyncReadLine()
                        } else if (tries !== 0) {
                            console.log(`Too High! ${tries} tries left`);
                            recursiveAsyncReadLine()
                        }
                    }
                } else {
                    console.log('Invalid input! Try again... (ᗒᗣᗕ)՞');
                    recursiveAsyncReadLine()
                }
            }
            if (tries == 0) {
                console.log('Game Over! .°(ಗдಗ。)°.')
                return readline.close();
            }
        });
    }
    recursiveAsyncReadLine();
}
guessANumber()