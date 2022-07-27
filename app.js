let container = document.createElement('div');
container.classList.add('container');
let content = document.getElementById('content');
content.appendChild(container);
let grid = 16;
let squareSize = 700 / grid;
squareSize = squareSize.toString();
squareSize = squareSize + 'px';
function createGrid (size){
    for(let i = 0 ; i < size*size ; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    const square = document.querySelectorAll('.square');
    square.forEach(square => square.style.minWidth = squareSize)
    square.forEach(square => square.style.minHeight = squareSize)
    }

function highlight(){
    const square = document.querySelectorAll('.square');
    square.forEach(square => square.addEventListener('mouseover', () =>{
        square.style.backgroundColor = '#00A682'
    }))
    let btnRainbow = document.getElementById('rainbow');
    btnRainbow.addEventListener('click', ()=>{
        const square = document.querySelectorAll('.square');
        square.forEach(square => square.addEventListener('mouseover', () =>{ 
            square.style.backgroundColor = randomRGB(min,max)
        }))
        btnRainbow.addEventListener('click', ()=> rainbow());
    })
}

let btnGrid = document.getElementById('btn');
    btnGrid.addEventListener('click', ()=>{
    grid = prompt("Enter a number of tiles");
    if(grid != null && grid != 0){
    container.replaceChildren("");
    squareSize = 700 / grid;
    squareSize = squareSize.toString();
    squareSize = squareSize + 'px';
    createGrid(grid);
    highlight();
    }
    else if(grid > 100){
        alert("100 it's the maximum")
    }
    else{
        alert("try again");
    }
})

let min = 0;
let max = 255;
function randomRGB(min,max){
    let random1 = Math.floor(Math.random() * (max - min + 1) + min);
    let random2 = Math.floor(Math.random() * (max - min + 1) + min);
    let random3 = Math.floor(Math.random() * (max - min + 1) + min);
    let color = `rgb(${random1},${random2},${random3})`;
    return color;
}

function rainbow(){
let btnRainbow = document.getElementById('rainbow');
    btnRainbow.addEventListener('click', ()=>{
    const square = document.querySelectorAll('.square');
    square.forEach(square => square.addEventListener('mouseover', () =>{ 
        square.style.backgroundColor = randomRGB(min,max)
    }))
    btnRainbow.addEventListener('click', ()=> highlight());
})
}

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    container.replaceChildren("")
    createGrid(grid);
    highlight();
})

createGrid(grid);
highlight();
rainbow();