import "./../styles/Navbar.css";

function Navbar({ navigateTo, currentRoute }) {
  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container">
        <h2 className="logo" onClick={() => navigateTo("home")}>
          Toast<span>Script</span>
        </h2>

        <ul className="nav-links">
          <li 
            className={currentRoute === "home" ? "active" : ""} 
            onClick={() => navigateTo("home")}
          >
            Home
          </li>
          <li 
            className={currentRoute === "scripts" || currentRoute === "script" ? "active" : ""} 
            onClick={() => navigateTo("scripts")}
          >
            Scripts
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
