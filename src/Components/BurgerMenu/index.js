import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col } from 'reactstrap';
import { Icon } from 'react-fa';
import { slide as Menu } from 'react-burger-menu';

import { MENU_LINKS } from '../../Constants';

import '../../Assets/sass/StylingComponents/BurgerMenuStyle.sass';

class BurgerMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: '40%'
    };
  }

  componentWillMount() {
    if (document.body.clientWidth < 768)
      this.setState({ width: '60%' })
  }

  render() {
    return (
      <div>
        <Col className="hidden-lg hidden-md">
          <div className="outer-container">
            <Menu width={ this.state.width }>
              <div className="img-blur"></div>
              <span className="burger-icon">
                <Icon size="lg" name="home" />
              </span>
              <a href="#">{MENU_LINKS.LINK_1}</a><br />

              <span className="burger-icon">
                <Icon size="lg" name="picture-o" />
              </span>
              <Link to="/portfolio">{MENU_LINKS.LINK_2}</Link><br />

              <span className="burger-icon">
                <Icon size="lg" name="shopping-basket" />
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