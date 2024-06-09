import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieBody = () => {
  let moviesdata = useSelector((state) => state.movies.movies);

  return (
    <div className="dark:bg-slate-600">
      <div className="md:container mx-10 md:mx-auto py-10">
        <div className="grid gap-4 grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {moviesdata.length > 0
            ? moviesdata.map((movies) => <MovieCard key={movies.id} movies={movies}/>)
            : undefined}
        </div>
      </div>
    </div>
  );
};

export default MovieBody;
