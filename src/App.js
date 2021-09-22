
import { useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  
  const[inputValue, setInputValue] = useState([])
  const[info, setInfo] = useState([])

  const handleChange = (e) => setInputValue(e.target.value)


  const func = (x) => setInfo(info.filter( elt => elt !== x ))

  const handleSearch = () => fetch(`https://api.github.com/repos/${inputValue}`)
  .then((response) => response.json()).then((response) => setInfo([...info, response]))
  


  return (
    <div className="App">
      <body className="App-header">
        <section className="search">
          <input type='text' onChange={handleChange}></input>
          <button onClick={handleSearch}>pesquisar</button>
          <ul>
            {
              info.map((elt, index) => <li className="item"> {elt.owner !== undefined ? <Card name={elt.name} desc={elt.description} key={index} img={elt.owner.avatar_url} f={func}></Card> : alert('repositório inexistente') }</li>)
            }
            { console.log(info)}
          </ul>
        </section>
      </body>
    </div>
  );
}

export default App;
