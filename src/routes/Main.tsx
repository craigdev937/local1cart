import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Footer } from "../components/Footer";
import { Shop } from "../pages/Shop";
import { Cart } from "../pages/Cart";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Shop />,
                errorElement: <NotFound />
            },
            {
                path: "/cart",
                element: <Cart />,
                errorElement: <NotFound />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
            <Footer />
        </React.Fragment>
    );
};



