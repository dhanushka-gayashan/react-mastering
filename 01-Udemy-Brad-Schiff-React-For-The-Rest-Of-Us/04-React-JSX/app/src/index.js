import React from "react"
import ReactDOM from "react-dom"

import './index.css'

const ReactApp = () => {
    return (
        <div>
            <h1 className="special">Todos List</h1>
            <p>Available Todos - {new Date().toLocaleString()}</p>
            <small>Good Luck with Todos</small>
        </div>
    )
}

setInterval(() => {
    ReactDOM.render(<ReactApp/>, document.querySelector("#app"))
}, 1000)