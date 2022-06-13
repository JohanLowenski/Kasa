import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Entete from "./components/entete.js";
import Footer from "./components/footer.js";
import HomePage from "./components/pages/homePage";
import Logement from "./components/pages/logement";
import Page404 from "./components/pages/page404";
import "./components/css/app.css";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Entete page="accueil" />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
