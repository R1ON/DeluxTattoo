import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import { RegistrationAction } from '../Actions/HomeAction';

import BurgerMenu from '../../../Components/BurgerMenu';

import HeaderComponent from '../Components/HeaderComponent';
import MainComponent from '../Components/MainComponent';

import '../Styles/HeaderStyle.sass';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        backgroundPositionX: '10%',
        backgroundPositionY: '10%'
      },
      display: ''
    };

    if (document.body.clientWidth < 991) {
      this.onMouseMoveParallaxEffect = () => {};
    } else this.onMouseMoveParallaxEffect = this.onMouseMoveParallaxEffect.bind(this);

    window.onload = () => {
      this.setState({ display: 'none' })
    };

    this.onModalOpen = this.onModalOpen.bind(this);
  }

  onMouseMoveParallaxEffect(e) {
    let x = (e.pageX * -1 / 20), y = (e.pageY * -1 / 10);

    this.setState({
      style: {
        backgroundPositionX: x,
        backgroundPositionY: y - 50
      }
    })
  }

  onModalOpen() {
    this.props.RegistrationAction(!this.props.isOpen)
  }

  render() {
    return (
      <div>
        {/*<div style={{ display: this.state.display}} className="preloader">*/}
          {/*<Icon size="5x" spin name="spinner" />*/}
        {/*</div>*/}

        <div className="home-container">
          <BurgerMenu />
          <HeaderComponent styles={this.state.style} onMouseMove={this.onMouseMoveParallaxEffect} />

          <MainComponent onModalOpen={this.onModalOpen} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.homeReducers.RegistrationReducer.isOpen
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    RegistrationAction: (isOpen) => dispatch(RegistrationAction(isOpen))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
