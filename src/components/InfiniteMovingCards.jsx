import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function InfiniteMovingCardsWrapper() {
    const items = [
      { name: "John Doe", title: "CEO", quote: "This is an amazing product!" },
      { name: "Jane Smith", title: "CTO", quote: "Innovation at its best!" },
      {
        name: "Alice Johnson",
        title: "Designer",
        quote: "The UI is so intuitive!",
      },
      {
        name: "Bob Brown",
        title: "Developer",
        quote: "Impressive performance!",
      },
      {
        name: "Eva Williams",
        title: "Marketing",
        quote: "Our customers love it!",
      },
    ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 mt-4">TOP 10 CONCERTS</h3>
      <InfiniteMovingCards
        items={items}
        direction="left"
        speed="normal"
        pauseOnHover={true}
      />
    </div>
  );
}

export default InfiniteMovingCardsWrapper;
