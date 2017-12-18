import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Parallax, Background } from 'react-parallax';
import { slide as Menu } from 'react-burger-menu';

import { MENU_LINKS } from '../../../Constants';

import logo from "../../../Assets/img/8.jpg";
import '../Styles/HeaderStyle.sass';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundPositionX: '10%',
      backgroundPositionY: '10%'
    };

    this.onMouseMoveParallaxEffect = this.onMouseMoveParallaxEffect.bind(this);
  }

  onMouseMoveParallaxEffect(e) {
    let x = (e.pageX * -1 / 20), y = (e.pageY * -1 / 10);

    this.setState({
      backgroundPositionX: x + 20,
      backgroundPositionY: y + 5
    })
  }


  render() {
    return (
      <div>
        <Col className="hidden-lg hidden-md">
          <div className="outer-container">
            <Menu>
              <a href="#">{MENU_LINKS.LINK_1}</a><br />
              <a href="#">{MENU_LINKS.LINK_2}</a><br />
              <a href="#">{MENU_LINKS.LINK_3}</a><br />
              <a href="#">{MENU_LINKS.LINK_4}</a>
            </Menu>
          </div>
        </Col>

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

        <Row
          className="home-header-title"
          style={this.state}
          onMouseMove={this.onMouseMoveParallaxEffect}
        >
          <Col md={12}>
            <div>Welcome to our studio!</div>
            <p className="home-header-button">
              SIGN IN
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="test">
              ТЕКСТИК
            </div>
          </Col>
        </Row>


        <Parallax bgImage={logo} strength={400}>
          <div className="test2"></div>
        </Parallax>

        <Row>
          <Col md={12}>
            <div className="test">
              ТЕКСТИК
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="test">
              ТЕКСТИК
            </div>
          </Col>
        </Row>
      </div>
    );
  }
};

export default HeaderComponent;
