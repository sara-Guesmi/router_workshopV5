import React from "react";

const Users = ({ match }) => {
  return (
    <div>
      Users Users
      <h1>{match.params.id}</h1>
    </div>
  );
};

export default Users;
