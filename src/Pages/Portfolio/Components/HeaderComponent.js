import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'reactstrap';

import { MENU_LINKS } from '../../../Constants';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <div className="portfolio-header">
          <span className="portfolio-header-logo">DELUX TATTOO</span>
          {MENU_LINKS.map(link => {
            return <Link className="portfolio-header-links" key={link.id} to={link.url}>{link.title.toUpperCase()}</Link>
          })}
        </div>

        <div className="portfolio-header-parallax"></div>
      </div>
    );
  }
};

export default HeaderComponent;
