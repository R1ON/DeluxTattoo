import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-fa';
import { Carousel } from 'react-responsive-carousel';
import StarRatings from 'react-star-ratings';

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
          {this.reviewComponent(
            `photo1`, `Rudolph Crawford`,
            `I did the tattoo in your salon and was satisfied with the quality of the work.
             After the session, I was served free coffee and given a cookie :)`,
            3, 4
          )}

          {this.reviewComponent(
            `photo2`, `Abigail Terry`,
            `I did my first tattoo.
             It was very painful, so the master worked quickly.
             I thought it would be worse because of this, but it turned out great.`,
            4, 5
          )}

          {this.reviewComponent(
            `photo3`, `Oliver Wilson`,
            `I saved up money and made another tattoo in this studio.
             This is already 6 and I'm not going to stop. Highly recommend.`,
            4, 3
          )}

          {this.reviewComponent(
            `photo4`, `Flora Allison`,
            `I did one more tattoo in your studio and I was very pleased, thank you.`,
            4, 4
          )}

          {this.reviewComponent(
            `photo5`, `Mark Smith`,
            `Many thanks for the quality work,
             I still do not believe that I did the tattoo, but still it was worth it.`,
            5, 5
          )}
        </Carousel>
      </div>
    );
  }
};

export default FooterComponent;
