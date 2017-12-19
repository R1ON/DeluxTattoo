import React, { Component } from 'react';
import { Col } from 'reactstrap';

import { slide as Menu } from 'react-burger-menu';

import { MENU_LINKS } from '../../../Constants';

import '../Styles/HeaderStyle.sass';

class BurgerMenu extends Component {
  render() {
    return (
      <div>
        {/*<Col className="hidden-lg hidden-md">*/}
        <Col>
          <div className="outer-container">
            <Menu>
              <a href="#">{MENU_LINKS.LINK_1}</a><br />
              <a href="#">{MENU_LINKS.LINK_2}</a><br />
              <a href="#">{MENU_LINKS.LINK_3}</a><br />
              <a href="#">{MENU_LINKS.LINK_4}</a>
            </Menu>
          </div>
        </Col>

      </div>
    );
  }
}

export default BurgerMenu;