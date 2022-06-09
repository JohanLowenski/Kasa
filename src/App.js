/**
 * The App function returns a div with a BrowserRouter, an Entete, Routes, a Footer, and a div with the
 * className App.
 * @returns The return value of the function passed to useEffect will be called when the component
 * unmounts.
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Entete from "./components/entete.js";
import Footer from "./components/footer.js";
import HomePage from "./components/pages/homePage";
import Logement from "./components/pages/logement";
import Page404 from "./components/pages/page404";
import "./components/css/app.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Entete page="accueil" />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
