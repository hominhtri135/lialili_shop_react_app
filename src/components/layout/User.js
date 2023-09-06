import Container from "./Container";
import { Outlet } from "react-router-dom";
import React from "react";
import UserNavbar from "./UserNavbar";

const User = () => {
  return (
    <div className="min-h-[calc(100vh-339px)]">
      <Container>
        <div className="flex flex-col justify-between px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pb-24 lg:flex-row">
          <div className="lg:w-1/4">
            <UserNavbar></UserNavbar>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-3/4">
            <Outlet></Outlet>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default User;
