import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movieData, setMovieData] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then(data => setMovieData(data))
      .catch(error => console.error(error));
  }, []);
  // movie will pass all the info to card 
  const movieCards = movieData.map(movie =>{
    return <MovieCard key={movie.id} {...movie}/>
  });
  console.log(movieCards)
  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
      <h1>Home Page</h1>
      {movieCards}
      </main>
    </>
  );
};

export default Home;
