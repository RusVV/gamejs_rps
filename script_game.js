function getComputerChoice(){
    let arr = new Array ('камень', 'ножницы', 'бумага');
    let randomInd=Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    //console.log(arr[randomInd]);
    return arr[randomInd];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === 'камень' && computerSelection === 'бумага'){
       alert('Выйграл компьютер'); 
    }
    else if(playerSelection === 'камень' && computerSelection === 'ножницы'){
        alert('Вы выйграли');
    }
    else if(playerSelection === 'бумага' && computerSelection === 'ножницы'){
        alert('Выйграл компьютер');
    }
    else if(playerSelection === 'бумага' && computerSelection === 'камень'){
        alert('Вы выйграли');
    }
    else if(playerSelection === 'ножницы' && computerSelection === 'бумага'){
        alert('Вы выйграли');
    }
    else if(playerSelection === 'ножницы' && computerSelection === 'камень'){
        alert('Выйграл компьютер');
    }
    else if((playerSelection === 'камень' && computerSelection === 'камень') || (playerSelection === 'ножницы' && computerSelection === 'ножницы') || (playerSelection === 'бумага' && computerSelection === 'бумага')){
        alert('Ничья');
    }
    else{
        alert('Произошла ошибка');
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt('Введите камень,ножницы или бумага');
        playRound(playerSelection, computerSelection);
    }

}
game();
console.log('end');