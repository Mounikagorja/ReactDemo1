// Welcome.js

import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name} a.k.a {this.props.heroname}</h1>
      </div>
    );
  }
}
export default Welcome;

