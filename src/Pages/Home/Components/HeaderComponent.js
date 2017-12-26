import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import '../Styles/HeaderStyle.sass'

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <Row
          className="home-header-title"
          style={this.props.styles}
          onMouseMove={this.props.onMouseMove}
        >
          <Col md={12}>
            <div>WELCOME TO OUR STUDIO</div>
            <p className="home-header-button">
              SIGN IN
            </p>
          </Col>
        </Row>
      </div>
    );
  }
};

export default HeaderComponent;
