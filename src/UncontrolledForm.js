import React from 'react'

export const UncontrolledForm = () => {
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef()

    const handleSubmit = (e) => {
        console.log(nameInput.current.value)
        console.log(ageInput.current.value)
        console.log(hairColorInput.current.value)
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="name" ref={nameInput} />
            <input name="age" type="number" placeholder="age" ref={ageInput}/>
            <input name="hairColor" type="text" placeholder="hair color" ref={hairColorInput} />
            <input type="submit" value="Submit" />
        </form>
    );
}