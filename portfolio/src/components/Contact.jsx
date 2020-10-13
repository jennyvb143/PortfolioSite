import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Figure from "react-bootstrap/Figure";
import FigureCaption from "react-bootstrap/FigureCaption";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faMedium,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const ContactForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);

  const handleReset = () => {
    formRef.current.reset();
    setValidated(false);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      const template_params = {
        userName: userName,
        userEmail: userEmail,
        userMessage: userMessage,
      };

      const service_id = "service_e6tghx7";
      const template_id = "template_wz47upq";
      const user_id = "user_qt80smzxaCXndC3ADDaqn";

      emailjs.send(service_id, template_id, template_params, user_id).then(
        (result) => {
          Swal.fire({
            title: "Success!",
            text:
              "Your message has been sent directly to my email. I will respond as soon as humanly possible!",
            icon: "success",
            confirmButtonText: "Sweet!",
            confirmButtonColor: "#343a40",
          });
          handleReset();
          //console.log(result.text)
        },
        (error) => {
          Swal.fire({
            title: "Oops!",
            icon: "error",
            text:
              "Something went wrong. Please try sending your message again.",
            confirmButtonText: "Bah!",
            confirmButtonColor: "#343a40",
          });
          //console.log(error.text)
        }
      );
    }
    setValidated(true);
  };

  return (
    <Form
      noValidate
      ref={formRef}
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your name"
            onChange={(event) => setUserName(event.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your name.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter your email address"
            onChange={(event) => setUserEmail(event.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Text className="text-muted">
            I'll never share your email address with anyone else.
          </Form.Text>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows="3"
            placeholder="Enter your message"
            onChange={(event) => setUserMessage(event.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your message.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit" variant="dark">
        Submit
      </Button>
    </Form>
  );
};

const Contact = () => {
  return (
    <>
      <h1>Contact me</h1>
      <ContactForm />
      <div className="spacer-large" />
      <h1>Connect with me on social media</h1>
      <Col>
        <Row>
          <Figure className="d-inline-flex text-center pr-1">
            <a
              href="www.linkedin.com/in/jvbaxter"
              className="faIcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={faLinkedin} />
              <FigureCaption>LinkedIn</FigureCaption>
            </a>
          </Figure>
          <Figure className="d-inline-flex text-center pr-1">
            <a
              href="https://github.com/jennyvb143"
              className="faIcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={faGithubSquare} />
              <FigureCaption>GitHub</FigureCaption>
            </a>
          </Figure>
          <Figure className="d-inline-flex text-center pr-1">
            <a
              href="https://medium.com/@jenniferverobaxter"
              className="faIcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={faMedium} />
              <FigureCaption>Medium</FigureCaption>
            </a>
          </Figure>
          <Figure className="d-inline-flex text-center pr-1">
            <a
              href="https://twitter.com/jennyvb143"
              className="faIcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={faTwitterSquare} />
              <FigureCaption>Twitter</FigureCaption>
            </a>
          </Figure>
        </Row>
      </Col>
      <div className="spacer-medium" />
    </>
  );
};

export default Contact;
