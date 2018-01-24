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
        </Row>
      </div>
    );
  }
};

export default HeaderComponent;
