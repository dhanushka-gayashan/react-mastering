import React from 'react'
import ReactDOM from 'react-dom'

import './styles/styles.css'

const useState = React.useState

const AppHeader = () => {
    return (
        <h1 className="special">My React App</h1>
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

const AddPetForm = (props) => {

    const [name, setName] = useState()
    const [species, setSpecies] = useState()
    const [age,setAge] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()

        props.setPets(prev => prev.concat({
            name: name,
            species: species,
            age: age,
            id: Date.now()
        }))

        setName("")
        setSpecies("")
        setAge("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add New Pet</legend>
                <input type="text" placeholder="Name" value={name} onChange={event => setName(event.target.value)}/>
                <input type="text" placeholder="Species" value={species} onChange={event => setSpecies(event.target.value)}/>
                <input type="text" placeholder="Age (Years)" value={age} onChange={event => setAge(event.target.value)}/>
                <button>Add Pet</button>
            </fieldset>
        </form>
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

    const [pets, setPets] = useState([
        { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
        { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
        { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
        { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
        { name: "Paws", species: "dog", age: "6", id: 789789789 }
    ])

    return (
        <>
            <AppHeader />

            <LikeArea />

            <AppTimeArea />

            <AddPetForm setPets={setPets} />

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

// Async Reload
if (module.hot) {
    module.hot.accept()
}
