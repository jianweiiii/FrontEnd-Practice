// document.getElementById("count").innerText = 12

let counter = 0

let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count")

function increment() {
    counter += 1
    countEL.innerText = counter
   
}


function save() {
    let countString = counter + " - "  
    saveEL.textContent += countString 
    countEL.textContent = 0
    counter = 0

}



let num1 = 8
let num2 = 2
let result = 0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    result = num1 + num2
    document.getElementById("sum-el").textContent = result

}

function subtract(){
    result = num1 - num2
    document.getElementById("sum-el").textContent = result
}

function divide(){
    result = num1 / num2
    document.getElementById("sum-el").textContent = result

}
function multiply(){
    result = num1 * num2
    document.getElementById("sum-el").textContent = result
}