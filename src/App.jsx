import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/HomePage.jsx';
import Work from './pages/WorkPage.jsx';

const App = () => {
  const router = new createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    { path: '/work/:workId', element: <Work /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
