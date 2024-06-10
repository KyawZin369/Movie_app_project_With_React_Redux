import React from "react";
import { useSelector } from "react-redux";
import SearchData from "./SearchData";

const SearchDataBody = () => {
  const moviesdata = useSelector((state) => state.movies.searchmovies);
  console.log(moviesdata)


  return (
    <div>
      <div className="dark:bg-slate-600">
        <div className="md:container mx-10 md:mx-auto py-10">
          <div className="grid gap-4 grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {moviesdata.length > 0
              ? moviesdata.map((movies) => (
                  <SearchData key={movies.id} movies={movies} />
                ))
              : <p>No movies found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDataBody;
