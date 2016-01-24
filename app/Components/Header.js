import React, { Component } from 'react';
import classnames from 'classnames';

import { className } from './Header.less';

export default class Header extends Component {
  render() {
    return (
      <div className={classnames(className, 'text-center')}>
        Hello World Header
      </div>
    );
  }
}
