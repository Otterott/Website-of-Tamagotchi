import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Photos from './photos.js';
import Photo from './Photo.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Interface from './interface.js';
import Pets from "./pets";
import Intro from "./intro";
import History from "./history.js";
import './Fonts/pixel-tandysoft-font/PixelTandysoft-0rJG.ttf';

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/Photo" element={<Photo />} />
          <Route path="/interface" element={<Interface />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Wrapper>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
