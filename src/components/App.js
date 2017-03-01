import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (<div>
      <div>First App
        <div className="detail">
          {this.props.children}
        </div>
      </div>
      </div>);
  }
}
