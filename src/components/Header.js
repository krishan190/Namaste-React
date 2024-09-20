const Logo = () => (
  <img
    className="logo"
    alt="logo"
    src="https://img.freepik.com/premium-vector/restaurant-logo-design-vector-illustration-food-symbol-vector_1236506-726.jpg"
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
