import React, { Fragment } from "react";

import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Fragment>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
};

export default Main;
