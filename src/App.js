import { useEffect, useState } from 'react';

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard'

//903351d2

const API_URL = 'http://www.omdbapi.com?apikey=903351d2'

// const movie1 = {
//   "Title": "Batman v Superman: Dawn of Justice",
//   "Year": "2016",
//   "imdbID": "tt2975590",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// }

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`) //to pull api
    const data = await response.json();

    console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Batman');
  },[])

  return (
    <div className = "app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder='Search for movies'
          value="Superman" 
          onChangee={() => {}}
        />
        <img
          src={SearchIcon}
          alt='Search Icon'
          onClick={() => {}}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie = {movie} />
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;