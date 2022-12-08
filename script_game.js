const computerSelection = getComputerChoice();




function getComputerChoice(){
    return 'бумага';
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'камень' && computerSelection == 'бумага'){
       alert('Выйграл компьютер'); 
       console.log('k b');
    }
    else if(playerSelection == 'камень' && computerSelection == 'ножницы'){
        alert('Вы выйграли');
        console.log('k n');
    }
    else if(playerSelection == 'бумага' && computerSelection == 'ножницы'){
        alert('Выйграл компьютер');
        console.log('b n');
    }
    else if(playerSelection == 'бумага' && computerSelection == 'камень'){
        alert('Вы выйграли');
    }
    else if(playerSelection == 'ножницы' && computerSelection == 'бумага'){
        alert('Вы выйграли');
    }
    else if(playerSelection == 'ножницы' && computerSelection == 'камень'){
        alert('Выйграл компьютер');
    }
    else{
        alert('Произошла ошибка');
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Введите камень,ножницы или бумага');
        playRound(playerSelection, computerSelection);
    }

}
game();
console.log('end');