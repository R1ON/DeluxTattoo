import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Modal from 'react-modal';

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

  onCloseModal() {
    this.props.isOpenImageModalAction(!this.props.isOpenImage)
  }

  render() {
    const { isOpenImage, imageSrc } = this.props;

    return (
      <Modal
        isOpen={isOpenImage}
        onRequestClose={this.onCloseModal}
        className="modal sing-modal"
        style={overlayBackground}
        ariaHideApp={false}
      >
        <img src={imageSrc} />
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