// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from "react-bootstrap/Badge";




const myProjects = [
  // {
  //   // image: "/images/img1.jpg",
  //   title: "Proxy Server",
  //   description:
  //     "A simple proxy-server for adding CORS on your GET requests and all the requests are cached using Redis. So, when you make a request to an endpoint and if you make the second request to the same endpoint it will save your time and network request by giving you the results from the cached store instead of the server.",
  //   source: "https://github.com/tejpalTomerR/proxy-server",
  //   // demoLink: "https://whatsapp-clone-53d8c.web.app/rooms/QIPEvsdzwLBr8AcT1WVD",
  //   badge: "NodeJs",
  //   // liveweb: "https://www.youtube.com/watch?v=4DTHrXOLHnQ&t=52s",
  // },
  // {
  //   // image: "/images/fbclone.jpg",
  //   title: "Readme Generator",
  //   description:
  //     "A simple tool to generate beautiful Readme files. This tool is also published on npm as well.",
  //   source: "https://github.com/tejpalTomerR/readme-generator",
  //   demoLink: "https://www.npmjs.com/package/@tejpalTomerR/generate-readme",
  //   badge: "NodeJs",
  //   // liveweb: "https://www.npmjs.com/package/@tejpalTomerR/generate-readme",
  // },
  // {
  //   // image: "/images/linkedclone.jpg",
  //   title: "Linkedin Clone",
  //   description:
  //     "This page is designed using HTML, CSS and Reactjs , redux , reduxthunk , json mocker User can upload post Like and comment on other post also.",
  //   source: "https://github.com/amananku26/Linkedin-Clone",
  //   demoLink: "https://linkedin-clone-a7ba5.web.app/",
  //   badge: "ReactJS",
  //   liveweb: "https://www.youtube.com/watch?v=CA1xCJvSCw8&t=32s",
  // },
  // {
  //   // image: "/images/invoice.png",
  //   title: "Covid19 Tracker",
  //   description:
  //     "By using an Open API showing Covid19 patients for all over the world.",
  //   source: "https://github.com/tejpalTomerR/covid19-tracker",
  //   badge: "ReactJS",
  //   // demoLink: "https://headphoonestore.netlify.app/",
  // },
  {
    // image: "/images/Screenshot 2020-10-14 115302.jpg",
    title: "Realtime Chat",
    description:
      "By using Socket.IO and Nodejs, I build a realtime chat engine which is also connected to MongoDB via Mlab so each message is stored in the database.",
    source: "https://github.com/tejpalTomerR/socket-chat",
    demoLink: "https://local-chat-demo.herokuapp.com/",
    badge: "NodeJs",
    // liveweb: "https://local-chat-demo.herokuapp.com/",
  },
];

const Projects = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects" id="projects">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Pro</span>jects
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project) => {
              return (
                <Col md={4} className="mb-5">
                  <Badge className="lmckdncd" pill variant="warning">
                    {project.badge}
                  </Badge>
                  {project.liveweb && (
                    <Badge className="jdnkcjd" pill variant="danger">
                      <a
                        href={project.liveweb}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Youtube
                      </a>
                    </Badge>
                  )}
                  <div className="project-card">
                    {/* <div className="img-section">
                      <img src={project.image} alt="" />
                      <div className="imageCardEffect"></div>
                    </div> */}
                    <div className="project-info">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.description}</p>
                      <div className="d-flex justify-content-between mr-4">
                        <a
                          href={project.source}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                        <a
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
