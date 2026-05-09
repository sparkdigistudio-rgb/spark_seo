import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Performance from "./components/Performance.jsx";
import Packages from "./components/Packages.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Blog from "./components/Blog.jsx";

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero/>
            <Performance/>
            <Packages/>
            <Testimonials/>
            <Blog/>
        </main>
    );
};

export default App;