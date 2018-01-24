import React, { Component } from 'react';

import MainComponent from '../Components/MainComponent';

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundPositionX: '10%',
      backgroundPositionY: '10%'
    };

    if (document.body.clientWidth < 991) {
      this.onMouseMoveParallaxEffect = () => {};
    } else this.onMouseMoveParallaxEffect = this.onMouseMoveParallaxEffect.bind(this);
  }

  onMouseMoveParallaxEffect(e) {
    let x = (e.pageX * -1 / 20), y = (e.pageY * -1 / 10);

    this.setState({
      backgroundPositionX: x,
      backgroundPositionY: y - 50
    })
  }

  render() {
    return (
      <div>
        <div className="home-container">
          <MainComponent
            styles={this.state}
            onMouseMove={this.onMouseMoveParallaxEffect}
          />
        </div>
      </div>
    );
  }
};

export default MainContainer;
