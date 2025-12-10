import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // change to false when logged out

  const dropdownRef = useRef(null);
  const accountRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setAccountOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* SCREEN BLUR WHEN ANY DROPDOWN OPEN */}
      {(dropdownOpen || accountOpen) && <div className="backdrop-blur"></div>}

      <nav className="nav">
        <div className="container nav-container">

          {/* LEFT SECTION */}
          <div className="nav-left">

            {/* LOGO */}
            <div className="nav-logo">
              <img src="/src/assets/images/logo.png" alt="Fudvira Logo" />
            </div>

            {/* DIVIDER */}
            <div className="nav-divider"></div>

            {/* TITLE + CATEGORY DROPDOWN */}
            <div className="nav-title" ref={dropdownRef}>
              <span className="title-main">Pure & Premium Powders Delivered Fast</span>

              <div
                className="dropdown"
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                  setAccountOpen(false);
                }}
              >
                <span className="title-sub dropdown-toggle">
                  Browse Categories
                  <span className="material-icons-round dropdown-arrow">
                    {dropdownOpen ? "expand_less" : "expand_more"}
                  </span>
                </span>

                <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                  <p>Food Powders</p>
                  <p>Herbal Powders</p>
                  <p>Ayurvedic Powders</p>
                  <p>Health Supplement Powders</p>
                  <p>Spice Powders</p>
                </div>
              </div>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="nav-search">
            <div className="search-wrapper">
              <span className="material-icons-round search-icon">search</span>
              <input type="search" placeholder="Search for products..." />
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="nav-right">
            <div className="account-wrapper" ref={accountRef}>
              {isLoggedIn ? (
                <>
                  <button
                    className="login-btn mobile-user-btn"
                    onClick={() => {
                      setAccountOpen(!accountOpen);
                      setDropdownOpen(false);
                    }}
                  >
                    <span className="material-icons-round">person</span>
                    <span className="login-text">Login</span>
                  </button>

                  {/* ACCOUNT DROPDOWN */}
                  <div className={`account-dropdown ${accountOpen ? "open" : ""}`}>
                    <div className="account-info">
                      <div className="account-heading">My Account</div>
                      <div className="account-number">8980145007</div>
                    </div>

                    <ul className="account-list">
                      <li>My Orders</li>
                      <li>Saved Addresses</li>
                      {/* <li>My Prescriptions</li>
                      <li>E-Gift Cards</li> */}
                      <li><a href="/faq">FAQ's</a></li>
                      <li>Account Privacy</li>
                      <li className="logout-btn">Log Out</li>
                    </ul>

                    <div className="account-qr">
                      <img
                        src="src/assets/images/indiamart-qr.png"
                        alt="IndiaMART QR"
                        className="qr-box"
                      />

                      <div className="qr-text">
                        <div className="qr-title">
                          Explore Our<br />Premium Powders<br />
                          <span>On IndiaMART</span>
                        </div>

                        <div className="qr-sub">
                          Scan the QR to visit our IndiaMART store page.
                        </div>
                      </div>
                    </div>

                  </div>
                </>
              ) : (
                <button className="login-btn mobile-user-btn">
                  <span className="material-icons-round">person</span>
                  <span className="login-text">Login</span>
                </button>
              )}
            </div>

            <button className="cart-btn">
              <span className="material-icons-round">shopping_cart</span> My Cart
            </button>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
