import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MachineDescription from './components/machineDescription/MachineDescription.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/machines",
    element: <App />,
  },
  {
    path: "machines/:id",
    element: <MachineDescription />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
   
  </React.StrictMode>
);
