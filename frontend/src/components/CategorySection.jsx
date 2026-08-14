const categories = [
  { name: '촬영 스튜디오', icon: '◉', tone: 'coral' },
  { name: '회의실', icon: '▤', tone: 'blue' },
  { name: '연습실', icon: '♫', tone: 'violet' },
  { name: '파티룸', icon: '✦', tone: 'yellow' },
]

function CategorySection() {
  return (
    <section className="section category-section" aria-labelledby="category-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">CATEGORY</p>
            <h2 id="category-title">어떤 공간을 찾고 있나요?</h2>
          </div>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <button className="category-card" type="button" key={category.name}>
              <span className={`category-icon ${category.tone}`} aria-hidden="true">
                {category.icon}
              </span>
              <span>{category.name}</span>
              <span className="category-arrow" aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
