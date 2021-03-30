import React from 'react';

/* const Greet = (props) => {
    console.log(props);
    return (
        <>
        <h1>Function components with simple js and ES6 script !</h1>
        <h2>Reuse same component with passign attibute with value and display</h2>
        <h3>Hello {props.name} *****  {props.emailId}</h3>
        </>
    )
} */

//Destructuring our code using props and state

/* //Below is one way
const Greet = ({name,emailId}) => {
    //console.log(props);
    return (
        <>
        <h1>Function components with simple js and ES6 script !</h1>
        <h2>Reuse same component with assign attibute with value and display</h2>
        <h3>Hello {name} *****  {emailId}</h3>
        </>
    )
}   */

//Below is second way
const Greet = props => {
    console.log(props);
    const {name,emailId} = props
    return (
        <>
        <h1>Function components with simple js and ES6 script !</h1>
        <h2>Reuse same component with assign attibute with value and display</h2>
        <h3>Hello {name} *****  {emailId}</h3>
        </>
    )
}  

    


export default Greet;