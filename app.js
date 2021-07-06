let myLeads = []
const inputEl = document.getElementById("input-el")
const listEL = document.getElementById("list-el")
const btnSave = document.getElementById("btn-save")
const btnDelete = document.getElementById("btn-delete")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

btnDelete.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

btnSave.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""

    // Store myLeads to localstorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
    renderLeads()
})

function renderLeads() {
    let listItem = ""

    // Loop through myLeads
    for (let i = 0; i < myLeads.length; i++) {
        listItem += `
            <li>
                <a href='${myLeads[i]}' target='_blank'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }

    listEL.innerHTML = listItem
}