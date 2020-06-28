//make a grid
const container = document.getElementById("container");

makeRows(16, 16);

function makeRows(rows, cols) {
        for (c = 0; c < (rows * cols); c++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
        };
};


//Make the grid squares blue when passing over them
const gridItems = document.querySelectorAll("div.grid-item");

gridItems.forEach((gridItems) => {
  gridItems.addEventListener('mouseover', (e) => {
    gridItems.style.backgroundColor = 'blue';
  });
});
        

