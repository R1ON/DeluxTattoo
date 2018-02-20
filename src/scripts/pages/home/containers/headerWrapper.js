import React, { Component } from 'react';

import HeaderComponent from '../components/Header';

class HeaderWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	style: {
		    backgroundPositionX: '10%',
		    backgroundPositionY: '10%'
	    }
    };

    if (document.body.clientWidth < 991) {
      this.onMouseMoveParallaxEffect = () => {};
    } else this.onMouseMoveParallaxEffect = this.onMouseMoveParallaxEffect.bind(this);
  }

  onMouseMoveParallaxEffect(event) {
    const x = ((event.pageX * -1) / 20);
    const y = ((event.pageY * -1) / 10);

    this.setState({
	    style: {
		    backgroundPositionX: x,
		    backgroundPositionY: y - 50
	    }
    });
  }

  render() {
    const { scrollBottom, openModal } = this.props;

    return (
      <div>
        <div className="home-container">
          <HeaderComponent
            styles={this.state.style}
            mouseMove={this.onMouseMoveParallaxEffect}
            scrollBottom={scrollBottom}
            openModal={openModal}
          />
        </div>
      </div>
    );
  }
}

export default HeaderWrapper;
