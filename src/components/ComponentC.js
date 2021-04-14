import React,{useContext} from 'react';
import {UserContext,ChannelContext} from '../App'
function ComponentC(props) {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            {user} - {channel}
        </div> //we cn easily consume value with the help of useContext hook
    );
}

export default ComponentC;