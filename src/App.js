import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css'
import TitleBar from './Components/TitleBar/TitleBar';


function App() {

const [musicLibrary, setMusicLibrary] = useState([]);

useEffect(() => {
  getAllMusic();
}, [])

async function getAllMusic() {
  let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music')
  setMusicLibrary(response.data)
}


  return (
    <div>
      <div>
        <TitleBar />
        <DisplayMusic musicLibrary={musicLibrary}/>
      </div>
      
    </div>
  );
}

export default App;
