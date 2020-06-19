import React from "react"
import ReactDOM from "react-dom"

import './index.css'

const useState = React.useState

const userEffect = React.useEffect

const AppHeader = () => {
    return <h1 className="special">Todos List</h1>
}

const AppTimeArea = () => {

    // only run once the first time "AppTimeArea" component is rendered
    const [theTime, setTheTime] = useState(new Date().toLocaleString())

    // only run once the first time "AppTimeArea" component is rendered
    // "setInterval" running on Web Browser Level. (Consume Computer Resources)
    // We need to remove "setting interval" process from browser when we UNMOUNT/REMOVE the "AppTimeArea" Component from the page
    // Anything return from "userEffect", React consider as the "Clean Up Function" for "Clear User Effect".
    // In here, React use "Clean Up Function" to remove "setting interval" process from browser
    userEffect(() => {
        const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <p>Current Time is {theTime}</p>
    )
}

const LikeArea = () => {

    const [likeCount, setLikeCount] = useState(0)

    const increaseLikeHandler = () => {
        // React pass current value of "likeCount" as "prev" into the function
        setLikeCount(prev => prev + 1)
    }

    const decreaseLikeHandler = () => {
        // React pass current value of "likeCount" as "prev" into the function
        setLikeCount(prev => prev > 0 ? prev - 1 : 0)
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

    const handleDelete = () => {
        props.setPets(prev => prev.filter(pet => pet.id !== props.id))
    }

    return (
        <li>
            {props.name} is a {props.species} and is {props.age} years old.
            <button onClick={handleDelete}>Delete</button>
        </li>
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
    return <small>Good Luck with Todos</small>
}

const ReactApp = () => {

    const [pets, setPets] = useState([])

    // only run once the first time "ReactApp" component is rendered
    userEffect(() => {
        if (localStorage.getItem("petData")) {
            setPets(prev => prev.concat(JSON.parse(localStorage.getItem("petData"))))
        }
    }, [])

    // run every time pet state changes
    userEffect(() => {
        localStorage.setItem("petData", JSON.stringify(pets))
    }, [pets])

    return (
        <>
            <AppHeader />

            <LikeArea />

            <AppTimeArea />

            <AddPetForm setPets={setPets} />

            <ul>
                {
                    pets.map(pet => <Pet setPets={setPets} key={pet.id} id={pet.id} name={pet.name} species={pet.species} age={pet.age}/>)
                }
            </ul>

            <AppFooter />
        </>
    )
}

ReactDOM.render(<ReactApp/>, document.querySelector("#app"))