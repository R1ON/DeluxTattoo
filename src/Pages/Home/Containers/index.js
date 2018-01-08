import React, { Component } from 'react';
import { connect } from 'react-redux';
import scrollToComponent from 'react-scroll-to-component';

import {
  isOpenModalAction,
  isOpenImageModalAction
} from '../Actions/ModalActions';

import BurgerMenu from '../../../Components/BurgerMenu';

import HeaderComponent from '../Components/HeaderComponent';
import MainComponent from '../Components/MainComponent';

import '../Styles/HeaderStyle.sass';

// import { Link } from 'react-router';

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

    if (document.body.clientWidth < 480) {
      this.onImageModalOpen = () => {};
    } else this.onImageModalOpen = this.onImageModalOpen.bind(this);

    window.onload = () => {
      this.setState({ display: 'none' })
    };

    this.onRegistrationModalOpen = this.onRegistrationModalOpen.bind(this);
    this.onSignInModalOpen = this.onSignInModalOpen.bind(this);

    this.onBottomScroll = this.onBottomScroll.bind(this);
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

  onRegistrationModalOpen() {
    this.props.isOpenModalAction(!this.props.isOpenRegistration, false)
  }

  onSignInModalOpen() {
    this.props.isOpenModalAction(false, !this.props.isOpenSignIn)
  }

  onImageModalOpen(event) {
    const imageSrc = event.target.querySelectorAll("img")[0].attributes[0].nodeValue;

    this.props.isOpenImageModalAction(!this.props.isOpenImage, imageSrc);
  }

  onBottomScroll(mainTitle) {
    scrollToComponent(mainTitle, { offset: -35 ,align: 'top', duration: 1000 });
  }

  render() {
    return (
      <div>
        {/*<div style={{ display: this.state.display}} className="preloader">*/}
          {/*<Icon size="5x" spin name="spinner" />*/}
        {/*</div>*/}

        <div className="home-container">
          <BurgerMenu />
          <HeaderComponent
            styles={this.state.style}
            onMouseMove={this.onMouseMoveParallaxEffect}
            onBottomScroll={this.onBottomScroll}
            onModalOpen={this.onSignInModalOpen}
          />
          <MainComponent
            onImageModalOpen={this.onImageModalOpen}
            onModalOpen={this.onRegistrationModalOpen}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {
    isOpenRegistration,
    isOpenSignIn,
    isOpenImage
  } = state.HomeReducers.isOpenModalReducer;

  return { isOpenRegistration, isOpenSignIn, isOpenImage };
};


const mapDispatchToProps = (dispatch) => {
  return {
    isOpenModalAction: (isOpenRegistration, isOpenSignIn) => dispatch(isOpenModalAction(isOpenRegistration, isOpenSignIn)),
    isOpenImageModalAction: (isOpenImage, imageSrc) => dispatch(isOpenImageModalAction(isOpenImage, imageSrc))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
