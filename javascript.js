//make a grid
const container = document.getElementById("container");
var gridSquares = 0;
let eraserOn = 0;
makeRows(16);

function makeRows(gridSquares) {
        container.style.setProperty('--grid-rows', gridSquares);
        container.style.setProperty('--grid-cols', gridSquares);
        for (c = 0; c < (gridSquares*gridSquares); c++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
        };
};


//Make the grid squares black when passing over them
var gridItems = document.querySelectorAll("div.grid-item");

gridItems.forEach((gridItems) => {
  gridItems.addEventListener('mouseover', (e) => {
    gridItems.style.backgroundColor = 'black';
  });
});


 

function clearGrid() {
    gridItems.forEach((gridItems) => {
        gridItems.style.backgroundColor = 'transparent';
    });
}

const clearButton = document.querySelector("#clear-button")
clearButton.addEventListener('click', clearGrid);


const gridSize = document.querySelector("#grid-size")

gridSize.addEventListener('click', (e) => {
    clearGrid();
    let promptAnswer = prompt('Grid size?');
    makeRows(promptAnswer);
});


const eraser = document.querySelector("#eraser")

eraser.addEventListener("click", () => {
    gridItems.forEach((square) => {
        square.onmouseover = () => square.removeAttribute("style");
    });
})


