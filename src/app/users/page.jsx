import React from 'react';

import UserList from './components/UserList';



export default function Users({params}) {
    console.log("PARAMS : ", params)
    
    return (
    

    <div> 
        <br />

        <div>
            <UserList />
        </div>

    </div>
    )
}