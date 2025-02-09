import { LOGO_URL } from "../config";

const Logo = () => (
  <img
    className="logo"
    alt="logo"
    src={LOGO_URL}
  />
);

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
