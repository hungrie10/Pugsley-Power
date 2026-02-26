import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./page/Home/Home"
import Login from './page/Auth/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
