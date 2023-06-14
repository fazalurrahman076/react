import React from 'react';
import { Router as Routes } from "@reach/router";

import Review from './components/Review';
import ContactUs from './components/ContactUs';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import CreateAccount from './components/CreateAccount';
import Home from "./components/Home";
import Signin from "./components/Signin";
import ImageAndTitle from "./components/ImageAndTitle";


const Router = () => {

  return(
    <Routes>
      <Home path="/" />
      <AboutUs path="/about" />
      <ContactUs path="/contact" />
      <CreateAccount path="/signup" />
      <Signin path="/signin" />
      <Products path="/products" />
      <Review path="/review" />
      <ImageAndTitle path="/imagandtitle" />
    </Routes>
  )
}

export default Router;