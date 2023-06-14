//5 - select a color from a dropdown menu of colors

let x = document.getElementById("colors");
let color = x.value;
x.style.backgroundColor = color

function colorSelect(){
    color = x.value;
    x.style.backgroundColor = color;
}

function changeColor(id){
    document.getElementById(id).style.backgroundColor = color;
}