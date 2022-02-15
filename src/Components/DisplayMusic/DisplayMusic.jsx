import React from 'react';

const DisplayMusic = (props) => {


    let mappedMusicList = props.musicLibrary.map((song) => {
        return <tr><td>{song.title}</td> <td>{song.artist}</td> <td>{song.album}</td> <td>{song.genre}</td> <td>{song.releaseDate}</td></tr>
    })

    return(
        <div> 
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
                <tbody>
                    {mappedMusicList}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayMusic;