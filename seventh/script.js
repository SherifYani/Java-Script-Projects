let lastRenderTime = 0;
let gameOver = false;
import { snakeSpeed, update as updateSnake, render as renderSnake, getSnakeHead, getSnakeIntersection } from "./Snake.js";
import { update as updateFood, render as renderFood } from "./food.js";
import { outsideGrid } from "./grid.js";
let gameBoard = document.getElementById('game-board');
function Start(currentTime) {

    if (gameOver === true) {
        return alert("You Lose ! ");
    }
    window.requestAnimationFrame(Start);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) return;
    lastRenderTime = currentTime;

    update();
    render();
}
window.requestAnimationFrame(Start);

function update() {
    updateSnake();
    updateFood();
    if (!gameOver) {
        checkDeath();
    }
}
function render() {
    gameBoard.innerHTML = "";
    renderSnake(gameBoard);
    renderFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || getSnakeIntersection();
}