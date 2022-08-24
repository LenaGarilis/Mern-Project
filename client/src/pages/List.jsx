import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../components/context/Usercontext";

export const List = () => {
  const [products, setProducts] = useState([]);
  const { userId } = useContext(UserContext);
  useEffect(() => {
    axios.get("http://localhost:5000/product/all/").then(
      (response) => {
        setProducts(response.data);
      },
      [products]
    );
  });
  return (
    <div>
      <div className="list">
        {products && (
          <ul>
            {products.map((item) => {
              return <li>Title: {item.product_title}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
