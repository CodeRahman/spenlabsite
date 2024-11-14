import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import People from './pages/People.jsx'
import Publications from './pages/Publications.jsx'
import Join from './pages/Join.jsx'
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route index={true} element={<App />} path="/" />
      </Routes>
      <Routes>
        <Route index={true} element={<About />} path="/about" />
      </Routes>
      <Routes>
        <Route index={true} element={<People />} path="/people" />
      </Routes>
      <Routes>
        <Route index={true} element={<Publications/>} path="/publications" />
      </Routes>
      <Routes>
        <Route index={true} element={<Join />} path="/join" />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
