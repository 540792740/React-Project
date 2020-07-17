import React from 'react';
import {Consumer} from "./ParentComponent";

function GrandChild(props) {
    return (
        <Consumer>
            {(name) =>
                <div>
                    <p>GrandChild Component: {name}</p>
                </div>
            }
        </Consumer>
    );
}

export default GrandChild;
