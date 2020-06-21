import React from 'react'
import ReactDOM from 'react-dom'

import './styles/styles.css'

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
                <Pet name="Meowsalot" species="cat" age="5" />
                <Pet name="Barksalot" species="dog" age="2" />
                <Pet name="Fluffy" species="rabbit" age="3" />
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