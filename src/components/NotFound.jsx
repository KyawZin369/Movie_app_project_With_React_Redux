import React from "react";
import { Button } from 'flowbite-react';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-700 dark:text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold dark:text-white text-gray-900 mb-4">404</h1>
        <p className="text-xl dark:text-gray-200 text-gray-700 mb-8">Page Not Found</p>
        <Link to="/">
          <Button color="blue" className="mx-2">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
