import React,{useState,useEffect} from 'react';

function HookMouse(props) {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePos = (e) =>{
        console.log('calling log pos...');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('calling useeffect...');
        window.addEventListener('mousemove',logMousePos)

        return ()=>{ //while using this for unmount our event
            console.log('hook component unmounting');
            window.removeEventListener('mousemove',logMousePos)
        }
    },[])
    return (
        <div>
            Hooks X : {x} Y : {y}
        </div>
    );
}

export default HookMouse;