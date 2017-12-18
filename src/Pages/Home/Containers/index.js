import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Container } from 'reactstrap';
// import { fetchImage } from '../../actions';
// import { Link } from 'react-router';
// import HocHome from './hocHome';

import HeaderComponent from '../Components/HeaderComponent';

import '../Styles/HeaderStyle.sass';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="home-container">
            <HeaderComponent />
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
