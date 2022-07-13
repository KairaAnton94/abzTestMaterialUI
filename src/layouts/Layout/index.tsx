import React from "react";
import {Outlet} from "react-router-dom";
import {FC} from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Layout:FC = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default Layout;