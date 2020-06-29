//make a grid
const container = document.getElementById("container");
let color = "black"
var gridSquares;
var btnContainer = document.getElementById("colors");
var btns = btnContainer.getElementsByClassName("color");



makeRows(50);
blackPen()

function makeRows(gridSquares) {
        container.style.setProperty('--grid-rows', gridSquares);
        container.style.setProperty('--grid-cols', gridSquares);
        for (c = 0; c < (gridSquares*gridSquares); c++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
        };
};



//BUTTONS--------------------------------------------------
const blackPenSelect = document.querySelector("#black")
blackPenSelect.addEventListener('click', blackPen);

const whitePenSelect = document.querySelector("#white")
whitePenSelect.addEventListener('click', whitePen);

const colorPenSelect = document.querySelector("#rainbow")
colorPenSelect.addEventListener('click', colorPen);



const gridSize = document.querySelector("#gridSize")
gridSize.addEventListener('click', function() {
    gridSquares=prompt('How many squares wide/tall?');
    clearGrid();
    makeRows(gridSquares);
})

const clearButton = document.querySelector("#clear-button")
clearButton.addEventListener('click', clearGrid);

//BUTTONS END--------------------------------------------------





// Active to colors------------------------------------------------------
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 


function clearGrid() {
    const gridItems = document.querySelectorAll("div.grid-item");
    gridItems.forEach((gridItems) => {
        gridItems.style.backgroundColor = 'transparent';
    });
}

function blackPen() {
    const gridItems = document.querySelectorAll("div.grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', (e) => {
          gridItem.style.backgroundColor = 'black';
        });
    });
}

function whitePen() {
    const gridItems = document.querySelectorAll("div.grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', (e) => {
          gridItem.style.backgroundColor = 'transparent';
        });
    });
}

function colorPen() {
    const gridItems = document.querySelectorAll("div.grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', (e) => {
          gridItem.style.backgroundColor = 'transparent';
        });
    });
}