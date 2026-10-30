import { useDispatch } from "react-redux";
import { MOVIE_LIST_API } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      MOVIE_LIST_API,
    );
    const json = await data.json();
    //console.log(json);
    const filterData = json.results.filter(
      (video) => video.name === "Official Trailer",
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    //console.log(trailer);
    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, [movieId]);
};

export default useMovieTrailer;