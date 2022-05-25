import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Entete from "./components/entete.js";
import Footer from "./components/footer.js";
import HomePage from "./components/pages/homePage";
// import Appartement from "./components/pages/appartement";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Entete page="accueil" />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/appartement/:id" element={<Appartement />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
