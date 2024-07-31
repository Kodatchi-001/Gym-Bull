import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomPage from './pages/HomePages';
import Page_1 from './pages/Page-1';
import Page_2 from './pages/Page-2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomPage/>
    <Page_1/>
    <Page_2/>
  </React.StrictMode>
);

reportWebVitals();
