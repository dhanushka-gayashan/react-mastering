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
    return <h1 className="special">Todos List</h1>
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

const LikeArea = () => {

    const [likeCount, setLikeCount] = useState(0)

    const increaseLikeHandler = () => {
        // React pass current value of "likeCount" as "prev" into the function
        setLikeCount((prev) => {
            return prev + 1
        })
    }

    const decreaseLikeHandler = () => {
        // React pass current value of "likeCount" as "prev" into the function
        setLikeCount((prev) => {
            if (prev > 0) {
                return prev - 1
            }

            return 0
        })
    }

    return (
        <>
            <button onClick={increaseLikeHandler}>Increase Likes</button>

            <button onClick={decreaseLikeHandler}>Decrease Likes</button>

            <h2>This page has been liked {likeCount} times</h2>
        </>
    )
}

const Pet = (props) => {
    return <li>{props.name} is a {props.species} and is {props.age} years old.</li>
}

const AppFooter = () => {
    return <small>Good Luck with Todos</small>
}

const ReactApp = () => {
    return (
        <>
            <AppHeader />

            <LikeArea />

            <AppTimeArea />

            <ul>
                {
                    pets.map(pet => <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id}/>)
                }
            </ul>

            <AppFooter />
        </>
    )
}

ReactDOM.render(<ReactApp/>, document.querySelector("#app"))