import React from 'react'
import ReactDOM from 'react-dom'

import './styles/styles.css'

const ReactApp = () => {
    return (
        <div>
            <h1 className="special">This is My App Baby...</h1>
            <p>The Sky is Blue...</p>
        </div>
    )
}

ReactDOM.render(<ReactApp />, document.querySelector("#app"))

// Async Reload
if (module.hot) {
    module.hot.accept()
}
