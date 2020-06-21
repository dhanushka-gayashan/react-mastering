import React from 'react'
import ReactDOM from 'react-dom'

import './styles/styles.css'

const ReactApp = () => {
    return (
        <div>
            <h1 className="special">My React App</h1>
            <p>Date and Time - {new Date().toLocaleString()}</p>
            <small>Good Luck with React...</small>
        </div>
    )
}

setInterval(() => {
    ReactDOM.render(<ReactApp />, document.querySelector("#app"))
}, 1000)

// Async Reload
if (module.hot) {
    module.hot.accept()
}