import React, {useState,useEffect} from 'react';

function HookCounterEffect(props) {
    const [count,setCount] = useState(0)
    const[name,setName] =  useState('')

    useEffect(() => {
        console.log('calling effect fn...');
        document.title = `You clicked ${count} times`
    },[count])//while passing second parameter as an array usinf useEffect to focus only count value while it update then only call useeffect fn.
    return (

        <div>
            <input type = "text" value = {name} onChange = {e => setName(e.target.value)}/>
            <button onClick = {() => setCount(count + 1)}>Click Count {count} times</button>
        </div>
    );
}

export default HookCounterEffect;