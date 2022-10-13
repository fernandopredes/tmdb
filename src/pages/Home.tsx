import React from 'react'
import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY


type Props = {

}

const Home = (props: Props) => {

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url: RequestInfo | URL) =>{
    const res = await fetch(url)
    const data = await res.json()

    console.log(data)
  }

  useEffect(() => {

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies(topRatedUrl)

  }, [])



  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
