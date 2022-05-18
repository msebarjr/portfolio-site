import { useState } from "react";

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import "./styles/globals.css";
import "./App.css";


const App = () => {
    const [openCaseStudy, setOpenCaseStudy] = useState(false);
    const [showSocialIcons, setShowSocialIcons] = useState(true);

    const handleOpenCaseStudy = () => {
        setOpenCaseStudy(true);
        setShowSocialIcons(false);
    };

    const handleCloseCaseStudy = () => {
        setOpenCaseStudy(false);
        setShowSocialIcons(true);
    };

    return (
        <div className="main_container">
            <Navbar />
            <Hero showSocialIcons={showSocialIcons} />
            <About />
            <Tech showSocialIcons={showSocialIcons} />
            <Projects
                caseStudy={openCaseStudy}
                handleCaseStudy={handleOpenCaseStudy}
                handleCloseCaseStudy={handleCloseCaseStudy}
            />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default App;
