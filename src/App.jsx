import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSignupForm from "./LoginSignupForm";
import Navbar from "./Navbar";

import SearchResult from "./SearchResult";

import "./App.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/LoginSignupForm" element={<LoginSignupForm />} />

          <Route path="/search" element={<SearchResult />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
