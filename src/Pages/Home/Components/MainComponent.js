import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Parallax, Background } from 'react-parallax';

import logo from "../../../Assets/img/8.jpg";
import '../Styles/HeaderStyle.sass'

class MainComponent extends Component {
  render() {
    return (
      <div className="home-main">
        <Row>
          <Col md={12}>
            <div className="home-main-title">
              ABOUT US
            </div>
          </Col>
          <Col md={12}>
            <div className="home-main-tagline">
              Briefly about our studio.
            </div>
          </Col>
        </Row>

        {/*<Parallax bgImage={logo} strength={400}>*/}
          {/*<div className="test2"></div>*/}
        {/*</Parallax>*/}

      </div>
    );
  }
};

export default MainComponent;
