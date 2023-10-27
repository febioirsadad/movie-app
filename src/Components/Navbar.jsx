import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Now Playing</Link>
      </li>
      <li>
        <Link to="/popular">Popular</Link>
      </li>
      <li>
        <Link to="/genre/Horror">Horror</Link>
      </li>
      <li>
        <Link to="/genre/Thriller">Thriller</Link>
      </li>
      <li>
        <Link to="/genre/Action">Action</Link>
      </li>
      <li>
        <Link to="/genre/Adventure">Adventure</Link>
      </li>
      <li>
        <Link to="/genre/Crime">Crime</Link>
      </li>
      <li>
        <Link to="/genre/Mystery">Mystery</Link>
      </li>
    </ul>
  );
};

export default Navbar;
