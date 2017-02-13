/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    homepages: PropTypes.arrayOf(PropTypes.shape({
      storeview: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Home Test</h1>
          <ul className={s.homepages}>
            {this.props.homepages.map((item, index) => (
              <li key={index} className={s.HomepageItem}>
				{item.storeview}
				{item.tag}
				{item.gender}
				{item.deploymentDate}
				{item.contentJson}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);