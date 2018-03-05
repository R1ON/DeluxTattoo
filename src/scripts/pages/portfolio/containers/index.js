import delay from 'lodash.delay';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import scrollToComponent from 'react-scroll-to-component';

import MainWrapper from './mainWrapper';

import { selectMasterAction } from '../actions/selectMasterActions';
import { isOpenSlider } from '../actions/sliderActions';

import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';

import '../../../../styles/pages/portfolio/index.sass';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);

    if (document.body.clientWidth < 480) {
      this.onSliderOpening = () => {};
    } else this.onSliderOpening = this.onSliderOpening.bind(this);

    this.selectingMaster = this.selectingMaster.bind(this);
  }

  onSliderOpening(event) {
    const { isOpen } = this.props;

    let imageSrc = event.target.attributes[0].nodeValue;
    imageSrc = parseInt(imageSrc.replace(/[^0-9]/g, ''), 10);

    this.props.isOpenSlider(!isOpen, imageSrc);
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
          openSlider={this.onSliderOpening}
        />
      </div>
    );
  }
}

PortfolioContainer.propTypes = {
  master: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  const { selectMasterReducer, isOpenSliderReducer } = state.portfolioReducers;

  const { master } = selectMasterReducer;
  const { isOpen } = isOpenSliderReducer;

  return { master, isOpen };
};

const mapDispatchToProps = dispatch => ({
  selectMasterAction: master => dispatch(selectMasterAction(master)),
  isOpenSlider: (isOpen, imageSrc) => dispatch(isOpenSlider(isOpen, imageSrc))
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);
