import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Icon } from 'react-fa';

import {
  isOpenSlider,
  switchImageLeft,
  switchImageRight
} from '../actions/sliderActions';

import '../../../../styles/common/modals.sass';

const overlayBackground = {
  overlay: {
  	backgroundColor: 'rgba(0, 0, 0, 0.8)',
	  zIndex: '999'
  }
};

class Slider extends Component {
  constructor(props) {
    super(props);

    this.switchImageLeft = this.switchImageLeft.bind(this);
    this.switchImageRight = this.switchImageRight.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onCloseModal(event) {
    const { isOpen } = this.props;
    const { tagName } = event.target;

    if (tagName !== 'IMG') {
      this.props.isOpenSlider(!isOpen, 0);
    }

    window.onkeydown = null;
  }

  switchImageLeft() {
    const { imageSrc } = this.props;

    this.props.switchImageLeft(imageSrc);
  }

  switchImageRight() {
    const { imageSrc } = this.props;

    this.props.switchImageRight(imageSrc);
  }

  render() {
    const { isOpen, imageSrc } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        className="modal-image"
        style={overlayBackground}
        ariaHideApp={false}
      >
        <div onClick={this.switchImageLeft} className="modal-image-button modal-image-button-left">
          <Icon name="angle-left" />
        </div>
        <div onClick={this.switchImageRight} className="modal-image-button modal-image-button-right">
          <Icon name="angle-right" />
        </div>

        <div className="modal-image-container" onClick={this.onCloseModal}>
          <img src={`images/${imageSrc}.jpg`} alt="" />
        </div>
      </Modal>
    );
  }
}

Slider.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  imageSrc: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  const { isOpen, imageSrc } = state.homeReducers.isOpenSliderReducer;

  return { isOpen, imageSrc };
};

const mapDispatchToProps = dispatch => ({
  isOpenSlider: (isOpen, imageSrc) => dispatch(isOpenSlider(isOpen, imageSrc)),
  switchImageLeft: imageSrc => dispatch(switchImageLeft(imageSrc)),
  switchImageRight: imageSrc => dispatch(switchImageRight(imageSrc))
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
