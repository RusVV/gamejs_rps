function getComputerChoice(){
    let arr = new Array ('камень', 'ножницы', 'бумага');
    let randomInd=Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    //console.log(arr[randomInd]);
    return arr[randomInd];
}

function playRound(playerSelection, computerSelection){
    let answer = document.querySelector('.answer');
    let inp = document.querySelector('.inp');
    //console.log(answer);
    if(playerSelection === 'камень' && computerSelection === 'бумага'){
        answer.innerText = 'Выйграл компьютер';
        answer.style.color="red";
        inp.value = "";
    }
    else if(playerSelection === 'камень' && computerSelection === 'ножницы'){
        answer.innerText = 'Выйграл игрок';
        answer.style.color="green";
        inp.value = "";
    }
    else if(playerSelection === 'бумага' && computerSelection === 'ножницы'){
        answer.innerText = 'Выйграл компьютер';
        answer.style.color="red";
        inp.value = ""; 
    }
    else if(playerSelection === 'бумага' && computerSelection === 'камень'){
        answer.innerText = 'Выйграл игрок';
        answer.style.color="green";
        inp.value = ""; 
    }
    else if(playerSelection === 'ножницы' && computerSelection === 'бумага'){
        answer.innerText = 'Выйграл игрок';
        answer.style.color="green";
        inp.value = ""; 
    }
    else if(playerSelection === 'ножницы' && computerSelection === 'камень'){
        answer.innerText = 'Выйграл компьютер';
        answer.style.color="red";
        inp.value = ""; 
    }
    else if((playerSelection === 'камень' && computerSelection === 'камень') || (playerSelection === 'ножницы' && computerSelection === 'ножницы') || (playerSelection === 'бумага' && computerSelection === 'бумага')){
        answer.innerText = 'Ничья';
        answer.style.color="black";
        inp.value = ""; 
    }
    else{
        alert('Произошла ошибка');
    }
}

function game(){
        let computerSelection = getComputerChoice();
        let playerSelection = document.querySelector('.inp').value;
        //console.log(playerSelection);
        //console.log(computerSelection);
        playRound(playerSelection, computerSelection);
         
}

//game();
console.log('end');