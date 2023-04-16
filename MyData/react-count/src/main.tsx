import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'


export const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
  },
  {
    path: "/xw",
    element: <div>xiewen</div>,
},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
