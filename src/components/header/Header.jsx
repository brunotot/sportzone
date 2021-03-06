import React, { useContext } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { resources } from "../../18n";
import { UserContext } from "../../contexts/UserContext";
import { logout } from "../../services/authService";
import "./Header.css";

export default function Header() {
  let history = useHistory();
  let { user, setUser } = useContext(UserContext);
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Sportzone</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavDropdown
              title={
                <span>
                  <span className={`flag flag-${selectedLanguage}`}></span>
                  &nbsp;{`${selectedLanguage.toUpperCase()}`}
                </span>
              }
              id="collapsible-nav-dropdown"
            >
              {Object.keys(resources).map((key) => (
                <NavDropdown.Item
                  onClick={() => i18n.changeLanguage(key)}
                  key={key}
                >
                  <span className={`flag flag-${key}`}></span>
                  &nbsp;{t(`label_language_${key}`)}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            {user ? (
              <Nav>
                <Nav.Link href="#">{user.username}</Nav.Link>
                <Nav.Link onClick={() => logout(setUser)}>
                  {t("label_button_logout")}
                </Nav.Link>
              </Nav>
            ) : (
              <Nav.Link onClick={() => history.push("/login")}>
                {t("label_button_login")}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
