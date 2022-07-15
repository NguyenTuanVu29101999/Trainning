import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Routes, Route } from "react-router-dom";
import routes from "../router/index";

const Default = () => {
  return (
    <div>
      <Header/>
        <Routes>
          {routes.map((route,idx) => (
            <Route key={idx} path={route.path} element={route.component} ></Route>
          ))}
        </Routes>
      
      <Footer />
    </div>
  );
};

export default Default;
