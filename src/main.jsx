import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import Magazine from './pages/Magazine.jsx'
import Hotel from './pages/Hotel.jsx'
import Advertising from './pages/Advertising.jsx'
import Personal from './pages/Personal.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Hotel />
      },
      {
        path: "magazine",
        element: <Magazine />
      },
      {
        path: "hotel",
        element: <Hotel />
      },
      {
        path: "advertising",
        element: <Advertising />
      },
      {
        path: "personal",
        element: <Personal />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
