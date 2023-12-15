import React from 'react'
import Home from '../../pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import About from '../../pages/About'
import Error from '../Error'
import Footer from '../Footer'

function AppRouter() {
  return (
    <Router>
      <div className="left-right-margin">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default AppRouter
