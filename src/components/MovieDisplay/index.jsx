import React from 'react'

const MovieDisplay = ({movie}) => {
  // console.log(movie);
  const movieData = movie
  return (
    <>
    <h1>The MovieDisplay Component</h1>
    <h2>{movieData.Title}</h2>
    <h3>{movieData.Genre}</h3>
    <img src={movie.Poster} alt={movie.Title} />
    <h2>{movie.Year}</h2>
    </>
  )
}

export default MovieDisplay