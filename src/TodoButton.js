import React from 'react';
import './TodoButton.css';

const onclickButton = (msg)=>{
    alert(msg);
}

function TodoButton(props){
    return(
        <button className='TodoButton'
        onClick={()=>onclickButton("Modal aquiii")}
        >
            +
        </button>
    );
}

export { TodoButton };