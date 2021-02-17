import axios from 'axios';
const BASEURL = "https://dog.ceo/api/breed";
const RANDOM = "s/image/random";
const LIST = "s/list/all";

export default {
  getRandomImage: function() {
    return axios.get(BASEURL + RANDOM);
  },
  searchDogs: function(query) {
    return axios.get(BASEURL + "/" + query + "/images");
  },
  getBreeds: function() {
    return axios.get(BASEURL + LIST);
  }
}