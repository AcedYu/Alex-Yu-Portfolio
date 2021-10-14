import React from "react";
import moment from "moment";

const RepoListItem = ({ name, url, update, language }) => {
  var newDate = moment(update).format('MMMM Do YYYY, h:mm a');
  return (
    <a href={url} target="_blank" rel="noreferrer" className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          <h4>{name}</h4>
        </div>
      Last updated {newDate}
    </div>
    <div>{language}</div>
    </a>
  )
}

export default RepoListItem;
