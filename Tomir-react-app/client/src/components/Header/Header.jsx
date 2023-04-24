import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import LinkElement from "../LayoutElements/LinkElement/LinkElement";
import { Link } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header>
        <Navbar expand="md">
          <Container className="mt-4 mb-4">
            <Navbar.Brand>
              <Link className="header__custom-link" to={"/"}>
                <h1 className="header-nav__logo">
                  <span>T</span>OM<span>I</span>R
                </h1>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
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
                <Nav className="header-nav__menu-text p-2">
                  <LinkElement
                    LinkColor={"blackLinkColor"}
                    LinkPath={"/"}
                    LinkText={"O firme"}
                  />
                </Nav>
                <Nav className="header-nav__menu-text p-2">
                  <LinkElement
                    LinkColor={"blackLinkColor"}
                    LinkPath={"/services"}
                    LinkText={"Uslugi"}
                  />
                </Nav>
                <Nav className="header-nav__menu-text p-2">
                  <LinkElement
                    LinkColor={"blackLinkColor"}
                    LinkPath={"/katalog"}
                    LinkText={"Katalog"}
                  />
                </Nav>
                <Nav className="header-nav__menu-text p-2">
                  <LinkElement
                    LinkColor={"blackLinkColor"}
                    LinkPath={"/contact"}
                    LinkText={"Kontakt"}
                  />
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
