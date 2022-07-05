export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__items">
          <a href="#">
            <img className="header__logo" src="img/logo2.jpg" alt="logo" />
          </a>
          <div className="header__menu">
            <ul className="header__list">
              <li>
                <a href="#">Что нового</a>
              </li>
              <li>
                <a href="#">Фильмы</a>
              </li>
              <li>
                <a href="#">Сериалы</a>
              </li>
              <li>
                <a href="#">Мультфильмы</a>
              </li>
              <li>
                <a href="#">TV+</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
