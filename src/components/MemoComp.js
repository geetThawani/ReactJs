import React from 'react';

function MemoComp({name}) {
    return (
        <div>
            Memo Component 
            {name} !
        </div>
    );
}

export default React.memo(MemoComp);