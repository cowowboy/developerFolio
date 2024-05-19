import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { useTranslation } from "react-i18next";

import {
  greeting,
  workExperiences,
  skillsSection,
  // openSource,
  // blogSection,
  // talkSection,
  // achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };    
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  // const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  // const viewAchievement = achievementSection.display;
  // const viewBlog = blogSection.display;
  // const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;
  const greeting = t("greeting",{ returnObjects: true })
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting[0].username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{t("Skills")}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{t("Work Experiences")}</a>
            </li>
          )}
          {/* {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )} */}
          {/* {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )} */}
          {/* {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )} */}
          {viewResume && (
            <li>
              <a href="#resume">{t("Resume")}</a>
            </li>
          )}
          <li>
            <a href="#contact">{t("Contact Me")}</a>
          </li>
          <li>
            <a href="#" onClick={() => changeLanguage("tw")}>中文</a>
          </li>
          <li>
            <a href="#" onClick={() => changeLanguage("en")}>English</a>
          </li>          
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
