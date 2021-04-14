import React,{useState} from 'react';
import useDocTitle from './useDocTitle';

function DocTitleOne(props) {
    const[count,setCount] = useState(0)
    

    useDocTitle(count)
    // useEffect(() => {
    //     document.title = `Count - ${count}`
    // },[count])
    // Abv code we are using in 2 fn component whih is not good so for reuse abv code we cn create own custom hook n use in both component.

    return (
        <div>
            Count One
            <button onClick = {() => setCount(count + 1)}>Count - {count}</button>
        </div>
    );
}

export default DocTitleOne;