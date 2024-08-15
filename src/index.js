import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//Import Pages
import HomPage from './pages/HomePages';
import Section_1 from './pages/Section-1';
import Section_2 from './pages/Section-2';
import Section_3 from './pages/Section-3';
import Section_4 from './pages/Section-4';
import Section_5 from './pages/Section-5';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomPage/>
    <Section_1/>
    <Section_2/>
    <Section_3/>
    <Section_4/>
    <Section_5/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
