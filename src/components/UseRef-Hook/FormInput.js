import React,{useEffect,useRef} from 'react';

function FormInput(props) {
    const inputRef = useRef(null)

    useEffect(()=>{
        //Focus input field once a time while dom loaded
        inputRef.current.focus();
    },[])
    return (
        <div>
            <input ref = {inputRef} type = 'text'/>
        </div>
    );
}

export default FormInput;