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
import Refund from "./Pages/Terms/Refund";
import PrivacyPolicy from "./Pages/Terms/Privacy";
import TermsAndConditions from "./Pages/Terms/TermsAndConditions";
import EditProfile from "./Pages/User/EditProfile";
import ChangePassword from "./Pages/User/ChangePassword";
import NewPassword from "./Pages/User/NewPassword";
import Checkout from "./Pages/Payment/Checkout";
import CheckoutSuccess from "./Pages/Payment/CheckoutSuccess";
import CheckoutFail from "./Pages/Payment/CheckoutFail";
import Displaylecture from "./Pages/Displaylecture/Displaylecture";
import Addlecture from "./Pages/course/Addlecture";
import AdminDashboard from "./Pages/DashBoard/AdminDashboard";
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
        <Route path="course/lecture" element={<Displaylecture />}> </Route>
        <Route path="/denied" element={<Denied />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/refund" element={<Refund />}></Route>
        <Route path="/privacy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-condition" element={<TermsAndConditions />}></Route>
        <Route path="/edit-profile" element={<EditProfile />}></Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/course/create" element={<CreateCourse />} />
          <Route path="/course/addlecture" element={<Addlecture />}></Route>
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>

        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path="/user/profile" element={<Profile />}></Route>
          <Route path="/change-Password" element={<ChangePassword />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/checkout/success" element={<CheckoutSuccess />}></Route>
          <Route path="/checkout/fail" element={<CheckoutFail />}></Route>
          <Route path="/user/reset-password/:resetPasswordURL" element={<NewPassword />}></Route>
          
        </Route>
        <Route path="/user/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
