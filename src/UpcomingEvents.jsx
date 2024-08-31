import { EventCard } from "./EventCard";
import { artists } from "./mockArtistData";

function UpcomingEvents() {
  const artist = artists[0];
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mt-8  ">
        <h3 className="text-xl font-bold mb-4">Upcoming events</h3>
      </div>
      <div className="flex space-x-5">
        {artist.upcomingEvents.map((event) => (
          <EventCard key={event.id} title={event.title} date={event.date} />
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
