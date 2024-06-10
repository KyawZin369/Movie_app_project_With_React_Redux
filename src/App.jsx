import React from "react";
import MovieNavbar from "./components/MovieNavbar";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import SearchDataBody from "./components/SearchDataBody";

const App = () => {
  return (
    <div>
      <MovieNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Movie/Details/:id" element={<Details/>}/>
        <Route path="/Search" element={<SearchDataBody/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};

export default App;
