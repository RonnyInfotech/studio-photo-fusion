import React, { useEffect } from 'react';
import Home from './Components/Home/Home';
import * as ROUTES from "./constants/routes";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import AOS from "aos";
import "aos/dist/aos.css";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Packages from './Components/Packages/Packages';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';
import FollowInstagram from './Components/FollowInstagram/FollowInstagram';
import GridComponent from './Components/GridComponent/GridComponent';
import PhotoFusionContextProvider from './contexts/PhotoFusionContext';

const App = () => {
  AOS.init()
  AOS.refresh()
  AOS.init({
    duration: 500
  });

  document.addEventListener('contextmenu', (e) => e.preventDefault());

  function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
  }

  document.onkeydown = (e) => {
    // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
    if (
      e.keyCode === 123 ||
      ctrlShiftKey(e, 'I') ||
      ctrlShiftKey(e, 'J') ||
      ctrlShiftKey(e, 'C') ||
      (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    )
      return false;
  };

  return (
    <BrowserRouter>
      <PhotoFusionContextProvider>
        <Header />
        <div className="App">
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.PACKAGES} element={<Packages />} />
            <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.TESTIMONIAL} element={<Testimonial />} />
          </Routes>
        </div>
        {/* <FollowInstagram /> */}
        <Footer />
      </PhotoFusionContextProvider>
    </BrowserRouter>
  )
}

export default App;