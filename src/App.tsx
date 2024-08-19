import { useState } from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Signin } from './Component/Auth/Signin'
import { VotersDashboard } from './Component/VotersDashboard'

function App() {

  return (
    <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/voters" element={<VotersDashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
