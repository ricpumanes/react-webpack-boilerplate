import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
