import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from"../src/Pages/Home"
import Assignment1 from "../src/Pages/Assignment1"
import Assignment2 from  "../src/Pages/Assignment2"
function App() {


  return (
   
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route  path='/assignment1' element={<Assignment1/>}/>
    <Route  path='/assignment2' element={<Assignment2/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
