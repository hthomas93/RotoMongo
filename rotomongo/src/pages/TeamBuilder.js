import React, { Component } from "react";

class TeamBuilder extends Component {


    render() {
        return (
            <div className="btn-div">
                <button onClick={this.handleFormSubmit} className="btn btn-primary" type="Submit" value="">Create New Team</button>
            </div>
        );
    }

}

export default TeamBuilder;