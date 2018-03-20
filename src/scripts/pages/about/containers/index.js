import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderComponent from '../components/Header';

import BurgerMenu from '../../../components/burgerMenu/Menu';

import '../../../../styles/pages/about/index.sass';

class About extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="page">
        <BurgerMenu />
        <HeaderComponent />
      </div>
    );
  }
}

// Home.propTypes = {
// };

// const mapStateToProps = (state) => {
//   const { isOpenRegistration, isOpenSignIn } = state.modalReducers.isOpenModalReducer;
//   const { isOpen, imageSrc } = state.homeReducers.isOpenSliderReducer;
//
//   return { isOpenRegistration, isOpenSignIn, isOpen, imageSrc };
// };
//
// const mapDispatchToProps = dispatch => ({
//   isOpenModal: (isOpenRegistration, isOpenSignIn) => dispatch(isOpenModal(isOpenRegistration, isOpenSignIn)),
//   isOpenSlider: (isOpen, imageSrc) => dispatch(isOpenSlider(isOpen, imageSrc)),
//   switchImageLeft: imageSrc => dispatch(switchImageLeft(imageSrc)),
//   switchImageRight: imageSrc => dispatch(switchImageRight(imageSrc))
// });
//
export default connect(null, null)(About);