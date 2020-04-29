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

    // as a test case, when the component mounts, do a search for charmeleon from the API
    componentDidMount() {
        this.searchMons("charmeleon");
    }

    searchMons = query => {
        API.search(query)
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

    render() {
        return (
            <div>
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}>
                </SearchForm>
                <PokeCard name={this.state.result.name}
                    id={this.state.result.id}
                    // type1={this.state.result.types[0]}
                    // type2={this.state.result.types[1]}
                    height={(this.state.result.height / 10)}
                    weight={Math.floor((this.state.result.weight / 22))}
                // speed={this.state.result.stats[0].base_stat}
                // spdef={this.state.result.stats[1].base_stat}
                // spatk={this.state.result.stats[2].base_stat}
                // defense={this.state.result.stats[3].base_stat}
                // attack={this.state.result.stats[4].base_stat}
                // hp={this.state.result.stats[5].base_stat}
                >
                </PokeCard>
            </div>
        )
    }
}

export default SearchArea;