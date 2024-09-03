import InfiniteMovingCards from "../components/InfiniteMovingCards"

function MainPage() {
    return (
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <InfiniteMovingCards />
        </div>
      </div>
    );
}

export default MainPage