import React, { Component } from 'react';

import HeaderComponent from '../components/Header';

class HeaderContainer extends Component {
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

  onMouseMoveParallaxEffect(e) {
    const x = ((e.pageX * -1) / 20);
    const y = ((e.pageY * -1) / 10);

    this.setState({
	    style: {
		    backgroundPositionX: x,
		    backgroundPositionY: y - 50
	    }
    });
  }

  render() {
    const { onBottomScroll, onModalOpen } = this.props;

    return (
      <div>
        <div className="home-container">
          <HeaderComponent
            styles={this.state.style}
            onMouseMove={this.onMouseMoveParallaxEffect}
            onBottomScroll={onBottomScroll}
            onModalOpen={onModalOpen}
          />
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
