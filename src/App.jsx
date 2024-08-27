
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSignupForm from "./LoginSignupForm";
import Navbar from "./Navbar";
import "./App.css";
import LoginSignupForm from "./LoginSignupForm";



function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path ="/LoginSignupForm" element={<LoginSignupForm/>}/>
        </Routes>
      </BrowserRouter>
      <LoginSignupForm/>
     
    </>
  );
}

export default App;
