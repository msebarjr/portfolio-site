import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";

import "./styles/globals.css";
import "./App.css";
import Tech from "./components/Tech";
import Projects from "./components/Projects";

const quotes = [
    {
        text: "To me, style is like your fingerprint. Nobody else has it.",
        author: "Gregory Heisler",
    },
    {
        text: "I've come to believe that each of us has a personal calling that's as unique as a fingerprint - and that the best way to succeed is to discover what you love and then find a way to offer it to others in the form of service and working hard.",
        author: "Oprah Winfrey",
    },
];

const App = () => {
    return (
        <div className="main_container">
            <Navbar />
            <Hero />
            <Quote cname="about__quote" quote={quotes[0]} />
            <About quote={quotes[0]} />
            <Tech />
            <Quote cname="project__quote" quote={quotes[1]} />
            <Projects />
        </div>
    );
};

export default App;
