import React from "react";
import "./App.css";
import Rob from "@public/Rob.jpg";

export const App = () => {
    return (
        <React.Fragment>
            <img 
                src={Rob} alt="Rob Kazinsky" 
                height={"500px"} width={"auto"}
            />
        </React.Fragment>
    );
};


