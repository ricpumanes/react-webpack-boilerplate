import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Home = (props) => {
  return (
    <div className="h-screen">
      <div className="bg-gray-500">home</div>
      <Button>CLick me!</Button>
    </div>
  );
};

Home.propTypes = {};

export default Home;
