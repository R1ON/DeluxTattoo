import React from 'react';
import { Link } from 'react-router';

import { MENU_SECTIONS } from '../../../constants/menu';

const HeaderComponent = () => (
  <div>
    <div className="portfolio-header">
      <div className="portfolio-header-logo">
        <span>DELUX TATTOO</span>
      </div>
      <div className="portfolio-header-links">
        {MENU_SECTIONS.map(section => (
          <Link key={section.id} to={section.url}>{section.title.toUpperCase()}</Link>
        ))}
      </div>
    </div>

    <div className="portfolio-header-parallax" />
  </div>
);

export default HeaderComponent;
