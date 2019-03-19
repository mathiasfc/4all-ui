import React, { Component } from 'react';

import { Tag } from '4all-ui';

export default class App extends Component {
  render() {
    return (
      <div>
        <Tag closeIcon>
          Label
        </Tag>

        <Tag>
          Label
        </Tag>

        <Tag error>
          Label
        </Tag>

        <Tag secondary>
          Label
        </Tag>

        <Tag disabled>
          Label
        </Tag>

        <Tag customStyles={{backgroundColor: 'white', border: '1px solid #979797', color: '#6495ED'}}>
          Label
        </Tag>

      </div>
    );
  }
}
