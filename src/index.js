import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//fonts
import './Fonts/RefrigeratorDeluxe.ttf';
import './Fonts/RefrigeratorDeluxeBold.ttf';
import './Fonts/RefrigeratorDeluxeExtrabold.ttf';
import './Fonts/RefrigeratorDeluxeHeavy.ttf';
import './Fonts/RefrigeratorDeluxeLight.ttf';

//pages
import App from './App';
import Bio from './Bio';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/NicholasClifford/" element={<App />} />  {/*for some reason it needs the "BigTimeJeff" part before even thought its specified in gh-pages*/}
      <Route path="/NicholasClifford/bio" element={<Bio />} />
      <Route path="/NicholasClifford/projects" element={<Projects />} />
      <Route path="/NicholasClifford/experience" element={<Experience />} />
      <Route path="/NicholasClifford/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
