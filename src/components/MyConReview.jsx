import { useEffect, useState } from "react";
import { userReview } from "./mockUserInfo";
import { cn } from "../utils/utils";

const MyConReview = () => {
  const [reviews, setReviews] = useState(userReview);
  const [editingId, setEditingId] = useState(null);
  const [editedReview, setEditedReview] = useState("");

  useEffect(() => {}, [reviews]);

  const handleEditToggle = (id, review) => {
    if (editingId === id) {
      // 현재 수정 중인 리뷰라면 저장 로직 실행
      setReviews((prevReviews) =>
        prevReviews.map((ele) =>
          ele.id === id ? { ...ele, review: editedReview } : ele
        )
      );
      setEditingId(null);
    } else {
      // 수정 모드로 전환
      setEditingId(id);
      setEditedReview(review);
    }
  };

  const handleDelete = (id) => {
    setReviews((prevReviews) =>
      prevReviews.filter((review) => review.id !== id)
    );
  };

  if (reviews.length === 0) {
    return <p>아직 리뷰가 없어요</p>;
  }

  return (
    <section className="flex justify-around">
      {reviews.map((review) => (
        <div className="w-3/12 max-w-xs w-full group/card" key={review.id}>
          <div
            className={cn(
              " overflow-hidden relative card h-60 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 bg-deep-orange-400"
            )}
          >
            {/* <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div> */}

            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                {review.conTitle}
              </h1>
              {editingId === review.id ? (
                <input
                  type="text"
                  value={editedReview}
                  onChange={(e) => setEditedReview(e.target.value)}
                  className="font-normal text-sm text-black-50 relative z-10 my-4"
                />
              ) : (
                <p>{review.review}</p>
              )}
              <div>
                <button
                  onClick={() => handleEditToggle(review.id, review.review)}
                >
                  {editingId === review.id ? "저장" : "수정"}
                </button>
                <button onClick={() => handleDelete(review.id)}>삭제</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MyConReview;
