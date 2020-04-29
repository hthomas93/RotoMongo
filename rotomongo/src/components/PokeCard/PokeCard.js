import React from "react";

function PokeCard(props) {
    return (
        <div className="card text-center">
            <div className="card-header">
                <img alt="pkmn-img" src={"https://pokeres.bastionbot.org/images/pokemon/" + props.id + ".png"}></img>
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}

export default PokeCard;