let myRange = document.getElementById("myRange")
let gridSize = parseInt(myRange.value)
let rangeValue = document.getElementById("rangeValue")


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
}

function deleteGrid(){
    if(contentData.innerHTML) contentData.innerHTML = "";

}