import React, { Component } from 'react';

import MainWrapper from './mainWrapper';

import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';

import '../../../../styles/pages/portfolio/index.sass';

class PortfolioContainer extends Component {
  render() {
    return (
      <div className="portfolio">
        <HeaderComponent />
        <MainWrapper />
        <FooterComponent />
      </div>
    );
  }
}

export default PortfolioContainer;
