// variáveis
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // context renderiza o desenho
let box = 32;

// variavel para cobra andar
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

// variavel para direçao da criarCobrinha
let direction = "right";

// funçao pra desenhar e definir o canvas
function criarBG() {
    context.fillStyle = "lightgreen";

    // fillrect define a posiçao x, y, altura e largura
    context.fillRect(0, 0, 16 * box, 16 * box);
}

// funçao para criar a cobra 
function criarCobrinha(){
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = "green"
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    // chamando a funçao
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // coordenadas onde a cobrinha vai seguir
    if (direction == "right") snakeX += box;    // se a direçao for igual a right adicione 1 a box (quadradinho) na posiçao x
    if (direction == "left") snakeX -= box;     // se a direçao for igual a left subtraia 1 a box (quadradinho) na posiçao x
    if (direction == "up") snakeY += box;
    if (direction == "down") snakeY -= box;

    // funçao que retira um elemento do array
    snake.pop();
 
    // variável que adiciona um nova cabeça
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)
}



// variavel para iniciar jogo // 100 milisegundos
let jogo = setInterval(iniciarJogo, 100);




