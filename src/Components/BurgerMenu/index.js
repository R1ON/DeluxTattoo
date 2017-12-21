import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Icon } from 'react-fa';
import { slide as Menu } from 'react-burger-menu';

import { MENU_LINKS } from '../../Constants';

class BurgerMenu extends Component {
  render() {
    return (
      <div>
        {/*<Col className="hidden-lg hidden-md">*/}
        <Col>
          <div className="outer-container">
            <Menu>
              <span className="burger-icon">
                <Icon size="lg" name="home" />
              </span>
              <a href="#">{MENU_LINKS.LINK_1}</a><br />

              <span className="burger-icon">
                <Icon size="lg" name="picture-o" />
              </span>
              <a href="#">{MENU_LINKS.LINK_2}</a><br />

              <span className="burger-icon">
                <Icon size="lg" name="user-plus" />
              </span>
              <a href="#">{MENU_LINKS.LINK_3}</a><br />

              <span className="burger-icon">
                <Icon size="lg" name="info" />
              </span>
              <a href="#">{MENU_LINKS.LINK_4}</a>
            </Menu>
          </div>
        </Col>

      </div>
    );
  }
}

export default BurgerMenu;