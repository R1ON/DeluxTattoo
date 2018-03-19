import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { MENU_SECTIONS } from '../../../constants/menu';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="page__line">
        <div className="header">
          <div className="header__logo">
            <div className="logo">DELUX TATTOO</div>
          </div>
          <div className="header__links">
            {MENU_SECTIONS.map(section => (
              <Link
                className="link"
                key={section.id}
                to={section.url}
              >
                {section.title.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>

        <div className="contacts">
          <div className="contacts__title">
            <div className="title">CONTACTS</div>
          </div>
          <div className="contacts__admin">
            <div className="admin">
              <div className="admin__name">Valeriy</div>
              <div className="admin__family">Leontiv</div>
              <div className="admin__number">88005553535</div>
              <div className="admin__email">proshe-pozvonit@chemykogono.zanimat</div>
            </div>
          </div>
          <div className="contacts__assistant">
            <div className="assistant">
              <div className="assistant__name">Mamka</div>
              <div className="assistant__family">Tvoya</div>
              <div className="assistant__number">666(666)666-66-66</div>
              <div className="assistant__email">r.zalupa@da.kek</div>
            </div>
          </div>
        </div>

        <div className="map">
          KARTA
        </div>
      </div>
    );
  }
}

// HeaderComponent.propTypes = {
// };

export default HeaderComponent;
