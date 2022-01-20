import React from "react";

const About = ({ history }) => {
  const handleGoBack = () => {
    history.go(-1);
  };
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default About;
