function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark" aria-hidden="true">S</span>
            <span>SpacePick</span>
          </a>
          <p>필요한 순간, 가장 잘 맞는 공간을 연결합니다.</p>
        </div>
        <div className="footer-links">
          <a href="#about">서비스 소개</a>
          <a href="#terms">이용약관</a>
          <a href="#privacy">개인정보처리방침</a>
          <a href="#support">고객센터</a>
        </div>
        <p className="copyright">© 2026 SpacePick. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
