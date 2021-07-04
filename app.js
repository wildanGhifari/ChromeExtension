let myLeads = []
let inputEl = document.getElementById("input-el")
let btnSave = document.getElementById("btn-save")
let listEL = document.getElementById("list-el")

btnSave.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
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