import React, { useEffect, useState } from "react";
import { Button, Spinner } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import { api, api_key } from "../api/apiFetch";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectMovie, selectMovie } from "../redux/Action/Movies";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const detailsFetch = async () => {
    try {
      const resDetails = await api.get(`/movie/${id}?api_key=${api_key}`);
      dispatch(selectMovie(resDetails.data));
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      detailsFetch();
    }

    return () => dispatch(removeSelectMovie({}));
  }, []);

  const selectMovieData = useSelector((state) => state.movies.movie);

  const date = selectMovieData ? new Date(selectMovieData.release_date) : null;
  const releaseYear = date ? date.getFullYear() : "";

  return (
    <div>
      <div className="p-4 bg-gray-100 dark:bg-slate-700 dark:text-white flex items-center justify-between shadow-md">
        {loading ? (
          <div className="flex justify-center items-center w-full">
            <Spinner color="info" size="xl" aria-label="Info spinner example" />
          </div>
        ) : (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectMovieData.poster_path}`}
              alt="Shoresy - Season 1"
              className="w-32 h-auto rounded-md"
            />
            <div className="flex flex-col ml-4 w-full">
              <h2 className="text-xl font-bold">
                {selectMovieData?.title || "Title not available"}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
                {selectMovieData?.overview || "Overview not available"}
              </p>
              <div className="flex flex-col md:flex-row md:items-center mt-4">
                <div className="mr-4">
                  <p>
                    <strong>Genre:</strong>{" "}
                    {selectMovieData?.genres?.length > 0
                      ? selectMovieData.genres.map((item, index) => (
                          <span key={index}>
                            {item.name}
                            {index < selectMovieData.genres.length - 1
                              ? " | "
                              : ""}
                          </span>
                        ))
                      : "No genres available"}
                  </p>
                  <p>
                    <strong>Country:</strong> Canada
                  </p>
                  <p>
                    <strong>Language:</strong>{" "}
                    {selectMovieData?.spoken_languages?.[0]?.name || "N/A"}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <p>
                    <strong>Duration:</strong>{" "}
                    {selectMovieData?.runtime || "N/A"} m
                  </p>
                  <p>
                    <strong>Release:</strong> {releaseYear}
                  </p>
                  <p>
                    <strong>IMDb:</strong>{" "}
                    {selectMovieData?.vote_average?.toFixed(1) || "N/A"}/10
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
              <div>
                <div className="mt-4 h-full w-full">
                  <video controls className="w-full">
                    <source src="path_to_your_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
