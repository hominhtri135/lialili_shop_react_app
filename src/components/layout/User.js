import Container from "./Container";
import { Outlet } from "react-router-dom";
import React from "react";
import UserNavbar from "./UserNavbar";

const User = () => {
  return (
    <Container>
      <div className="flex flex-col justify-between pt-10 pb-16 sm:pt-12 sm:pb-20 lg:flex-row lg:pb-24">
        <div className="lg:w-1/4">
          <UserNavbar></UserNavbar>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-3/4">
          <Outlet></Outlet>
        </div>
      </div>
    </Container>
  );
};

export default User;
