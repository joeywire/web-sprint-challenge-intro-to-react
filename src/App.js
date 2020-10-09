import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Char from './components/Character';
import './App.css';
import styled from 'styled-components';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [charName, setCharName] = useState('')
  const [activeCharId, setActiveCharID] = useState(1);

  const openChar = id => {
    setActiveCharID(id)
  };

  const closeChar = () => {
    setActiveCharID(null)
  };

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(res => {
        setCharacters(res.data.results)
      })
      .catch(err => console.log(err))
  }, []);


  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters Dawg</h1>
      {/* Lets do some mapping to send down our character info */}
      <div className="flexWrapper">
        {
          characters.map(charObj => {
            return <Char
              charID={charObj.id} 
              charName={charObj.name}
              charImage={charObj.image}
              charWorld={charObj.origin.name}
            />
          })
        }
      </div>
      
    </div>
  );
}

export default App;
