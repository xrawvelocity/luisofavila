import React from "react";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import { Navigation } from "./components/Navigation";

const App = () => {
    return (
        <main id="top" className="landing">
            <Navigation />
            <Home />
            <Work />
            <About />
            <Contact />
        </main>
    );
};

export default App;
