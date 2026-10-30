import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    const movieArray = movies || [];
  return (
    <div className="px-6">
        <h1 className="text-2xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex">
          {movieArray.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
          </div>
      </div>
    </div>
  );
};

export default MovieList;
