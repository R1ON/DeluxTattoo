import React, { Component } from 'react';

import HomeContainer from './Containers';
import CreationModal from './Containers/CreationModal';

import homeReducers from './Reducers';

const Home = () => {
  return (
      <div>
        <div className="home-container">
          <HomeContainer />
          <CreationModal />
        </div>
      </div>
    );
};

export {
  Home as default,
  homeReducers
};