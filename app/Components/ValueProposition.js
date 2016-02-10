import React, { Component } from 'react';
import classnames from 'classnames';

import { className } from './ValueProposition.less';

export default class extends Component {
  render() {
    return (
        <div className={classnames(className, 'text-center')}>
          <h2>We Are Wingburst Code</h2>
          <p>You do business, we do the web. Let us make your ideas a reality.</p>
        </div>
    );
  }
}
