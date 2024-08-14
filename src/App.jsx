import React from "react";
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomeCards from "./components/Homecards";
import JobListings from "./components/jobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
