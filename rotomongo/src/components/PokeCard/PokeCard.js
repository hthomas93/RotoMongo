import React from "react";
import "./PokeCard.css";

function PokeCard(props) {

    function upperCase(word) {
        if (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return null;
        }
    }

    return (
        <div className="poke-card">
            <div className="row">
                <div className="col-md-4">
                    <img className="pkmn-img" alt="pkmn-img" src={"https://pokeres.bastionbot.org/images/pokemon/" + props.id + ".png"}></img>
                </div>
                <div className="col-md-4">
                    <h4>National Dex #{props.id}</h4>
                    <h2>{upperCase(props.name)}</h2>
                    {/* national number */}

                    {/* type */}
                    <h3>Type</h3>
                    <h4>{props.type}</h4>
                </div>
                <div className="col-md-4">
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
        </div>
    )
}

export default PokeCard;