import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ProjectsPage from "./pages/ProjectsPage";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<App />} >
      <Route path='/' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/projects' element={<ProjectsPage />} />
    </Route>
  </>
))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
