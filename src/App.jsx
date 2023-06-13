import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import routes from "./routes";

const App = () => { 
  return(
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
