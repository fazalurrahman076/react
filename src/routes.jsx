import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageAndTitle from './components/ImageAndTitle';
import ImageGridWithCaption from './components/ImageGridWithCaption';
import Review from './components/Review';
import ContactUs from './components/ContactUs';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import CreateAccount from './components/CreateAccount';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const routes = {
  "/about": () => <AboutUs />,
  "/contact": () => <ContactUs />,
  "/createAccount": () => <CreateAccount />,
  "/review": () => <Review />,
  "/products": () => <Products />,
  "/signin": () => <Signin />,
  "/signup": () => <CreateAccount />

};
export default routes;