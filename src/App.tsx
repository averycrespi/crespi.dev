import AboutMe from "./AboutMe";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Projects from "./Projects";
import React from "react";
import Row from "react-bootstrap/Row";

const App = () => (
  <div className="m-3">
    <Container>
      <Row className="justify-content-center">
        <Col>
          <AboutMe />
        </Col>
        <Col>
          <Projects />
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;
