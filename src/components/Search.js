import React from 'react';

export function Search() {
    return (
        <form className='search-bar'>
            <input placeholder='search here'  />    
            <button type='submit' >Search</button>
        </form>
    )
}