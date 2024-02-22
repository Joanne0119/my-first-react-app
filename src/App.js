import { useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg';

//903351d2

const API_URL = 'http://www.omdbapi.com?apikey=903351d2'

const App = () => {

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`) //to pull api
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Superman');
  },[])

  return (
    <h1>App</h1>
  );
}

export default App;