import { artists } from "../components/mockArtistData";
import ArtistProfile from "../components/ArtistProfile";
import UpcomingEvents from "../components/UpcomingEvents";
import ConcertReviews from "../components/ConcertReviews";

function ArtistPage() {
  const artist = artists[0];

  return (
    <div className="container mx-auto px-4">
      <ArtistProfile
        name={artist.name}
        description={artist.description}
        imageUrl={artist.imageUrl}
      />
      
        <h3 className="text-xl font-bold">Upcoming events</h3>
     
      <UpcomingEvents events={artist.UpcomingEvents} />
      <ConcertReviews />
    </div>
  );
}

export default ArtistPage;
