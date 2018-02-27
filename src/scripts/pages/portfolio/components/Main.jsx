import React, { Component } from 'react';
import { Row } from 'reactstrap';

class HeaderComponent extends Component {
  render() {
    const {
      styles,
      mouseMove,
      selectedMaster
    } = this.props;

    return (
      <div>
        <Row
          className="portfolio-main"
          style={styles}
          onMouseMove={mouseMove}
        >
          <span className="portfolio-main-text portfolio-main-text-one">
            <img
              onClick={event => selectedMaster(event, this.mainTitle)}
              className="portfolio-main-master"
              src={require('../../../../images/portfolioImage/masters/1.png')}
              alt=""
            />
          </span>
          <span className="portfolio-main-text portfolio-main-text-two">
            <img
              onClick={event => selectedMaster(event, this.mainTitle)}
              className="portfolio-main-master"
              src={require('../../../../images/portfolioImage/masters/2.png')}
              alt=""
            />
          </span>
          <span className="portfolio-main-text portfolio-main-text-three">
            <img
              onClick={event => selectedMaster(event, this.mainTitle)}
              className="portfolio-main-master"
              src={require('../../../../images/portfolioImage/masters/3.png')}
              alt=""
            />
          </span>
        </Row>
        <div className="portfolio-footer" ref={(title) => { this.mainTitle = title; }} />
      </div>
    );
  }
}

export default HeaderComponent;
