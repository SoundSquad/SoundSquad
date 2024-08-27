import React from "react";
import { ConcertReviewCard } from "./ConcertReviewCards";

function ConcertReviews() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mt-8  ">
        <h3 className="text-xl font-bold mb-4">Reviews</h3>
      </div>
      <div className="ml-10">
        <ConcertReviewCard />
        <ConcertReviewCard />
        <ConcertReviewCard />
        <ConcertReviewCard />
      </div>
    </div>
  );
}

export default ConcertReviews;
