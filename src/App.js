import { React, StrictMode } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import HomePage from './pages/HomePage/HomePage'
import Terms from './pages/Legality/Terms';
import NotFound from './pages/NotFound/NotFound';
import Privacy from './pages/Legality/Privacy';
import { CookiesAcceptedProvider, ThemeProvider } from './Utilities';

import './Style/Style.css'
import About from './pages/about';
import Prices from './pages/prices';
import Lessons from './pages/lessons';



function AppRoutes() {
  return (
      <Router forceRefresh={false}>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/lessons" exact element={<Lessons/>} />
          <Route path="/about" exact element={<About />} />
          <Route path="/prices" exact element={<Prices />} />
          <Route path="/terms-and-conditions" exact element={<Terms/>} />
          <Route path="/privacy-policy" exact element={<Privacy/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </Router>
  )
}

export default function App() {
  return (
    <StrictMode>
      <CookiesAcceptedProvider>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </CookiesAcceptedProvider>
    </StrictMode>
  )
}