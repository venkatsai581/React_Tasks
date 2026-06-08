import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Services from "./pages/Services";

import WebDevelopment from "./pages/services/WebDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/services" element={<Services />}>
          <Route
            path="web-development"
            element={<WebDevelopment />}
          />

          <Route
            path="app-development"
            element={<AppDevelopment />}
          />

          <Route
            path="uiux-design"
            element={<UIUXDesign />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;