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
      </div>
    );
  }
};

export default FooterComponent;
