const buttons = document.getElementsByClassName("button");
const screen = document.getElementById("screen");
const operator = document.getElementsByClassName("operator");
const number = document.getElementsByClassName("number");

//számok beirása
function btnClick(value) {
    screen.value += value;
}

//képernyő törlés
function screenReset(){
    screen.value = "";
}

//eredmeny

function eredmeny(){
    let egyenlo = eval(screen.value)
    screen.value = egyenlo;
}