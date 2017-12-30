import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import Modal from 'react-modal';

import { RegistrationAction } from '../Actions/HomeAction';

import '../Styles/HeaderStyle.sass';

const overlayBackground = {
  overlay : { backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: '999' }
};

class CreationModal extends Component {
  constructor(props) {
    super(props);

    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onCloseModal() {
    this.props.RegistrationAction(!this.props.isOpen)
  }

  render() {
    const { isOpen } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={this.onCloseModal}
        className="modal"
        style={overlayBackground}
        ariaHideApp={false}
      >
        <div className="modal-button-container">
          <Icon
            className="modal-button-close"
            onClick={this.onCloseModal}
            size="2x"
            name="close"
          />
        </div>

        <div className="modal-content">
          <div>
            <span className="modal-label">LOGIN</span>
            <br />
            <input/>
          </div>

          <div>
            <span className="modal-label">MAIL</span>
            <br />
            <input/>
          </div>

          <div>
            <span className="modal-label">PASSWORD</span>
            <br />
            <input/>
          </div>

          <div>
            <span className="modal-label">CONFIRM PASSWORD</span>
            <br />
            <input/>
          </div>

          <Icon
            className="modal-button-ok"
            size="2x"
            name="check"
          />
        </div>
      </Modal>
    );
  }
};


function mapStateToProps(state) {
  return {
    isOpen: state.homeReducers.RegistrationReducer.isOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    RegistrationAction: (isOpen) => dispatch(RegistrationAction(isOpen))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreationModal);