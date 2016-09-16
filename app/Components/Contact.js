import React, { Component } from 'react';
import classnames from 'classnames';

import { className } from './Contact.less';

export default class extends Component {
  render() {
    return (
        <div className={classnames(className, 'text-center')}>
          <div className="container">
            <h3><span>Contact Us</span></h3>
            <p>We are located in Seattle, WA, USA.</p>
            <p>email: <a href="mailto:ulberge@gmail.com">ulberge@gmail.com</a></p>
            <p>phone: (206) 948-3348</p>
          </div>
        </div>
    );
  }
}
