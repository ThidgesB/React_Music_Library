import SearchBar from "../SearchBar/SearchBar";
import React, { useState, useEffect } from "react";
import './DisplayMusic.css'
import EditSong from "../EditSong/EditSong";

const DisplayMusic = (props) => {

  const [onEditClick, setOnEditClick] = useState(false);
  const [filteredSongs, setFilteredSongs] = useState(props.musicLibrary);

  useEffect(() => {
    setFilteredSongs(props.musicLibrary);
  }, [props.musicLibrary]);


  function handleClick(song){
    setOnEditClick(!onEditClick)
    
  }

  function filterBySearch(search) {
    console.log(search);
    let musicList = props.musicLibrary.filter((result) => {
      if (
        result.title.includes(search) ||
        result.artist.includes(search) ||
        result.album.includes(search) ||
        result.genre.includes(search) ||
        result.release_date.includes(search)
      ) {
        return true;
      } else return false;
    });
    setFilteredSongs(musicList);
  }

  return (
    <div>
      <SearchBar addSearchProperty={filterBySearch} />
      <table className='table'>
        <thead>
          <tr>
            <th className='title-header' scope='col-4' >Title</th>
            <th className='other-header' scope='col-2' >Artist</th>
            <th className='other-header' scope='col-2' >Album</th>
            <th className='other-header' scope='col-2' >Genre</th>
            <th className='other-header' scope='col-2' >Release Date</th>
          </tr>
        </thead>
        <tbody >
          {filteredSongs.map((song) => {
            return (
              <tr>
                <td>{song.title}</td> <td>{song.artist}</td>
                <td>{song.album}</td> <td>{song.genre}</td>
                <td>{song.release_date}</td>
                <td><button onClick={() => handleClick(song)} type='button'>Edit</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {onEditClick && <EditSong />}
    </div>
  );
};

export default DisplayMusic;
