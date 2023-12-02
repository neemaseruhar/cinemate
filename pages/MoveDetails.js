import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';


export const MoveDetails = () => {
  const params =useParams();
  const [movie,setMovie] = useState([]);

  useEffect(() =>{
    const moviefetch = async () =>{
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`);
      const value = await response.json();
      setMovie(value);

    }
    moviefetch()
  })
  return (
    <div>
      <div>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` } alt='movie image'></img>
    </div>
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Budget: {movie.budget}</p>
      <p>Runtime: {movie.runtime}</p>
      <p>Revenue: {movie.revenue}</p>
      <p>Release Date: {movie.release_date}</p>

    </div>
    <div>
      Genre: {movie.genres ? ( <p> {movie.genres.map(genre => (
            <span key={genre.key}>{genre.name} ,</span>
      ))}</p>) : null}
       
    </div>
    </div>

  )
}
