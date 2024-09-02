import { useEffect, useState } from "react";
import {userReview} from "./mockUserInfo";
import { ReviewCard } from "./ReviewCard";

const MyReview = () => {
  const [reviews, setReviews] = useState(userReview);
  const [editingId, setEditingId] = useState(null);
  const [editedReview, setEditedReview] = useState("");

  useEffect(() => {
  }, [reviews]);

  const handleEdit = (id, review) => {
    setEditingId(id);
    setEditedReview(review);
  };

  const handleSave = (id) => {
    setReviews(prevReviews => prevReviews.map( review => 
        review.id === id ? {...review, review: editedReview} : review
    ));
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setReviews(prevReviews => prevReviews.filter(review => review.id !== id));
  }

  if(reviews.length === 0) {
    return <p>아직 리뷰가 없어요</p>
  }

  return (
    <section>
      
      <div>
        {reviews.map((review) => (
          <div key={review.id}>
            <p>concert: {review.conTitle}</p>
            {editingId === review.id ? (
                <div>
                    <input type="text"
                    value={editedReview}
                    onChange={(e) => setEditedReview(e.target.value)}
                    />
                    <button onClick={() => handleSave(review.id)}>저장</button>
                </div>
                
            ) : (<p>{review.review}</p>)
            }
            <div>
                <button onClick={() => handleEdit(review.id, review.review)}> 수정 </button>
                <button onClick={() => handleDelete(review.id)}>삭제</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyReview;