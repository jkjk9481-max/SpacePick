import spaceGrid from '../assets/space-grid.png'

const spaces = [
  { name: '오브제 선샤인 스튜디오', location: '서울 성동구 성수동', price: '35,000', rating: '4.9', reviews: 128, position: '0% 0%' },
  { name: '스테이무드 내추럴 스튜디오', location: '서울 마포구 합정동', price: '28,000', rating: '4.8', reviews: 94, position: '50% 0%' },
  { name: '워크라운지 강남 10인실', location: '서울 강남구 역삼동', price: '22,000', rating: '4.9', reviews: 76, position: '100% 0%' },
  { name: '플로우 댄스 스튜디오', location: '서울 마포구 홍대입구', price: '18,000', rating: '4.7', reviews: 112, position: '0% 100%' },
  { name: '어반나잇 프라이빗 라운지', location: '서울 중구 을지로', price: '42,000', rating: '4.9', reviews: 158, position: '50% 100%' },
  { name: '사운드웨이브 합주실', location: '서울 광진구 화양동', price: '20,000', rating: '4.8', reviews: 63, position: '100% 100%' },
]

function SpaceCard({ space }) {
  return (
    <article className="space-card">
      <div
        className="space-image"
        role="img"
        aria-label={`${space.name} 공간 이미지`}
        style={{ backgroundImage: `url(${spaceGrid})`, backgroundPosition: space.position }}
      >
        <button className="favorite-button" type="button" aria-label={`${space.name} 찜하기`}>
          ♡
        </button>
      </div>
      <div className="space-info">
        <p className="space-location">{space.location}</p>
        <h3>{space.name}</h3>
        <div className="space-meta">
          <p><strong>{space.price}원</strong><span> / 시간</span></p>
          <p className="rating"><span aria-hidden="true">★</span> {space.rating} <span>({space.reviews})</span></p>
        </div>
      </div>
    </article>
  )
}

function RecommendedSpaces() {
  return (
    <section className="section recommended-section" id="spaces" aria-labelledby="recommended-title">
      <div className="container">
        <div className="section-heading recommended-heading">
          <div>
            <p className="section-kicker">RECOMMENDED</p>
            <h2 id="recommended-title">지금 인기 있는 공간</h2>
          </div>
          <a href="#spaces">전체 공간 보기 <span aria-hidden="true">→</span></a>
        </div>
        <div className="space-grid">
          {spaces.map((space) => <SpaceCard key={space.name} space={space} />)}
        </div>
      </div>
    </section>
  )
}

export default RecommendedSpaces
