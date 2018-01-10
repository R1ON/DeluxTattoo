import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-fa';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css'

class FooterComponent extends Component {
  starComponent() {
    return (
      <span className="home-footer-stars">
        <Icon name="star" className="home-footer-stars-selected" />
        <Icon name="star" className="home-footer-stars-selected" />
        <Icon name="star" />
        <Icon name="star" />
        <Icon name="star" />
      </span>
    )
  }

  render() {
    return (
      <div className="home-footer">

        <Carousel
          showStatus={false}
          showThumbs={false}
          emulateTouch={true}
        >
          <div className="home-footer-carousel">
            <div className="home-footer-container">
              <div className="home-footer-avatar">
                <img src={require(`../../../Assets/img/test.jpg`)} />
              </div>
              <span className="home-footer-review">
                <div className="home-footer-title">Rudolph Crawford</div>
                <div className="home-footer-comment">
                  I did the tattoo in your salon and was satisfied with the quality of the work.
                  After the session, I was served free coffee and given a cookie :)
                </div>
                <div className="home-footer-quality">Quality: {this.starComponent()}</div>
                <div className="home-footer-price">Price: {this.starComponent()}</div>
              </span>
            </div>
          </div>

          <div className="home-footer-carousel">
            <div className="home-footer-container">
              <div className="home-footer-avatar">
                <img src={require(`../../../Assets/img/test.jpg`)} />
              </div>
              <span className="home-footer-review">
                <div className="home-footer-title">Rudolph Crawford</div>
                <div className="home-footer-comment">
                  I did the tattoo in your salon and was satisfied with the quality of the work.
                  After the session, I was served free coffee and given a cookie :)
                </div>
                <div className="home-footer-quality">Quality: {this.starComponent()}</div>
                <div className="home-footer-price">Price: {this.starComponent()}</div>
              </span>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
};

export default FooterComponent;
