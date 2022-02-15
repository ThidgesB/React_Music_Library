import React from 'react';
import './SearchBar.css'
import { useState } from 'react';


const SearchBar = (props) => {

    const [search, setSearch] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.addSearchProperty(search)
        setSearch('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="header-search">
                <span className="visually-hidden"></span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search by artist, title, etc.."
                value={search}
                onChange={(event) => setSearch((event.target.value))} 
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;