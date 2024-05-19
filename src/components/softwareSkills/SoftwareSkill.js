import React, { useEffect, useState, useRef } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function SoftwareSkill() {
  const [parent] = useAutoAnimate();
  const [skills, setSkills] = useState(skillsSection.softwareSkills);
  const intervalRef = useRef();

  useEffect(() => {
    startAnimation();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setSkills((prevSkills) => {
        const [first, ...rest] = prevSkills;
        return [...rest, first];
      });
    }, 666); // Change the interval as needed
  };

  const stopAnimation = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div ref={parent} 
         onMouseEnter={stopAnimation} 
         onMouseLeave={startAnimation}>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skills.map((skill, i) => (
            <li key={i} className="software-skill-inline" name={skill.skillName}>
              <i className={skill.fontAwesomeClassname}></i>
              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
