inputEl = document.getElementById("input-el")
convertBtn = document.getElementById("convert-btn")
container = document.getElementById("converted-container")
lengthEl = document.getElementById("length-el")
massEl = document.getElementById("mass-el")
volumeEl = document.getElementById("volume-el")
let value;



convertBtn.addEventListener("click", function(){
    value = inputEl.value
    console.log(value)
    convertLength(value)
    convertVolume(value)
    convertMass(value)
})

function convertLength(val){
    let feet = (val * 3.281).toFixed(3)
    let meter = (val / 3.281).toFixed(3)
    lengthEl.innerHTML = `<span>${val} Meters = ${feet} Feet | ${val} Feet = ${meter} Meters</span>`
}

function convertVolume(val){
    let gallon = (val * 0.264).toFixed(3)
    let liter = (val / 0.264).toFixed(3)
    volumeEl.innerHTML = `<span>${val} Liters = ${gallon} Gallons | ${val} Gallons = ${liter} Liters  </span>`


}

function convertMass(val){
    let pound = (val * 2.204).toFixed(3)
    let kilo = (val / 2.204).toFixed(3)
    massEl.innerHTML = `<span>${val} Kilos = ${pound} Pounds | ${val} Pounds = ${kilo} Kilos </span>`

}







/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/