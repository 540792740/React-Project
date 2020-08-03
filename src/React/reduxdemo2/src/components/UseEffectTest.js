import React, {useEffect, useRef,  useState} from 'react';
import { useForm } from "./useForm";
import {Hello} from "./Hello";

// substitute componentDidMount and componentDidUpdated

const UseEffectTest = () => {
    const [values, handleChange] = useForm({
        email: "",
        password: "",
        firstName:""
    });
    const [showHello, setShow] = useState(true)
    // useEffect(()=>{
    //     const onMouseMove = e =>{
    //         console.log(e)
    //     }
    //     window.addEventListener('mousemove', onMouseMove)
    //     return ()=>{
    //         window.removeEventListener('mousemove', onMouseMove);
    //     }
    // }, [])
    useEffect(()=>{
        console.log('mount1')
    },[])
    useEffect(()=>{
        console.log('mount2')
    },[])

    return(
        <div>
            {/*<button onClick={()=>setShow(!showHello)}>Toggle</button>*/}
            {/*{showHello && <Hello/>}*/}
            <br/>
            <input type="email"
                   value={values.email}
                   onChange={handleChange}
            />
            <input name='firstName'
                   value={values.firstName}
                   onChange={handleChange}
                   placeholder='First Name'
            />
            <input type="password"
                   name='password'
                   value={values.password}
                   onChange={handleChange}
            />
        </div>
    )
}
export default UseEffectTest;
