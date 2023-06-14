import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./Router";

const App = () => { 
  return(
    <div>
      <NavBar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
