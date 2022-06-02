
let card = []

let sumOfCard = 0

let hasBlackJack = false
let isAlive = false

let message = ""
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEL = document.getElementById("card-el")
// let sumEL = document.querySelector("#sum-el")


function randomCard(){
    let random = Math.floor( Math.random()*13 ) + 1
    if (random > 10){
        return 10
    }else if(random === 1){
        return 11
    }else{
        return random
    }
    
}


function startGame(){
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    card = [firstCard, secondCard]
    sumOfCard = firstCard + secondCard
    renderGame()
}


function renderGame(){

    cardEL.textContent = "Cards: " 
    for( let i = 0; i < card.length; i++){
        cardEL.textContent += card[i] + " - "
    }


    sumEL.textContent = "Sum: " + sumOfCard

    if (sumOfCard <= 20){
        message = "Do you want to draw a new card? 🙂"
        
    }else if (sumOfCard === 21){
        message= "Wohoo! You've got Blackjack! 🥳"
        
        hasBlackJack = true
    }else{
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEL.textContent = message
}

function newCard(){
    if(isAlive == true && hasBlackJack == false){
        let thirdCard = randomCard()
        sumOfCard += thirdCard
        card.push(thirdCard)
        renderGame()
    }
}



// console.log(firstCard)
// console.log(secondCard)
 console.log(sumOfCard)





