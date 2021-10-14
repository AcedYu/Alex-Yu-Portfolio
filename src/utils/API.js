import axios from "axios";

// eslint-disable-next-line
export default {
  getRepos: function() {
    return axios.get("https://api.github.com/users/AcedYu/repos?sort=updated&per_page=100");
  }
};