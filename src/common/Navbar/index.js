import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
// import { useUserAuth } from "../contexts/UserAuthContext";
import "./index.css";

const Navbar = () => {
  //   const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("isLoggedIn"));

  console.log(loggedIn);

  function handleLogout() {
    localStorage.setItem("isLoggedIn", "");
    localStorage.setItem("email", "");
    setLoggedIn(false);
    window.location = "/";
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-data">
          <span className="navbar-name" onClick={() => navigate("/")}>
            Hotel By UMD Hackers {loggedIn === "admin" && "Admin"}
          </span>
          <div className="navbar-options" id="navbarSupportedContent">
            <ul className="navbar-options-items">
              {/* <li className="navbar-options-item">
                <NavLink
                  className="nav-link"
                  exact="true"
                  to="/"
                >
                  Home
                </NavLink>
              </li> */}
              <li className="navbar-options-item">
                <NavLink className="nav-link" exact="true" to="/rooms">
                  Rooms
                </NavLink>
              </li>
              {loggedIn !== "admin" && (
                <>
                  <li className="navbar-options-item">
                    <NavLink className="nav-link" exact="true" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="navbar-options-item">
                    <NavLink className="nav-link" exact="true" to="/contact-us">
                      Contact
                    </NavLink>
                  </li>
                  <li className="navbar-options-item">
                    <NavLink className="nav-link" exact="true" to="/bookings">
                      My Bookings
                    </NavLink>
                  </li>
                </>
              )}

              {loggedIn === "admin" && (
                <>
                  <li className="navbar-options-item">
                    <NavLink className="nav-link" exact="true" to="/addroom">
                      Add Room
                    </NavLink>
                  </li>
                  <li className="navbar-options-item">
                    <NavLink className="nav-link" exact="true" to="/updateroom">
                      Update Room
                    </NavLink>
                  </li>
                  <li className="navbar-options-item">
                    <NavLink className="nav-link" exact="true" to="/bookings">
                      Bookings
                    </NavLink>
                  </li>
                  <li className="navbar-options-item">
                    <a href="https://docs.google.com/spreadsheets/d/1BkDrZIFK-uU1oNhPqL0k8h9Y4PPSd7yr8cxXprRVsEQ/edit#gid=0" target="_blank">
                      Cleaning
                    </a>
                  </li>
                </>
              )}
              {loggedIn === "" || loggedIn === null ? (
                <>
                  <li className="navbar-options-item">
                    <NavLink
                      className="nav-link"
                      //   activeClassName="active_class"
                      exact="true"
                      to="/signin"
                    >
                      <button
                        type="button"
                        className=" navbar-button navbar-login-button"
                      >
                        Log in
                      </button>
                    </NavLink>
                  </li>

                  <li className="navbar-options-item">
                    <NavLink className="nav-link" exact="true" to="/signup">
                      <button
                        type="button"
                        className="navbar-button navbar-signup-button"
                      >
                        Sign up
                      </button>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="navbar-options-item">
                    <button
                      type="button"
                      className="navbar-button navbar-signup-button"
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
