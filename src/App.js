import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';

function App() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchCharacters = async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await res.json();
    //setTotalPages();
    console.log(data);
    setTotalPages(data.info.pages);
    setCharacters([...characters, ...data.results]);
    console.log("CHARACTER ARRAY v");
    console.log(characters);
  };

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="App">
      <header>
        <h1>Rick And Morty</h1>
        <h2>Database</h2>
        <p>Wubba Lubba Dub Dub!</p>
      </header>
      <Cards setCharacters={setCharacters} characters={characters} totalPages={totalPages} />
    </div>
  );
};

export default App;
