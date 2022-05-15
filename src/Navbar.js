import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <h3 className="brand">The React Blog</h3>
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/create" className="nav-item">
          Create Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
