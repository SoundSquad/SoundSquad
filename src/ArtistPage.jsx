import { artists } from "./mockArtistData";
import ArtistProfile from "./ArtistProfile";
import UpcomingEvents from "./UpcomingEvents";
import ConcertReviews from "./ConcertReviews";

function ArtistPage() {
  const artist = artists[0];

  return (
    <div className="container mx-auto px-4">
      <ArtistProfile
        name={artist.name}
        description={artist.description}
        imageUrl={artist.imageUrl}
      />
      <UpcomingEvents events={artist.UpcomingEvents} />
      <ConcertReviews />
    </div>
  );
}

export default ArtistPage;
