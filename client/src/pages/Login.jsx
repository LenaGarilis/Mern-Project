import React from "react";
import { useContext } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { UserContext } from "../components/context/Usercontext";

export const Login = () => {
  const {
    message,
    setMessage,
    email,
    setEmail,
    password,
    setPassword,
    product_title,
    setProducts,
    userId,
    setUserId,
  } = useContext(UserContext);

  const loginCheck = () => {
    axios.post("/user/login", { email, password }).then((response) => {
      console.log(response);
      setMessage(response.data.message);
      setProducts(response.data.products);
      setUserId(response.data.user._id);
    });
  };

  return (
    <Container>
      <Form className="input-form border rounded-2 ">
        <h3 className=" text-center mt-4">Sign-in Form</h3>

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
            onClick={loginCheck}
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
