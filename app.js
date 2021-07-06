let myLeads = []
let inputEl = document.getElementById("input-el")
let btnSave = document.getElementById("btn-save")
let listEL = document.getElementById("list-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

btnSave.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""

    // Store myLeads to localstorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
    renderLeads()
})

function renderLeads() {
    let listItem

    // Loop through myLeads
    for (let i = 0; i < myLeads.length; i++) {
        listItem = `
            <li>
                <a href='${myLeads[i]}' target='_blank'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }

    listEL.innerHTML += listItem
}