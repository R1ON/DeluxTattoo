import React, { Component } from 'react';

import HomeContainer from './Containers';
import RegistrationModal from './Containers/RegistrationModal';

import HomeReducers from './Reducers';

const Home = () => {
  return (
      <div>
        <div className="home-container">
          <HomeContainer />
          <RegistrationModal />
        </div>
      </div>
    );
};

export {
  Home as default,
  HomeReducers
};