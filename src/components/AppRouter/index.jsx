import React from 'react'
import Home from '../../pages/Home'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../../components/Layout/Header'
import About from '../../pages/About'
import Error from '../Layout/Error'
import Footer from '../Layout/Footer'
import Housing from '../../pages/Housing'

function AppRouter() {
  return (
    <Router>
      <main className="main-container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default AppRouter
