let declarativeData = []

const loadData = () => {
    if (localStorage.getItem("declarativeData")) {
        declarativeData = JSON.parse(localStorage.getItem("declarativeData"))
    }
}

const saveData = () => {
    render()
    localStorage.setItem("declarativeData", JSON.stringify(declarativeData))
}

const updateElement = (element) => {
    const idToUpdate = parseInt(element.getAttribute("data-id"))
    const newValue = prompt("Enter new value:", element.getAttribute("data-value"))
    if (newValue) {
        declarativeData = declarativeData.map(item => {
            if (item.id === idToUpdate) {
                item.value = newValue
            }
            return item
        })

        saveData()
    }
}

const deleteElement = (element) => {
    const idToDelete = parseInt(element.getAttribute("data-id"))
    declarativeData = declarativeData.filter( item => {
        return item.id !== idToDelete
    })

    saveData()
}

const submitHandler = (event) => {
    event.preventDefault()

    declarativeData.push({
        value: document.queryCommandEnabled("#ourField").value,
        id: Date.now()
    })

    saveData()
}

const render = () => {
    document.querySelector("#app").innerHTML = `
        <form onsubmit="submitHandler(event)">
            <input id="ourField" type="text" autocomplete="off" />
            <button>Create Item</button>
        </form>
        
        <ul>
            ${declarativeData.map((item) => {
                    return `
                        <li>
                            ${item.value} 
                            <button data-value="${item.value}" data-id="${item.id}" onclick="updateElement(this)">Edit</button> 
                            <button onclick="deleteElement(this)" data-id="${item.id}">Delete</button>
                        </li>`
            }).join("")}
        </ul>
    `
}

render()

const ourForm = document.querySelector("#ourForm")

loadData()
render()