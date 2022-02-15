import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';


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
        <SearchBar />
      </div>
      <DisplayMusic musicLibrary={musicLibrary} />
    </div>
  );
}

export default App;
