import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { List } from "./pages/List";

function App() {
  const [message, setMessage] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [products, setProducts] = useState([]); // initially products is empty array

  const [userId, setUserId] = useState(); //no user id by default

  // add product for this logged in user using faker data
  // const addProduct = () => {
  //   axios.get("/product/add/" + userId).then((response) => {
  //     setMessage(response.data);
  //   });
  // };

  return (
    <div className="layout">
      <Layout>
        <Routes>
          <Route path="/user/create" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/product/add" element={<Product />} />
          <Route path="/product/list" element={<List />} />
        </Routes>
      </Layout>
    </div>

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
  );
}

export default App;
