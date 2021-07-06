let myLeads = []
const inputEl = document.getElementById("input-el")
const listEL = document.getElementById("list-el")
const btnSave = document.getElementById("btn-save")
const btnDelete = document.getElementById("btn-delete")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItem = ""

    // Loop through leads
    for (let i = 0; i < leads.length; i++) {
        listItem += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>
        `
    }

    listEL.innerHTML = listItem
}

btnDelete.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

btnSave.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""

    // Store myLeads to localstorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
    render(myLeads)
})