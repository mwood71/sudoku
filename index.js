let easyDiffcultyBtn = document.getElementsByClassName("easy-diffculty-btn")[0]
let mediumDiffcultyBtn = document.getElementsByClassName("medium-difficulty-btn")[0]
let hardDiffcultyBtn = document.getElementsByClassName("hard-difficulty-btn")[0]
let submitSudokuBtn = document.getElementsByClassName("submit-sudoku-btn")[0]
let generateSolutionBtn = document.getElementsByClassName("generate-solution-btn")[0]
let closeBtn = document.getElementsByClassName("close")[0]
let modal = document.getElementsByClassName("modal")[0]
let modalMessage = document.getElementsByClassName("modal-message")[0]
let containerDiv = document.getElementsByClassName("container")[0]
let difficultyDiv = document.getElementsByClassName("difficulty-div")[0]
let submissionButtons = document.getElementsByClassName("submission-buttons")[0]
let playAgainBtn = document.getElementsByClassName("play-again-button")[0]



easyDiffcultyBtn.addEventListener("click", function(){
    disableDifficultyButtons(true)
    let board = generateEasyBoard()
    let gridDiv = document.getElementsByClassName("row-one")[0]
    let row = 0
    let column = 0

    for (let x = 0; x < 81; x++){
        if (column == 9){
            row += 1
            column = 0
        }
        let inputField = document.createElement("input")
        inputField.classList.add(`input-field`)
        inputField.type = "number"
        inputField.value = board[row][column]
        gridDiv.appendChild(inputField)

        column += 1
    }

    difficultyDiv.style.display = "none"
    containerDiv.style.display = "flex"
    disableDifficultyButtons(false)
    
 });



 mediumDiffcultyBtn.addEventListener("click", function(){
    disableDifficultyButtons(true)
    let board = generateMediumBoard()
    let gridDiv = document.getElementsByClassName("row-one")[0]
    let row = 0
    let column = 0

    for (let x = 0; x < 81; x++){
        if (column == 9){
            row += 1
            column = 0
        }
        let inputField = document.createElement("input")
        inputField.classList.add(`input-field`)
        inputField.type = "number"
        inputField.value = board[row][column]
        gridDiv.appendChild(inputField)

        column += 1
    }

    difficultyDiv.style.display = "none"
    containerDiv.style.display = "flex"
    disableDifficultyButtons(false)
    
 });


 hardDiffcultyBtn.addEventListener("click", function(){
    disableDifficultyButtons(true)
    let board = generateHardBoard()
    let gridDiv = document.getElementsByClassName("row-one")[0]
    let row = 0
    let column = 0

    for (let x = 0; x < 81; x++){
        if (column == 9){
            row += 1
            column = 0
        }
        let inputField = document.createElement("input")
        inputField.classList.add(`input-field`)
        inputField.type = "number"
        inputField.value = board[row][column]
        gridDiv.appendChild(inputField)

        column += 1
    }

    difficultyDiv.style.display = "none"
    containerDiv.style.display = "flex"
    disableDifficultyButtons(false)
    
 });



 const generateEasyBoard = () => {
    let board = [
        ["",6,"",3,"","",8,"",4],
        [5,3,7,"",9,"","","",""],
        ["",4,"","","",6,3,"",7],
        ["",9,"","",5,1,2,3,8],
        ["","","","","","","","",""],
        [7,1,3,6,2,"","",4,""],
        [3,"",6,4,"","","",1,""],
        ["","","","",6,"",5,2,3],
        [1,"",2,"","",9,"",8,""]
    ]
    board = replaceNumbers(board)
    board = switchRows(board)
    board = rotateBoards(board)
    return board
 }

 const generateMediumBoard = () => {
    let board = [
        ["","",9,7,3,"",5,2,6],
        ["","",5,"",2,"",8,"",""],
        [6,"",8,"","","","",4,7],
        ["","","","","",9,"",6,2],
        ["",4,"",6,"",3,"",8,""],
        [8,9,"",5,"","","","",""],
        [2,6,"","","","",1,"",8],
        ["","",7,"",1,"",6,"",""],
        [9,5,1,"",6,4,2,"",""]
    ]
    board = replaceNumbers(board)
    board = switchRows(board)
    board = rotateBoards(board)
    return board
 }


 const generateHardBoard = () => {
    let board = [
        ["","","","",3,"",5,"",6],
        ["","",5,"",2,"",8,"",""],
        [6,"",8,"","","","","",7],
        ["","","","","",9,"",6,2],
        ["",4,"",6,"",3,"",8,""],
        [8,9,"",5,"","","","",""],
        [2,"","","","","",1,"",""],
        ["","",7,"",1,"",6,"",""],
        [9,5,1,"",6,4,2,"",""]
    ]
    board = replaceNumbers(board)
    board = switchRows(board)
    board = rotateBoards(board)
    return board
 }



 const replaceNumbers = (board) => {
    let hash = [3,5,4,6,8,7,9,2,1]
    let random_nums = []

    for (let x = 0; x < 6; x++){
        random_nums.push(Math.floor(Math.random()*9))
    }
    for (let x = 0; x < random_nums.length; x+=2){
        let temp = hash[random_nums[x]]
        hash[random_nums[x]] = hash[random_nums[x+1]]
        hash[random_nums[x+1]] = temp
    }

    board.forEach((row, row_index) => {
        row.forEach((item, column_index) => {
            if (item != ""){
                let temp = hash[item-1]
                board[row_index][column_index] = temp
            }
        })
    })

    return board
 }


 const switchRows = (board) => {
    let random_rows = []
    for (let x = 0; x < 6; x++){
        random_rows.push(Math.floor(Math.random()*3))
        random_rows.push(Math.floor(Math.random()*3))
        random_rows.push(Math.floor(Math.random()*3)+3)
        random_rows.push(Math.floor(Math.random()*3)+3)
        random_rows.push(Math.floor(Math.random()*3)+6)
        random_rows.push(Math.floor(Math.random()*3)+6)
    }
    for (let x = 0; x < random_rows.length; x+=2){
        let temp = board[random_rows[x]]
        board[random_rows[x]] = board[random_rows[x+1]]
        board[random_rows[x+1]] = temp
    }

    return board
 }



 const rotateBoards = (board) => {

    let board_length = board.length
    let new_board = [...Array(9)].map(e => Array(9));
    for (let x = 0; x < board.length; x++){
        for (let y = 0; y < board[x].length; y++){
            let element = board[x][y]
            let index = board_length - (x + 1)
            new_board[y][index] = element
        }
    }

    return new_board
 }


generateSolutionBtn.addEventListener("click", function(){
    disableContainerButtons(true)
    let length = document.getElementsByClassName("input-field").length
    let row_length = 0
    let board = []
    let row = []
    const valid_nums = [1,2,3,4,5,6,7,8,9]
    for (let x = 0; x < length; x++){
        number_value = document.getElementsByClassName("input-field")[x].value
        if (number_value === ""){
            number_value = 0
        }
        else if (!valid_nums.includes(parseInt(number_value))){
            number_value = 10
        }
        else {
            number_value = parseInt(number_value)
        }
        row_length += 1
        if (row_length === 9){
            row.push(number_value)
            board.push(row)
            row = []
            row_length = 0
        }
        else {
            row.push(number_value)
        }   
    }

    if (is_valid_board(board)){
        blank_spaces = get_blank_spaces(board)
        board = solve_board(board, blank_spaces)
        document.getElementsByClassName("input-field").length
        index = 0
        board.forEach((row, row_index) => {
            row.forEach((item, column_index) => {
                document.getElementsByClassName("input-field")[index].value = item
                index += 1
            })
        })
        submissionButtons.style.display = "none"
        playAgainBtn.style.display = "block"
        disableContainerButtons(false)
    }
    else {
        modalMessage.innerHTML = "Sorry, your board is currently not valid to generate solution!"
        modal.style.display = "block"
    }
    
 });


 submitSudokuBtn.addEventListener("click", function(){
    disableContainerButtons(true)
    let length = document.getElementsByClassName("input-field").length
    let row_length = 0
    let board = []
    let row = []
    const valid_nums = [1,2,3,4,5,6,7,8,9]
    for (let x = 0; x < length; x++){
        number_value = document.getElementsByClassName("input-field")[x].value
        if (!valid_nums.includes(parseInt(number_value))){
            number_value = 10
        }
        else {
            number_value = parseInt(number_value)
        }
        row_length += 1
        if (row_length === 9){
            row.push(number_value)
            board.push(row)
            row = []
            row_length = 0
        }
        else {
            row.push(number_value)
        }   
    }

    if (is_valid_board(board)){
        submissionButtons.style.display = "none"
        playAgainBtn.style.display = "block"
        modalMessage.innerHTML = "Your board you submitted is valid! Great job!"
        modal.style.display = "block"
    }
    else {
        modalMessage.innerHTML = "Sorry, the board you submitted is not valid!"
        modal.style.display = "block"
    }
    
 });



 closeBtn.addEventListener("click", function(){
    disableContainerButtons(false)
    modal.style.display = "none"
 });

window.onclick = function(event){
    if (event.target == modal){
        disableContainerButtons(false)
        modal.style.display = "none"
    }
}

playAgainBtn.addEventListener("click", function(){
    location.reload();
})



const disableContainerButtons = (bool) => {
    submitSudokuBtn.disabled = bool
    generateSolutionBtn.disabled = bool
}

const disableDifficultyButtons = (bool) => {
    easyDiffcultyBtn.disabled = bool
    mediumDiffcultyBtn.disabled = bool
    hardDiffcultyBtn.disabled = bool
}
  
//   const clean_board = (board) => {
//     const valid_nums = [1,2,3,4,5,6,7,8,9]
//     board.map((row, row_index) => {
//       row.map((item, column_index) => {
//         if (!valid_nums.includes(board[row_index][column_index])){
//           board[row_index][column_index] = 0
//         }
//       })
//     })
//     return board
//   }
  
  
  const valid_row = (row, value) => {
    if (value === 10){
      return false
    }
    if (value === 0){
      return true
    }
    let frequency = 0
    row.map((row_item) => {
      if (row_item === value){
        frequency += 1
      }
    })
    if (frequency === 1){
      return true
    }
    return false
  }
  
  
  const valid_column = (board, column_index, value) => {
    if (value === 10){
        return false
    }
    if (value === 0){
      return true
    }
    let frequency = 0
    for (let x = 0; x < 9; x++){
      if (board[x][column_index] === value){
        frequency += 1
      }
    }
    if (frequency === 1){
      return true
    }
    return false
  }
  
  const valid_box = (board,parameter, value) => {
    if (value === 10){
        return false
    }
    if (value === 0){
        return true
    }
    let frequency = 0
    let hash = {
      "1-1": [0,3,0,3],
      "1-2": [0,3,3,6],
      "1-3": [0,3,6,9],
      "2-1": [3,6,0,3],
      "2-2": [3,6,3,6],
      "2-3": [3,6,6,9],
      "3-1": [6,9,0,3],
      "3-2": [6,9,3,6],
      "3-3": [6,9,6,9]
    }
    let index = hash[parameter]
    board = board.slice(index[0], index[1])
    board.forEach((row, row_index) => {
      row = row.slice(index[2],index[3])
      row.forEach((item, column_index) => {
        if (item == value){
          frequency += 1
        }
      });
  
    });
    return frequency == 1 ? true : false
  }
  
  const is_valid_board = (board) => {
    let condition = true
    board.forEach((row, row_index) => {
      row.forEach((column, column_index) => {
        column_parameter = Math.ceil((column_index+1) / 3)
        row_parameter = Math.ceil((row_index+1) / 3)
        parameter = `${row_parameter}-${column_parameter}`
        if (!valid_box(board, parameter, column) || !valid_row(board[row_index], column) || !valid_column(board, column_index, column)){
          condition = false
        }
      })
    }) 
    return condition ? true : false
  }
  
  const get_blank_spaces = (board) => {
    let blank_spaces = []
    board.forEach((row, row_index) => {
      row.forEach((item, column_index) => {
        if (board[row_index][column_index] == 0){
            blank_spaces.push([row_index, column_index])
        }
      });
  
    });
    return blank_spaces
  }
  
  const solve_board = (board, blank_spaces) => {
    let index = 0
    while (index < blank_spaces.length) {
      board[blank_spaces[index][0]][blank_spaces[index][1]] += 1
      let inner_index = board[blank_spaces[index][0]][blank_spaces[index][1]]
      let it_works = false
  
      while (!it_works && inner_index <= 9) {
        if (is_valid_board(board)){
          index += 1
          it_works = true
        }
        else {
          inner_index += 1
          board[blank_spaces[index][0]][blank_spaces[index][1]] = inner_index
        }
  
      }
  
      if (!it_works){
        board[blank_spaces[index][0]][blank_spaces[index][1]] = 0
        index -= 1
      }
    }
  
    return board
  }
  