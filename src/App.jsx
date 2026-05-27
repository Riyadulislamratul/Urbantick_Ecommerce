import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './pages/HomePage';
import MainLayout from './components/MainLayout';



const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  },
]);
  return (
    <RouterProvider router={router} />
  )
}

export default App