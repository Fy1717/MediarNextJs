import React from 'react';

import UpdateUser from '../../components/UpdateUser';

export default function User({params}) {
    console.log("PARAMS : ", params);
    return (
        <div> 
            <br />

            <div>
                <UpdateUser id={params.id[0]}/>
            </div>
        </div>
    )
}