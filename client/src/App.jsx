import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from "./pages/admin/Admin";
const App = () =>
{
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="contact" element={ <Contact /> } />
        <Route path="gallery" element={ <Gallery /> } />
        <Route path="plans" element={ <Plans /> } />
        <Route path="trainers" element={ <Trainers /> } />
        <Route path="admin" element={ <Admin /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
