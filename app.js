let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
let grid = 16;
let squareSize = 700 / grid;
let Size = squareSize.toString();
squareSize = squareSize + 'px';
function createGrid (size){
    for(let i = 0 ; i < size*size ; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    }

function highSize(){
    const square = document.querySelectorAll('.square');
    square.forEach(square => square.style.minWidth = squareSize)
    square.forEach(square => square.style.minHeight = squareSize)
square.forEach(square => square.addEventListener('mouseover', () => square.style.backgroundColor = 'lightblue'))
}

let button = document.getElementById('btn');
button.addEventListener('click', ()=>{
    grid = prompt("Enter a number of tiles");
    if(grid != null && grid != 0){
    container.replaceChildren("")
    squareSize = 700 / grid;
    squareSize = squareSize.toString();
    squareSize = squareSize + 'px';
    createGrid(grid);
    highSize();
    }
    else{
        alert("try again");
    }
})

createGrid(grid);
highSize();

