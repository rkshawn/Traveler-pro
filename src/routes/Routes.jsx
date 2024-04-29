import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AllTouristSpot from "../pages/AllTouristSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import TravelDetails from "../pages/TravelDetails";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allTourists',
            element: <AllTouristSpot></AllTouristSpot>,
            loader: ()=>fetch('https://assignment-10-server-woad-theta.vercel.app/traveldata')
        },
        {
            path: '/addTourists',
            element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
        },
        {
            path: '/mylist',
            element:<PrivateRoute><MyList></MyList></PrivateRoute>
        },
        {
            path: '/login',
            element: <LogIn></LogIn>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: '/travelDetails/:id',
            element: <PrivateRoute><TravelDetails></TravelDetails></PrivateRoute>,
            loader: ({params})=>fetch(`https://assignment-10-server-woad-theta.vercel.app/traveldata/${params.id}`)
        },
       
      ]
    },
  ]);
