import React from "react";
import Header from "./Header";
import useAddNowPlayingMovies from "../customHooks/useAddNowPlayingMovies.js";
import PrimaryContainer from "./PrimaryContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import useAddPopularMovies from "../customHooks/useAddPopularMovies.js";
import useTopRatedMovies from "../customHooks/useTopRatedMovies.js";

const Browse = () => {
  useAddNowPlayingMovies();
  useAddPopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
