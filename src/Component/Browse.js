import React from "react";
import Header from "./Header";
import useAddNowPlayingMovies from "../customHooks/useAddNowPlayingMovies.js";
import PrimaryContainer from "./PrimaryContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";

const Browse = () => {
  useAddNowPlayingMovies();
  return (
    <div>
      <Header />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
