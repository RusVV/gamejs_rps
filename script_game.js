function getComputerChoice(){
    let arr = ['камень', 'ножницы', 'бумага'];
    let randomArr = arr[parseInt((Math.floor(Math.random() * (arr.lentgh))))];
    console.log(parseInt((Math.floor(Math.random() * (arr.lentgh)))));
    return randomArr;
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
console.log(getComputerChoice());