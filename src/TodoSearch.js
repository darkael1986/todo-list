import React from 'react';
import './TodoSearch';



function TodoSearch({ searchValue, setSearchValue}){

    const onsearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <input 
        className='TodoSearch' 
        placeholder = "Cebolla"
        value ={searchValue}
        onChange = {onsearchValueChange}
        />
    );

}

export { TodoSearch };