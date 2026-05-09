import {useEffect, useRef} from "react";

const Hero = () => {
    const videoRef = useRef();
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
    }, [])
    return (
        <section id="hero">
            <div>
                <h1>Spark Digital & SEO</h1>
                <img src="/title.png" alt="Spark Title"/>
                <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline/>

                <button>Learn more</button>
                <p>We Design, Develop & Deliver</p>
            </div>
        </section>
    );
};

export default Hero;