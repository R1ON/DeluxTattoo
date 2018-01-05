import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Icon } from 'react-fa';

import { isOpenImageModalAction } from '../Actions/ModalActions';

import '../Styles/HeaderStyle.sass';

const overlayBackground = {
  overlay : { backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: '999' }
};

class ImageModal extends Component {
  constructor(props) {
    super(props);

    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onCloseModal(event) {
    event.target.tagName === 'DIV'
      ? this.props.isOpenImageModalAction(!this.props.isOpenImage)
      : () => {}
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
        <div className="modal-image-left">
          <Icon name="angle-left" />
        </div>
        <div className="modal-image-right">
          <Icon name="angle-right" />
        </div>


        <div className="modal-image-container" onClick={this.onCloseModal}>
          <img src={imageSrc} />
          <div className="modal-image-close">
            <Icon name="close" />
          </div>
        </div>
      </Modal>
    );
  }
};


function mapStateToProps(state) {
  const {
    isOpenImage,
    imageSrc
  } = state.HomeReducers.isOpenModalReducer;

  return { isOpenImage, imageSrc };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isOpenImageModalAction: (isOpenImage) => dispatch(isOpenImageModalAction(isOpenImage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageModal);