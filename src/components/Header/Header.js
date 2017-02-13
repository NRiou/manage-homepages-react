/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import Link from '../Link';
import s from './Header.css';

function Header() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link className={s.brand} to="/">The Kooples</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavDropdown eventKey={1} title="Homepage" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1} href="/homepage">Create...</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={1.2} href="#">Current list</MenuItem>
          <MenuItem eventKey={1.3} href="#">Scheduled list</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={1.4} href="#">History</MenuItem>
        </NavDropdown>
        <NavItem eventKey={2} href="#">Landing</NavItem>
        <NavItem eventKey={3} href="/about">About</NavItem>
      </Nav>
    </Navbar>
  );
}

export default withStyles(s)(Header);
