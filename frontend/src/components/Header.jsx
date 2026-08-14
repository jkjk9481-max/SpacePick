function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="SpacePick 홈">
          <span className="brand-mark" aria-hidden="true">
            S
          </span>
          <span>SpacePick</span>
        </a>

        <nav className="main-nav" aria-label="주요 메뉴">
          <a className="nav-active" href="#spaces">공간 찾기</a>
          <a href="#register">공간 등록</a>
          <a className="login-link" href="#login">로그인</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
