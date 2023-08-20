export const SmallPersonListItem = ({ person }) => {
    const { name, age } = person;

    console.log(person)
    return (
        <p>name: {name}, Age: {age} years old</p>
    );
}