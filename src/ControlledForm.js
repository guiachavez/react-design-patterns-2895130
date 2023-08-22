import { useState, useEffect } from "react"

export const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [hairColor, setHairColor] = useState('')

    useEffect(() => {
        if (name.length < 2) {
            setNameInputError('Must be more than two characters')
        } else {
            setNameInputError('')
        }
    }, [name])

    return (
        <form>
            {nameInputError && <p>{nameInputError}</p>}
            <input name="name" type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)}/>
            <input name="age" type="number" placeholder="age" value={age} onChange={e => setAge(Number(e.target.value))}/>
            <input name="hairColor" type="text" placeholder="hairColor" value={hairColor} onChange={e => setHairColor(e.target.value)}/>
            <button>Submit</button>
        </form>
    )
}