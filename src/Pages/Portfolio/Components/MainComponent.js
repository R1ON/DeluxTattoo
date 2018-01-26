import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


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
          <img className="portfolio-main-master" src={require(`../../../Assets/img/test.png`)} />
          <img className="portfolio-main-master" src={require(`../../../Assets/img/test.png`)} />
          <img className="portfolio-main-master" src={require(`../../../Assets/img/test.png`)} />
        </Row>
      </div>
    );
  }
};

export default HeaderComponent;
