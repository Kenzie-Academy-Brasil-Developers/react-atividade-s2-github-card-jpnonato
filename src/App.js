
import './App.css';
import React from 'react';
import {useEffect, useState} from 'react'
import Card from './components/Card';
import axios from 'axios';

function App() {

  const [data , setData] = useState([])
  const [input, setInput] = useState('')
  const [value, setValue] = useState('')

  // useEffect(() => {
  //   fetch(`https://api.github.com/repos/${value}`)
  //   .then((response) => { return response.json()}).then((response) => setData(response) )
  // },[value])

  useEffect(() => {
    axios.get(`https://api.github.com/repos/${value}`).then((response) => setData(response) )
  },[value])


  const handleInput = (e) => setInput(e.target.value)

  const handleClick = () => setValue(input)  


  return (
    <div className="App">
      <header className="App-header"> 
      <input  onChange={handleInput} ></input>
      <button onClick={handleClick}>Buscar</button>
      {data.owner !== undefined ? <Card data={data} image={data.owner.avatar_url}></Card> 
      : value ===  '' ? <></> : <h2> Repositório inexistente!* </h2>  
      }
      </header>
    </div>
  );
}

export default App;
