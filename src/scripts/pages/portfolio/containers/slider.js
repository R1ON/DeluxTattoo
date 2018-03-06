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

import { MASTER_INFO } from '../constants/portfolio';

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
    const { master, isOpen, imageSrc } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        className="modal-image modal-image-portfolio"
        style={overlayBackground}
        ariaHideApp={false}
      >
        <div onClick={this.switchImageLeft} className="modal-image-button modal-image-button-left">
          <Icon name="angle-left" />
        </div>
        <div onClick={this.switchImageRight} className="modal-image-button modal-image-button-right">
          <Icon name="angle-right" />
        </div>

        <div className="modal-image-container modal-image-container-portfolio" onClick={this.onCloseModal}>
          <img src={`images/${imageSrc}.jpg`} alt="" />
        </div>

        <div className="modal-image-about">
          {MASTER_INFO
            .filter(selectedMaster => selectedMaster.id === master)
            .map(selectedMaster => selectedMaster.images
              .filter(image => image.id === imageSrc)
              .map(image => (
                <div key={image.id}>
                  <span>Price: {image.price} $.</span>
                  <span>Time: {image.time} h.</span>
                  <span>Style: {image.style}</span>
                </div>
              )))}
        </div>
      </Modal>
    );
  }
}

Slider.propTypes = {
  master: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  imageSrc: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  const { selectMasterReducer, isOpenSliderReducer } = state.portfolioReducers;

  const { master } = selectMasterReducer;
  const { isOpen, imageSrc } = isOpenSliderReducer;

  return { master, isOpen, imageSrc };
};

const mapDispatchToProps = dispatch => ({
  isOpenSlider: (isOpen, imageSrc) => dispatch(isOpenSlider(isOpen, imageSrc)),
  switchImageLeft: imageSrc => dispatch(switchImageLeft(imageSrc)),
  switchImageRight: imageSrc => dispatch(switchImageRight(imageSrc))
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
