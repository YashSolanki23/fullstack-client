import { useState } from 'react'
import Login from './pages/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './auth/auth.context'
import ProtectedRoute from './auth/ProtectedRoutes'
import Dashboard from './pages/Dashboard'

function App() {
  
 return <>
   <BrowserRouter>
   <AuthProvider>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
    </Routes>
   </AuthProvider>
   </BrowserRouter>
 </>
}

export default App
