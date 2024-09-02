import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSignupForm from "./pages/LoginSignupForm";
import Navbar from "./components/Navbar";
import SearchResult from "./components/SearchResult";
import ArtistPage from "./pages/ArtistPage";
import MyPage from './pages/MyPage';
import Footer from './components/Footer';
import ConcertDetail from "./pages/ConcertDetail";

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
          <Route path="//search/detail/concert" element={<ConcertDetail />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
