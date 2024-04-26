import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import TravelProvider from './Provider/TravelProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <TravelProvider>
      <RouterProvider router={router} ></RouterProvider>
   </TravelProvider>
  </React.StrictMode>,
)
