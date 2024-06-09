import React from "react";
import { Button } from "flowbite-react";

const HeroCard = ({ movies }) => {
  return (
    <div className="relative h-[35rem] w-full flex items-center justify-start">
    <img
      src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
      alt={movies.title}
      className="w-full h-full object-cover absolute inset-0 z-0"
    />
   <div className="absolute inset-0 bg-gradient-to-r from-slate-800 z-10"></div>
    <div className="relative z-20 p-8 max-w-2xl text-white">
      <h2 className="text-5xl font-bold">{movies.title}</h2>
      <p className="mt-4 text-lg">{movies.overview}</p>
      <div className="flex space-x-4 mt-6">
        <Button href="#trailer" className="bg-gray-700 hover:bg-gray-800">Watch trailer</Button>
        <Button href="#watch" className="bg-yellow-500 hover:bg-yellow-600">Watch now</Button>
      </div>
    </div>
  </div>
  );
};

export default HeroCard;
