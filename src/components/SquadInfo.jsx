import MyConReview from './MyConReview';
import MySquadReview from './MySquadReview';

function SquadInfo() {
  return (
    <div>

      <MyConReview />
      <MySquadReview />
      <section>
        참여한 스쿼드 목록
        <br />
        평점 완료, 평점 미정, 아직 안 간 콘서트 구분
      </section>
    </div>
  );
}

export default SquadInfo;