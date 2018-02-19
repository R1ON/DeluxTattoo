import React, { Component } from 'react';

import HomeReducers from './reducers';

import HomeContainer from './containers';
import ImageModal from './containers/imageModal';

import RegistrationModal from '../../containers/modals/registration';
import SignInModal from '../../containers/modals/signIn';


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
