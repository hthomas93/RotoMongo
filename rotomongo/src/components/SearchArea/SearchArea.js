import React, { Component } from "react";
// import NavBar from "../NavBar/NavBar";
import "./SearchArea.css"
import API from "../../utils/API"
import SearchForm from "../SearchForm/SearchForm";
import PokeCard from "../PokeCard/PokeCard";

class SearchArea extends Component {
    // this sets the state of the component to be the search result
    state = {
        result: {},
        search: ""
    }

    // as a test case, when the component mounts, do a search for bulbasaur from the API
    componentDidMount() {
        this.searchMons("bulbasaur");
    }

    searchMons = query => {
        API.search(query.toLowerCase())
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchMons(this.state.search);
    }

    renderCard() {
        if (this.state.result.id <= 151) {
            return (
                <PokeCard
                    name={this.state.result.name}

                    id={this.state.result.id}

                    type={this.state.result.types
                        ?
                        this.state.result.types[0].type.name : null}

                    height={Math.ceil((this.state.result.height * .1))}
                    weight={Math.floor((this.state.result.weight / 22))}
                    speed={this.state.result.stats
                        ?
                        this.state.result.stats[0].base_stat
                        : null}
                    spdef={this.state.result.stats
                        ?
                        this.state.result.stats[1].base_stat
                        : null}
                    spatk={this.state.result.stats
                        ?
                        this.state.result.stats[2].base_stat
                        : null}
                    defense={this.state.result.stats
                        ?
                        this.state.result.stats[3].base_stat
                        : null}

                    attack={this.state.result.stats
                        ?
                        this.state.result.stats[4].base_stat
                        : null}
                    hp={this.state.result.stats
                        ?
                        this.state.result.stats[5].base_stat
                        : null}
                >
                </PokeCard>
            )
        }
    }

    render() {

        return (
            <div className="page">
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}>
                </SearchForm>
                {/* I really need to clean up this area, this code is wet AF*/}
                {this.renderCard()}
            </div>
        )
    }
}

export default SearchArea;