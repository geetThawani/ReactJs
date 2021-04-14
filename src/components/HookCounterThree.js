import React, {useState} from 'react';

function HookCounterThree(props) {
    const [name,setName] = useState({firstName:'',lastName:''})
    return (
        <div className = 'container-fluid' style={{marginTop:'30px'}}>
            <form className = "form-group row">
                <div className = 'col'>
                    <input 
                    type="text" 
                    value = {name.firstName} 
                    onChange = {(e) => setName({...name, firstName:e.target.value})} className = "form-control"/>
                </div>
                <div className = 'col'>
                    <input 
                    type="text" 
                    value = {name.lastName} 
                    onChange = {(e) => setName({...name, lastName:e.target.value})} className = "form-control"/>
                
                </div>
                
            </form>
            
            <h2>FirstName : {name.firstName}</h2>
            <h2>LastName : {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        
        </div>
    );
}

export default HookCounterThree;