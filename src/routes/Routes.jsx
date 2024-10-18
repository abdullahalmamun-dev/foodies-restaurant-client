import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import About_US from "../pages/about_us/About_US";
import Gallery from "../pages/gallery/Gallery";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import All_Foods from "../pages/All_Foods/All_Foods";
import Menu from "../pages/All_Foods/Menu";
import BookNow from "../pages/booknow/OrderNow";

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
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/AllFoods",
          element: <All_Foods></All_Foods>,
        },
        {
          path: "/AllFoods/:id",
          element: <Menu></Menu>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path: "/ordernow/:id",
          element: <BookNow></BookNow>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    },
  ]);

export default router;