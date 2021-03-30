import React from 'react';

function Inline(props) {
    const heading = {
        fontSize:'72px',//always write css attribute in camelcase while suing inline css with passing as object
        color:'blue'

    }
    return (
        <div>
            <h2 className = 'error'>Error from inline component</h2>
            {/* <h2 className = {styles.success}>Success</h2> */}
            <h4 style = {heading}>Inline styling</h4>
        </div>
    );
}

export default Inline;