import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Icon } from 'react-fa';
import scrollToComponent from 'react-scroll-to-component';

import { isOpenModalAction } from '../Actions/ModalActions';
import { isOpenImageModalAction } from '../Actions/ImageModalActions';

import BurgerMenu from '../../../Components/BurgerMenu';

import HeaderContainer from './HeaderContainer';
import MainComponent from '../Components/MainComponent';
import FooterComponent from '../Components/FooterComponent';

import '../Styles/HeaderStyle.sass';
import '../Styles/MainStyle.sass';
import '../Styles/FooterStyle.sass';

// import { Link } from 'react-router';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: ''
    };

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
    scrollToComponent(mainTitle, { offset: 10 ,align: 'top', duration: 1000 });
  }

  render() {
    return (
      <div>
        {/*<div style={{ display: this.state.display}} className="preloader">*/}
          {/*<Icon size="5x" spin name="spinner" />*/}
        {/*</div>*/}

        <div className="home-container">
          <BurgerMenu />
          <HeaderContainer
            onBottomScroll={this.onBottomScroll}
            onModalOpen={this.onSignInModalOpen}
          />
          <MainComponent
            onImageModalOpen={this.onImageModalOpen}
            onModalOpen={this.onRegistrationModalOpen}
          />
          <FooterComponent
            onModalOpen={this.onSignInModalOpen}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {
    isOpenRegistration,
    isOpenSignIn
  } = state.HomeReducers.isOpenModalReducer;
  const { isOpenImage } = state.HomeReducers.isOpenImageModalReducer;

  return { isOpenRegistration, isOpenSignIn, isOpenImage };
};


const mapDispatchToProps = (dispatch) => {
  return {
    isOpenModalAction: (isOpenRegistration, isOpenSignIn) => dispatch(isOpenModalAction(isOpenRegistration, isOpenSignIn)),
    isOpenImageModalAction: (isOpenImage, imageSrc) => dispatch(isOpenImageModalAction(isOpenImage, imageSrc))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
