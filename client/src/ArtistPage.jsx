import { artists } from "./mockArtistData";
import ArtistProfile from "./ArtistProfile";

function ArtistPage() {
  const artist = artists[0];

  return (
    <div className="container mx-auto px-4">
      <ArtistProfile
        name={artist.name}
        description={artist.description}
        imageUrl={artist.imageUrl}
      />
    </div>
  );
}

export default ArtistPage;
