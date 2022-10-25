const screenContainer = document.querySelector(".screenContainer");
screenContainer.addEventListener("click", function() {console.log("ik")})
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

    for (let i = rowNumber; i > 0; i--) {
        const screenCell = document.createElement("div");
        screenCell.style.border = "0.25px solid black";
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

createGrid(20)