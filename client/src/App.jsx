import './App.css'
import AboutUs from './Pages/AboutUs'
// import { Routes } from "react-router-dom"
import HomePage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
   <>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/about' element={<AboutUs />}></Route>
    </Routes>
   </>
  )
}

export default App
