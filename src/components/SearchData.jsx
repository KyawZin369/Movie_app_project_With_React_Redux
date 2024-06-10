import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const SearchData = ({ movies }) => {


    const date = new Date(movies.release_date)
    const releaseYear = date.getFullYear()
    
  return (
    <div>
      <div>
        <Link to={`/Movie/Details/${movies.id}`}>
          <div className="max-w-xs mx-auto">
            <Card
              imgAlt={movies.original_title}
              imgSrc={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            >
              <h5 className="font-bold text-sm md:text-sm lg:text-xl tracking-tight text-gray-900 dark:text-white">
                {movies.title.slice(0, 22)}
                {movies.title.length > 25 ? "..." : ""}
              </h5>
              <div className="dark:text-gray-300 text-gray-900 flex justify-between">
                <span className=" dark:text-gray-300 text-gray-900 text-xs">
                  {releaseYear}
                </span>
                <div className=" flex dark:text-gray-300 text-gray-900 text-sm ms-10">
                  <FaStar className=" size-4 me-1 pt-1 text-yellow-300" />
                  <span className="ms-1">{movies.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </Card>
          </div>
        </Link>
      </div>
    </div>
  )
};

export default SearchData;
