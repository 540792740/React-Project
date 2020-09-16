import React, {useState} from 'react';
import {useLocation, useHistory} from "react-router"
function About() {
    const location = useLocation();
    const history = useHistory();
    function goBackHandle() {
        history.goBack();
        console.log(history)
    }
    return (
        <React.Fragment>
            <div>About</div>
            <div>Location = {location.pathname}</div>
            <div>From={location.state.from}</div>
            <button onClick={goBackHandle}>Go back</button>
        </React.Fragment>
    );
}

export default About;
