import React from "react";

function PokeCard(props) {
    return (
        <div className="card text-center">
            <div className="card-header">
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}

export default PokeCard;