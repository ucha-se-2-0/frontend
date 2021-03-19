import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './MainSite/Navbar';
import Content from './MainSite/Content'
import Footer from './MainSite/Footer';
import Header from './MainSite/Header'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Content />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

