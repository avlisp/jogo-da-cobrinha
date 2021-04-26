// variáveis
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // context renderiza o desenho
let box = 32;

// funçao pra desenhar e definir o canvas
function criarBG() {
    context.fillStyle = "lightgreen";

    // fillrect define a posiçao x, y, altura e largura
    context.fillRect(0, 0, 16 * box, 16 * box);
}

// chamando a funçao
criarBG();