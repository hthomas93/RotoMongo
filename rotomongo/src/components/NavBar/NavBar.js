import React from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">RotoMongo</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active dex">
                            <Link to="/dex" className={location.pathname === "/dex" ? "nav-link active" : "nav-link"}>
                                Dex
                            </Link>
                        </li>
                        <li className="nav-item active teambuilder">
                            <Link to="/teambuilder" className={location.pathname === "/teambuilder" ? "nav-link active" : "nav-link"}>
                                Team Builder
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;