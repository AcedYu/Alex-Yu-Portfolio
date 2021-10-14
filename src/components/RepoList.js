import React from "react";
import RepoListItem from "./RepoListItem.js";

const RepoList = ({ repos }) => {
  return(
    <div className="list-group">
      {
        repos.map(repo => (
          <RepoListItem
          name={repo.full_name}
          url={repo.html_url}
          update={repo.updated_at}
          language={repo.language}
          />
        ))
      }
    </div>
  )
}

export default RepoList;

