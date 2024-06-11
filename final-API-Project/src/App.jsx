import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home'
import Todo from './Pages/Todo'
// import Product from './Pages/Product'
import Calculator from './Pages/Calculator'
import About from './Pages/About'
import './App.css'

function App() {

  console.log("OK")

  return (
    <BrowserRouter>

      <ul className='Nav'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/todo">Todo'S</Link></li>
        <li><Link to="/Product">Product</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/about">About'S</Link></li>
      </ul>
      <Routes>

        <Route path='/home' element={<Home />} />
        <Route path='/todo' element={<Todo />} />
        {/* <Route path='/product' element={<Product />} /> */}
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/about' element={<About />} />

      </Routes>

      <footer>
        2024 &copy; ReactJS Projects
      </footer>

    </BrowserRouter>


  )

}

export default App