import React, { Component } from 'react';

import MainContainer from './MainContainer';

import HeaderComponent from '../Components/HeaderComponent';

import '../Styles/HeaderStyle.sass';
import '../Styles/MainStyle.sass';

class PortfolioContainer extends Component {
  render() {
    return (
      <div className="portfolio">
        <HeaderComponent />
        <MainContainer />
      </div>
    );
  }
}

export default PortfolioContainer;
