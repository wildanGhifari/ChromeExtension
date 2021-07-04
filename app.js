let myLeads = []
let inputEl = document.getElementById("input-el")
let btnSave = document.getElementById("btn-save")

btnSave.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})