import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, createBrowserRouter, RouterProvider } from "react-router-dom"
import { AboutPage } from "./Components/Pages/AboutPage"
import { HomePage } from "./Components/Pages/HomePage"
import { ContactPage } from "./Components/Pages/ContactPage"
import { Layout } from "./Components/Pages/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  )
}

export default App
