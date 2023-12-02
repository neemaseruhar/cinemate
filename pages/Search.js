import React from 'react';
import {Card} from '../componenets/Card';
import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';

export const Search = ({apiPath}) => {
  
  const[searchParams] =useSearchParams();
  const queryTerm= searchParams.get('q')
  const {data: movies} = useFetch(apiPath, queryTerm)

 
  return (
    <section>
        
    {movies.map(movie =>(
      <Card key={movie.id} movie={movie} />
    ))}
  
</section>
  )
}
