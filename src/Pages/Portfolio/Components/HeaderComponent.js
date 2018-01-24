import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'reactstrap';

import { MENU_LINKS } from '../../../Constants';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <div className="portfolio-header">
          <div className="portfolio-header-logo">
            <span>DELUX TATTOO</span>
          </div>
          <div className="portfolio-header-links">
            {MENU_LINKS.map(link => {
              return <Link  key={link.id} to={link.url}>{link.title.toUpperCase()}</Link>
            })}
          </div>
        </div>

        <div className="portfolio-header-parallax"></div>
      </div>
    );
  }
};

export default HeaderComponent;
