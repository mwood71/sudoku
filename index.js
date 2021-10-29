let gridDiv = document.getElementsByClassName("row-one")[0]

for (let x = 0; x < 81; x++){
    let inputField = document.createElement("input")
    inputField.classList.add(`input${x}`)
    inputField.type = "number"
    gridDiv.appendChild(inputField)
}


let validSudokuBtn = document.getElementsByClassName("valid-sudoku-btn")[0]
let solveBoardBtn = document.getElementsByClassName("solve-board-btn")[0]
let closeBtn = document.getElementsByClassName("close")[0]
let modal = document.getElementsByClassName("modal")[0]
let modalMessage = document.getElementsByClassName("modal-message")[0]
validSudokuBtn.addEventListener("click", function(){
    modalMessage.innerHTML = "This puzzle may or may not be valid."
    modal.style.display = "block"
    validSudokuBtn.disabled = true
    solveBoardBtn.disabled = true
    for (let x = 0; x < 81; x++){
        inputField = document.getElementsByClassName(`input${x}`)[0]
    }
 });

 solveBoardBtn.addEventListener("click", function(){
    modalMessage.innerHTML = "Creating solution to board."
    modal.style.display = "block"
    validSudokuBtn.disabled = true
    solveBoardBtn.disabled = true
    for (let x = 0; x < 81; x++){
        inputField = document.getElementsByClassName(`input${x}`)[0]
    }
 });

 closeBtn.addEventListener("click", function(){
    validSudokuBtn.disabled = false
    solveBoardBtn.disabled = false
    modal.style.display = "none"
 });

window.onclick = function(event){
    if (event.target == modal){
        validSudokuBtn.disabled = false
        solveBoardBtn.disabled = false
        modal.style.display = "none"
    }
}