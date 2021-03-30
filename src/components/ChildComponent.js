import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            <button onClick = {() => props.greethandler('Child')}>Greet parent</button>{/* If we need to send any data frm child to parent then use arrow method while call fn*/}
        </div>
    );
}

export default ChildComponent;