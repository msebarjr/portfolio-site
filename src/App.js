import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import "./styles/globals.css";
import "./App.css";

const quotes = [
    {
        text: "To me, style is like your fingerprint. Nobody else has it.",
        author: "Gregory Heisler",
    },
    {
        text: "I've come to believe that each of us has a personal calling that's as unique as a fingerprint - and that the best way to succeed is to discover what you love and then find a way to offer it to others in the form of service and working hard.",
        author: "Oprah Winfrey",
    },
    {
        text: "I am not in competition with anyone but myself. My goal is to improve myself continuously.",
        author: "Bill Gates",
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
            <Quote cname="testimonial__quote" quote={quotes[2]} />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default App;
