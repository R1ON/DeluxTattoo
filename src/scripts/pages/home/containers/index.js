import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import scrollToComponent from 'react-scroll-to-component';

import { isOpenModal } from '../../../actions/modalActions';
import { isOpenSlider } from '../actions/sliderActions';

import HeaderWrapper from './headerWrapper';

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
      this.onSliderOpening = () => {};
    } else this.onSliderOpening = this.onSliderOpening.bind(this);

    this.onRegistrationModalOpening = this.onRegistrationModalOpening.bind(this);
    this.onSignInModalOpening = this.onSignInModalOpening.bind(this);

    this.bottomScrolling = this.bottomScrolling.bind(this);
  }

  onRegistrationModalOpening() {
    const { isOpenRegistration } = this.props;

    this.props.isOpenModal(!isOpenRegistration, false);
  }

  onSignInModalOpening() {
    const { isOpenSignIn } = this.props;

    this.props.isOpenModal(false, !isOpenSignIn);
  }

  onSliderOpening(event) {
    const { isOpen } = this.props;

    let imageSrc = event.target.querySelectorAll('img')[0].attributes[0].nodeValue;
    imageSrc = parseInt(imageSrc.replace(/[^0-9]/g, ''), 10);

    this.props.isOpenSlider(!isOpen, imageSrc);
  }

  bottomScrolling(mainTitle) {
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
          <HeaderWrapper
            scrollBottom={this.bottomScrolling}
            openModal={this.onSignInModalOpening}
          />
          <MainComponent
            openSlider={this.onSliderOpening}
            openModal={this.onRegistrationModalOpening}
          />
          <FooterComponent
            openModal={this.onSignInModalOpening}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  isOpenRegistration: PropTypes.bool.isRequired,
  isOpenSignIn: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  const {
    isOpenRegistration,
    isOpenSignIn
  } = state.modalReducers.isOpenModalReducer;
  const { isOpen } = state.homeReducers.isOpenSliderReducer;

  return { isOpenRegistration, isOpenSignIn, isOpen };
};

const mapDispatchToProps = dispatch => ({
  isOpenModal: (isOpenRegistration, isOpenSignIn) => dispatch(isOpenModal(isOpenRegistration, isOpenSignIn)),
  isOpenSlider: (isOpen, imageSrc) => dispatch(isOpenSlider(isOpen, imageSrc))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
