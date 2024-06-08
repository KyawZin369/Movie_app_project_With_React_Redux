import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const MovieCard = () => {
  return (
    <div className="grid gap-4 grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      <Link to="/Movie/Details/10">
        <div className="max-w-xs mx-auto">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://filmfare.wwmindia.com/content/2023/apr/bloodydaddyshahidkapoor31681304057.jpg"
          >
            <h5 className="font-bold text-xs md:text-sm lg:text-xl tracking-tight text-gray-900 dark:text-white">
              Movie-Title-1
            </h5>
          </Card>
        </div>
      </Link>
      <Link to="/Movie/Details/11">
        <div className="max-w-xs mx-auto">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://filmfare.wwmindia.com/content/2023/apr/bloodydaddyshahidkapoor31681304057.jpg"
          >
            <h5 className="font-bold text-xs md:text-sm lg:text-xl tracking-tight text-gray-900 dark:text-white">
              Movie-Title-1
            </h5>
          </Card>
        </div>
      </Link>
      <Link to="/Movie/Details/12">
        <div className="max-w-xs mx-auto">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://filmfare.wwmindia.com/content/2023/apr/bloodydaddyshahidkapoor31681304057.jpg"
          >
            <h5 className="font-bold text-xs md:text-sm lg:text-xl tracking-tight text-gray-900 dark:text-white">
              Movie-Title-1
            </h5>
          </Card>
        </div>
      </Link>
      <Link to="/Movie/Details/13">
        <div className="max-w-xs mx-auto">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://filmfare.wwmindia.com/content/2023/apr/bloodydaddyshahidkapoor31681304057.jpg"
          >
            <h5 className="font-bold text-xs md:text-sm lg:text-xl tracking-tight text-gray-900 dark:text-white">
              Movie-Title-1
            </h5>
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
