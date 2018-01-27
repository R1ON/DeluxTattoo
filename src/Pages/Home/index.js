import React from 'react';

import HomeContainer from './Containers';
import RegistrationModal from './Containers/RegistrationModal';
import SignInModal from './Containers/SignInModal';
import ImageModal from './Containers/ImageModal';

import HomeReducers from './Reducers';

const Home = () => (
  <div>
    <div className="home-container">
      <HomeContainer />
      <RegistrationModal />
      <SignInModal />
      <ImageModal />
    </div>
  </div>
);

export {
  Home as default,
  HomeReducers
};
