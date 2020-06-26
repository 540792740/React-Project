import React from "react";

const Person = (prop) => {
    return(
        <div className='Person' onClick={prop.click}>
            <p >
                I am {prop.personItem.name}, I am {prop.personItem.age} years old
            </p>
            <input type="text"
                   value={prop.personItem.name}
                   onChange={prop.change}

            />
        </div>
    )
}
export default Person;
