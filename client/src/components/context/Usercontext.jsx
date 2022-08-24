import React from "react";
import { useState } from "react";
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [message, setMessage] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [product_title, setProducts] = useState([]);
  const [userId, setUserId] = useState();
  const [username, setUsername] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  return (
    <UserContext.Provider
      value={{
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
        username,
        setUsername,
        quantity,
        setQuantity,
        price,
        setPrice,
      }}
    >
      {children}
    </UserContext.Provider>
    // comment
  );
};
export { UserContext, UserProvider };
