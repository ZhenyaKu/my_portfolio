import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { IntroParticles } from "../intro-particles/intro-particles";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Front-End Developer"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <IntroParticles />
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/IMG_0762-removebg.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>I'm Evgeniya Kucherenko</h1>
                    <h3>
                        Trainee{" "}
                        <span className="ityped-cursor" ref={textRef}></span>
                    </h3>
                    <div>
                        <a
                            className="icon"
                            href="https://github.com/ZhenyaKu"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src="assets/github.svg" alt="" />
                        </a>
                        <a
                            className="icon"
                            href="https://www.linkedin.com/in/evgenia-kuzbit-556542174/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src="assets/linkedin.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
