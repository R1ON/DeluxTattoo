import React, { Component } from 'react';
import { Row } from 'reactstrap';

class HeaderComponent extends Component {
  render() {
    const {
      styles,
      mouseMove
    } = this.props;

    return (
      <div>
        <Row
          className="portfolio-main"
          style={styles}
          onMouseMove={mouseMove}
        >
          <span className="portfolio-main-text portfolio-main-text-one">
            <img className="portfolio-main-master" src={require('../../../../images/portfolioImage/masters/1.png')} alt="" />
          </span>
          {/* <span className="portfolio-main-text portfolio-main-text-two"> */}
          <span>
            <img className="portfolio-main-master" src={require('../../../../images/portfolioImage/masters/2.png')} alt="" />
          </span>
          {/* <span className="portfolio-main-text portfolio-main-text-three"> */}
          <span>
            <img className="portfolio-main-master" src={require('../../../../images/portfolioImage/masters/3.png')} alt="" />
          </span>
        </Row>
      </div>
    );
  }
}

export default HeaderComponent;
