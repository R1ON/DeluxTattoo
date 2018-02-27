import React, { Component } from 'react';

import homeReducers from './reducers';

import HomeContainer from './containers';

import Slider from './containers/slider';

import RegistrationModal from '../../containers/modals/registration';
import SignInModal from '../../containers/modals/signIn';
import BurgerMenu from '../../components/burgerMenu/Menu';

class Home extends Component {
  componentWillReceiveProps() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="home-container">
        <BurgerMenu />
        <HomeContainer />
        <RegistrationModal />
        <SignInModal />
        <Slider />
      </div>
    );
  }
}

export {
  Home as default,
  homeReducers
};
