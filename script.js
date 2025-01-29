const playBoard = document.querySelector('.playBoard')

let foodX ;
let foodY ;
let snakeX = 10;
let snakeY = 30;
let velocidadX = 0;
let velocidadY = 0;
let snakeBody = [];
let gameOver = false;
let setIntervalId;


//funcion para cuando el jugador pierde volver a empezar 

const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert('game over');
    location.reload();
}



//Funcion que nos dara la posicion de la comida a la azar 
const changFoodPosition=() =>{
    foodX = Math.floor(Math.random() * 30) + 1 ;
    foodY = Math.floor(Math.random() * 30) + 1 ;

}

const changeDirection = (e) =>{
    if(e.key === 'ArrowUp' && velocidadY != 1){
        velocidadX = 0;
        velocidadY = -1;
    }else if(e.key === 'ArrowDown' && velocidadY != -1){
        velocidadX = 0;
        velocidadY = 1;
    }else if(e.key === 'ArrowLeft' && velocidadX != 1){
        velocidadX = -1;
        velocidadY = 0;
    }else if(e.key === 'ArrowRight' && velocidadX != -1){
        velocidadX = 1;
        velocidadY = 0;
    }

}


//funcion que le da inicio al juego como tal 
const initGame = () => {
    //pasamos la funcion para verificar si el jugador perdio o se salio de las esquinas 
    if(gameOver) return handleGameOver();
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

   
    //cada vez que la culebra pase por la comida, se reposicionara en un nuevo lugar.
    if(snakeX === foodX && snakeY === foodY){
        changFoodPosition();
        //agregamos la comida a la serpietne cuando pase por ella 
        snakeBody.push([foodX, foodY]);
    }

//creamos un for para hacer que la serpiente cresca cada vez que pasa 
for(let i = snakeBody.length - 1; i > 0; i--){
    snakeBody[i] = snakeBody[i - 1];
}


    //le damos cordenadas a la serpiente 
    snakeBody[0] = [snakeX, snakeY];

    //la serpiente empieza a moverse por la cuadricula 
    snakeX += velocidadX;
    snakeY += velocidadY;

//confirmamos si la serpiente salio de las esquinas 
    if (snakeX <= 0  || snakeX > 30 || snakeY <= 0 || snakeY > 30){
        gameOver = true; 
    }



// para añadir la posicion cada vez que pasa 
    for(let i = 0; i < snakeBody.length; i++){
        htmlMarkup += `<div class="culebra" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameOver= true;
        }
    }
    
    playBoard.innerHTML = htmlMarkup;
};





changFoodPosition();

setIntervalId = setInterval(initGame, 125);

document.addEventListener('keydown', changeDirection);