import React, { useState, useEffect } from 'react';
import './SongForm.css'


const Songform = (props) => {

    const [songTitle, setSongTitle] = useState('')
    const [songArtist, setSongArtist] = useState('')
    const [songAlbum, setSongAlbum] = useState('')
    const [songGenre, setSongGenre] = useState('')
    const [songReleaseDate, setSongReleaseDate] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        let createdSong = {
            "title": songTitle,
            "artist": songArtist,
            "album": songAlbum,
            "genre": songGenre,
            "release_date": songReleaseDate
        }
        props.createSong(createdSong)
        setSongTitle('')
        setSongArtist('')
        setSongAlbum('')
        setSongGenre('')
        setSongReleaseDate('')
    }





    return ( 
        <form  onSubmit={handleSubmit}>
            <h5 className='header-color'>Add Song</h5>
            <div className='form-group'>
            <label className='label-title' for='title'>Title</label>
            <input type='text' className='title' value={songTitle} onChange={(event) => setSongTitle((event.target.value))}></input>
            </div>
            <div className='form-group'>
            <label className='label-title' for='artist'>Artist</label>
            <input type='text' className='artist' value={songArtist} onChange={(event) => setSongArtist((event.target.value))}></input>
            </div>
            <div className='form-group'>
            <label className='label-title' for='album'>Album</label>
            <input type='text' className='album' value={songAlbum} onChange={(event) => setSongAlbum((event.target.value))}></input>
            </div>
            <div className='form-group'>
            <label className='label-title' for='genre'>Genre</label>
            <input type='text' className='genre' value={songGenre} onChange={(event) => setSongGenre((event.target.value))}></input>
            </div>
            <div className='form-group'>
            <label className='label-title' for='release_date'>Release Date</label>
            <input type='date' className='release_date' value={songReleaseDate} onChange={(event) => setSongReleaseDate((event.target.value))}></input>
            </div>
            <button type="submit" className='button'>Submit</button>
        </form>
     );
}
 
export default Songform;