import axios from "axios";
const BASEURL = "https://pokeapi.co/api/v2/pokemon/";

export default {
    // this API GET request returns the pokemon who was searched for by name
    search: function (query) {
        console.log(axios.get(BASEURL + query));
        return axios.get(BASEURL + query);
    },

    // this API GET request returns all of the original 151 pokemon
    getAll: function () {
        console.log(axios.get(BASEURL + "?limit=151"))
        return axios.get(BASEURL + "?limit=151");
    }
};