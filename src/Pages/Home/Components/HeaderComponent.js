import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-fa';

import { MENU_LINKS } from '../../../Constants';

import '../Styles/HeaderStyle.sass'

class HeaderComponent extends Component {
  render() {
    const {
      styles,
      onMouseMove,
      onBottomScroll,
      onModalOpen
    } = this.props;

    return (
      <div>
        <Row
          className="home-header"
          style={styles}
          onMouseMove={onMouseMove}
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
            <p className="home-header-button" onClick={onModalOpen}>
              SIGN IN
            </p>
          </Col>

          <Col md={12}>
            <Icon
              className="home-header-down"
              name="angle-double-down"
              onClick={() => onBottomScroll(this.mainTitle)}
            />
          </Col>
        </Row>

        <div className="home-main">
          <Row>
            <Col md={12}>
              <div className="home-main-title" ref={(title) => { this.mainTitle = title }}>
                ABOUT US
              </div>
            </Col>
            <Col md={12}>
              <div className="home-main-tagline">
                Briefly about our studio
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
};

export default HeaderComponent;
