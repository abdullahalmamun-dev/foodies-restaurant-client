import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import About_US from "../pages/about_us/About_US";
import Gallery from "../pages/gallery/Gallery";
import Contact from "../pages/contact/Contact";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About_US></About_US>,
        },
        {
          path: "/gallery",
          element: <Gallery></Gallery>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        }
      ]
    },
  ]);

export default router;