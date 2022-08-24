import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="justify-content-center" bg="dark" variant="dark">
        <Nav>
          <Link className="mx-5" to="/user/create">
            Register
          </Link>
          <Link className="mx-5" to="/user/login">
            Login
          </Link>
          <Link className="mx-5" to="/product/add">
            Product
          </Link>
          <Link className="mx-5" to="/product/list">
            List
          </Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

// export const Navbar = () => {
//   const activeStyles = {
//     color: "white",
//   };

//   return (
//     <div className="flex py-4 justify-between items-center navbar">
//       <ul className="flex gap-2 ">
//         <li>
//           <NavLink
//             to={"/user/create"}
//             href="/user/create"
//             className="text-xs text-gray-400 hover:text-white"
//             style={({ isActive }) => (isActive ? activeStyles : undefined)}
//           >
//             Register
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to={"/user/login"}
//             href="/user/login"
//             className="text-xs text-gray-400 hover:text-white"
//             style={({ isActive }) => (isActive ? activeStyles : undefined)}
//           >
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to={"/product/add"}
//             href="/product/add"
//             className="text-xs text-gray-400 hover:text-white"
//             style={({ isActive }) => (isActive ? activeStyles : undefined)}
//           >
//             Add Product
//           </NavLink>
//         </li>
//       </ul>

//       <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2"></div>
//     </div>
//   );
// };
