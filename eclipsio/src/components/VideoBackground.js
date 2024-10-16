import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieID,bool}) => {
  const trailerMovie = useSelector(store => store.movie.trailerMovie);

  useMovieById(movieID);
  return (
    <div className='w-[vw] overflow-hidden'>
      <iframe
        className={`${bool ? "w-[100%]" : "w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
        title="Eclipsio video player"
        frameBorder="0"
        allowFullScreen>
      </iframe>
    </div>

  )
}

export default VideoBackground