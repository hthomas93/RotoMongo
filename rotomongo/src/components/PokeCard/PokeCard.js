import React from "react";

function PokeCard(props) {

    return (
        <div className="card text-center">
            <div className="card-header">
                <img alt="pkmn-img" src={"https://pokeres.bastionbot.org/images/pokemon/" + props.id + ".png"}></img>
                <h2>{props.name}</h2>
                <h3>National Dex #{props.id}</h3>
                {/* national number */}

                {/* type */}
                <h3>Types</h3>
                {/* height */}
                <h3>Height: {props.height}m</h3>
                {/* weight */}
                <h3>Weight: {props.weight}lbs</h3>
                {/* base stats */}
                <h3>Base Stats</h3>
                <ul>
                    <li>HP: {props.hp}</li>
                    <li>Attack: {props.attack}</li>
                    <li>Defense: {props.defense}</li>
                    <li>Speed: {props.speed}</li>
                    <li>Sp. Atk.: {props.spatk}</li>
                    <li>Sp. Def.: {props.spdef}</li>
                </ul>
            </div>
        </div>
    )
}

export default PokeCard;