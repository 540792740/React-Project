import React, {useEffect, useState} from 'react';

function HooksTest(props) {
    const [query, setQuery] = useState('useState Hook')
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `You click ${count} times.`
    })

    return (
        <div>
            {query}
            <button onClick={()=>setQuery('NewState by using useState Hook')}>Click</button>

            <p>You click {count} times</p>
            <button onClick={()=>setCount(count + 1)}>Count</button>
        </div>
    );
}

export default HooksTest;
