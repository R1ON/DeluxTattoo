import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-fa';

import { MENU_SECTIONS } from '../../../constants/menu';

class HeaderComponent extends Component {
  render() {
    const {
      styles,
      mouseMove,
      scrollBottom,
      openModal
    } = this.props;

    return (
      <div>
        <Row className="home-header" style={styles} onMouseMove={mouseMove}>
          <Col md={4}>
            <div className="home-header-logo">
              DELUX TATTOO
            </div>
          </Col>
          <Col md={8} className="hidden-xs hidden-sm">
            <div className="home-header-link">
              {MENU_SECTIONS.map(section => (
                <Link key={section.id} to={section.url}>{section.title.toUpperCase()}</Link>
              ))}
            </div>
          </Col>

          <Col md={12}>
            <div className="home-header-title">WELCOME TO OUR STUDIO</div>
            <p className="home-header-button" onClick={openModal}>
              SIGN IN
            </p>
          </Col>

          <Col md={12}>
            <Icon
              className="home-header-down"
              name="angle-double-down"
              onClick={() => scrollBottom(this.mainTitle)}
            />
          </Col>
        </Row>

        <div className="home-main">
          <Row>
            <Col md={12}>
              <div className="home-main-title" ref={(title) => { this.mainTitle = title; }}>
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
}

export default HeaderComponent;
