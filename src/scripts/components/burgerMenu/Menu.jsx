import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col } from 'reactstrap';
import { Icon } from 'react-fa';
import { slide as Menu } from 'react-burger-menu';

import { MENU_SECTIONS } from '../../constants/menu';

import '../../../styles/common/burgerMenu.sass';

class BurgerMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: '40%'
    };
  }

  componentWillMount() {
    if (document.body.clientWidth < 768) {
      this.setState({ width: '60%' });
    }
  }

  render() {
    return (
      <div>
        <Col className="hidden-lg hidden-md">
          <div className="outer-container">
            <Menu width={this.state.width}>
              <div className="img-blur" />
              {MENU_SECTIONS.map(section => (
                <div key={section.id}>
                  <span className="burger-icon">
                    <Icon size="lg" name={section.icon} />
                  </span>
                  <Link to={section.url}>{section.title.toUpperCase()}</Link>
                </div>
              ))}
            </Menu>
          </div>
        </Col>
      </div>
    );
  }
}

export default BurgerMenu;
