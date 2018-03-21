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
            <div className="info__title">
              CONTACTS
            </div>
            <div className="info__admin admin">
              <span className="admin__name">Maximov</span>
              <span className="admin__family">Roman</span>
              <div className="admin__number">8 (930) 849-65-18</div>
              <div className="admin__email">r.maximov@yandex.ru</div>
            </div>
            <div className="info__assistant assistant">
              <span className="assistant__name">Alexander</span>
              <span className="assistant__family">Dmitriev</span>
              <div className="assistant__number">8 (800) 555-35-35</div>
              <div className="assistant__email">test@yandex.ru</div>
            </div>
          </Col>
          <Col md={6} className="contacts__map map">
            s
          </Col>
        </Row>
      </header>
    );
  }
}

// HeaderComponent.propTypes = {
// };

export default HeaderComponent;
