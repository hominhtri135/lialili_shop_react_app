import { Facebook, Instagram, User2 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { API } from "apiConfig/apiConfig";
import Container from "components/layout/Container";
import MainNavbar from "./MainNavbar";
import MobileNavbar from "./MobileNavbar";
import NavbarActions from "./NavbarActions";
import React from "react";

const Header = () => {
  return (
    <header className="border-b">
      <div class="w-full bg-[#222] p-2">
        <Container>
          <div className="relative px-4 sm:px-6 lg:px-8 h-auto min-h-8 block sm:flex sm:items-center justify-end">
            {/* <div className="text-xs text-[#b2b2b2] font-medium w-full h-8">
              <p className="ml-2 items-center">
                Free shipping for standard order over $100
              </p>
            </div> */}

            <div className="flex flex-wrap h-auto items-center justify-end gap-4">
              <div className="flex gap-1">
                <Link
                  to={API.getFacebook()}
                  className="rounded-full text-xs h-full text-gray-400 px-3 py-2 flex items-center justify-center hover:bg-white hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={16} />
                </Link>

                <Link
                  to={API.getInstagram()}
                  className="rounded-full text-xs h-full text-gray-400 px-3 py-2 flex items-center justify-center hover:bg-white hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={16} />
                </Link>

                <Link
                  to={API.getShopee()}
                  className="group rounded-full text-xs h-full text-gray-400 px-3 py-2 flex items-center justify-center hover:bg-white hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 48 48"
                    className="fill-gray-400 group-hover:fill-black stro"
                  >
                    <path d="M24 1c-4.985 0-8.813 4.491-9.41 10H6.652c-1.416 0-2.58 1.23-2.496 2.646l.358 6.092a1.5 1.5 0 102.994-.175L7.182 14h33.636l-1.04 17.697a1.5 1.5 0 102.993.178l1.073-18.227C43.927 12.233 42.766 11 41.35 11h-7.94C32.813 5.491 28.985 1 24 1zm0 3c3.044 0 5.835 2.902 6.393 7H17.607c.558-4.098 3.349-7 6.393-7zm.074 13.012c-3.939 0-6.91 2.504-6.91 5.824 0 3.79 3.472 5.056 6.26 6.076 3.32 1.214 4.885 2.017 4.885 4.127 0 1.655-1.96 3.002-4.37 3.002-2.826 0-5.299-2.102-5.324-2.123l-.125-.115a.499.499 0 00-.338-.131c-.019 0-.038 0-.058.002a.501.501 0 00-.356.217l-1.105 1.629a.5.5 0 00.097.667l.114.092c.786.637 3.613 2.71 7.093 2.71 4.104 0 7.32-2.613 7.32-5.95.003-4.402-3.78-5.784-6.818-6.894-2.94-1.075-4.326-1.752-4.326-3.31 0-1.665 1.665-2.874 3.961-2.874 1.67 0 3.142.66 3.871 1.053.117.063.47.274.668.408l.139.092a.494.494 0 00.385.074.5.5 0 00.318-.229l1.012-1.644a.502.502 0 00-.153-.682l-.166-.107c-.849-.572-3.15-1.914-6.074-1.914zM6.402 24.137a1.5 1.5 0 00-1.535 1.607l.91 15.49a1.5 1.5 0 000 .002A4.02 4.02 0 009.771 45H38.23a4.018 4.018 0 003.992-3.764 1.5 1.5 0 000-.002l.181-3.052a1.5 1.5 0 10-2.996-.176l-.18 3.053a.986.986 0 01-.997.941H9.77a.987.987 0 01-1-.941l-.91-15.49a1.5 1.5 0 00-1.459-1.432z"></path>
                  </svg>
                </Link>
              </div>

              <Link
                to="/"
                className="border-gray-400 border-2 rounded-full text-xs h-full text-gray-400 px-4 py-2 flex gap-2 items-center justify-center hover:bg-white hover:text-black hover:border-transparent"
              >
                <User2 size={16} />
                <p className="font-semibold">Login</p>
              </Link>
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
