import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import { MASTER_OPTION, MASTER_INFO } from '../constants/portfolio';

const FooterComponent = ({ master, openSlider }) => (
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
                {selectedMaster.images.map(image => (
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
        <div className="portfolio-footer-more">MORE</div>
      </div>
    )}
  </div>
);

FooterComponent.propTypes = {
  master: PropTypes.number.isRequired,
  openSlider: PropTypes.func.isRequired
};

export default FooterComponent;
