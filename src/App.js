import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import './App.css'
import TitleBar from './Components/TitleBar/TitleBar';
import Songform from './Components/SongForm/SongForm';
import EditSong from './Components/EditSong/EditSong';


function App() {

const [musicLibrary, setMusicLibrary] = useState([]);

useEffect(() => {
  getAllMusic();
}, [])

async function editSong(songID){
  let response = await axios.put('http://127.0.0.1:8000/music/' + songID + '/')
}

async function getAllMusic() {
  let response = await axios.get('http://127.0.0.1:8000/music/')
  setMusicLibrary(response.data)
}

async function createSong(song) {
  let response = await axios.post('http://127.0.0.1:8000/music/', song)
  console.log(response)
}

  return (
    <div>
      <div>
        <Songform createSong={createSong}/>
        <TitleBar />
        <DisplayMusic musicLibrary={musicLibrary}/>
      </div>
      
    </div>
  );
}

export default App;
