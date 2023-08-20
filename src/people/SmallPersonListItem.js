export const SmallPersonListItem = ({ person }) => {
    const {name, age} = person

    return (
        <p>name: {person.name}, Age: {person.age} years old</p>
    );
}