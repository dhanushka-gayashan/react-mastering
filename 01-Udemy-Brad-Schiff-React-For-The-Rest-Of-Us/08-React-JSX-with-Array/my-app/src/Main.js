import React from 'react'
import ReactDOM from 'react-dom'

import './styles/styles.css'

const pets = [
    { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
    { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
    { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
    { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
    { name: "Paws", species: "dog", age: "6", id: 789789789 }
]

const AppHeader = () => {
    return (
        <h1 className="special">My React App</h1>
    )
}

const AppBody = () => {
    return (
        <p>Date and TIme - {new Date().toLocaleString()}</p>
    )
}

const AppFooter = () => {
    return (
        <small>Good Luck with React</small>
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
            <AppBody />

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

setInterval(() => {
    ReactDOM.render(<ReactApp/>, document.querySelector("#app"))
}, 1000)

// Async Reload
if (module.hot) {
    module.hot.accept()
}