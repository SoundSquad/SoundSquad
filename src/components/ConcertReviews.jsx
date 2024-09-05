import React from "react";
import { ConcertReviewCard } from "./ConcertReviewCards";

function ConcertReviews({reviews}) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mt-8  ">
        <h3 className="text-xl font-bold mb-4">Reviews</h3>
      </div>
      <div className="ml-10">
        {reviews.length ===0 ? (
          <p>아직 리뷰 없어</p>
        ) : reviews.map( review => (
          <ConcertReviewCard key={review.creview_num} review={review} />
        ))}
      </div>
    </div>
  );
}

export default ConcertReviews;
