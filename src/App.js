import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css'
import TitleBar from './Components/TitleBar/TitleBar';
import Songform from './Components/SongForm/SongForm';


function App() {

const [musicLibrary, setMusicLibrary] = useState([]);

useEffect(() => {
  getAllMusic();
}, [])

async function getAllMusic() {
  let response = await axios.get('http://127.0.0.1:8000/music/')
  setMusicLibrary(response.data)
}

async function createSong(song) {
  let response = await axios.post('http://127.0.0.1:8000/music/', song)
}

  return (
    <div>
      <div>
        <TitleBar />
        <DisplayMusic musicLibrary={musicLibrary}/>
        <Songform createSong={createSong}/>
      </div>
      
    </div>
  );
}

export default App;
