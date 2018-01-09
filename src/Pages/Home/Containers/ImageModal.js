import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Icon } from 'react-fa';

import {
  isOpenImageModalAction,
  switchImageLeft,
  switchImageRight
} from '../Actions/ImageModalActions';

import '../Styles/HeaderStyle.sass';

const overlayBackground = {
  overlay : { backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: '999' }
};

class ImageModal extends Component {
  constructor(props) {
    super(props);

    this.switchImageLeft = this.switchImageLeft.bind(this);
    this.switchImageRight = this.switchImageRight.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onCloseModal(event) {
    if (event.target.tagName !== 'IMG')
      this.props.isOpenImageModalAction(!this.props.isOpenImage, '')
  }

  switchImageLeft() {
    this.props.switchImageLeft()
  }

  switchImageRight() {
    this.props.switchImageRight()
  }

  render() {
    const { isOpenImage, imageSrc } = this.props;

    return (
      <Modal
        isOpen={isOpenImage}
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
          <img src={`images/${imageSrc}.jpg`} />
        </div>
      </Modal>
    );
  }
};


function mapStateToProps(state) {
  const {
    isOpenImage,
    imageSrc
  } = state.HomeReducers.isOpenImageModalReducer;

  return { isOpenImage, imageSrc };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isOpenImageModalAction: (isOpenImage, imageSrc) => dispatch(isOpenImageModalAction(isOpenImage, imageSrc)),
    switchImageLeft: () => dispatch(switchImageLeft()),
    switchImageRight: () => dispatch(switchImageRight())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageModal);