import React from 'react'
import Movie from './Movie';

export const MoviesList = (props) => {
  const {movies = []} = props;
  return (
    <div className='movies'>
      {
        movies.length ? 
        movies.map(movie => <Movie key={movie.imdbID} {...movie} />) : 
        <h4>Not found</h4>
      }
    </div>
  )
}
