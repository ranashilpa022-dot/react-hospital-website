// animation test commit
// force github pages rebuild

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar har page ke top me */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>

      {/* Footer har page ke neeche */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;

