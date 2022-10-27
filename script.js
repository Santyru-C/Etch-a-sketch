const screenContainer = document.querySelector(".screenContainer");
screenContainer.addEventListener("click", function() {console.log("ik")});

const btn16 = document.querySelector("#btn16");
const btn32 = document.querySelector("#btn32");
const btn64 = document.querySelector("#btn64");

btn16.addEventListener("click", () => {cleanScreen();});
btn32.addEventListener("click", () => {createGrid(32);});
btn64.addEventListener("click", () => {createGrid(64);});
// weell... will need a nice function to fill the screen with a customizable grid

function createGrid(gridSize) {
    
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

function changeColor(cell) {
    cell.target.style.backgroundColor = "black"

};
// button grid sizes 16 32 64
// default 16
// a function that cleans the screen div
function cleanScreen() {
    screenContainer.replaceChildren()
};

createGrid(16)