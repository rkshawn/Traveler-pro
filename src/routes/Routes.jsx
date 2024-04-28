import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AllTouristSpot from "../pages/AllTouristSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allTourists',
            element: <AllTouristSpot></AllTouristSpot>,
            loader: ()=>fetch('http://localhost:5000/traveldata')
        },
        {
            path: '/addTourists',
            element: <AddTouristsSpot></AddTouristsSpot>
        },
        {
            path: '/mylist',
            element:<MyList></MyList>
        },
        {
            path: '/login',
            element: <LogIn></LogIn>
        },
        {
            path: 'register',
            element: <Register></Register>
        }
      ]
    },
  ]);
