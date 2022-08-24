import React from "react";
import React, { useContext } from "react";
import { UserContext } from "../components/context/Usercontext";

export const List = () => {
  return (
    <div>
      <div>
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
