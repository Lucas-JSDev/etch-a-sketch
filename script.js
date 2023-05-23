let rows = 20; 
let cols = 20;

const container = document.querySelector('.gameTable')
let cells = [];

function createGrid() {
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      var cell = document.createElement("div");
      cell.className = "cell";
      container.appendChild(cell);
      cells.push(cell);
    }
    var lineBreak = document.createElement("br");
    container.appendChild(lineBreak);
  }
}
createGrid()

const colorSelector = document.querySelector('#colorSelector');
const colorBtn = document.querySelector('#colorBtn');

colorSelector.addEventListener("change", () => {
  let colorSelected = colorSelector.value;
  colorBtn.style.backgroundColor = colorSelected;
});