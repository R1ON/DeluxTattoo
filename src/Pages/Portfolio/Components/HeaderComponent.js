import React from 'react';
import { Link } from 'react-router';

import { MENU_LINKS } from '../../../Constants/MenuLinks';

const HeaderComponent = () => (
  <div>
    <div className="portfolio-header">
      <div className="portfolio-header-logo">
        <span>DELUX TATTOO</span>
      </div>
      <div className="portfolio-header-links">
        {MENU_LINKS.map(link => (
          <Link key={link.id} to={link.url}>{link.title.toUpperCase()}</Link>
        ))}
      </div>
    </div>

    <div className="portfolio-header-parallax" />
  </div>
);

export default HeaderComponent;
