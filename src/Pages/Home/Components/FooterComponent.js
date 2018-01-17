import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-fa';
import { Carousel } from 'react-responsive-carousel';
import StarRatings from 'react-star-ratings';

import { COMMENTS } from '../Constants';
import { MENU_LINKS } from '../../../Constants';

import 'react-responsive-carousel/lib/styles/carousel.min.css'

class FooterComponent extends Component {
  reviewComponent(img, title, comment, quality, price, index) {
    return (
      <div className="home-footer-carousel" key={index}>
        <div className="home-footer-container">
          <div className="home-footer-avatar">
            <img src={require(`../../../Assets/img/peoplePhoto/${img}.jpg`)} />
          </div>
          <div className="home-footer-review">
            <div className="home-footer-title">{title}</div>
            <div className="home-footer-comment">{comment}</div>
            <div className="home-footer-quality">Quality:
              <span className="home-footer-stars">
                {this.starComponent(quality)}
              </span>
            </div>
            <div className="home-footer-price">Price:
              <span className="home-footer-stars">
                {this.starComponent(price)}
              </span>
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
        starRatedColor='#5d2532'
        isAggregateRating={false}
        numOfStars={5}
      />
    )
  }

  render() {
    const { onModalOpen } = this.props;

    return (
      <div className="home-footer">
        <Carousel
          showStatus={false}
          showThumbs={false}
          emulateTouch={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={10000}
        >
          {COMMENTS.map((comment, index) => (
            this.reviewComponent(
              comment.img, comment.title, comment.text, comment.quality, comment.price, index
            )
          ))}
        </Carousel>

        <div className="home-footer-links">
          <Row>
            <Col sm={12} md={5}>
              <div className="home-footer-delux">
                Sign in
                <span className="home-footer-delux-logo"> DELUX TATTOO</span>
              </div>
              <p className="home-footer-button" onClick={onModalOpen}>SIGN IN</p>

              <div>You can subscribe to us in social networks</div>
              <a href="https://www.youtube.com/user/2cssTV/featured" target="_blank">
                <Icon className="home-footer-links-icon" name="youtube" />
              </a>
              <a href="https://github.com/R1ON" target="_blank">
                <Icon className="home-footer-links-icon" name="github" />
              </a>
              <a href="https://t.me/zdarova1234" target="_blank">
                <Icon className="home-footer-links-icon" name="telegram" />
              </a>
              <a href="https://vk.com/sobaka_bez_anusa" target="_blank">
                <Icon className="home-footer-links-icon" name="vk" />
              </a>
            </Col>

            <Col sm={12} md={7}>
              <Col sm={6} md={4} className="home-footer-navigate">
                <div className="home-footer-navigate-title">NAVIGATE</div>
                <div><a href="#">{MENU_LINKS.LINK_1}</a></div>
                <div><a href="#">{MENU_LINKS.LINK_2}</a></div>
                <div><a href="#">{MENU_LINKS.LINK_3}</a></div>
                <div><a href="#">{MENU_LINKS.LINK_4}</a></div>
              </Col>
              <Col sm={6} md={8} className="home-footer-navigate">
                <div className="home-footer-navigate-title">CONTACTS</div>
                <div>Administrator:</div>
                <div>Number: <span>8 (930) 849-65-18</span></div>
                <div>E-mail: <span>r.maximov2012@yandex.ru</span></div>

                <div className="home-footer-navigate-tagline">Assistant:</div>
                <div>Number: <span>8 (800) 555-35-35</span></div>
                <div>E-mail: <span>test@yandex.ru</span></div>
              </Col>
            </Col>
          </Row>
        </div>

        <div className="home-footer-developer">
          <Row>
            <Col sm={12} md={12}>
              <span className="home-footer-developer-info">© 2018 Tattoo Delux Studio. All Rights Reserved</span>
              <span className="home-footer-developer-info">Developer: R1ON</span>
              <span className="home-footer-developer-info"><a href="#">Privacy Policy</a></span>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
};

export default FooterComponent;
