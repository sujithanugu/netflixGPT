import React from 'react'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt="Movie Card" src={"https://image.tmdb.org/t/p/w500"+posterPath}></img>
    </div>
  )
}

export default MovieCard