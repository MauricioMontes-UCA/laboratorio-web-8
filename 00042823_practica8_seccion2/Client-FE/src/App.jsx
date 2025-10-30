import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Login.jsx'
import Protected from './Protected.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/protected' element={<Protected />} />
      </Routes>
    </Router>
  )
}

export default App