import React, { Component } from 'react';

import aboutReducers from './reducers';

import AboutContainer from './containers';

class About extends Component {
  componentWillReceiveProps() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <AboutContainer />
      </div>
    );
  }
}

export {
  About as default,
  aboutReducers
};
