import {FETCH_POSTS, NEW_POST} from "./types";

export const fetchPosts = ()=> dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts =>
                dispatch({
                    type:FETCH_POSTS,
                    payload: posts
                })
            );
}


export const createPosts = (data) => dispatch => {
    console.log('Action called')
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    }).then(res=>res.json())
        .then(posts =>
            dispatch({
                type:NEW_POST,
                payload: posts
            }));
}
