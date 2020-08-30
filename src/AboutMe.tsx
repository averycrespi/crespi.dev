import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import React from "react";
import Row from "react-bootstrap/Row";
import averyPhoto from "./side_bw_500.jpg";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => (
  <Jumbotron>
    <Container className="text-center">
      <Row className="mb-3">
        <Col>
          <Image src={averyPhoto} roundedCircle fluid />
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <h1>Avery Crespi</h1>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <p>
            Computing Science student at <a href="https://www.sfu.ca/">SFU</a>.
          </p>
          <p>Passionate about programming, cybersecurity, and fitness.</p>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Button className="m-1" href="https://github.com/averycrespi">
            <FontAwesomeIcon icon={faGithub} />
            <span> GitHub</span>
          </Button>
          <Button
            className="m-1"
            href="https://www.linkedin.com/in/avery-crespi-baa23219a/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span> LinkedIn</span>
          </Button>
          <Button className="m-1" href="mailto:averycrespi@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            <span> Email</span>
          </Button>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default AboutMe;
