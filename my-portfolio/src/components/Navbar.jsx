import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/Home">Yousef Abobaker</Link> | <Link to="/About">About</Link>
    </nav>
  );
}

export default Navbar;
