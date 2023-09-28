import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import DrawerAppBar from './components/drawer/DrawerAppBar.jsx';
import CardsContainer from './components/CardsContainer/CardsContainer.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <DrawerAppBar /> },
      { path: '/machines', element: <CardsContainer /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
   
  </React.StrictMode>
);
