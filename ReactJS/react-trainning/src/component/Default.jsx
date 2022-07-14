import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Home from "../component/Home";
import { Routes, Route } from "react-router-dom";
import routes from "../router";

const Default = () => {
  const user = {
    firstName: "Vũ",
    LastName: "Nguyễn Tuấn",
    age: 2022 - 1999,
  };
  return (
    <div>
      <Header></Header>
      <Home user={user}></Home>
      <Footer></Footer>
    </div>
  );
};

export default Default;
