import React, { Component } from 'react';

import MainComponent from '../components/Main';

class MainWrapper extends Component {
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

  onMouseMoveParallaxEffect(event) {
    const x = ((event.pageX * -1) / 20);
    const y = ((event.pageY * -1) / 10);

    this.setState({
    	style: {
		    backgroundPositionX: x,
		    backgroundPositionY: y - 110
	    }
    });
  }

  render() {
    const { props, state: { style } } = this;

    return (
      <div>
        <div className="home-container">
          <MainComponent
            {...props}
            styles={style}
            mouseMove={this.onMouseMoveParallaxEffect}
          />
        </div>
      </div>
    );
  }
}

export default MainWrapper;
