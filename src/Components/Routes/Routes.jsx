import React from 'react';
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Hello world!</div>,
        },
    ]);




    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>

    );
};

export default Routes;