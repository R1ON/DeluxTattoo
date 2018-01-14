import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-fa';
import { Carousel } from 'react-responsive-carousel';
import StarRatings from 'react-star-ratings';

import { COMMENTS } from '../Constants';

import 'react-responsive-carousel/lib/styles/carousel.min.css'

class FooterComponent extends Component {
  reviewComponent(img, title, comment, quality, price) {
    return (
      <div className="home-footer-carousel">
        <div className="home-footer-container">
          <div className="home-footer-avatar">
            <img src={require(`../../../Assets/img/peoplePhoto/${img}.jpg`)} />
          </div>
          <span className="home-footer-review">
            <div className="home-footer-title">{title}</div>
            <div className="home-footer-comment">{comment}</div>
            <div className="home-footer-quality">Quality:
              <span className="home-footer-stars">
                <StarRatings
                  rating={quality}
                  starSpacing="1px"
                  starWidthAndHeight="2.3vw"
                  starRatedColor='#5d2532'
                  isAggregateRating={false}
                  numOfStars={ 5 }
                />
              </span>
            </div>
            <div className="home-footer-price">Price:
              <span className="home-footer-stars">
                <StarRatings
                  rating={price}
                  starSpacing="1px"
                  starWidthAndHeight="2.3vw"
                  starRatedColor='#5d2532'
                  isAggregateRating={false}
                  numOfStars={ 5 }
                />
              </span>
            </div>
          </span>
        </div>
      </div>
    );
  }

  render() {
    const { onModalOpen } = this.props;

    return (
      <div className="home-footer">
        <Carousel
          showStatus={false}
          showThumbs={false}
          emulateTouch={true}
        >
          {COMMENTS.map(comment => (
            this.reviewComponent(
              comment.img, comment.title, comment.text, comment.quality, comment.price
            )
          ))}
        </Carousel>

        <div className="home-footer-links">
          <Row>
            <Col md={5}>
              <div className="home-footer-delux">
                Sign in
                <span className="home-footer-delux-logo"> DELUX TATTOO</span>
              </div>
              <p className="home-footer-button" onClick={onModalOpen}>SIGN IN</p>

              <div>You can subscribe to us in social networks</div>
              <Icon className="home-footer-links-icon" name="youtube" />
              <Icon className="home-footer-links-icon" name="github" />
              <Icon className="home-footer-links-icon" name="telegram" />
              <Icon className="home-footer-links-icon" name="vk" />
            </Col>

            <Col md={7}>
              <Col md={4} className="home-footer-navigate">
                <div className="home-footer-navigate-title">NAVIGATE</div>
                <div>Home</div>
                <div>Portfolio</div>
                <div>Registration</div>
                <div>About</div>
              </Col>
              <Col md={8} className="home-footer-navigate">
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
            <Col md={12}>
              <span className="home-footer-developer-info">© 2018 Tattoo Delux Studio. All Rights Reserved</span>
              <span className="home-footer-developer-info">Developer: R1ON</span>
              <span className="home-footer-developer-info">Privacy Policy</span>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
};

export default FooterComponent;
