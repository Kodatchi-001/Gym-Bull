import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//Import Pages
import HomPage from './pages/HomePages';
import Page_1 from './pages/Page-1';
import Page_2 from './pages/Page-2';
import Page_3 from './pages/Page-3';
import Page_4 from './pages/Page-4';
import Page_5 from './pages/Page-5';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomPage/>
    <Page_1/>
    <Page_2/>
    <Page_3/>
    <Page_4/>
    <Page_5/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
