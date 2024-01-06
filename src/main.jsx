import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Contact, Home, NotFound, Projects } from "./pages/index.js"
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path:"/projects",
        element: <Projects />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
    errorElement: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
