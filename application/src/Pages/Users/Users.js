import React from "react";
import UserCard from "../../Components/UserCard/UserCard";
import { users } from "../../constants/users";
import "./Users.css";
const Users = () => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
