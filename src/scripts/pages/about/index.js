import React, { Component } from 'react';

import aboutReducers from './reducers';

class About extends Component {
  componentWillReceiveProps() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        test
      </div>
    );
  }
}

export {
  About as default,
  aboutReducers
};
