import React from 'react'
import Home from '../../pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import About from '../../pages/About'
import Error from '../Error'
import Footer from '../Footer'
import Housing from '../../pages/Housing'

function AppRouter() {
  return (
    <Router>
      <div className="left-right-margin">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default AppRouter
