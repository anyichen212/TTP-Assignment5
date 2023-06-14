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
        cell = row.insertCell(-1);
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