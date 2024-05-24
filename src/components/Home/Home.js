import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Home2 from "./Home2";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Привет!{" "}
              </h1>

              <h1 className="heading-name">
                Я
                <strong className="main-name"> Алтынай ❤️</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
              <h1 className="heading-name">
              Студентка информационных технологий с пристрастием к изучению новых технологий и стремлением к развитию в сфере IT. 
              </h1>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
