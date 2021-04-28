// variáveis
let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo

let context = canvas.getContext("2d"); // context renderiza o desenho
let box = 32;

// variavel para cobra andar
let snake = []; 
snake[0] ={
    x: 8 * box,
    y: 8 * box
}

// variavel para direçao da criarCobrinha
let direction = "right";

// variavel para a comida da cobra
let food ={
    // math.random sempre retorna um numeor aleatorio até 1
    // math.floor retorna um numero sem o ponto flutuante
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function drawBackground() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function drawSnake() {
    snake.forEach(element => {
        context.fillStyle = 'green';
        context.fillRect(element.x, element.y, box, box);
    })
}

function drawFood() {
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, box, box);
}

// evento para captar a tecla do teclado
document.addEventListener('keydown', update);

// funçao para chamar o evento
function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

// funçao principal
function iniciarJogo(){  

    // funcionabilidade para ela atravessar as paredes
    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;
    
    // funcionabilidade para morte da cobrinha
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :( | Atualize sua página ');
        }
    }

    // chamando a funçao
    drawBackground();
    drawSnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // coordenadas onde a cobrinha vai seguir
    if(direction == "right") snakeX += box; // se a direçao for igual a right adicione 1 a box (quadradinho) na posiçao x
    if(direction == "left") snakeX -= box; // se a direçao for igual a left subtraia 1 a box (quadradinho) na posiçao x
    if (direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    // funçao para aumentar/diminuir a cobrinha caso ela passe pela comida
    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //pop tira o último elemento da lista
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }
    
    // variável que adiciona um nova cabeça
    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha
}

// variavel para iniciar jogo // 100 milisegundos
let jogo = setInterval(iniciarJogo, 100);




