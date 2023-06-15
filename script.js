let x;
let color;
let isMouseDown = false;

//run when page load
document.addEventListener("DOMContentLoaded", function(){
    let cell = document.querySelector("th");
    //change cell color by click;
    x = document.getElementById("colors")
    color = x.value;
    cell.onclick = function changeColor(){
        cell.style.backgroundColor = color;
    };

    //following 3 eventlisteners will be included in addRow, addCol functions
    //these will help in newly created cells.
    //when a user pressed the mouse down, start affecting the cells 
    cell.addEventListener("mousedown", whenMouseDown);
    //while pressing the mouse down, for hovering effect
    cell.addEventListener("mouseover", whenMouseOver);
    //when a user released the mouse, change the pressing the mouse function
    //to false
    cell.addEventListener("mouseup", function(){
        isMouseDown = false;
    })
    //cell.onmousedown
});






//select color function
function colorSelect(){
    color = x.value;
}
//function on pressing the mouse down, so is affecting the cell
function whenMouseDown(){
    isMouseDown = true;
    changeColor.call(this)
}
//helper for whenMouseDown function for affect in pressing down and hovering
function whenMouseOver(){
    //check if the mouse is pressing down
    if(isMouseDown){
        changeColor.call(this);
    }
}
//changing the color of cell
function changeColor() {
    if (color !== "") {
      this.style.backgroundColor = color;
    }
  }

function addRow() {

    //get table by ID
    const grid = document.getElementById("grid");
    //create a row ) -1 = below
    const row = grid.insertRow(-1);
    //get a no of col 
    const colCount = grid.rows[0].cells.length;
    //loop through to fill with grid in that row
    for (let i = 0; i < colCount; i++) {
        let cell = row.insertCell(-1);

        //change cell color by click;
        cell.onclick = function changeColor(){
            cell.style.backgroundColor = color;
        };
        cell.addEventListener("mousedown", whenMouseDown);
        cell.addEventListener("mouseover", whenMouseOver);
        cell.addEventListener("mouseup", function(){
            isMouseDown = false;
        })
    }
    //test
    
}

function addColumn(){
    //get table by ID
    const grid = document.getElementById("grid");
    //get headerRow
    const headerRow = grid.rows[0];

    //get no of rows
    const rowCount = grid.rows.length;
    for (let i = 0; i < rowCount; i++) {
        //get each row
        let row = grid.rows[i];
        //insert cell in the last pos
        let cell = row.insertCell(-1);

        //change cell color by click;
        cell.onclick = function changeColor(){
            cell.style.backgroundColor = color;
        };
        cell.addEventListener("mousedown", whenMouseDown);
        cell.addEventListener("mouseover", whenMouseOver);
        cell.addEventListener("mouseup", function(){
            isMouseDown = false;
        })
    }
}

function removeRow(){
    //get table by ID
    const grid = document.getElementById("grid");
    //get no of rows
    const rowCount = grid.rows.length;
    //check no row
    if (rowCount > 1) {
        //delete the last row
        grid.deleteRow(-1);
    }
}

function removeColumn() {
    //get table by ID
    const grid = document.getElementById("grid");
    //get no of row
    const rowCount = grid.rows.length;
    //get no of col from the heading row
    const columnCount = grid.rows[0].cells.length;
    //check no column
    if (columnCount > 1) {
        for (let i = 0; i < rowCount; i++) {
            //delete last cell in each row
            grid.rows[i].deleteCell(-1);
        }
    }
}

//Fill all empty cells
function changeAllUncolorCell(){
    //get all cells in an array
    let cells = document.querySelectorAll("th, td");
    //loop thru every cell and check if their background color is empty
    for(let cell of cells){
        if(cell.style.backgroundColor === ""){
            cell.style.backgroundColor = color;
        }
    }
}

function changeAllCells(){
    //get all cells in an array
    let cells = document.querySelectorAll("th, td");
    //loop thru every cell and check if their background color is empty
    for(let cell of cells){
        
            cell.style.backgroundColor = color;
        
    }
}

function clearAll(){
//gets all cells
    let cells = document.querySelectorAll("th, td");
//check for a colored cell and changes back the color
    for(let cell of cells){
        if(cell.style.backgroundColor === color ){
            cell.style.backgroundColor = "";
        }
    }
}