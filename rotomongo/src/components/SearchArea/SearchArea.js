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
                >
                </PokeCard>
            </div>
        )
    }
}

export default SearchArea;