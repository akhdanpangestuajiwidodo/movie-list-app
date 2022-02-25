import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Detail from "../Detail/Detail";
import Favorite from "../Favorite/Favorite";

interface idDetail {
  id: string;
}

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
