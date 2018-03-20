import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Row, Col } from 'reactstrap';

import { MENU_SECTIONS } from '../../../constants/menu';

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <Row className="header">
          <Col md={6} className="header__logo">
            DELUX TATTOO
          </Col>
          <Col md={6} className="header__links link hidden-xs hidden-sm">
            {MENU_SECTIONS.map(section => (
              <Link
                className="link__item"
                key={section.id}
                to={section.url}
              >
                {section.title.toUpperCase()}
              </Link>
            ))}
          </Col>
        </Row>

        <Row className="header__contacts contacts">
          <Col md={6} className="contacts__info info">
            <div className="info__title title">
              CONTACTS
            </div>
            <div className="info__admin admin">
              <div className="admin__name">Valeriy</div>
              <div className="admin__family">Leontiv</div>
              <div className="admin__number">88005553535</div>
              <div className="admin__email">proshe-pozvonit@chemykogono.zanimat</div>
            </div>
            <div className="info__assistant assistant">
              <div className="assistant__name">Mamka</div>
              <div className="assistant__family">Tvoya</div>
              <div className="assistant__number">666(666)666-66-66</div>
              <div className="assistant__email">r.zalupa@da.kek</div>
            </div>
          </Col>
          <Col md={6} className="contacts__map map">
            MAP
          </Col>
        </Row>
      </header>
    );
  }
}

// HeaderComponent.propTypes = {
// };

export default HeaderComponent;
