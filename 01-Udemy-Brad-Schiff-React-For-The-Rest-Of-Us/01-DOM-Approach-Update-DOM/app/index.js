const ourForm = document.querySelector("#ourForm")
const ourField = document.querySelector("#ourField")
const ourList = document.querySelector("#ourList")

let data = []
if (localStorage.getItem("domData")) {
    data = JSON.parse(localStorage.getItem("domData"))
}

const saveData = () => {
    const allItems = []
    ourList.querySelectorAll("li").forEach(el => allItems.push(el.querySelector(".value").innerHTML))
    localStorage.setItem("domData", JSON.stringify(allItems))
}

const editElement = (el) => {
    const newValue = prompt("Enter new value", el.parentElement.querySelector(".value").innerHTML)
    if (newValue) {
        el.parentElement.querySelector(".value").innerHTML = newValue
    }
    saveData()
}

const deleteElement = (el) => {
    el.parentElement.remove()
    saveData()
}

const itemTemplate = (item) => {
    return `<li>
                <span class="value">${item}</span> 
                <button onclick="editElement(this)">Edit</button> 
                <button onclick="deleteElement(this)">Delete</button>
            </li>`
}

ourForm.addEventListener("submit", (event) => {
    event.preventDefault()
    ourList.insertAdjacentHTML("beforeend", itemTemplate(ourField.value))
    ourField.value = ""
    saveData()
})

const onLoad = () => {
    ourList.innerHTML = data.map((item) => {
        return itemTemplate(item)
    }).join("")
}

onLoad()
