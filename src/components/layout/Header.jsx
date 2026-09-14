import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <h2 className="logo">
          Tech<span>Bingo</span>
        </h2>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/student-login">Play</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/admin-login" className="admin-btn">
          Admin
        </Link>
      </nav>
    </header>
  );
}

export default Header;