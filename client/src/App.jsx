import './App.css'
import AboutUs from './Pages/AboutUs'
// import { Routes } from "react-router-dom"
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import { Route, Routes,} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import CourseList from './Pages/course/CourseList'
import CourseInfo from './Pages/CourseInfo'
function App() {

  return (
   <>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/about' element={<AboutUs />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/courses" element={<CourseList />}></Route>
      <Route path="/course/:id" element={<CourseInfo />}></Route>

    </Routes>
   </>
  )
}

export default App
