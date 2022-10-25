const screenContainer = document.querySelector(".screenContainer");

// weell... will need a nice function to fill the screen with a customizable grid

function createGrid(gridSize) {
    for (let i = gridSize**2; i > 0; i--) {
        console.log(i)
        screenCell = document.createElement("div");
        screenCell.style.height = "100%";
        screenCell.style.flex = "1"
        screenCell.style.border = "0.25px solid black";
        
        screenContainer.appendChild(screenCell);
    };
};

createGrid(8)