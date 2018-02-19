import React, { Component } from 'react';

import MainContainer from './mainWrapper';

import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';

import '../../../../styles/pages/portfolio/index.sass';

class PortfolioContainer extends Component {
  render() {
    return (
      <div className="portfolio">
        <HeaderComponent />
        <MainContainer />
        <FooterComponent />
      </div>
    );
  }
}

export default PortfolioContainer;
