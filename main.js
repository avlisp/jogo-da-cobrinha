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


// chamando a funçao
criarBG();
criarCobrinha();

