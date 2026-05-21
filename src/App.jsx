import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Performance from "./components/Performance.jsx";
import Packages from "./components/Packages.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Blog from "./components/Blog.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import ManifestoDrawer from "./components/ManifestoDrawer.jsx";

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero/>
            <Performance/>
            <Packages/>
            <Testimonials/>
            <Blog/>
            <CTA/>
            <Footer/>
            <ManifestoDrawer />
        </main>
    );
};

export default App;