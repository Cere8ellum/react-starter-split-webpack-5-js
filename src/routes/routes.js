import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import Home from "../pages/Home/home";
import Page404 from "../pages/Page404/page404";
import Login from "../pages/Login/login";
import News from "../pages/News/news";

export default function AppRoutes() {
  return (
    <Routes>
      <Route strict path={ROUTES.HOME} element={<Home />} />
      <Route strict path={ROUTES.LOGIN} element={<Login />} />
      <Route strict path={ROUTES.NEWS} element={<News />} />
      <Route strict path="*" element={<Page404 />} />
    </Routes>
  );
}
