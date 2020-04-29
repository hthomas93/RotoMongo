import axios from "axios";
const BASEURL = "https://pokeapi.co/api/v2/pokemon/"

export default {
    search: function (query) {
        return axios.get(BASEURL + query);
    }
};