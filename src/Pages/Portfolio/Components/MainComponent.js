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
          <img className="portfolio-main-master" src={require('../../../Assets/img/test.png')} alt="" />
          <img className="portfolio-main-master" src={require('../../../Assets/img/test.png')} alt="" />
          <img className="portfolio-main-master" src={require('../../../Assets/img/test.png')} alt="" />
        </Row>
      </div>
    );
  }
}

export default HeaderComponent;
