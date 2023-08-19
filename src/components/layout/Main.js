import React, { Fragment } from "react";

import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import ModalProvider from "providers/ModalProvider";
import { Outlet } from "react-router-dom";
import ToastProvider from "providers/ToastProvider";

const Main = () => {
  return (
    <Fragment>
      <ModalProvider></ModalProvider>
      <ToastProvider></ToastProvider>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
};

export default Main;
