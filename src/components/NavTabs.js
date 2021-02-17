import { Link, useLocation } from "react-router-dom";

function NavTabs(props) {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Pupster</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className={location.pathname === "/" ? 'nav-link active': 'nav-link'}>About</Link>
          </li>
          <li className={location.pathname === "/discover" ? 'nav-item active': 'nav-item'}>
            <Link to="/discover" className="nav-link">Discover</Link>
          </li>
          <li className={location.pathname === "/search" ? 'nav-item active': 'nav-item'}>
            <Link to="/search" className="nav-link">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavTabs