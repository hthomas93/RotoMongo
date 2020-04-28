import React from "react";
import pokeball from "../../img/pokeball.jpg";
import "./LandingPage.css";
import Footer from "../Footer/Footer";

function LandingPage() {
    return (
        <div>
            <img className="pokeball" src={pokeball} alt="pokeball"></img>
            <Footer></Footer>
        </div>
    )
}

export default LandingPage;