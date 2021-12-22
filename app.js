const game = () => {
        let userScore = 0;
        let cpuScore = 0;
        
        
        const startGame = () => {
          const playButton = document.querySelector(".intro button");
          const introScreen = document.querySelector(".intro");
          const match = document.querySelector(".match");
      
          playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
          });
        };
        
        const playRound = () => {
          const options = document.querySelectorAll(".options button");
          const playerHand = document.querySelector(".player-hand");
          const computerHand = document.querySelector(".computer-hand");
          const hands = document.querySelectorAll(".hands img");
      
          hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
              this.style.animation = "";
            });
          });
         
          const computerOptions = ["rock", "paper", "scissors"];
      
          options.forEach(option => {
            option.addEventListener("click", function() {
              
              const computerNumber = Math.floor(Math.random() * 3);
              playerHand.src = `./assets/rock.png`;
              computerHand.src = `./assets/rock.png`;
              const computerChoice = computerOptions[computerNumber];
      
              setTimeout(() => {
                
                compareHands(this.textContent, computerChoice);
             
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
              }, 2000);
             
              playerHand.style.animation = "shakePlayer 2s ease";
              computerHand.style.animation = "shakeComputer 2s ease";
            });
          });
        };
      
        const updateScore = () => {
          const playerScore = document.querySelector(".player-score p");
          const computerScore = document.querySelector(".computer-score p");
          playerScore.textContent = userScore;
          computerScore.textContent = cpuScore;
        };
      
        const compareHands = (playerChoice, computerChoice) => {
         
          const winner = document.querySelector(".winner");
        
          if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie!";
            return;
          }
         
          if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
              winner.textContent = "Player Wins!";
              userScore++;
              updateScore();
              return;
            } else {
              winner.textContent = "Computer Wins!";
              cpuScore++;
              updateScore();
              return;
            }
          }
          
          if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
              winner.textContent = "Computer Wins!";
              cpuScore++;
              updateScore();
              return;
            } else {
              winner.textContent = "Player Wins!";
              userScore++;
              updateScore();
              return;
            }
          }
          
          if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
              winner.textContent = "Computer Wins!";
              cpuScore++;
              updateScore();
              return;
            } else {
              winner.textContent = "Player Wins!";
              userScore++;
              updateScore();
              return;
            }
          }
        };
      
       
        startGame();
        playRound();
      };
      
      
      game();