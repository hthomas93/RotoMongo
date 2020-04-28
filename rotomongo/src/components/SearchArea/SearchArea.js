import React from "react";
import NavBar from "../NavBar/NavBar"
import "./SearchArea.css"

const SearchArea = (props) => {
    return (
        <div className="maindiv">
            <div>
                <NavBar />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 searchfield">
                        <div className="mon-search">
                            <form onSubmit={props.searchMon} action="">
                                <div className="input-group mb-3">
                                    <input onChange={props.handleSearch} id="isbn-input" type="text" className="form-control" aria-label="Your ISBN" aria-describedby="button-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="submit" id="search-button">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchArea;