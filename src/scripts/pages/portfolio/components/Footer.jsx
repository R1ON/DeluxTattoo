import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import { MASTER_OPTION, MASTER_INFO } from '../constants/portfolio';

const FooterComponent = ({ master }) => (
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
                {selectedMaster.images.map((image, index) => (
                  <Col key={index} md={4} className="portfolio-footer-works">
                    <img src={require(`../../../../images/homeImage/workExamples/${image}.jpg`)} alt="" />
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
  master: PropTypes.number.isRequired
};

export default FooterComponent;
