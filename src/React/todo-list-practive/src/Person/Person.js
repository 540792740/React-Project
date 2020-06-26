import React from "react";
import Radium from "radium";

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
            <p>{prop.children}</p>
        </div>
    )
}
export default Radium(Person);
