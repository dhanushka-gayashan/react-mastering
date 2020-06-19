const reactApp = () => {
    return React.createElement("div", null, [
        React.createElement("h1", null, "Todo List"),
        React.createElement("p", null, `All Your Todos - ${new Date().toLocaleString()}`),
	React.createElement("small", null, "Good Luck with Todos")
    ])
}

setInterval(() => {
    ReactDOM.render(React.createElement(reactApp), document.querySelector("#app"))
}, 1000)



