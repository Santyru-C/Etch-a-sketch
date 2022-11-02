let currentColor = "black"
let currentGridSize = 16

const screenContainer = document.querySelector(".screenContainer");
const frame = document.querySelector("#frame");
  
const gridSlider = document.querySelector("#gridSlider");
gridSlider.oninput = function() {createGrid(this.value), currentGridSize = this.value;};

const btnRgb = document.querySelector("#rgb")
const btnBlack = document.querySelector("#black")
const btnErase = document.querySelector("#erase")

btnBlack.addEventListener("click", () => {currentColor = "black";});
btnRgb.addEventListener("click", () => {currentColor = "RGB"});
btnErase.addEventListener("click", () => {createGrid(currentGridSize)});
btnErase.addEventListener("click", () => {frame.classList.add('animate__animated', 'animate__wobble');});
frame.addEventListener('animationend', () => {
    frame.classList.remove('animate__animated', 'animate__wobble')
  });
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

    for (let i = rowNumber*(3/4); i > 0; i--) {
        const screenCell = document.createElement("div");
        screenCell.style.width = "100%";
        screenCell.style.backgroundColor = "azure";
        screenCell.style.flex = "1 1 auto";
        screenCell.addEventListener("mouseover", function(e) {changeColor(e)})
        gridColumn.appendChild(screenCell);
    };

    return gridColumn;
};

function cleanScreen() {
    screenContainer.replaceChildren()
};

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

// invertir la pantalla para hacerla mas ancha que larga
// para eso sera necesario modificar la funcion que genera la grilla
// en este caso tendra que generar un radio de n columnas por n*0.75 filas