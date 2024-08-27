import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSignupForm from "./LoginSignupForm";
import Navbar from "./Navbar";
import SearchResult from "./SearchResult";
import "./App.css";
import ArtistPage from "./ArtistPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/LoginSignupForm" element={<LoginSignupForm />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/artist" element={<ArtistPage />} />
        </Routes>
      </BrowserRouter>
      <ArtistPage />
    </>
  );
}

export default App;
