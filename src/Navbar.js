import BlogList from "./BlogList";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <h3 className="brand">The React Blog</h3>
        <a href="/" className="nav-item">
          Home
        </a>
        <a href="/create" className="nav-item">
          Create Blog
        </a>
      </div>

      <div className="content-area">
        <BlogList />
      </div>
    </div>
  );
};

export default Navbar;
