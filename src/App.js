// App.js

import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import Footer from "./components/Footer";

function App() {
  // ✅ Page load hote hi scroll top fix
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
