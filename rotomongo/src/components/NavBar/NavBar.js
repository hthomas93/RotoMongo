import React from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">RotoMongo</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/dex" className={location.pathname === "/dex" ? "nav-link active" : "nav-link"}>
                                Dex
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;