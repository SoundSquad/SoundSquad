import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ArtistProfile from "../components/ArtistProfile";

const ConcertDetail = () => {
  const [concertData, setConcertData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { concert_num } = useParams();

  

  useEffect(() => {
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

    fetchConcertData();
  }, [concert_num]);

  if (loading) return <div>Loading...</div>;

  if (!concertData) return <div>No information available</div>;

  return (
    <main className="container mx-auto">
      <ArtistProfile
        name={concertData.Artist?.artist_name || "Unknown Artist"}
        imageUrl={concertData.concert_image || ""}
      />
      <div>
        <h1>{concertData.concert_title}</h1>
        <p>Genre: {concertData.concert_genre}</p>
        <p>Location: {concertData.concert_location}</p>
        <p>
          Start Date: {new Date(concertData.start_date).toLocaleDateString()}
        </p>
        <p>End Date: {new Date(concertData.end_date).toLocaleDateString()}</p>
        <p>Details: {concertData.concert_detail}</p>
        <a
          href={concertData.ticket_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Tickets
        </a>
      </div>
    </main>
  );
};

export default ConcertDetail;
