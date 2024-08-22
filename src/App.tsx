import './App.css'
import { Route, Routes, Navigate} from 'react-router-dom'
import { Signin } from './Component/Auth/Signin'
import { VotersContainer } from './Component/VotersContainer'
import { GroupA } from './Component/GroupA'
import { GroupB } from './Component/GroupB'
import { GroupC } from './Component/GroupC'
import { Greeting } from './Component/Greeting'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react'

function App() {
  const token = localStorage.getItem('token')
  console.log(token)
  useEffect(() => {
    if (!token) {
      toast.error("Your time has lapsed please login")
    }
  }, [token])
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/votes" element={token ? <VotersContainer /> : <Navigate to="/" />}>
          <Route index element={<Greeting />} />
          <Route path='GroupA' element={<GroupA />} />
          <Route path='GroupB' element={<GroupB />} />
          <Route path='GroupC' element={<GroupC />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
