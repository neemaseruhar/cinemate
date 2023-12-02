import React from 'react';
import {Link,NavLink,useNavigate} from 'react-router-dom';


export const Header = () => {
  const navigate= useNavigate();

  const handleSubmit =(event) =>{
    event.preventDefault();
    const value= event.target.search.value
    event.target.reset();
    return navigate(`/search?q=${value}`)
    
  }
  return (
   <header>
    <h4>cinemate</h4>
    <ul>
        <li>
        <NavLink to="/"  end>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/movies/popular" >Popular</NavLink>
                </li>
                <li>
                  <NavLink to="/movies/top" >Top Rated</NavLink>
                </li>
                <li>
                  <NavLink to="/movies/upcoming">Upcoming</NavLink>
                </li>
                
            
    </ul>
    <form onSubmit={handleSubmit}>
    <input type='text' name='search' placeholder='search movies '/>
    </form>
   </header>
  )
}
