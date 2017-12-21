import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Container } from 'reactstrap';
// import { fetchImage } from '../../actions';
// import { Link } from 'react-router';
// import HocHome from './hocHome';

import BurgerMenu from '../../../Components/BurgerMenu';
import HeaderMenu from '../../../Components/HeaderMenu';

import HeaderComponent from '../Components/HeaderComponent';

import '../Styles/HeaderStyle.sass';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundPositionX: '10%',
      backgroundPositionY: '10%'
    };

    this.onMouseMoveParallaxEffect = this.onMouseMoveParallaxEffect.bind(this);
  }

  onMouseMoveParallaxEffect(e) {
    let x = (e.pageX * -1 / 20), y = (e.pageY * -1 / 10);

    this.setState({
      backgroundPositionX: x + 20,
      backgroundPositionY: y + 5
    })
  }

  render() {
    return (
      <div>
        <div className="home-container">
          <BurgerMenu />
          <HeaderMenu />

          <HeaderComponent styles={this.state} onMouseMove={this.onMouseMoveParallaxEffect} />
            {/* <HocHome currency={this.props.photos} /> */}
        </div>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return state;
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchImage: () => dispatch(fetchImage())
//   };
// };

export default Home;
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
