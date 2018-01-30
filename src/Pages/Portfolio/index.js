import React, { Component } from 'react';

import PortfolioContainer from './Containers';

class Portfolio extends Component {
  componentWillReceiveProps() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <PortfolioContainer />
      </div>
    );
  }
}

export {
  Portfolio as default
};
