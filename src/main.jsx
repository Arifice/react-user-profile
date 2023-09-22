import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Userdetails from './Components/UserDetails/Userdetails.jsx';


  const router = createBrowserRouter([
    {
      path: '/',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
      element: <App></App>,
      children:[  
        {
            path:'/user/:userId',  
            // loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),     
            element: <Userdetails></Userdetails>,
            loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        }     
       
      ]
    }
    
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
