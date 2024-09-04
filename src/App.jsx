import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSignupForm from "./pages/LoginSignupForm";
import Navbar from "./components/Navbar";
import SearchResult from "./components/SearchResult";
import ArtistPage from "./pages/ArtistPage";
import MyPage from "./pages/MyPage";
import Footer from "./components/Footer";
import ConcertDetail from "./pages/ConcertDetail";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/LoginSignupForm" element={<LoginSignupForm />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/artist/:artist_num" element={<ArtistPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="//search/detail/concert" element={<ConcertDetail />} />
          <Route path="/detail/concert" element={<ConcertDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
