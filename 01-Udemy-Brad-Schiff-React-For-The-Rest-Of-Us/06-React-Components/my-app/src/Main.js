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
        <p>Date and Time - {new Date().toLocaleString()}</p>
    )
}

const AppFooter = () => {
    return (
        <small>Good Luck with React</small>
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

// Async Reload
if (module.hot) {
    module.hot.accept()
}









