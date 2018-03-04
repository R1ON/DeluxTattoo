import delay from 'lodash.delay';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import scrollToComponent from 'react-scroll-to-component';

import MainWrapper from './mainWrapper';

import { selectMasterAction } from '../actions/selectMasterActions';

import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';

import '../../../../styles/pages/portfolio/index.sass';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);

    this.selectingMaster = this.selectingMaster.bind(this);
  }

  selectingMaster(event, mainTitle) {
    const master = Number(event.target.src.match(/(?!\/)(\d+)(?=\.\w+)/g));

    this.props.selectMasterAction(master);
    delay(() => (
      scrollToComponent(mainTitle, { offset: 10, align: 'top', duration: 1000 })
    ), 50);
  }

  render() {
    const { master } = this.props;

    return (
      <div>
        <HeaderComponent />
        <MainWrapper
          selectedMaster={this.selectingMaster}
        />
        <FooterComponent
          master={master}
        />
      </div>
    );
  }
}

PortfolioContainer.propTypes = {
  master: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  const {
    master
  } = state.portfolioReducers.selectMasterReducer;

  return { master };
};

const mapDispatchToProps = dispatch => ({
  selectMasterAction: master => dispatch(selectMasterAction(master))
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);
