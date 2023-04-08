// import React from "react";
// import { ReactNavbar } from "overlay-navbar";
// import logo from "../../../images/logo.PNG";

// const options = {
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

// const Header = () => {
//   return <ReactNavbar {...options} />;
// };

// export default Header;

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from "react";

import logo from '../../../images/logo.PNG';
import { useHistory } from "react-router-dom";



function NavScrollExample() {

  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>

        <div style={{ "margin-right": "10%" }}>
          <a href="/">
            <img style={{ "max-width": "55%" }} src={logo} />
          </a>
        </div>
        <div style={{ "width": "40%" }}>
          <Form className="d-flex" onSubmit={searchSubmitHandler}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className="outline-success" style={{ "background-color": "#652D90", "border": "none" }} type="submit">
              Search
            </Button>

          </Form>
        </div>


        <div style={{ "margin-left": "15%" }}>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>

              <Nav.Link href="/products">Products</Nav.Link>
              {/* <a href="/login" class="btn btn-info btn-lg" style={{
                "background": "#652D90",
                "border": "#652D90"
              }}>
                <span class="glyphicon glyphicon-user">
                </span>
                Profile
              </a> */}
              <Button  href='/login' className="outline-success" style={{ "background-color": "#652D90", "border": "none" }} >
              Profile
            </Button>
            {/* <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          /> */}
            </Nav>

          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;