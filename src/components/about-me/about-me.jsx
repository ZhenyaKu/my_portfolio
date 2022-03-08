import { Skill } from "../skill/skill";
import "./about-me.scss";

export default function AboutMe() {
    return (
        <div className="about-me" id="about-me">
            <h2 className="title">About Me</h2>
            <div className="about">
                <div className="foto">
                    <img src="assets/IMG_1344.jpg" alt="" />
                </div>
                <div className="bio">
                    <p>
                        I'm just beginning my career in IT. I am looking for opportunities &
                        new challenging goals. I like to improve myself and learn new technologies,
                        that’s why I spend my free time by reading articles, tutorials, guides,
                        and using new knowledge in my projects.
                    </p>
                    <a
                        href="https://docs.google.com/document/d/1sxQQ3pvbb64NK3MwUpUSbqYaNSCl5-LXmVRhGc5qZOA/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="btn">Resume</button>
                    </a>
                </div>
            </div>

            <div>
                <h2 className="title-skills">Skills</h2>
                <div className="skills-list">
                    <Skill title="JavaScript" percent={70} color="#845ef7" />
                    <Skill title="TypeScript" percent={40} color="#845ef7" />
                    <Skill title="React" percent={60} color="#845ef7" />
                    <Skill title="Redux" percent={60} color="#845ef7" />
                    <Skill title="HTML" percent={80} color="#845ef7" />
                    <Skill title="CSS/SCSS" percent={70} color="#845ef7" />
                </div>
            </div>
        </div>
    )
}