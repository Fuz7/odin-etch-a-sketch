let myRange = document.getElementById("myRange")
let gridSize = parseInt(myRange.value)
let rangeValue = document.getElementById("rangeValue")
let touch;
let active = "off"
createGrid()

let color = 'black'
let colorOptions = document.getElementsByName("color")
let paint = 'black'


for (let i = 0;i < colorOptions.length; i++){
    colorOptions[i].addEventListener('click',function(){
        color = this.value
        paint = this.value
    })
}

let container = document.getElementById("contentData")
container.onmousedown = function(){
    active = "on"
}
container.onmouseup = function(){
    active = "off"
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }
  


let eraser = document.getElementById("eraser")

eraser.addEventListener('click',function(){
    let colored = document.getElementsByClassName("row active")
    for (let i = 0; i < colored.length; i++){
        colored[i].style.backgroundColor = "white"
    }
})

myRange.onchange = function(event){
    deleteGrid()
    createGrid()
}

myRange.oninput = function(event){
    gridSize = parseInt(myRange.value)
    rangeValue.textContent = gridSize + "px x " + gridSize + "px"
}



function createGrid(){

    for (let i = 0; i < gridSize; i++){
        let contentData = document.getElementById("contentData")
        let column = "<div class='column'></div>"
        contentData.innerHTML += column
    }

    let column = document.getElementsByClassName('column')
    for (let i = 0; i < gridSize; i++){
        
        for (let j = 0; j < gridSize; j++){
            let row = "<div class='row'></div>"
            column[i].innerHTML += row
        }
    }
    touch = document.getElementsByClassName('row')

    for (let i = 0; i < touch.length; i++){
        touch[i].addEventListener('mouseenter',function(){
            if (active === "on"){
            this.classList.add('active')

            if (color === "rainbow"){
                paint = getRandomColor()
            }
            this.style.backgroundColor = paint
            console.log('d')
            }
        })
    }
}

function deleteGrid(){
    if(contentData.innerHTML) contentData.innerHTML = "";
}