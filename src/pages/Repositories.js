import React from "react";
import API from "../utils/API.js";

import RepoList from "../components/RepoList.js";

const Repositories = () => {
  const [repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    getRepos();
  },[]);

  async function getRepos() {
    var repoData = await API.getRepos();
    setRepos(repoData.data);
  }

  return(
    <div className="container">
      <h1 className="text-white text-center">My Repositories</h1>
      <RepoList repos={repos}/>
    </div>
  )
}

export default Repositories;