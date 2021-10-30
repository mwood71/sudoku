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



easyDiffcultyBtn.addEventListener("click", function(){
    disableDifficultyButtons(true)
    let board = generateBoard(48)
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
    let board = generateBoard(52)
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
    let board = generateBoard(56)
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





const generateBoard = (empty_space_count) => {
    let rand_locations = [[0,0],[1,3],[2,6],[3,7],[4,4],[5,1],[6,8],[7,5],[8,2]]
    let board = [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]
    ]

    rand_locations.forEach((item) => {
        board[item[0]][item[1]] = Math.floor(Math.random() * 9);
    })
    let blank_spaces = get_blank_spaces(board)
    board = solve_board(board, blank_spaces)

    let index = 0
    let max_num = empty_space_count

    while (index < max_num) {
        let row = Math.floor(Math.random() * 9);
        let column = Math.floor(Math.random() * 9);

        if (board[row][column] != 0){
            board[row][column] = ""
            index += 1
        }

    }

    return board
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
  