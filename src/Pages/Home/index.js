import React, { Component } from 'react';

import HomeContainer from './Containers';
import RegistrationModal from './Containers/RegistrationModal';
import SignInModal from './Containers/SignInModal';
import ImageModal from './Containers/ImageModal';

import HomeReducers from './Reducers';

class Home extends Component {
  componentWillReceiveProps() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="home-container">
        <HomeContainer />
        <RegistrationModal />
        <SignInModal />
        <ImageModal />
      </div>
    );
  }
}

export {
  Home as default,
  HomeReducers
};
