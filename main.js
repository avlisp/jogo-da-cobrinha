let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;

let snake = [{ x: 8 * box, y: 8 * box }];
let direction = 'right';
let score = 0;
let food = newFood();

// Main game loop
function mainLoop() {
    // Go through wall
    if (snake[0].x > 15 * box && direction == 'right') snake[0].x = 0;
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == 'down') snake[0].y = 0;
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    if (hasCollided()) stopGame();

    drawBackground();
    drawSnake();
    drawFood();
    moveSnake();
    updateScore();
}

setupControls();
let game = setInterval(mainLoop, 100);


function drawBackground() {
    context.fillStyle = '#2b2d2d';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function drawSnake() {
    snake.forEach(element => {
        context.fillStyle = '#ef67a5';
        context.fillRect(element.x, element.y, box, box);
    })
}

function drawFood() {
    context.fillStyle = '#f4b400';
    context.fillRect(food.x, food.y, box, box);
}

function moveSnake() {
    // Copy snake head to a new object and update position
    let newHead = updateHeadPos({ x: snake[0].x, y: snake[0].y });

    if (scored(newHead)) {
        food = newFood();
    } else {
        snake.pop();
    }
    snake.unshift(newHead);
}

function updateScore() {
    if (score != snake.length - 1) {
        score = snake.length - 1;
        document.getElementById('score').innerHTML = score;
    }
}

// Returns new position for snake head given the direction
function updateHeadPos(head) {
    if (direction == 'right') head.x += box;
    if (direction == 'left') head.x -= box;
    if (direction == 'up') head.y -= box;
    if (direction == 'down') head.y += box;
    return head;
}

// Returns true if snake has eaten the food
function scored(snakeHead) {
    return snakeHead.x == food.x && snakeHead.y == food.y;
}

// Returns a food object on a random position
function newFood() {
    return {
        x: Math.floor(Math.random() * 15 + 1) * box,
        y: Math.floor(Math.random() * 15 + 1) * box
    }
}

// Returns true if snake has collided
function hasCollided() {
    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            return true;
        }
    }
}

function stopGame() {
    clearInterval(game);
    let gameOverMessage = `Game Over! Your score: ${score}`;
    document.getElementById('score-display').innerHTML = gameOverMessage;
}

function setupControls() {
    function listen(event) {
        if (event.keyCode == 37 && direction != 'right') direction = 'left';
        if (event.keyCode == 38 && direction != 'down') direction = 'up';
        if (event.keyCode == 39 && direction != 'left') direction = 'right';
        if (event.keyCode == 40 && direction != 'up') direction = 'down';
    }
    document.addEventListener('keydown', listen);
}
