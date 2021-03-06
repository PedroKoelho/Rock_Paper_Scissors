// 0. declarar as variáveis
// * foram mudadas para dentro da  function playRound
// let playerSelection = 'rock';
// let computerSelection = computerPlay();


// 1. criar function para obter jogada random do computador 
function computerPlay() {

    let randomPlay = Math.floor(Math.random() * 3)
    // Podíamos ter usado um array
    // nesta fase optamos pelo if
    if(randomPlay === 0){
        return 'rock';
    } else if (randomPlay === 1) {
        return 'paper';
    } else {
        return 'scissors'
    }
}
 
// 2. verificar que computerPlay funciona
//console.log(computerSelecion);

// 7. criar function para a jogada do player
function playerPlay() {

    let jogadaPlayer = window.prompt('Introduz a tua jogada: rock, paper ou scissors');
    jogadaPlayer = jogadaPlayer.toLowerCase();
    
    return jogadaPlayer; 

}

// 3. criar function para uma jogada
//    com dois parâmetros*** 
//    *** entretanto os parâmetros foram removidos
//    *** uma vez que as variáveis passaram para dentro da function
function playRound () {

    // let playerSelection = 'rock';
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    
    // 4. converter o parametro playerSelection em letras minúsculas
    // playerSelection = playerSelection.toLowerCase();

    // verificar as jogadas
    console.log(`Player » ${playerSelection}  Computer » ${computerSelection}`);

    // 5. retornar quem venceu a jogada
     if (computerSelection === 'rock' && playerSelection === 'scissors' ||
        computerSelection === 'scissors' && playerSelection === 'paper' ||
        computerSelection === 'paper' && playerSelection === 'rock') {
        return 'derrota';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'vitoria';
    } else {
        //console.log('That´s a Tie!');
        return 'empate';
    }
}

// 6a. Criar a function Game
 
function game() {
    
    let jogada = 0;
    let contPlayer = 0;
    let contComputer = 0;
    // 6b. Use the previous function inside of this one 
    // to play a 5 round game that keeps score 
    for(let i = 0; i < 5; i++) {
        
        jogada ++;

        let result = playRound();

        if(result === 'vitoria'){
            contPlayer ++;
        }
        if(result === 'derrota') {
            contComputer ++;
        }

        console.log(`Jogada n.º » ${jogada}`);
        console.log(`Resultado » ${result}`)
        console.log(`Player » ${contPlayer}`);
        console.log(`Computer » ${contComputer}`);
    }

    // 6c. and reports a winner or loser at the end.
    if(contPlayer < contComputer) {
        console.log(`O Vencedor é o Computador com ${contComputer} vitórias.`);
    } else if(contPlayer > contComputer) {
        console.log(`O Vencedor é o Player com ${contPlayer} vitórias.`);
    } else {
        console.log(`Não houve vencedores. O Jogo ficou empatado!`);
    }
}
game();