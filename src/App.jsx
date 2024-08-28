import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSignupForm from "./LoginSignupForm";
import Navbar from "./Navbar";
import SearchResult from "./SearchResult";
import ArtistPage from "./ArtistPage";
import MyPage from './pages/MyPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/LoginSignupForm" element={<LoginSignupForm />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/artist" element={<ArtistPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
