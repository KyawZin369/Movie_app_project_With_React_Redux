import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import MovieBody from "./MovieBody";
import MovieFooter from "./MovieFooter";
import { api, api_key } from "../api/apiFetch";
import { useDispatch } from "react-redux";
import { fetchMovie } from "../redux/Action/Movies";

const Home = () => {

  const dispatch = useDispatch();

  const FetchApi = async () => {
    const res = await api.get(`movie/now_playing?api_key=${api_key}`)
    dispatch(fetchMovie(res.data.results))
  }

  useEffect(()=>{
    FetchApi()
  },[])


  return (
    <div>
        <HeroSection/>
        <MovieBody/>
        <MovieFooter/>
    </div>
  );
};

export default Home;
