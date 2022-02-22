import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import './App.css'
import TitleBar from './Components/TitleBar/TitleBar';
import Songform from './Components/SongForm/SongForm';


function App() {

const [musicLibrary, setMusicLibrary] = useState([]);
const [editSongId, setEditSongId] = useState(0);

function setSongId(songId){
  setEditSongId(songId)
}

function returnSongId(){
  return editSongId
}

useEffect(() => {
  getAllMusic();
}, [])

async function deleteSong(songID){
  let response = await axios.delete('http://127.0.0.1:8000/music/' + songID + '/')
  getAllMusic()
}

async function editSong(songID, requestBody){
  let response = await axios.put('http://127.0.0.1:8000/music/' + songID + '/', requestBody)
  getAllMusic()
}

async function getAllMusic() {
  let response = await axios.get('http://127.0.0.1:8000/music/')
  setMusicLibrary(response.data)
}

async function createSong(song) {
  let response = await axios.post('http://127.0.0.1:8000/music/', song)
  console.log(response)
  getAllMusic()
}

  return (
    <div>
      <div>
        <TitleBar />
        <DisplayMusic musicLibrary={musicLibrary} returnSongId={returnSongId} editSong={editSong} setSongId={setSongId} deleteSong={deleteSong} getAllMusic={getAllMusic}/>
        <Songform createSong={createSong} getAllMusic={getAllMusic}/>
      </div>
    </div>
  );
}

export default App;
