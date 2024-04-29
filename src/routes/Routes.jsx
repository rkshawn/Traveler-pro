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
        },
        {
            path: '/travelDetails/:id',
            element: <TravelDetails></TravelDetails>,
            loader: ({params})=>fetch(`https://assignment-10-server-woad-theta.vercel.app/traveldata/${params.id}`)
        },
       
      ]
    },
  ]);
