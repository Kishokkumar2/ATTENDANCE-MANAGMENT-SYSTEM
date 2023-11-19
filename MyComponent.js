import './MyComponent.css';

import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      currentDate: new Date()
    };
  }

  render() {
    return (
      <div>
        <h4 class="c">   Date: {this.state.currentDate.toString()}</h4>
      </div>
    );
  }
}

export default MyComponent;