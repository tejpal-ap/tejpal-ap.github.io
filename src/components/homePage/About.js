import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import WorkIcon from "@material-ui/icons/Work";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SkillSvg from "../../images/about-shape.svg";

import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

const About = () => {
  const [tab, setTab] = useState("experience");
  const [element, controls] = useScroll();

  return (
    <motion.div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={SkillSvg} alt="" />

      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container"
      >
        <Row className="">
          <Col className="p-0 text-center" md={5}>
            <img
              className="about-img"
              src="https://avatars.githubusercontent.com/u/101542038?s=400&u=ce0db955ee4c8f4728e1f6e48136b2deed5abb12&v=4"
              // src="https://avatars.githubusercontent.com/u/25584421?v=4"

              alt="profile_pic"
            />
          </Col>
          <Col className="" md={7}>
            <div className="about-info">
              <h1 className="pb-4">
                <span className="chonburi-font green-text ">Abo</span>ut Me
              </h1>
              <p className="details">
                Software Developer at Codeyug Web Services Private Limited. I have
                experience in the frontend development. Interested
                in devising a better problem‑solving method for challenging
                tasks, and learning new technologies and tools if the need
                arises.
              </p>
              <div className="d-flex align-items-center resume-section ">
                <h6>Resume :</h6>
                {/* <a
                  href="https://tejpalTomerR.github.io/Resume/Resume.pdf"
                  target="_blank"
                > */}
                  View
                {/* </a> */}
              </div>
              <div className="mt-5">
                <Row className="tabs mb-2">
                  <Col
                    className={`
                      ${
                        tab === "experience"
                          ? "active-tab custom-mr-3"
                          : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("experience")}
                  >
                    <WorkIcon />
                    <h5>Experiences</h5>
                  </Col>
                  {/* <Col
                    className={`
                      ${
                        tab === "education"
                          ? "active-tab custom-ml-3"
                          : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("education")}
                  >
                    <LocalLibraryIcon />
                    <h5>Educations</h5>
                  </Col> */}
                </Row>
                <div className="about-sub-data">
                  {tab === "experience" ? (
                    <div className="work-experiences">
                      <h5>Codeyug Web Services Pvt. Ltd.</h5>
                      <ul>
                        <li>
                          Working As a Frontend Developer (Tech - ReactJS,Redux)
                        </li>
                      </ul>
                    </div>
                  ) : null}
                  {tab === "education" ? (
                    <div className="education">
                      <div>
                        <h5>B.tech</h5>
                        <ul>
                          <li className="text-justify">
                            Graduated in Computer Science & engineering from
                            Bengal College of Engineering and Technology in
                            2019.
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </motion.div>
  );
};

export default About;
