import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import About from './components/About'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App/>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books',
        element: <Books/>
      },
      {
        path: 'about',
        element: <About/>
      },
    ]
  },
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
