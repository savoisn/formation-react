import React, { Component } from 'react';
import {Link} from 'react-router';
import Personn from './Personn';

export default class PeopleList extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
    <div>
      {this.props.people.map( personn => (
          <Personn key={personn.name} personn={personn}/>
        ))
      }
    </div>);
  }

}
