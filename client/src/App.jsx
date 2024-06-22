import './App.css'
import AboutUs from './Pages/AboutUs'
// import { Routes } from "react-router-dom"
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
function App() {

  return (
   <>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/about' element={<AboutUs />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Signup />}></Route>
    </Routes>
   </>
  )
}

export default App
