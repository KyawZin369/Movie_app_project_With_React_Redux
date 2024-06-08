import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div>
        <div className="p-4 bg-gray-100 dark:bg-slate-700 dark:text-white flex items-center justify-between shadow-md">
          <img
            src="https://via.placeholder.com/150"
            alt="Shoresy - Season 1"
            className="w-32 h-auto rounded-md"
          />
          <div className="flex flex-col ml-4 w-full">
            <h2 className="text-xl font-bold">Shoresy - Season 1</h2>
            <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
              Foul-mouthed, chirp-serving, mother-loving, fan favourite
              character, Shoresy, joins the Sudbury Bulldogs of the Northern
              Ontario Senior Hockey Organization (The NOSHO) on a quest to never
              lose again.
            </p>
            <div className="flex flex-col md:flex-row md:items-center mt-4">
              <div className="mr-4">
                <p>
                  <strong>Genre:</strong> Comedy, Sport
                </p>
                <p>
                  <strong>Actor:</strong> Jared Keeso, Tasya Teles, Keilani
                  Elizabeth Rose
                </p>
                <p>
                  <strong>Director:</strong> Jared Keeso
                </p>
                <p>
                  <strong>Country:</strong> Canada
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <p>
                  <strong>Episode:</strong>{" "}
                  <span className="bg-green-500 text-white px-2 py-1 rounded">
                    2
                  </span>
                </p>
                <p>
                  <strong>Duration:</strong> 0m
                </p>
                <p>
                  <strong>Release:</strong> 2022
                </p>
                <p>
                  <strong>IMDb:</strong> 8.2/10
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col md:flex-row md:items-center">
              <Button className="mr-2 mb-2 md:mb-0 dark:bg-blue-700 bg-slate-400 border-blue-700 dark:text-white text-blue-600 dark:hover:bg-gray-100 dark:hover:text-blue-700 hover:bg-blue-700 hover:text-white">
                Download in HD
              </Button>
              <Button className="mr-2 mt-2 md:mt-0 dark:bg-blue-700 bg-slate-400 border-blue-700 dark:text-white text-blue-600 dark:hover:bg-gray-100 dark:hover:text-blue-700 hover:bg-blue-700 hover:text-white">
                Trailer
              </Button>
              <Link to="/">
                <Button className="mt-2 md:mt-0 dark:bg-blue-700 bg-slate-400 border-blue-700 dark:text-white text-blue-600 dark:hover:bg-gray-100 dark:hover:text-blue-700 hover:bg-blue-700 hover:text-white">
                    Back
                </Button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Details;
