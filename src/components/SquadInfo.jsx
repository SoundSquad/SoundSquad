import React from 'react';
import MyReview from './MyReview';

function SquadInfo() {
  return (
    <div>

      <MyReview />
      <section>
        내가 작성한  공연 리뷰 <br />
        내가 작성한  스쿼드 리뷰 (점수만) <br />
      </section>
      <section>
        참여한 스쿼드 목록
        <br />
        평점 완료, 평점 미정, 아직 안 간 콘서트 구분
      </section>
    </div>
  );
}

export default SquadInfo;