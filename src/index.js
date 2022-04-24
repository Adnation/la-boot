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
import CommitteeForm from './routes/CommitteeForm';
import CommitteeTable from './routes/CommitteeTable';

import About from './routes/About';
import Sponsors from './routes/Sponsors';
import Gallery from './routes/Gallery';
import Contact from './routes/Contact';
import RSVP from './routes/RSVP';
import Login from './routes/Login';
import AdminHome from './routes/AdminHome';
import Survey from './routes/Survey';
import News from './routes/News';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route exact path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          
          <Route path="committee" element={<Committee />} />
          <Route path="committee-form" element={<CommitteeForm />} />
          <Route path="committee-view" element={<CommitteeTable />} />
          
          <Route path="events" element={<Events />} />
          <Route path="about" element={<About />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="rsvp" element={<RSVP />} />
          
          <Route path="survey" element={<Survey />} />
          <Route path="news" element={<News />} />

          
          <Route path="login" element={<Login />} />
          <Route path="admin-home" element={<AdminHome />} />
          
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
