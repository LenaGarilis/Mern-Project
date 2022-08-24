import React from "react";
import { useContext } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { UserContext } from "../components/context/Usercontext";

export const Register = () => {
  const {
    message,
    setMessage,
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
  } = useContext(UserContext);

  // handler to send data in server
  const sendToBackend = () => {
    console.log(username, email, password);
    const data = { username, email, password };
    axios
      .post("/user/create", data) // .post(URL, dataToSend)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data);
      });
  };
  return (
    <Container>
      <Form className="input-form border rounded-2 ">
        <h3 className=" text-center mt-4">Create Account </h3>
        <Form.Group className="mb-3 mx-4" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your user name"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 mx-4" controlId="formBasicPassword">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 mx-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="d-grid  mb-3 mx-4">
          <Button
            className="my-4"
            variant="outline-light"
            type="button"
            onClick={sendToBackend}
          >
            Submit
          </Button>
        </div>
      </Form>

      <h4 className="text-center" style={{ color: "white" }}>
        {message}
      </h4>
    </Container>
  );
};
