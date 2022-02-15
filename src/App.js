import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css'


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
        <h3 className='appTitle'><div className='neon'>Dewey Decibel System</div></h3>
        <DisplayMusic musicLibrary={musicLibrary}/>
      </div>
      
    </div>
  );
}

export default App;
