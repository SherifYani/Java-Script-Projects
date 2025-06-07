let food = getRandomFoodPosition();
let Extra_Rate = 1;
import { RandomFoodPosition } from "./grid.js";
import { onSnake, expandSnake } from "./Snake.js";

export function update() {
    if (onSnake(food)) {
        expandSnake(Extra_Rate);
        food = getRandomFoodPosition();
    }
}

export function render(gameBoard) {
    const FoodElement = document.createElement('div');
    FoodElement.style.gridColumnStart = food.x;
    FoodElement.style.gridRowStart = food.y;
    FoodElement.classList.add("food");
    gameBoard.appendChild(FoodElement);
}

function getRandomFoodPosition() {
    let newFoodPosition = null;
    while (newFoodPosition === null || onSnake(newFoodPosition)) {
        newFoodPosition = RandomFoodPosition();
    }
    return newFoodPosition;
}