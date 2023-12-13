import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // fetch trailer videos and updating the redux store...
  const getMovieVideos = async () => {
    // fetching all the trailer videos from TMDB of the (id=movieId)...
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    // If some movies dont have trailer then play any clip other than trailer...
    const trailer = filterData.length ? filterData[0] : json.result[0];
    // console.log(trailer);
    // setTrailerid(trailer.key);

    // Trailer is saved into redux store and get it from here
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
