import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

//colocando em variáveis a chave e a apikey do .env
const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY


type Props = {

}

const Home = (props: Props) => {

  const [topMovies, setTopMovies] = useState<any[]>([])

  // fetch
  const getTopRatedMovies = async (url: RequestInfo | URL) =>{
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)


   }

  //useEffect que carrega só uma vez chama o fetch
  useEffect(() => {

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies(topRatedUrl)

  }, [])



  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
      {topMovies.length === 0 && <p>Carregando...</p>}
      {topMovies.length > 0 && topMovies.map((movie)=> <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  )
}

export default Home
