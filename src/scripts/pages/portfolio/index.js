import React, { Component } from 'react';

import portfolioReducers from './reducers';

import PortfolioContainer from './containers';

import BurgerMenu from '../../components/burgerMenu/Menu';

class Portfolio extends Component {
  componentWillReceiveProps() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="portfolio">
        <BurgerMenu />
        <PortfolioContainer />
      </div>
    );
  }
}

export {
  Portfolio as default,
  portfolioReducers
};
