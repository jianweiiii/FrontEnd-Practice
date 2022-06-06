let spanEL_1 = document.getElementById("span1")
let spanEL_2 = document.getElementById("span2")
let spanEL_3 = document.getElementById("span3")
let spanEL_4 = document.getElementById("span4")




function generateRandom(){
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$ "
    let pass =""

    for (let i = 0; i < 13; i++){
        let char = Math.floor(Math.random() * str.length );

        pass += str[char]
        
    }

    console.log(str)
    console.log(pass)
    return pass
        
}

function runRandom(){
    spanEL_1.textContent = generateRandom()
    spanEL_2.textContent = generateRandom()
    spanEL_3.textContent = generateRandom()
    spanEL_4.textContent = generateRandom()
}