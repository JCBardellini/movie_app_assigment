import { useEffect, useState } from 'react'

import './App.css'
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'
import axios from 'axios'

function App() {
  // our api key we get from the website
  const apiKey = "12decbe0";

  // using a react hook that will help us manage our data that we get from our api
  const [movie, setMovie] = useState([])
  // console.log(movie);

  useEffect( () => {
    // this is where we are going to make an http request and fetch some movies
    const apiURL = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`
    // use the axios to fetch the api link 
    axios(apiURL).then( (response) => {
      console.log(response);
      // I console log the "response" to see where to call my data
      let movieData = response.data
      setMovie(movieData)
    })
  },[])


  return (
    <>
      <div className="app">
        <Form movie={movie}/>
        <MovieDisplay movie={movie} />
      </div>
    </>
  )
}

export default App
