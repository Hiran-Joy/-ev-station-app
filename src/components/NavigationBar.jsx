import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
        <div className="container">
          <Link
            className="navbar-brand fw-bold fs-4 d-flex align-items-center"
            to="/"
          >
            <span className="text-primary me-2">⚡</span> EV Charging Booking System
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-2 text-center text-lg-start pt-3 pt-lg-0">

              <li className="nav-item">
                <Link className="nav-link active px-3 rounded" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link px-3 rounded" to="/add">
                  Add Booking
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link px-3 rounded" to="/view">
                  View Bookings
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;