import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

/* View pages */
import Home from "./view/Home";
import Lab from "./view/Lab";
import Portfolio from "./view/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main" aria-label="conteúdo principal">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={"Não existe paginas"} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
