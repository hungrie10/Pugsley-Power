import React from 'react'
import Home from "./page/Home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
