let myLeads = []



const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")




if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function(){
    
})



inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads(myLeads)
})

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

function renderLeads(arr){
    let listItems= ""
    for (let i = 0; i < arr.length; i++){
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        listItems +=  `
        <li>
            <a target="_blank" href= "${arr[i]}">   
                ${arr[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}


hii = [1,2,3,4,5]
console.log(hii)

function getFirst(arr){
    console.log(arr[0])
}

getFirst(hii)

