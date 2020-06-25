import React from "react";

const Person = (prop) => {
    return(
        <div className='Person'>
            <p onClick={prop.click}>
                I am {prop.personItem.name}, I am {prop.personItem.age} years old
            </p>
            <p>{prop.children}</p>
        </div>
    )
}
export default Person;
