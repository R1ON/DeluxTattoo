import React, { Component } from 'react';
import { connect } from 'react-redux';
import scrollToComponent from 'react-scroll-to-component';

import { isOpenModalAction } from '../../../actions/modalActions';
import { isOpenImageModalAction } from '../actions/imageModalActions';

import HeaderContainer from './headerWrapper';

import MainComponent from '../components/Main';
import FooterComponent from '../components/Footer';

import BurgerMenu from '../../../components/burgerMenu/Menu';

import '../../../../styles/pages/home/index.sass';

// import { Icon } from 'react-fa';

class Home extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   display: ''
    // };
    //
    // window.onload = () => {
    //   this.setState({ display: 'none' });
    // };

    if (document.body.clientWidth < 480) {
      this.onImageModalOpen = () => {};
    } else this.onImageModalOpen = this.onImageModalOpen.bind(this);

    this.onRegistrationModalOpen = this.onRegistrationModalOpen.bind(this);
    this.onSignInModalOpen = this.onSignInModalOpen.bind(this);

    this.onBottomScroll = this.onBottomScroll.bind(this);
  }

  onRegistrationModalOpen() {
    this.props.isOpenModalAction(!this.props.isOpenRegistration, false);
  }

  onSignInModalOpen() {
    this.props.isOpenModalAction(false, !this.props.isOpenSignIn);
  }

  onImageModalOpen(event) {
    const imageSrc = event.target.querySelectorAll('img')[0].attributes[0].nodeValue;

    this.props.isOpenImageModalAction(!this.props.isOpenImage, imageSrc);
  }

  onBottomScroll(mainTitle) {
    scrollToComponent(mainTitle, { offset: 10, align: 'top', duration: 1000 });
  }

  render() {
    return (
      <div>
        {/* <div style={{ display: this.state.display}} className="preloader"> */}
        {/* <Icon size="5x" spin name="spinner" /> */}
        {/* </div> */}

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
}

const mapStateToProps = (state) => {
  const {
    isOpenRegistration,
    isOpenSignIn
  } = state.modalReducers.isOpenModalReducer;
  const { isOpenImage } = state.HomeReducers.isOpenImageModalReducer;

  return { isOpenRegistration, isOpenSignIn, isOpenImage };
};


const mapDispatchToProps = dispatch => ({
  isOpenModalAction: (isOpenRegistration, isOpenSignIn) => dispatch(isOpenModalAction(isOpenRegistration, isOpenSignIn)),
  isOpenImageModalAction: (isOpenImage, imageSrc) => dispatch(isOpenImageModalAction(isOpenImage, imageSrc))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
