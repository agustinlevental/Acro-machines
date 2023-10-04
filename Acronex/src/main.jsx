import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';

import CardsContainer from './components/cardsContainer/CardsContainer.jsx';
import {loader as cardContainer} from './components/cardsContainer/CardsContainer.jsx';

import MachineDescription from './components/machineDescription/MachineDescription.jsx';

import ErrorPage from './components/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          {
            index: true,
            element: <CardsContainer/>,
          },
          {
            path: "/machines",
            element: <CardsContainer/>,
            loader: cardContainer,
          },
          {
            path: "machines/:id",
            element: <MachineDescription />,
          },
        ]
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
   
  </React.StrictMode>
);
