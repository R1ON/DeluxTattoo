import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-fa';
import { Carousel } from 'react-responsive-carousel';
import StarRatings from 'react-star-ratings';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { COMMENTS } from '../constants/home';
import { MENU_SECTIONS } from '../../../constants/menu';

class FooterComponent extends Component {
  reviewComponent(img, title, comment, quality, price, index) {
    return (
      <div className="home-footer-carousel" key={index}>
        <div className="home-footer-container">
          <div className="home-footer-avatar">
            <img src={require(`../../../../images/homeImage/peoplePhoto/${img}.jpg`)} alt="" />
          </div>
          <div className="home-footer-review">
            <div className="home-footer-title">{title}</div>
            <div className="home-footer-comment">{comment}</div>
            <div className="home-footer-quality">
              Quality:<span className="home-footer-stars">{this.starComponent(quality)}</span>
            </div>
            <div className="home-footer-price">
              Price:<span className="home-footer-stars">{this.starComponent(price)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  starComponent(rating) {
    return (
      <StarRatings
        rating={rating}
        starSpacing="1px"
        starWidthAndHeight="30px"
        starRatedColor="#5d2532"
        isAggregateRating={false}
        numOfStars={5}
      />
    );
  }

  render() {
    const { onModalOpen } = this.props;

    return (
      <div className="home-footer">
        <Carousel
          showStatus={false}
          showThumbs={false}
          emulateTouch
          autoPlay
          infiniteLoop
          interval={10000}
        >
          {COMMENTS.map((comment, index) => (
            this.reviewComponent(comment.img, comment.title, comment.text, comment.quality, comment.price, index)
          ))}
        </Carousel>

        <div className="home-footer-links">
          <Row>
            <Col xs={12} sm={12} md={5}>
              <Col sm={6} md={12}>
                <div className="home-footer-delux">
									Sign in
                  <span className="home-footer-delux-logo"> DELUX TATTOO</span>
                </div>
                <p className="home-footer-button" onClick={onModalOpen}>SIGN IN</p>
              </Col>

              <Col sm={6} md={12}>
                <div className="home-footer-subscribe">
									You can subscribe to us in social networks
                </div>
                <a href="https://www.youtube.com/user/2cssTV/featured" rel="noopener noreferrer" target="_blank">
                  <Icon className="home-footer-links-icon" name="youtube" />
                </a>
                <a href="https://github.com/R1ON" rel="noopener noreferrer" target="_blank">
                  <Icon className="home-footer-links-icon" name="github" />
                </a>
                <a href="https://t.me/zdarova1234" rel="noopener noreferrer" target="_blank">
                  <Icon className="home-footer-links-icon" name="telegram" />
                </a>
                <a href="https://vk.com/sobaka_bez_anusa" rel="noopener noreferrer" target="_blank">
                  <Icon className="home-footer-links-icon" name="vk" />
                </a>
              </Col>
            </Col>

            <Col xs={12} sm={12} md={7}>
              <Col sm={2} md={4} className="home-footer-navigate hidden-xs">
                <div className="home-footer-navigate-title">NAVIGATE</div>

                {MENU_SECTIONS.map(section => (
                  <div key={section.id}>
                    <Link to={section.url}>{section.title}</Link>
                  </div>
                ))}
              </Col>
              <Col xs={12} sm={10} md={8} className="home-footer-navigate">
                <div className="home-footer-navigate-title">CONTACTS</div>
                <Col xs={12} sm={6} md={12} className="home-footer-navigate-info">
                  <div>Administrator:</div>
                  <div>Number: <span>8 (930) 849-65-18</span></div>
                  <div>E-mail: <span>r.maximov2012@yandex.ru</span></div>
                </Col>
                <Col xs={12} sm={6} md={12} className="home-footer-navigate-info">
                  <div className="home-footer-navigate-tagline">Assistant:</div>
                  <div>Number: <span>8 (800) 555-35-35</span></div>
                  <div>E-mail: <span>test@yandex.ru</span></div>
                </Col>
              </Col>
            </Col>
          </Row>
        </div>

        <div className="home-footer-developer">
          <Row>
            <Col sm={12} md={12}>
              <span className="home-footer-developer-info">
                © 2018 Tattoo Delux Studio. All Rights Reserved
              </span>
              <span className="home-footer-developer-info">Developer: R1ON</span>
              <span className="home-footer-developer-info"><a href="/">Privacy Policy</a></span>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
