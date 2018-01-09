import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-fa';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../Styles/FooterStyle.sass'

class FooterComponent extends Component {
  starComponent() {
    return (
      <span className="home-footer-stars">
        <Icon name="star" />
        <Icon name="star" />
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
                <div className="home-footer-title">Алексей Навальный</div>
                <div className="home-footer-comment">
                  Хуячил татуху в вашей студии, кольщик мразь, от него воняло говном и выглядел странно
                  но татуху сделал качественную, за это респектую
                </div>
                <div className="home-footer-quality">Качество: {this.starComponent()}</div>
                <div className="home-footer-price">Цена: {this.starComponent()}</div>
              </span>

            </div>
          </div>

          <div className="home-footer-carousel">
            <div className="home-footer-container">
              <div className="home-footer-avatar">
                <img src={require(`../../../Assets/img/test2.jpeg`)} />
              </div>
              <span className="home-footer-review">
                <div className="home-footer-title">Самый красивый Путин в мире</div>
                <div className="home-footer-comment">
                  Тату мастер не платил налоги, ну я и набил ему ебало, а потом еще татуху набил, карочи зачотно
                </div>
                <div className="home-footer-quality">Качество: {this.starComponent()}</div>
                <div className="home-footer-price">Цена: {this.starComponent()}</div>
              </span>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
};

export default FooterComponent;
