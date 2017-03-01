import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Personn extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (<div>
      <div>
        <span>{this.props.personn.name}</span>
        <span> </span>
        <span>{this.props.personn.age}</span>
      </div>
    </div>);
  }

}
