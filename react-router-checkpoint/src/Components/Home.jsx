import React from "react";
// import { useHistory } from "react-router-dom";

const Home = ({ history }) => {
  //   let history = useHistory();
  return (
    <div>
      Home Home
      <button onClick={() => history.goForward()}>Next</button>
    </div>
  );
};

export default Home;
