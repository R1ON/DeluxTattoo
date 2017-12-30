import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { MENU_LINKS } from '../../../Constants';

import '../Styles/HeaderStyle.sass'

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <Row className="header-menu">

        </Row>

        <Row
          className="home-header"
          style={this.props.styles}
          onMouseMove={this.props.onMouseMove}
        >
          <Col md={4}>
            <div className="home-header-logo">
              DELUX TATTOO
            </div>
          </Col>
          <Col md={8} className="hidden-xs hidden-sm">
            <div className="home-header-link">
              <a href="#">{MENU_LINKS.LINK_1}</a>
              <a href="#">{MENU_LINKS.LINK_2}</a>
              <a href="#">{MENU_LINKS.LINK_3}</a>
              <a href="#">{MENU_LINKS.LINK_4}</a>
            </div>
          </Col>

          <Col md={12}>
            <div className="home-header-title">WELCOME TO OUR STUDIO</div>
            <p className="home-header-button">
              SING IN
            </p>
          </Col>
        </Row>
      </div>
    );
  }
};

export default HeaderComponent;
