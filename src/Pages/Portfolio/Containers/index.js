import React, { Component } from 'react';

import HeaderComponent from '../Components/HeaderComponent';

import '../Styles/HeaderStyle.sass';

class PortfolioContainer extends Component {
  render() {
    return (
      <div className="portfolio">
        <HeaderComponent />
      </div>
    );
  }
};

export default PortfolioContainer;
