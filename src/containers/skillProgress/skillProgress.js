import React, {useEffect} from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
// import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import frameImg from '../../assets/images/frame.png'
import { Fade } from "react-awesome-reveal";

export default function StackProgress() {
  useEffect(() => {
    const handleScroll = () => {
    const progressBars = document.querySelectorAll('.meter span');
    progressBars.forEach(bar => {
      const width = bar.getAttribute('data-progress');
      setTimeout(() => {
        bar.style.width = width;
      }, 100); // Delay to ensure transition is applied    
    });
    }
    

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);    
  }, []);
  if (techStack.viewSkillBars) {
    return (
      // <Fade bottom direction="up" duration={1000} distance="20px" triggerOnce>
      <Fade direction="up" duration={1000}>
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              console.log("width: " + progressStyle.width)
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span data-progress={progressStyle.width}></span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div> */}
        </div>
      </Fade>
    );
  }
  return null;
}
