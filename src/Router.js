import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Booking from "./pages/Booking/Booking";
import Main from "./pages/Main/Main";
import Productdetail from "./pages/ProductDetail/ProductDetail";
import Searchlist from "./pages/SearchList/SearchList";
import Usersign from "./pages/UserSign/UserSign";
import Map from "./pages/SearchList/Map";
import Callback from "./pages/UserSign/Callback";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/productdetail/:id" element={<Productdetail />} />
        <Route path="/searchlist" element={<Searchlist />} />
        <Route path="/usersign" element={<Usersign />} />
        <Route path="/map" element={<Map />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
