// setting initial count value to 0

let count = 0

// select all btn and id
const valueNow = document.querySelector("#value-now")
const btnAll = document.querySelectorAll(".btn")

btnAll.forEach(function(btnAll) {
    btnAll.addEventListener("click", function(e) {
        const countReady = e.currentTarget.classList
        if (countReady.contains("increase")) {
            count++
        }
        else if (countReady.contains("decrease")) {
            count--
        }
        else {
            count = 0
        }
        // Assiging the color
        if (count > 0) {
            valueNow.style.color = "yellow"
        }
        else if (count < 0) {
            valueNow.style.color = "aqua"
        }
        else {
            valueNow.style.color = "gray"
        }
        valueNow.textContent = count
    })
})

const btnSave = document.getElementById("save-data") 

function save() {
    let saveData = count + ","
    btnSave.textContent += saveData
    valueNow.innerText = 0
    count = 0
}