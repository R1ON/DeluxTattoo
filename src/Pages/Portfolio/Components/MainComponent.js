import React, { Component } from 'react';
import { Row } from 'reactstrap';

class HeaderComponent extends Component {
	render() {
    const {
      styles,
      onMouseMove
    } = this.props;

    return (
      <div>
        <Row
          className="portfolio-main"
          style={styles}
          onMouseMove={onMouseMove}
        >
          <span className="portfolio-main-text">
	          <img className="portfolio-main-master" src={require('../../../Assets/img/1.png')} alt="" />
          </span>
	        <span>
		        <img className="portfolio-main-master" src={require('../../../Assets/img/2.png')} alt="" />
	        </span>
	        <span>
		        <img className="portfolio-main-master" src={require('../../../Assets/img/3.png')} alt="" />
	        </span>
        </Row>
      </div>
    );
  }
}

export default HeaderComponent;
