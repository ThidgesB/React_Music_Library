import React from 'react';
import './SearchBar.css'

const SearchBar = () => {



    
    

    return (
        <div class="topnav">
            <a class="active" href="#home">Dewey Decibel System</a>
                <div class="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search"></input>
                            <button type="submit">Submit</button>
                    </form>
                </div>
        </div>
    )

}

export default SearchBar;