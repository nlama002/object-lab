const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    play: function() {
    
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

      while(this.secretNum != null)
      {
        let guess = this.getGuess();
        this.prevGuesses.push(guess)
        game.render();
      }
    },

    getGuess: function()
    {
      
      let guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
      
      if (guess > 100 || guess <1){
          alert("Your guess number is out of range please enter another number")
          this.getGuess()
        }
        else{
          return guess;
        } 

    },

    render: function(){
      if (this.prevGuesses.length != 0)
      {
        lastGuess = this.prevGuesses[this.prevGuesses.length-1];
      
      
      if (lastGuess > this.secretNum){
        alert("Guess is too high enter a lower number")
      }

      else if (lastGuess < this.secretNum){
        alert("your guess too low please guess another number")
      }
      else {
        this.secretNum = null;
        alert('Congrats you guessed correctly')
      }
      }

    }

  }
  
  game.prevGuesses = [];
  game.play();
 // game.getGuess
