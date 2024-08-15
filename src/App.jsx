import React from "react";
import {Route, createBrowserRouter,createRoutesFromElements ,RouterProvider } from 'react-router-dom';
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";


const router = createBrowserRouter( 
  createRoutesFromElements(
  

    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
