import axios from "axios";
const BASEURL = "https://pokeapi.co/api/v2/pokemon/"

export default {
    search: function (query) {
        console.log(axios.get(BASEURL + query));
        return axios.get(BASEURL + query);
    }
};