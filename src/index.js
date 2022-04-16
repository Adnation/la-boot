import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Events from './routes/Events';
import Home from './routes/Home';
import Committee from './routes/Committee';
import Community from './routes/Community';
import Sponsors from './routes/Sponsors';
import Gallery from './routes/Gallery';
import Contact from './routes/Contact';
import RSVP from './routes/RSVP';


const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route exact path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="committee" element={<Committee />} />
          <Route path="events" element={<Events />} />
          <Route path="community" element={<Community />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="rsvp" element={<RSVP />} />
        </Route>
        
        {/* <Route path="invoices" element={<Events />} /> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
