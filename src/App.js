import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./styles/globals.css";

const App = () => {
    return (
        <div className="main_container">
            <Navbar />
            <Hero />
        </div>
    );
};

export default App;
