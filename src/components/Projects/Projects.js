import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Home2 from "../Home/Home2";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Мои недавние работы 
        </h1>
        <p style={{ color: "white" }}>
          Проекты над которыми я работала недавно
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="django"
              description="Проект написанный на фреймворке django "
              ghLink="https://github.com/Altynai200/django"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="8tapsyrma"
              description="Проект на React "
              ghLink="https://github.com/altynai2/8tapsyrma"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="9tapsyrma"
              description="Проект на React "
              ghLink="https://github.com/altynai2/9tapsyrma"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="10tapsyrma"
              description="Проект на React "
              ghLink="https://github.com/altynai2/10tapsyrma"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Task7"
              description="Проект на React "
              ghLink="https://github.com/altynai2/Task7"
            />
          </Col>

        </Row>
      </Container>
      
      <Home2 />
    </Container>
  );
}

export default Projects;
