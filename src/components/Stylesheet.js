import React from 'react';
import './mystyle.css'
function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h4  className = {`${className} font-xl`}>Stylesheet</h4>{/*/using backstick we cn pass multiple class  wid combination of dynamic and static class*/}
        </div>
    );
}

export default Stylesheet;