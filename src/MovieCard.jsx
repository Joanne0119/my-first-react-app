//create every compoment will using .jsx files

import React from "react";

//file's name and compoment's name will be the same
const MovieCard = ({ movie1 }) => {
  return (
    <div className='movie'>
      <div>
        <p>{movie1.Year}</p>
      </div>

      <div>
        <img  src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
        {/* if api have no img */}
      </div>

      <div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard;