import logo from "public/header/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header id="header">
      <div className="header__left">
        <div className="logo" onClick={() => (window.location.href = "/")}>
          <Image src={logo} width={106} layout={"fixed"} />
        </div>
        <nav className="nav__left">
          <ul>
            <li onClick={() => (window.location.href = "/me")}>PURAXEL-Me</li>
            <li onClick={() => (window.location.href = "/fx5000")}>PURAXEL</li>
            <li onClick={() => (window.location.href = "/hair")}>
              PURAXEL-Hair
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <nav className="nav__right">
          <ul className="nav__right__left">
            <li>쇼핑몰</li>
            <li>공지사항</li>
          </ul>
          <ul className="nav__right__right">
            <li>KR</li>
            <li>EN</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
