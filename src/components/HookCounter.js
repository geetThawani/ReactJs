import React, {useState} from 'react';

function HookCounter(props) {
    const [count,setState] = useState(0) //destructuring array syntax
    return (
        <div>
            <button onClick = {() => setState(count + 1)}>Click from hook - {count}</button>
        </div>
    );
}

export default HookCounter;