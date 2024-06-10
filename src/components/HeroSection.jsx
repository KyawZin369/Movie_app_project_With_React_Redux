import React from "react";
import "./hero.css";
import { Carousel } from "flowbite-react";
import { useSelector } from "react-redux";
import HeroCard from "./HeroCard";

const HeroSection = () => {
  let moviesdata = useSelector((state) => state.movies.movies.slice(0, 4));

  return (
    <div>
      <div className="sm:h-[30rem] xl:h-[35rem] 2xl:h-[40rem]">
        <Carousel slideInterval={5000} className=" dark:bg-slate-800 bg-white">
          {moviesdata.length > 0
            ? moviesdata.map((movies) => (
                <HeroCard key={movies.id} movies={movies} />
              ))
            : undefined}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
