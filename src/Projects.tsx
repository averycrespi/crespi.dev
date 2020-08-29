import {
  faDiceD20,
  faEgg,
  faGamepad,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Projects = () => (
  <Card>
    <Card.Header as="h4">
      <FontAwesomeIcon icon={faLeaf} />{" "}
      <a href="https://github.com/averycrespi/statice">Statice</a>
    </Card.Header>
    <Card.Body>
      <Card.Text>A friendly status page.</Card.Text>
      <Card.Text>Built with Python, Flask, and Bootstrap.</Card.Text>
    </Card.Body>

    <Card.Header as="h4">
      <FontAwesomeIcon icon={faGamepad} />{" "}
      <a href="https://github.com/averycrespi/thinktank">Thinktank</a>
      {" - "}
      <a href="https://thinktank.crespi.dev">demo</a>
    </Card.Header>
    <Card.Body>
      <Card.Text>A 2-player strategy game based on Conundrum.</Card.Text>
      <Card.Text>Built with TypeScript, React, and PaperCSS.</Card.Text>
    </Card.Body>

    <Card.Header as="h4">
      <FontAwesomeIcon icon={faDiceD20} />{" "}
      <a href="https://github.com/averycrespi/vtt-bridge">VTT Bridge</a>
    </Card.Header>
    <Card.Body>
      <Card.Text>A Dungeons & Dragons browser extension.</Card.Text>
      <Card.Text>Built with Vanilla JS.</Card.Text>
    </Card.Body>

    <Card.Header as="h4">
      <FontAwesomeIcon icon={faEgg} />{" "}
      <a href="https://github.com/averycrespi/yolk">Yolk</a>
      {" - "}
      <a href="https://yolk.crespi.dev">demo</a>
    </Card.Header>
    <Card.Body>
      <Card.Text>A domain-specific language for numerical computing.</Card.Text>
      <Card.Text>Built with Rust and WebAssembly.</Card.Text>
    </Card.Body>
  </Card>
);

export default Projects;
