import React, {useEffect} from "react";

export const Hello = () =>{
    useEffect(()=>{
        console.log('render')
        return ()=>{
            console.log('unMount')
        }
    }, []);
    return <div>Hello</div>
}
