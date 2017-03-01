import React, { Component } from 'react';

export default class About extends Component {
  render() {
    console.log(this.props.location.query.user);
    return (<div>User : {this.props.params.userId} {this.props.location.query.user}</div>);
  }
}
