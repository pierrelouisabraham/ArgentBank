
import './App.css'

import Headers from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Auth from './components/Auth'
import Profile from './components/Profile.jsx'
import '../style/main.css'
import Error from './components/Error.jsx'

function App() {
  return (

    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Auth />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
