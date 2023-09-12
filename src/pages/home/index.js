import React from "react";
// import featuredImg from "../../assets/headerBg.png";
import imdb from "../../assets/Imdblogo.png";
import tomatoe from "../../assets/tomatoe.png";
import movieImg from "../../assets/cardImg.png";
import MovieCard from "./MovieCard";
import useMovies from "../../hooks/useMovies";
import { Link } from "react-router-dom";

export default function Home() {
  const { movies, isLoading: moviesLoading, error } = useMovies();
  if (moviesLoading) return "Loading...";

  const featuredImg =
    movies.length > 0 && movies[0].backdrop_path
      ? `https://image.tmdb.org/t/p/original/${movies[0].backdrop_path}`
      : "../../assets/headerBg.png";

  return (
    <div className="w-full">
      <main
        className="min-h-[600px] w-full px-[95px] relative"
        style={{
          backgroundImage: `url(${featuredImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="py-40 w-[404px] z-50 relative">
          <h1 className="text-5xl text-white font-bold font-DMsans mb-4">
            {movies[0].title}
          </h1>

          {/* <div className='flex items-center mb-4 gap-8'>
            <div className='flex items-center gap-2.5'>
              <img src={imdb} alt="IMDB-logo" className='h-4' />
              <p className='font-normal text-xs text-white'>860 / 100</p>
            </div>

            <div className='flex items-center gap-2.5'>
              <img src={tomatoe} alt='rotten-tomatoe' className='w-4 h-4'  />
              <p className='font-normal text-xs text-white'>97%</p>
            </div>
          </div> */}

          <p className="font-medium text-white text-sm mb-8">
            {movies[0].overview}
          </p>

          <Link to={`/movies/${movies[0].id}`}>
            <button className="text-white bg-red-600 py-2 px-4 rounded-[6px]">
              See Details
            </button>
          </Link>
        </div>
      </main>

      <section className="px-[95px] py-[70px]">
        <div className="w-full">
          <h1 className="text-black font-bold text-4xl mb-11">
            Featured Movies
          </h1>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-4 gap-x-20 gap-y-24">
              {movies.map((movieData) => (
                <div key={movieData?.id}>
                  <MovieCard movieData={movieData} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
