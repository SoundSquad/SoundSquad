import GenreBtn from "../components/GenreBtn";
import InfiniteMovingCards from "../components/InfiniteMovingCards";
import { useState,useEffect } from "react";
import { ConcertCard } from "../components/MainCards";
import axios from "axios";

function MainPage() {
  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/search/genre/concert?genre_name=rock&page=1&limit=10"
        )
        setConcerts(response.data.data.concerts);
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch concert data")
        setLoading(false)
      }
    }
    fetchConcerts()
  }, [])
   if (loading) return <div>Loading...</div>;
   if (error) return <div>{error}</div>;


 return (
   <div className="flex justify-center">
     <div className="w-full max-w-4xl">
       <InfiniteMovingCards />
       <h3 className="text-xl font-bold mb-4 mt-4">Profile</h3>
       {/* <UpcomingEvents /> */}
       <GenreBtn />
       <div className="mt-24 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-11">
         {concerts.map((concert) => (
           <ConcertCard
             key={concert.concert_num}
             concertTitle={concert.concert_title}
             artistName={concert.Artist.artist_name}
             concertGenre={concert.concert_genre}
             imageUrl={concert.concert_image}
             onClick={() => console.log(`Clicked`)}
           />
         ))}
       </div>
     </div>
   </div>
 );
}

export default MainPage;
