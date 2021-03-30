import React from 'react';

function Person({person}) {
    return (
        <div>
            <h2>I am {person.name}. I am {person.age} year old.I know {person.skill}</h2>{/*chk on ocnsole itwill show warning msg we cant pass key as a prop in childcomponent, we should need to pass in diff prop name */}
        </div>
    );
}

export default Person;