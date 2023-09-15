
import './App.css'

import Headers from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Auth from './components/Auth'
import Profile from './components/Profile.jsx'

function App() {
  return (

    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
