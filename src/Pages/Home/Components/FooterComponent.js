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

        <div className="home-footer-links">
          <Row>
            <Col md={6}>
              <div>Sign in <span>DELUX TATTOO</span></div>
              <div>
                <input type="text"/>
              </div>
              <div>
                <input type="text"/>
              </div>
               <button style={{color: "black"}}>hui</button>
               <button style={{color: "black"}}>hui</button>
            </Col>
            <Col md={6}>
              <Col md={4}>
                <div>NAVIGATE</div>
                <div>Home</div>
                <div>Portfolio</div>
                <div>Registration</div>
                <div>About</div>
              </Col>
              <Col md={4}>
                <div>CONTACTS</div>
                <div>Admin:</div>
                <div>Number: <span>4134134</span></div>
                <div>E-mail: <span>reqr@reqr.req</span></div>

                <div>Helper:</div>
                <div>Number: <span>431653735</span></div>
                <div>E-mail: <span>zcxcz@zcxz.ru</span></div>
              </Col>
              <Col md={4}>
                <div>ABOUT US IN FIGURES</div>
                <div>5 TATTOO MASTERS</div>
                <div>666 made tattoos</div>
                <div>1488 ready sketches</div>
                <div>26 regular visitors</div>
              </Col>
            </Col>
          </Row>
        </div>

        <div className="home-footer-developer">
          <Row>
            <Col md={12}>
              <span>© 2018 Tattoo Delux Studio | All Rights Reserved.</span>
              <span>Developer: R1ON</span>
              <span>Privacy Policy</span>


              <Icon name="youtube-square" />
              <Icon name="github-square" />
              <Icon name="telegram" />
              <Icon name="vk" />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
};

export default FooterComponent;
