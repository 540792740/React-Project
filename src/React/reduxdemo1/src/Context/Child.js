import React from 'react';
import {Consumer} from "./ParentComponent";
import GrandChild from "./GrandChild";


function Child(props) {
    return (
        <Consumer>
            {(name) =>
                <div>
                    <p>Child Component: {name}</p>
                    <GrandChild/>
                </div>
            }
        </Consumer>
        );
}

export default Child;
