import React from "react";
import dLogo from './dLogo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.digitas.com/en-in">
        {/* <img src={dLogo} alt="logo" width="30" height="24"/> */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9iC6ziXpzo-csKm48X98OOGMhb-sIcBZksRSqiGC98-Hiui5p3OvyxV6iwWcH7d20FWI&usqp=CAU" alt="logo" width="30" height="30" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Welcome
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <a
                className="nav-link "
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Contact us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Resorce Center
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
