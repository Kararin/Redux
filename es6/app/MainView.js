import React, {Component} from 'react';

import Counter from './Counter';

export default class MainView extends Component {
  render() {
    return (
      <div id='MainView'>
        MainView
        <Counter />
      </div>
    )
  }
}


