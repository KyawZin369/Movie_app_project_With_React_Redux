import React from 'react'
import MovieCard from './MovieCard'

const MovieBody = () => {
  return (
    <div className='dark:bg-slate-600'>
      <div className='md:container mx-10 md:mx-auto py-10'>
      <MovieCard/>
    </div>
    </div>
  )
}

export default MovieBody