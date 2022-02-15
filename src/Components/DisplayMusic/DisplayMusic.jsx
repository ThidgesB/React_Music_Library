import SearchBar from '../SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';


const DisplayMusic = (props) => {

    const [filteredSongs, setFilteredSongs] = useState(props.musicLibrary)

    useEffect(() => {
        setFilteredSongs(props.musicLibrary)
    },[props.musicLibrary])

    function filterBySearch(search) {
        console.log(search)
        let musicList = props.musicLibrary.filter((result)=> {
            if(result.title.includes(search) || result.artist.includes(search) || result.album.includes(search) || result.genre.includes(search) || result.releaseDate.includes(search)){
                return true;
            }
            else return false;
        })
        setFilteredSongs(musicList)
    }

    let mappedMusicList = filteredSongs.map((song) => {
        return <tr><td>{song.title}</td> <td>{song.artist}</td> <td>{song.album}</td> <td>{song.genre}</td> <td>{song.releaseDate}</td></tr>
    })

    
    return(
        <div>
            <SearchBar addSearchProperty={filterBySearch}/>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>{mappedMusicList}</tbody>
            </table>
        </div>
    )
}

export default DisplayMusic;