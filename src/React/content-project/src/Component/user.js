import React from 'react';
import {useParams} from 'react-router'
import {Route, Switch} from "react-router-dom";
function User() {
    const {firstName, lastName} = useParams();
    return (
        <div>User {firstName} {lastName}</div>
    );
}

export default User;
