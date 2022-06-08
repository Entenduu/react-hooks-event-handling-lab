import React from 'react';

function Keypad(){
    return (
        <>
        <input type='password' placeholder='Enter Password' onChange={(e)=>{console.log('Entering password...')}}></input>
        </>
    )
}

export default Keypad;