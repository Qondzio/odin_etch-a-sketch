const selectButton=document.getElementById("selectButton");
const resetButton=document.getElementById("resetButton");
const container=document.querySelector(".container");
let numberOfSquares;
let horizontalDiv;



selectButton.addEventListener("click", ()=>{
    numberOfSquares=prompt("Enter the number of squares vertically and horizontally:");
    createSquares();
})


resetButton.addEventListener("click", ()=>{for (let j = 0; j <numberOfSquares; j++) {
       
}
})


function getRandomColor()
{
    return Math.floor(Math.random()*256);
}


function createSquares(){
    container.innerHTML="";
    
    for (let i = 0; i < numberOfSquares; i++) {
        createHorizontalDiv();

        for (let j = 0; j <numberOfSquares; j++) {
           createDiv();
        }
    }
}

function createHorizontalDiv(){
    horizontalDiv=document.createElement("div");
    horizontalDiv.classList.add("squareHorizontally");
    container.appendChild(horizontalDiv);
}

function createDiv(){
    let div=document.createElement("div");
    div.classList.add("square");
    horizontalDiv.appendChild(div);

    div.addEventListener("mouseover", ()=>{
        div.style.backgroundColor= `rgb(${getRandomColor()},${getRandomColor()}, ${getRandomColor()} )`;
    })
}