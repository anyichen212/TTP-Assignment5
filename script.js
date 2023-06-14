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