import React, { Component } from 'react';

import HeaderComponent from '../Components/HeaderComponent';

class HeaderParallaxContainer extends Component {
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
    let x = (e.pageX * -1 / 30), y = (e.pageY * -1 / 20);

    this.setState({
      backgroundPositionX: x,
      backgroundPositionY: y - 50
    })
  }

  render() {
    const { onBottomScroll, onModalOpen } = this.props;

    return (
      <div>
        <div className="home-container">
          <HeaderComponent
            styles={this.state}
            onMouseMove={this.onMouseMoveParallaxEffect}
            onBottomScroll={onBottomScroll}
            onModalOpen={onModalOpen}
          />
        </div>
      </div>
    );
  }
};

export default HeaderParallaxContainer;
