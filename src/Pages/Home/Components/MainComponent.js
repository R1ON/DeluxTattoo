import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-fa';
import { Parallax, Background } from 'react-parallax';
import Masonry from 'react-masonry-component';

import '../Styles/HeaderStyle.sass'

const IMPORTANTLY_ABOUT = [
  `If you want to get to the session, 
  find out the cost of a tattoo, 
  consult a master, draw a unique sketch or 
  just learn how to make tattoos, 
  then you need to register on our site`
];

class MainComponent extends Component {
  render() {
    const { onModalOpen } = this.props;

    return (
      <div className="home-main">
        <Row>
          <Col md={4} sm={6} xs={12}>
            <Icon className="home-main-icon" size="5x" name="thumbs-up" />
            <div className="home-main-icon-title">GREAT QUALITY</div>
            <div className="home-main-icon-about">We have the best masters and extensive experience behind the shoulders</div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Icon className="home-main-icon" size="5x" name="clock-o" />
            <div className="home-main-icon-title">FAST</div>
            <div className="home-main-icon-about">Experience of masters allows you to make tattoos much faster</div>
          </Col>
          <Col md={4} sm={12} xs={12}>
            <Icon className="home-main-icon" size="5x" name="shower" />
            <div className="home-main-icon-title">CLEAN STUDIO</div>
            <div className="home-main-icon-about">Clean studio, sterile equipment, disposable needles</div>
          </Col>
        </Row>

        <Row>
          <Col md={4} sm={6} xs={12}>
            <Icon className="home-main-icon" size="5x" name="wifi" />
            <div className="home-main-icon-title">FREE WI-FI</div>
            <div className="home-main-icon-about">To get distracted during the session, you can use our internet</div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Icon className="home-main-icon" size="5x" name="vcard-o" />
            <div className="home-main-icon-title">GRADUATED MASTERS</div>
            <div className="home-main-icon-about">Each master has a certificate of completion of tattooing courses</div>
          </Col>
          <Col md={4} sm={12} xs={12}>
            <Icon className="home-main-icon" size="5x" name="coffee" />
            <div className="home-main-icon-title">FREE COFFEE</div>
            <div className="home-main-icon-about">If you are very hurt, you can ask the master to pour you coffee</div>
          </Col>
        </Row>

        <div className="home-main-parallax">
          <Parallax bgImage={require('../../../Assets/img/parallaxImage.jpg')} strength={400}>
            <div className="home-main-parallax-container"></div>
          </Parallax>
        </div>

        <Row>
          <Col md={12}>
            <div className="home-main-title">
              WORK EXAMPLES
            </div>
          </Col>
          <Col md={12}>
            <div className="home-main-tagline">
              View all works by <a href="">reference</a>
            </div>
          </Col>
        </Row>

        <Masonry className="home-main-masonry">
          <div className="home-main-examples"><img src={require('../../../Assets/img/WorkExamples/1.jpg')} /></div>
          <div className="home-main-examples"><img src={require('../../../Assets/img/WorkExamples/2.jpg')} /></div>
          <div className="home-main-examples"><img src={require('../../../Assets/img/WorkExamples/3.jpg')} /></div>
          <div className="home-main-examples sm-disable"><img src={require('../../../Assets/img/WorkExamples/4.jpg')} /></div>
          <div className="home-main-examples sm-disable"><img src={require('../../../Assets/img/WorkExamples/5.jpg')} /></div>
          <div className="home-main-examples"><img src={require('../../../Assets/img/WorkExamples/6.jpg')} /></div>
          <div className="home-main-examples sm-disable"><img src={require('../../../Assets/img/WorkExamples/7.jpg')} /></div>
          <div className="home-main-examples "><img src={require('../../../Assets/img/WorkExamples/8.jpg')} /></div>
          <div className="home-main-examples xs-disable"><img src={require('../../../Assets/img/WorkExamples/9.jpg')} /></div>
          <div className="home-main-examples"><img src={require('../../../Assets/img/WorkExamples/10.jpg')} /></div>
          <div className="home-main-examples sm-disable"><img src={require('../../../Assets/img/WorkExamples/11.jpg')} /></div>
          <div className="home-main-examples xs-disable"><img src={require('../../../Assets/img/WorkExamples/12.jpg')} /></div>
          <div className="home-main-examples sm-disable"><img src={require('../../../Assets/img/WorkExamples/13.jpg')} /></div>
          <div className="home-main-examples xs-disable"><img src={require('../../../Assets/img/WorkExamples/14.jpg')} /></div>
        </Masonry>
        <div className="home-main-masonry-border"></div>

        <Row className="importantly">
          <Col md={12}>
            <div className="home-main-title importantly-title">
              IMPORTANTLY
            </div>
          </Col>
          <Col md={12}>
            <div className="home-main-tagline importantly-tagline">
              <div>{IMPORTANTLY_ABOUT}</div>
            </div>
          </Col>
          <Col md={12}>
            <p onClick={onModalOpen} className="home-header-button importantly-button">REGISTRATION</p>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="home-main-title">
              test<br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </Col>

        </Row>


      </div>
    );
  }
};

export default MainComponent;
