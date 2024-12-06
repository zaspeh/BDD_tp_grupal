import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import { NoSqlForm } from "./Components/Pages/NoSqlForm";
import { SqlForm } from "./Components/Pages/SqlForm";
import { ShowDbs } from "./Components/Pages/ShowDbs";
import { Layout } from "./Components/Pages/Layout";
import { SqlEditForm } from "./Components/Pages/SqlEditForm";
import { NoSqlEditForm } from "./Components/Pages/NoSqlEditForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "sqlForm",
        element: <SqlForm />,
      },
      {
        path: "noSqlForm",
        element: <NoSqlForm />,
      },
      {
        path: "showDb",
        element: <ShowDbs />,
      },
      {
        path: "editSqlForm",
        element: <SqlEditForm />,
      },
      {
        path: "editNoSqlForm",
        element: <NoSqlEditForm />,
      }
    ],
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
