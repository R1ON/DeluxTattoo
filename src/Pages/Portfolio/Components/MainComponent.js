import React, { Component } from 'react';
import { Row } from 'reactstrap';

class HeaderComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			opacity: 1
		};

		this.onCloseModal = this.onCloseModal.bind(this);
	}

	onCloseModal(event) {
		if (event.target.tagName !== 'IMG') {
			// this.setState({ opacity: 0 });
		}
	}

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
          <span style={this.state} onMouseOver={this.onCloseModal} className="portfolio-main-text">
	          <img className="portfolio-main-master" src={require('../../../Assets/img/test2.png')} alt="" />
          </span>
	        <span><img className="portfolio-main-master" src={require('../../../Assets/img/test1.png')} alt="" /></span>
	        <span><img className="portfolio-main-master" src={require('../../../Assets/img/test33.png')} alt="" /></span>
        </Row>
      </div>
    );
  }
}

export default HeaderComponent;
