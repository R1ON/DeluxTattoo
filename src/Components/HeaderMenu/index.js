import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { MENU_LINKS } from '../../Constants';

class HeaderMenu extends Component {
  render() {
    return (
      <div>
        <Row className="home-header">
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
        </Row>
      </div>
    );
  }
};

export default HeaderMenu;
