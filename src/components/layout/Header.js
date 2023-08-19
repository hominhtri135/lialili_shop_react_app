import Container from "components/layout/Container";
import MainNavbar from "./MainNavbar";
import MobileNavbar from "./MobileNavbar";
import { NavLink } from "react-router-dom";
import NavbarActions from "./NavbarActions";
import React from "react";

const Header = () => {
  return (
    <header className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <MobileNavbar></MobileNavbar>
          <div className="hidden lg:block absolute left-0 ml-4">
            <MainNavbar></MainNavbar>
          </div>
          <NavLink
            to="/"
            className={`absolute left-0 right-0 mx-auto w-[100px]`}
          >
            <p className="font-bold text-2xl text-center">LIALILI</p>
          </NavLink>
          <NavbarActions></NavbarActions>
        </div>
      </Container>
    </header>
  );
};

export default Header;
