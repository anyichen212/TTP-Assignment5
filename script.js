function addRow() {
    //get table by ID
    const grid = document.getElementById("grid");
    //create a row ) -1 = below
    const row = grid.insertRow(-1);
    //get a no of col on that row
    const colCount = grid.rows[0].cells.length;
    //loop through to fill with grid in that row
    for (let i = 0; i < colCount; i++) {
        let cell = row.insertCell(-1);
    }
}