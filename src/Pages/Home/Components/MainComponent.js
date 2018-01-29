import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-fa';
import { Parallax } from 'react-parallax';
import Masonry from 'react-masonry-component';

import { MENU_LINKS } from '../../../Constants';

const IMPORTANTLY_ABOUT = [
  `If you want to get to the session, 
  find out the cost of a tattoo, 
  consult a master, draw a unique sketch or 
  just learn how to make tattoos, 
  then you need to register on our site`
];

const MASONRY_IMAGES = [
	require('../../../Assets/img/homeImage/workExamples/1.jpg'),
	require('../../../Assets/img/homeImage/workExamples/2.jpg'),
	require('../../../Assets/img/homeImage/workExamples/3.jpg'),
	require('../../../Assets/img/homeImage/workExamples/4.jpg'),
	require('../../../Assets/img/homeImage/workExamples/5.jpg'),
	require('../../../Assets/img/homeImage/workExamples/6.jpg'),
	require('../../../Assets/img/homeImage/workExamples/7.jpg'),
	require('../../../Assets/img/homeImage/workExamples/8.jpg'),
	require('../../../Assets/img/homeImage/workExamples/9.jpg'),
	require('../../../Assets/img/homeImage/workExamples/10.jpg'),
	require('../../../Assets/img/homeImage/workExamples/11.jpg'),
	require('../../../Assets/img/homeImage/workExamples/12.jpg'),
	require('../../../Assets/img/homeImage/workExamples/13.jpg'),
	require('../../../Assets/img/homeImage/workExamples/14.jpg')
];

const MainComponent = ({ onImageModalOpen, onModalOpen }) => (
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
      <Parallax bgImage={require('../../../Assets/img/homeImage/parallaxImage.jpg')} strength={400}>
        <div className="home-main-parallax-container" />
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
          View all works by <Link to={MENU_LINKS[1].url}>reference</Link>
        </div>
      </Col>
    </Row>

    <Masonry className="home-main-masonry">
      {MASONRY_IMAGES.map((image, index) => {
        let name = 'home-main-examples';

        if (index === 3 || index === 4 || index === 6 || index === 10 || index === 12) {
          name += ' sm-disable';
        }
        if (index === 8 || index === 11 || index === 13) {
          name += ' xs-disable';
        }
        return (
          <div
            className={name}
            key={index}
            onClick={onImageModalOpen}
          >
            <img src={image} alt="" />
          </div>
        );
      })}
    </Masonry>
    <div className="home-main-masonry-border" />

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
  </div>
);

export default MainComponent;
