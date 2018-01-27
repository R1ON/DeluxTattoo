import React, { Component } from 'react';

import MainComponent from '../Components/MainComponent';

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	style: {
		    backgroundPositionX: '10%',
		    backgroundPositionY: '40%'
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
		    backgroundPositionY: y - 110
	    }
    });
  }

  render() {
    return (
      <div>
        <div className="home-container">
          <MainComponent
            styles={this.state.style}
            onMouseMove={this.onMouseMoveParallaxEffect}
          />
        </div>
      </div>
    );
  }
}

export default MainContainer;
