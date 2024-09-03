import {Carousel,Card} from "../components/ui/apple-cards-carousel"

function UpcomingEvents() {
  const cardsData = [
    {
      src: "/path/to/image1.jpg",
      title: "Card 1 Title",
      category: "Category 1",
      content: <p>This is the content for Card 1</p>,
    },
    {
      src: "/path/to/image2.jpg",
      title: "Card 2 Title",
      category: "Category 2",
      content: <p>This is the content for Card 2</p>,
    },
    {
      src: "/path/to/image2.jpg",
      title: "Card 2 Title",
      category: "Category 2",
      content: <p>This is the content for Card 2</p>,
    },
    {
      src: "/path/to/image2.jpg",
      title: "Card 3 Title",
      category: "Category 2",
      content: <p>This is the content for Card 2</p>,
    },
    {
      src: "/path/to/image2.jpg",
      title: "Card 4 Title",
      category: "Category 2",
      content: <p>This is the content for Card 2</p>,
    },
    {
      src: "/path/to/image2.jpg",
      title: "Card 5 Title",
      category: "Category 2",
      content: <p>This is the content for Card 2</p>,
    },
   
    // Add more card data as needed
  ];
  // const artist = artists[0];
  return (
    <div className="max-w-5xl mx-auto">
     
      <div>
        <Carousel
          items={cardsData.map((card, index) => (
            <Card key={index} card={card} index={index} />
          ))}
        />
      </div>
    </div>
  );
}

export default UpcomingEvents;
