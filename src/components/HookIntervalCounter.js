import React,{useState,useEffect} from 'react';

function HookIntervalCounter(props) {
    const [count,setCount] = useState(0)

    useEffect(() => {
        // function doSomething(){
        //     console.log(someProps);
        // }
        // doSomething()

        const interval =  setInterval(tick,1000);
    },[])
    //if we are not using prevState so we should pass Count but always use prevstate while doing increament,sowe dont need use pass count parameter if we r using prevState
    //If we cn write funciton inside useEffect its good approach n we cn pass someprop as prameter
    const tick = () =>{
        // const interval = setCount(count + 1)//pls dont use this appraoch
        const interval =  setCount(prevCount => prevCount + 1)//like this approach is always correct
        return () => {
            clearInterval(interval)
        }
    }
    return (
        <div>
           <h2> Count from Hook {count}</h2>
        </div>
    );
}

export default HookIntervalCounter;