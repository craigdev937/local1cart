import React from "react";
import "./Navbar.css";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
    return (
        <React.Fragment>
            <nav>
                <h1>Navbar</h1>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};


