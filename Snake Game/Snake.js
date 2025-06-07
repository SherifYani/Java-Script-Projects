export const snakeSpeed = 5;
export let newSegments = 0;
import { getInputDirection } from "./input.js";

const snakeBody = [
    { x: 11, y: 11 },
];

export function update() {
    addSegments();
    let inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function render(gameBoard) {
    snakeBody.forEach(segment => {
        const SnakeElement = document.createElement('div');
        SnakeElement.style.gridColumnStart = segment.x;
        SnakeElement.style.gridRowStart = segment.y;
        SnakeElement.classList.add("snake");
        gameBoard.appendChild(SnakeElement);
    })
}

export function expandSnake(amount) {
    newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPosition(segment, position);
    });
}

function equalPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0;
}

export function getSnakeHead() {
    return snakeBody[0];
}
export function getSnakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}