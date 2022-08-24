import axios from "axios";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { UserContext } from "../components/context/Usercontext";

export const Product = () => {
  const {
    message,
    setMessage,
    product_title,
    setProducts,
    userId,
    setUserId,
    quantity,
    setQuantity,
    price,
    setPrice,
  } = useContext(UserContext);
  console.log(userId);
  const addProduct = () => {
    axios
      .post("/product/add/" + userId, { product_title, quantity, price })
      .then((response) => {
        setMessage(response.data);
        setPrice(response.data.price);
        setQuantity(response.data.quantity);
      });
  };

  return (
    <Container>
      <Form className=" input-form border rounded-2">
        <h3 className=" text-center mt-4">Add Product</h3>
        <Form.Group className="mb-3 mx-4" controlId="formBasicEmail">
          <Form.Label>Product title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product"
            name="product_title"
            onChange={(e) => setProducts(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 mx-4" controlId="formBasicPassword">
          <Form.Label>Quaintity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Quantity"
            name="quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 mx-4" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <div className="d-grid  mb-3 mx-4">
          <Button
            className="my-4"
            variant="outline-light"
            type="button"
            onClick={addProduct}
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
  // <div>
  //   <button type="button" onClick={addProduct}>
  //     Add product
  //   </button>

  //   <div>
  //     {products && (
  //       <ul>
  //         {products.map((item) => {
  //           return <li>Title: {item.product_title}</li>;
  //         })}
  //       </ul>
  //     )}
  //   </div>
  // </div>
};
