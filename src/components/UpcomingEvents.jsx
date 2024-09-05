import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import { useNavigate } from "react-router-dom";

function UpcomingEvents({ events }) {
  const navigate = useNavigate();
  const handleCardClick = (concert_num) => {
    navigate(`/concert/${concert_num}`);
  };
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
              onClick={() => handleCardClick(event.concert_num)}
            />
          ))}
        />
      </div>
    </div>
  );
}

export default UpcomingEvents;
