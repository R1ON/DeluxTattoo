import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-fa';
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

        <Row>
          <Col md={4}>
            <div>КАЧЕСТВЕННО БЛЯТЬ</div>
            <Icon size="5x" name="thumbs-up" />
          </Col>
          <Col md={4}>
            <div>ЧИСТО СУКА</div>
            <Icon size="5x" name="shower" />
          </Col>
          <Col md={4}>
            <div>МЫ ПИЗДЕЦ ДИПЛОМИРОВАННЫЕ</div>
            <Icon size="5x" name="vcard-o" />
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <div>И БЫСТРЫЕ ТОЖЕ БЛЯТЬ</div>
            <Icon size="5x" name="clock-o" />
          </Col>
          <Col md={4}>
            <div>БЕСПЛАТНЫЙ ИНТЕРНЕТ, НО НЕ ДЛЯ ТЕБЯ ШАКАЛ</div>
            <Icon size="5x" name="wifi" />
          </Col>
          <Col md={4}>
            <div>БЕСПЛАТНЫЙ КОФЕ ДЛЯ ТВОЕЙ МАМАШИ</div>
            <Icon size="5x" name="coffee" />
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
