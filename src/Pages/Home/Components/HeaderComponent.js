import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Parallax, Background } from 'react-parallax';


import logo from "../../../Assets/img/8.jpg";
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
            <div>WELCOME TO OUR STUDIO!</div>
            <p className="home-header-button">
              SIGN IN
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="test">
              ТЕКСТИКE
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
