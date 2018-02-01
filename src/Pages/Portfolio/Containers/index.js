import React, { Component } from 'react';

import MainContainer from './MainContainer';

import HeaderComponent from '../Components/HeaderComponent';
import FooterComponent from '../Components/FooterComponent';

import '../Styles/HeaderStyle.sass';
import '../Styles/MainStyle.sass';
import '../Styles/FooterStyle.sass';

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
