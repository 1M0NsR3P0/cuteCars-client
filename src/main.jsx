import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Navbar from './Components/Shared/Navbar.jsx';
import Blogs from './Components/Pages/Blogs.jsx';
import Home from './Components/Pages/Home/Home/Home.jsx';
import Error from './Components/Error.jsx';
import AuthContext from './Components/Layouts/AuthProviders/AuthContext.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import Main from './Components/Pages/Body/Main.jsx';
import Register from './Components/Pages/Register/Register.jsx';
import ShowAllPage from './Components/Pages/Home/ShowAllPage.jsx';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoute.jsx';
import Details from './Components/PrivateRoutes/Details';
import AllToys from './Components/PrivateRoutes/AllToys';
import AddToy from './Components/PrivateRoutes/AddToy';
import MyToys from './Components/PrivateRoutes/MyToys';
import Cart from './Components/Routes/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blog',
        element:<Blogs></Blogs>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/reg',
        element:<Register></Register>
      },
      {
        path:'/alltoys',
        element:<PrivateRoute><ShowAllPage></ShowAllPage></PrivateRoute>
      },
      {
        path:'/allusertoys',
        element:<PrivateRoute><AllToys></AllToys></PrivateRoute>
      },
      {
        path:'/details',
        element:<PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path:'/addtoy',
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path:'/mytoys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      }
    ]
  },
  {
    path:'/*',
    element:<Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
    <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>
);


