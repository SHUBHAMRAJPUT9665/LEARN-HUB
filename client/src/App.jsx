import "./App.css";
import AboutUs from "./Pages/AboutUs";
// import { Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import CourseList from "./Pages/course/CourseList";
import CourseInfo from "./componets/CourseInfo";
import Denied from "./Pages/Denied";
import RequireAuth from "./componets/Auth/RequireAuth";
import CreateCourse from "./Pages/course/CreateCourse";
import Profile from "./Pages/User/Profile";
import Contact from "./Pages/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/courses" element={<CourseList />}></Route>
        <Route path="/course/description" element={<CourseInfo />}></Route>
        <Route path="/denied" element={<Denied />}></Route>
        <Route path="/contact" element={<Contact />}></Route>


        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/course/create" element={<CreateCourse />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN" , 'USER']} />}>
        <Route path="/user/profile" element={<Profile />}></Route>
        </Route>
        <Route path="/user/profile" element={<Profile />}></Route>

      </Routes>
    </>
  );
}

export default App;
