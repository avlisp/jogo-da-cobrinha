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
// variavel para a comida da cobra
let food = {
    // math.random sempre retorna um numeor aleatorio até 1
    // math.floor retorna um numero sem o ponto flutuante
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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

// funçao para desenhar comida
function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

// evento para captar a tecla do teclado
document.addEventListener('keydown', update);

// funçao para chamar o evento
function update (event) {
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 40 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 38 && direction != "up") direction = "down";
}


// funçao principal
function iniciarJogo() {
    // funcionabilidade para ela atravessar as paredes
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 * box && direction == "up") snake[0].y = 16 * box;


    // chamando a funçao
    criarBG();
    criarCobrinha();
    drawFood();

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

    snake.unshift(newHead);
}



// variavel para iniciar jogo // 100 milisegundos
let jogo = setInterval(iniciarJogo, 100);






