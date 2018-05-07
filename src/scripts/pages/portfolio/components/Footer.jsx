import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import { MASTER_OPTION } from '../constants/portfolio';
import { MASTER_INFO } from '../../../constants/masters';

const FooterComponent = ({ master, openSlider, countPhoto, residue, viewMore }) => (
  <div className="portfolio-footer">
    {master === MASTER_OPTION.absentMaster && (
      <div className="portfolio-footer-about">
        Select the master
      </div>
    )}

    {master !== MASTER_OPTION.absentMaster && (
      <div className="portfolio-footer-about portfolio-footer-master">
        {MASTER_INFO
          .filter(element => element.id === master)
          .map(selectedMaster => (
            <div key={selectedMaster.id}>
              <div className="portfolio-footer-about-name">{selectedMaster.name}</div>
              <div className="portfolio-footer-about-experience">
                {`Experience: ${selectedMaster.experience} year`}
              </div>

              <Row>
                {selectedMaster.images.slice(0, countPhoto).map(image => (
                  <Col key={image.id} md={4} className="portfolio-footer-works">
                    <img
                      onClick={openSlider}
                      src={require(`../../../../images/homeImage/workExamples/${image.id}.jpg`)}
                      alt=""
                    />
                  </Col>
                ))}
              </Row>
            </div>
          ))
        }

        {residue > 0 && (
          <div className="portfolio-footer-more" onClick={viewMore}>VIEW MORE</div>
        )}
      </div>
    )}
  </div>
);

FooterComponent.propTypes = {
  master: PropTypes.number.isRequired,
  openSlider: PropTypes.func.isRequired,
  countPhoto: PropTypes.number.isRequired,
  residue: PropTypes.number.isRequired,
  viewMore: PropTypes.func.isRequired
};

export default FooterComponent;
