const screenContainer = document.querySelector(".screenContainer");

// weell... will need a nice function to fill the screen with a customizable grid

function createGrid(gridSize) {
    
    for (let i = gridSize; i > 0; i--) {
        console.log("a")
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
        console.log("b");
        const screenCell = document.createElement("div");
        screenCell.style.border = "0.25px solid black";
        screenCell.style.width = "100%";
        screenCell.style.flex = "1 1 auto";
        gridColumn.appendChild(screenCell)
    };

    return gridColumn
};

createGrid(50)