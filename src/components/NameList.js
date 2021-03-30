import React from 'react';
import Person from './Person';

function NameList(props) {
const names = ['Geet','Pallavi','Suchi']
const namelist = names.map((name,index) => <h2 key = {index}>{name}</h2>)
    // const persons = [
    //     {
    //         id:1,
    //         name:'Geet',
    //         age:28,
    //         skill:'ReactJs'
    //     },
    //     {
    //         id:2,
    //         name:'Pallavi',
    //         age:25,
    //         skill:'Angular Js'
    //     },
    //     {
    //         id:3,
    //         name:'Suchitra',
    //         age:25,
    //         skill:'Java'
    //     },
    // ]
    // const personList = persons.map(person => <Person key = {person.id} person = {person} />)//Keuy always be unique doest matter it is id or name but always it should be unique and if we not pass key prop then it will through warning unique key prop.
    return (
        <div>
            {namelist}
        </div>
        // <div>
        //     {personList}
        // </div>
    );
}

export default NameList;