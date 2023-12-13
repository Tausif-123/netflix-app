import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
  // console.log(movieId);
  // const [trailerId, setTrailerid] = useState(null);

  const trailerVideo = useSelector((state) => state.movies?.trailervideo);
  // console.log(trailerVideo);

  // Custom hooks from where we get trailer video...
  useMovieTrailer(movieId);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
