import React from "react"
import ReactDOM from "react-dom"

import './index.css'

const useState = React.useState

const pets = [
    { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
    { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
    { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
    { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
    { name: "Paws", species: "dog", age: "6", id: 789789789 }
]

const AppHeader = () => {
    return (
        <h1 className="special">Todos List</h1>
    )
}

const AppTimeArea = () => {

    // Only Run for First time. React Keep Track of this line
    const [theTime, setTheTime] = useState(new Date().toLocaleString())

    setInterval(() => {
        setTheTime(new Date().toLocaleString())
    }, 1000)

    return (
        <p>Current Time is {theTime}</p>
    )
}

const AppFooter = () => {
    return (
        <small>Good Luck with Todos</small>
    )
}

const Pet = (props) => {
    return (
        <li>{props.name} is a {props.species} and is {props.age} years old.</li>
    )
}

const ReactApp = () => {
    return (
        <div>
            <AppHeader />
            <AppTimeArea />

            <ul>
                {
                    pets.map(pet => {
                        return <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id}/>
                    })
                }
            </ul>

            <AppFooter />
        </div>
    )
}

ReactDOM.render(<ReactApp/>, document.querySelector("#app"))