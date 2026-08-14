const regions = ['지역 선택', '서울 전체', '경기', '인천', '부산']

function SearchField({ label, children }) {
  return (
    <label className="search-field">
      <span className="search-label">{label}</span>
      {children}
    </label>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-glow hero-glow-left" aria-hidden="true" />
      <div className="hero-glow hero-glow-right" aria-hidden="true" />
      <div className="container hero-content">
        <p className="eyebrow">공간이 필요한 모든 순간</p>
        <h1>당신에게 필요한 공간을<br />찾아보세요</h1>
        <p className="hero-description">
          촬영부터 모임까지, 원하는 시간에 딱 맞는 공간을 만나보세요.
        </p>

        <div className="search-panel" role="search" aria-label="공간 검색">
          <SearchField label="지역">
            <select defaultValue="지역 선택" aria-label="지역 선택">
              {regions.map((region) => <option key={region}>{region}</option>)}
            </select>
          </SearchField>
          <SearchField label="날짜">
            <input type="date" aria-label="날짜 선택" />
          </SearchField>
          <SearchField label="시작 시간">
            <input type="time" aria-label="시작 시간 선택" />
          </SearchField>
          <SearchField label="종료 시간">
            <input type="time" aria-label="종료 시간 선택" />
          </SearchField>
          <button className="search-button" type="button">
            <span aria-hidden="true">⌕</span>
            검색
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
