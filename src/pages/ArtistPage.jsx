import ArtistProfile from "../components/ArtistProfile";
import UpcomingEvents from "../components/UpcomingEvents";
import ConcertReviews from "../components/ConcertReviews";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ArtistPage() {
  const { artist_num } = useParams(); //get artist_num from url
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/search/detail/artist?artist_num=${artist_num}`
        );
        setArtist(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch artist data");
        setLoading(false);
      }
    };
    fetchArtistData();
  }, [artist_num]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;


  return (
    <div className="container mx-auto px-4">
      {artist && (
        <>
          <ArtistProfile
            name={artist.artist_name}
            imageUrl={artist.artist_profile}
          />

          <h3 className="text-xl font-bold">Upcoming events</h3>

          <UpcomingEvents events={artist.ConcertInfos} />
          <ConcertReviews />
        </>
      )}
    </div>
  );
}

export default ArtistPage;
