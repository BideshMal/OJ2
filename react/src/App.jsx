import { BrowserRouter , Routes , Route, Router } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import Header from "./components/Header"



 
export default function App() {
  return <BrowserRouter>
    <Header/>
    <Routes>
    
    <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     
     <Route path="/sign-in" element={<SignIn/>}/>
     <Route path="/sign-up" element={<SignUp/>}/>
     <Route path="/profile" element={<Profile/>}/>
    </Routes>
  </BrowserRouter>
}