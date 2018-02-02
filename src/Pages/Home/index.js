import React, { Component } from 'react';

import HomeContainer from './Containers';
import HomeReducers from './Reducers';
import ImageModal from './Containers/ImageModal';

import RegistrationModal from '../../Containers/Modals/RegistrationModal';
import SignInModal from '../../Containers/Modals/SignInModal';


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
