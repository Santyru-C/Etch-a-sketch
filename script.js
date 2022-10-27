let currentColor = "black"
let currentGridSize = 16

const screenContainer = document.querySelector(".screenContainer");

const btn16 = document.querySelector("#btn16");
const btn32 = document.querySelector("#btn32");
const btn64 = document.querySelector("#btn64");

const btnRgb = document.querySelector("#rgb")
const btnBlack = document.querySelector("#black")
const btnErase = document.querySelector("#erase")

btn16.addEventListener("click", () => {createGrid(16), currentGridSize = 16;});
btn32.addEventListener("click", () => {createGrid(32), currentGridSize = 32;});
btn64.addEventListener("click", () => {createGrid(64), currentGridSize = 64;});

btnBlack.addEventListener("click", () => {currentColor = "black";});
btnRgb.addEventListener("click", () => {currentColor = "RGB"});
btnErase.addEventListener("click", () => {createGrid(currentGridSize)})
//using flex to test if it holds up against multiple columns and rows just like grid

function createGrid(gridSize) {
    
    cleanScreen();
    for (let i = gridSize; i > 0; i--) {

        column = generateColumn(gridSize);
        screenContainer.appendChild(column);
    };
};

function generateColumn(rowNumber) {

    const gridColumn = document.createElement("div")
    gridColumn.style.display = "flex";
    gridColumn.style.flex = "1"
    gridColumn.style.flexDirection = "column";
    gridColumn.style.height = "100%";
    gridColumn.style.gap = "1px 0"

    for (let i = rowNumber; i > 0; i--) {
        const screenCell = document.createElement("div");
        //screenCell.style.border = "0.25px solid gray";
        screenCell.style.width = "100%";
        screenCell.style.flex = "1 1 auto";
        screenCell.addEventListener("mouseover", function(e) {changeColor(e)})
        gridColumn.appendChild(screenCell);
    };

    return gridColumn;
};

function cleanScreen() {
    screenContainer.replaceChildren()
};

// generate a random rgb color

function generateRandomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return "rgb(" + r + "," + g + "," + b + ")";  
};

function changeColor(cell) {
    if (currentColor == "RGB") {
    cell.target.style.backgroundColor = generateRandomRgb()};

    if (currentColor == "black") {
        cell.target.style.backgroundColor = "black";
    }
}

createGrid(16);

// hacer que el rgb sea continuo
