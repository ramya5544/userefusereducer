import React, { useEffect, useRef } from 'react';

const UseRefEx = () => {
    const myRef=useRef()
    useEffect(()=>{
        myRef.current.focus();
    })
    return (
        <div>
            <input type='text' ref={myRef} placeholder='Email' />
            <input type='text' placeholder='password'/>
        </div>
       
        
    
    );
};

export default UseRefEx;