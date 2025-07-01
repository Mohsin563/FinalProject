import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Login from './pages/Login'
import Signup from './pages/Signup'
import ExpensiveForm from './pages/ExpensiveForm'
import ExpensiveDetails from './pages/ExpensiveDetails'
import ExpenseTable from './pages/ExpensiveTable'
import Home from './pages/Home'
import MainHome from './pages/MainHome'
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<MainHome />} />
      <Route path="/Dashboard" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
  )
}

export default App
