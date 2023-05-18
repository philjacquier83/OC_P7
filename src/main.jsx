import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/'
import About from './pages/about/'
import Locations from './pages/locations'
import Error404 from './pages/error404'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<Locations />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/error" element={<Error404 />} />
      </Routes>      
    </Router>
  </React.StrictMode>,
)
