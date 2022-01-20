import React from "react";
import { Button } from "react-bootstrap";
import { users } from "../../constants/users";
const UserDetails = ({ match, history }) => {
  const findUser = users.find((el) => el.id === +match.params.id);

  return (
    <div>
      <h1>Welcome, this is the User page</h1>
      <img
        src="https://static.vecteezy.com/ti/vecteur-libre/t2/1993889-belle-femme-latine-avatar-icone-personnage-gratuit-vectoriel.jpg"
        alt="avatar"
      />
      <h2>{findUser.name}</h2>
      <h5>{findUser.username}</h5>
      <h5>{findUser.email}</h5>
      <h5>{findUser.phone}</h5>
      <Button
        variant="info"
        className="go-back-btn"
        onClick={() => history.goBack()}
      >
        Go Back
      </Button>
    </div>
  );
};

export default UserDetails;
