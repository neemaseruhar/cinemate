
import {Card} from '../componenets/Card';
import { useFetch } from '../hooks/useFetch';

export const MovieList = ({apiPath}) => {
  
 const {data :movies} = useFetch(apiPath)
  return (
    <main>
      <section>
      { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) } 
          
      </section>
    </main>
  )
}
