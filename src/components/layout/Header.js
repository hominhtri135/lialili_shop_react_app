import Container from "components/layout/Container";
import MainNavbar from "./MainNavbar";
import { NavLink } from "react-router-dom";
import NavbarActions from "./NavbarActions";
import React from "react";

const Header = () => {
  return (
    <header className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <NavLink to="/" className={`ml-4 flex lg:ml-0 gap-x-2`}>
            <p className="font-bold text-xl">STORE</p>
          </NavLink>
          <MainNavbar></MainNavbar>
          <NavbarActions></NavbarActions>
        </div>
      </Container>
    </header>
  );
};

export default Header;
