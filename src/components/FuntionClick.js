import React from 'react';

function FuntionClick(props) {
    function clickHandler(){
        console.log('Click on function button !');
    }
    return (
        <div>
            <button onClick = {clickHandler}>Click me</button>&nbsp;
            <button onClick = {clickHandler()}>Click me</button>
        </div>
        //second buton : While call handler as function call it will run time when loaded and not work on click
    );
}

export default FuntionClick;