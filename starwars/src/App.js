import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CharacterContainer from './components/CharacterContainer';

const App = () => {
  const [data, setData] = useState({});
  const [url, setUrl] = useState('https://swapi.co/api/people/');

  useEffect(() => {
    axios
      .get(url)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    }, [url]);

  function next() {
    if (data.next) setUrl(data.next);
  }

  function previous() {
    if (data.previous) setUrl(data.previous);
  }

  return (
    <div className="App">
      <header>
        <button onClick={previous}>Previous</button>
        <h1>React Wars</h1>
        <button onClick={next}>Next</button>
      </header>
      <CharacterContainer data={data}/>
    </div>
  );
};

export default App;
