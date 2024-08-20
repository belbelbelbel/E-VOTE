import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Signin } from './Component/Auth/Signin'
import { VotersContainer } from './Component/VotersContainer'
import { GroupA } from './Component/GroupA'
import { GroupB } from './Component/GroupB'
import { GroupC } from './Component/GroupC'
import { Greeting } from './Component/Greeting'
import { GroupsmallA } from './Component/GroupsmallA'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/votes" element={<VotersContainer />}>
        <Route index element={<Greeting />} />
        <Route path='GroupA' element={<GroupA />} />
        <Route path='GroupB' element={<GroupB />} />
        <Route path='GroupC' element={<GroupC />} />
      </Route>
      <Route path="/GroupA" element={<GroupsmallA />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
