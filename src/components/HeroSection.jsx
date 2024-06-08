import React from "react";
import "./hero.css";
import { Carousel, Button } from "flowbite-react";

const HeroSection = () => {
  return (
    <div>
      <div className="sm:h-[30rem] xl:h-[35rem] 2xl:h-[40rem]">
        <Carousel slideInterval={5000} className=" dark:bg-black bg-white" >
          <div className="relative h-full">
            <img
              src="https://vice-press.com/cdn/shop/files/the-worlds-end-variant-movie-poster-juan-ramos.jpg?v=1693305509&width=1024"
              alt="..."
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-28 text-white bg-black bg-opacity-50">
              <h2 className="text-4xl font-bold">Image Title 1</h2>
              <p className="mt-2 text-lg">This is a description for image 1.</p>
              <Button className="mt-4" href="#your-link">Learn More</Button>
            </div>
          </div>
          <div className="relative h-full">
            <img
              src="https://vice-press.com/cdn/shop/files/the-worlds-end-variant-movie-poster-juan-ramos.jpg?v=1693305509&width=1024"
              alt="..."
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-28 text-white bg-black bg-opacity-50">
              <h2 className="text-4xl font-bold">Image Title 2</h2>
              <p className="mt-2 text-lg">This is a description for image 2.</p>
              <Button className="mt-4" href="#your-link">Learn More</Button>
            </div>
          </div>
          <div className="relative h-full">
            <img
              src="https://vice-press.com/cdn/shop/files/the-worlds-end-variant-movie-poster-juan-ramos.jpg?v=1693305509&width=1024"
              alt="..."
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-28 text-white bg-black bg-opacity-50">
              <h2 className="text-4xl font-bold">Image Title 3</h2>
              <p className="mt-2 text-lg">This is a description for image 3.</p>
              <Button className="mt-4" href="#your-link">Learn More</Button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;