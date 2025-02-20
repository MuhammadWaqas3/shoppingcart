import { Link } from "react-router-dom"; 
import "./navbar.css";  

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">GuTech Exam Store</div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
      </div>
    </nav>
  );
}
