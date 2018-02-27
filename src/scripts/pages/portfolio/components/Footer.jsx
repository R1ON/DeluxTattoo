import React from 'react';
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
              <div className="portfolio-footer-about-title">Works</div>
            </div>
          ))
        }
        <Row>
          <Col md={4}>img</Col>
          <Col md={4}>img</Col>
          <Col md={4}>img</Col>
        </Row>
      </div>
    )}
  </div>
);

export default FooterComponent;
