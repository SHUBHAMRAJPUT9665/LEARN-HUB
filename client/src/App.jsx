import './App.css'
// import { Routes } from "react-router-dom"
import HomePage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
   <>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
   </>
  )
}

export default App
