import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Shop from './Pages/Shop'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
  <div>
    <Header />
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Routes>
  </BrowserRouter>
  <Footer />
  </div>
  )
}

export default App