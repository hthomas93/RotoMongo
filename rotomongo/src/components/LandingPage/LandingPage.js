import React from "react";
import pokeball from "../../img/pokeball.jpg";
import "./LandingPage.css";

function LandingPage() {
    return (
        <div>
            <img className="pokeball" src={pokeball} alt="pokeball"></img>
        </div>
    )
}

export default LandingPage;