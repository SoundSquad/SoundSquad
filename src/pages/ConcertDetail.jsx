import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ArtistProfile from "../components/ArtistProfile";
import { InputWithButton } from "../components/InputWithButton";
import ConcertReviews from "../components/ConcertReviews";

const ConcertDetail = () => {
  const [concertData, setConcertData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userNum, setUserNum] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { concert_num } = useParams();

  useEffect(() => {
    fetchConcertData();
    checkLoginStatus();
    fetchReviews();
  }, [concert_num]);

  const checkStorage = useCallback(() => {
    const storedUserNum = localStorage.getItem('user_num');
    console.log("Current localStorage user_num:", storedUserNum);
    return storedUserNum;
  }, []);

  const checkLoginStatus = useCallback(() => {
    const storedUserNum = checkStorage();
    if (storedUserNum) {
      setIsLoggedIn(true);
      setUserNum(storedUserNum);
    } else {
      setIsLoggedIn(false);
      setUserNum(null);
    }
  }, [checkStorage]);

  const fetchConcertData = async () => {
    if (!concert_num) {
      setError("Invalid concert number");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/search/detail/concert?concert_num=${concert_num}`
      );

      if (response.data.msg === "데이터를 성공적으로 불러왔습니다.") {
        if (response.data.data) {
          setConcertData(response.data.data);
        } else {
          throw new Error("No data in API response");
        }
      } else {
        throw new Error(`Unexpected API response: ${response.data.msg}`);
      }
      setLoading(false);
    } catch (err) {
      console.error("Error fetching concert data:", err);
      setError(`Failed to load concert details: ${err.message}`);
      setLoading(false);
    }
  };


  const fetchReviews = async () => {
    try{
      const response = await axios.get(`http://localhost:8080/concert/reviews/${concert_num}`);
      if(response.data.msg === "리뷰를 성공적으로 불러왔습니다."){
        setReviews(response.data.data);
      }
    } catch(error){
      console.error('불러오기 에러', error);
    }
  };

  const handleReviewAdded = useCallback((newReview) => {
    setReviews(prevReviews => [newReview, ...prevReviews]);
  }, [])

  if (loading) return <div>Loading...</div>;

  if (!concertData) return <div>No information available</div>;

  return (
    <main className="container mx-auto">
      <ArtistProfile
        name={concertData.Artist?.artist_name || "Unknown Artist"}
        imageUrl={concertData.concert_image || ""}
      />

      <section className="max-w-4xl mx-auto p-4">
        <div className="flex flex-wrap justify-between">
          <h1 className="text-3xl w-full">{concertData.concert_title}</h1>
          <p className="text-2xl">Location: {concertData.concert_location}</p>
          <p className="text-2xl">Genre: {concertData.concert_genre}</p>
          <p className="text-2xl">
            Start Date: {new Date(concertData.start_date).toLocaleDateString()}
          </p>
          <p className="text-2xl">
            End Date: {new Date(concertData.end_date).toLocaleDateString()}
          </p>

          <div className="w-full">
            <a
              href={concertData.ticket_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 rounded-full bg-red-600 font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-red-900 transition-colors duration-200"
            >
              Buy Tickets
            </a>
            {/* <a
              className="inline-block w-32  bg-cyan-200"
              href={concertData.ticket_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Tickets
            </a> */}
          </div>
        </div>

        <div>
          <p className="overflow-hidden text-ellipsis max-w-[100ch]">
            Details: {concertData.concert_detail}
          </p>
        </div>
      </section>

      <section>
        {
          isLoggedIn ? (
            <InputWithButton concertNum={concert_num} onReviewAdded={handleReviewAdded}/>
          ) : (
            <p>리뷰 작성하려면 로그인 하시오</p>
          )
        }
        
        <ConcertReviews reviews={reviews} />
      </section>
    </main>
  );
};

export default ConcertDetail;
