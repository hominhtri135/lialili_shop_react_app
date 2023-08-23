import Container from "components/layout/Container";
import MainNavbar from "./MainNavbar";
import MobileNavbar from "./MobileNavbar";
import MyDropdown from "components/button/MyDropdown";
import { NavLink } from "react-router-dom";
import NavbarActions from "./NavbarActions";
import React from "react";
import { User2 } from "lucide-react";
import useAuth from "hooks/useAuth";

const Header = () => {
  const authModal = useAuth();
  const { isUserValid } = useAuth((state) => state);

  const onAuthen = (event) => {
    event.stopPropagation();
    authModal.onOpen("login");
  };

  return (
    <header className="border-b">
      <div className="w-full bg-[#222] p-2">
        <Container>
          <div className="relative px-2 sm:px-6 lg:px-8 h-auto min-h-8 block sm:flex sm:items-center justify-end">
            {/* <div className="text-xs text-[#b2b2b2] font-medium w-full h-8">
              <p className="ml-2 items-center">
                Free shipping for standard order over $100
              </p>
            </div> */}

            <div className="flex flex-wrap h-auto items-center justify-end gap-4">
              {isUserValid ? (
                <MyDropdown />
              ) : (
                <button
                  className="border-gray-400 border-2 rounded-full text-xs h-full text-gray-400 px-4 py-2 flex gap-2 items-center justify-center hover:bg-white hover:text-black hover:border-transparent"
                  onClick={onAuthen}
                >
                  <User2 size={16} />
                  <p className="font-semibold">Login</p>
                </button>
              )}
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
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
          <div className="absolute right-0 mr-4 sm:mr-6 lg:mr-8">
            <NavbarActions></NavbarActions>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
