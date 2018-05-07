import first from 'lodash/first';
import last from 'lodash/last';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import scrollToComponent from 'react-scroll-to-component';

import MainWrapper from './mainWrapper';

import { selectMasterAction } from '../actions/selectMasterActions';
import { setAmountData } from '../actions/viewMoreActions';
import { isOpenSlider, switchImageLeft, switchImageRight } from '../actions/sliderActions';

import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';

import { MASTER_OPTION } from '../constants/portfolio';
import { MASTER_INFO } from '../../../constants/masters';

import '../../../../styles/pages/portfolio/index.sass';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);

    if (document.body.clientWidth < 480) {
      this.onSliderOpening = () => {};
    } else this.onSliderOpening = this.onSliderOpening.bind(this);

    this.selectingMaster = this.selectingMaster.bind(this);
    this.onViewMoreClicked = this.onViewMoreClicked.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.master !== nextProps.master) {
      const { maxPhoto } = MASTER_OPTION;
      const countPhoto = first(MASTER_INFO
        .filter(master => master.id === nextProps.master)
        .map(selectedMaster => last(selectedMaster.images).id));

      if (countPhoto >= maxPhoto) {
        this.props.setAmountData(maxPhoto, countPhoto - maxPhoto);
      } else {
        this.props.setAmountData(countPhoto, 0);
      }
    }
  }

  onSliderOpening(event) {
    const { isOpen, countPhoto, residue } = this.props;

    const imageCount = countPhoto + residue;

    let imageSrc = event.target.attributes[0].nodeValue;
    imageSrc = parseInt(imageSrc.replace(/[^0-9]/g, ''), 10);

    this.props.isOpenSlider(!isOpen, imageSrc, imageCount);

    window.onkeydown = (e) => {
      if (e.keyCode === 37) {
        this.props.switchImageLeft();
      } else if (e.keyCode === 39) {
        this.props.switchImageRight();
      }
    };
  }

  onViewMoreClicked() {
    const { maxPhoto } = MASTER_OPTION;
    const { residue, countPhoto } = this.props;

    if (residue >= maxPhoto) {
      this.props.setAmountData(countPhoto + maxPhoto, residue - maxPhoto);
    } else {
      this.props.setAmountData(countPhoto + residue, 0);
    }
  }

  selectingMaster(event, mainTitle) {
    const master = Number(event.target.src.match(/(?!\/)(\d+)(?=\.\w+)/g));

    this.props.selectMasterAction(master);
    setTimeout(() => (
      scrollToComponent(mainTitle, { offset: 10, align: 'top', duration: 1000 })
    ), 50);
  }

  render() {
    const { master, countPhoto, residue } = this.props;

    return (
      <div>
        <HeaderComponent />
        <MainWrapper
          selectedMaster={this.selectingMaster}
        />
        <FooterComponent
          master={master}
          countPhoto={countPhoto}
          residue={residue}
          openSlider={this.onSliderOpening}
          viewMore={this.onViewMoreClicked}
        />
      </div>
    );
  }
}

PortfolioContainer.propTypes = {
  master: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  countPhoto: PropTypes.number.isRequired,
  residue: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  const { selectMasterReducer, isOpenSliderReducer, viewMoreReducer } = state.portfolioReducers;

  const { master } = selectMasterReducer;
  const { isOpen } = isOpenSliderReducer;
  const { countPhoto, residue } = viewMoreReducer;

  return { master, isOpen, countPhoto, residue };
};

const mapDispatchToProps = dispatch => ({
  selectMasterAction: master => dispatch(selectMasterAction(master)),
  isOpenSlider: (isOpen, imageSrc, imageCount) => dispatch(isOpenSlider(isOpen, imageSrc, imageCount)),
  setAmountData: (countPhoto, residue) => dispatch(setAmountData(countPhoto, residue)),
  switchImageLeft: () => dispatch(switchImageLeft()),
  switchImageRight: () => dispatch(switchImageRight())
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);
