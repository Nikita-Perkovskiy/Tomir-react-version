import { React, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Navbar expand="md">
        <Container className="mt-3">
          <Navbar.Brand href="#">
            <h1 className="header-nav__logo">
              <span>T</span>OM<span>I</span>R
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle
            style={{
              border: "none",
              backgroundColor: "transparent",
              boxShadow: "none",
              outline: "none",
            }}
            onClick={() => setShowNav(!showNav)}
          >
            <span>
              {showNav ? (
                <FontAwesomeIcon icon={faTimes} color="#000000" size="2x" />
              ) : (
                <FontAwesomeIcon icon={faBars} color="#000000" size="2x" />
              )}
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{
              border: "none",
              zIndex: "10000",
              backgroundColor: "#ffffff",
              boxShadow: "none",
              outline: "none",
            }}
          >
            <Nav className="ms-auto">
              <Nav.Link className="header-nav__menu-text" href="#">
                O firme
              </Nav.Link>
              <Nav.Link className="header-nav__menu-text" href="#">
                Szkolenie
              </Nav.Link>
              <Nav.Link className="header-nav__menu-text" href="#">
                Serwis
              </Nav.Link>
              <Nav.Link className="header-nav__menu-text" href="#">
                Wynajem
              </Nav.Link>
              <Nav.Link className="header-nav__menu-text" href="#">
                Kontakt
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
