import GenreBtn from "../components/GenreBtn";
import InfiniteMovingCards from "../components/InfiniteMovingCards";
import UpcomingEvents from "../components/UpcomingEvents";
import { CardDefault } from "../components/CardDefault";

function MainPage() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl">
        <InfiniteMovingCards />
        <h3 className="text-xl font-bold mb-4 mt-4">Profile</h3>
        {/* <UpcomingEvents /> */}
        <GenreBtn />
        <div className="mt-24 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-11">
          <CardDefault />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
