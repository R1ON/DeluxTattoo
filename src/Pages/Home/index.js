import React, { Component } from 'react';
import HomeContainer from './Containers';

import homeReducers from './Reducers';

const Home = () => {
  return (
      <div>
        <div className="home-container">
          <HomeContainer />
        </div>
      </div>
    );
};

export {
  Home as default,
  homeReducers
};