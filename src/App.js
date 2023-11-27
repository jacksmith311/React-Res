import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './layout/Navbar'
import Home from './components/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App