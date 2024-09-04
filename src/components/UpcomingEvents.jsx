import { Carousel, Card } from "../components/ui/apple-cards-carousel";

function UpcomingEvents({ events }) {
  console.log("events props", events);
  return (
    <div className="max-w-5xl mx-auto">
      <div>
        <Carousel
          items={events.map((event, index) => (
            <Card
              key={event.concert_num}
              card={{
                title: event.concert_title,
                category: event.artist_genre,
                src: event.concert_image,
              }}
              index={index}
            />
          ))}
        />
      </div>
    </div>
  );
}

export default UpcomingEvents;
