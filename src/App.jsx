import { useState } from 'react'
import './App.css'
import Signup from './pages/SignupPage'
import Login from './pages/LoginPage'
import Navbar from './components/Navbar'
import { Routes,Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import Markets from './pages/MarketPage'
import ProfilePage from './pages/profilePage'
import Portfolio from './pages/PortfolioPage'


function App() {


  return (
    <div className="App">

      <Navbar />


      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profilePage" element={<ProfilePage/> } />
      <Route path='/signup' element ={<Signup/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/markets' element ={<Markets/>}/>
      <Route path='/portfolio' element ={<Portfolio />}/>

      </Routes>




      
    </div>
  )
}

export default App
