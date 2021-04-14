import React,{useCallback, useEffect, useState} from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';


function ParentComp(props) {
    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(50000)

    const increamentAge = useCallback(() => {
        setAge(age + 1)
    },[age])

    const increamentSalary = useCallback(() => {
        setSalary(salary + 1000)
    },[salary])  //We can useEffect hook for this but only present component if we want to send any fn to another component so wen create diff fn for this n use useCallback fn for ignore call unwantes renderering fn or component if not uses   
    return (
        <div>
            <Title />
            <Count text = "Age" count = {age}/>
            <Button handleClick = {increamentAge}>Increament Age</Button>
            <Count text = "Salary" count = {salary}/>
            <Button handleClick = {increamentSalary}>Increament Salary</Button>
        </div>
    );
}

export default ParentComp;