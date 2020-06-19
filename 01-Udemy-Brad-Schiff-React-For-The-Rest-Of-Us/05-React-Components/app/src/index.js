import React from "react"
import ReactDOM from "react-dom"

import './index.css'

const AppHeader = () => {
    return (
        <h1 className="special">Todos List</h1>
    )
}

const AppBody = () => {
    return (
        <p>Available Todos - {new Date().toLocaleString()}</p>
    )
}

const AppFooter = () => {
    return (
        <small>Good Luck with Todos</small>
    )
}

const ReactApp = () => {
    return (
        <div>
            <AppHeader />
            <AppBody />
            <AppFooter />
        </div>
    )
}

setInterval(() => {
    ReactDOM.render(<ReactApp/>, document.querySelector("#app"))
}, 1000)