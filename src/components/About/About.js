import React, { useContext, createContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import resumeImage from "../../Assets/Resume.jpg"; 
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import Home2 from "../Home/Home2";

// Создаем контекст
const UserContext = createContext();

// Компонент Provider
const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Студент информационных технологий");

  // Пример асинхронной функции (могла бы быть вызовом API)
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await Promise.resolve("Студент IT");
      setUser(response);
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

// Ленивая загрузка компонента Github
const Github = React.lazy(() => import("./Github"));

function About() {
  return (
    <UserProvider>
      <Container fluid className="about-section">
        <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Профессиональные навыки
            </h1>
            <p className="home-about-body">
              <br />Программирование на языках:
              <i>
                <b className="purple"> C++, Python, SQL, PHP. </b>
              </i>
              <br />
              <br />
              Владение программным обеспечением для 3D-моделирования и анимации, такими как
              <i>
                <b className="purple"> Autodesk 3dsMax, Blender и After Effects </b>
              </i>
              <br />
              <br />
              Знание Microsoft Office <b className="purple">(Word, Excel, PowerPoint)</b>
              <br />
              <br />Знание основных принципов создания презентаций о использованием программных средств, таких как
              <i>
                <b className="purple"> PowerPoint, Keynote и Canva </b>
              </i>
              <br />
              <br />
              <i>
                <b className="purple"> Умение эффективно работать в команде и поддерживать хорошие отношения с коллегами </b>
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                <strong className="purple">О себе</strong>
              </h1>
              <h1 className="project-heading">
              Студент информационных технологий с пристрастием к изучению новых технологий и стремлением к развитию в сфере IT. Обладаю базовыми навыками программирования, администрирования сетей и разработки программного обеспечения. Готова к профессиональному росту и приобретению опыта работы в сфере информационных технологий.
                <UserDescription />
              </h1>
            </Col>
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Мое резюме:{" "}
            </h1>
            <img
              src={resumeImage}
              alt="Resume"
              style={{
                width: '60%',
                height: 'auto',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '50px',
                marginBottom: '20px'
              }}
            />
          </Row>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Github />
          </React.Suspense>
        </Container>
      <Home2 />
      </Container>
    </UserProvider>
  );
}

function UserDescription() {
  const userDescription = useContext(UserContext);
  return <div>{userDescription}</div>;
}

export default About;
