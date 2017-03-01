import React, { Component } from 'react';
import {Link} from 'react-router';
import Personn from './Personn';

export default class PeopleInput extends Component {

  constructor(props){
    super(props)
    this.onAddPersonn = this.onAddPersonn.bind(this);
  }

  onAddPersonn(){
    const nameElement = document.getElementById('name');
    const ageElement = document.getElementById('age');

    console.log(nameElement);

    console.log("onAddPersonn")

    this.props.addPersonn(
      {
        name:nameElement.value, 
        age:ageElement.value
      }
    );

    nameElement.value = "";
    ageElement.value = "";

    nameElement.focus();
  }

  render() {
    return (<div>
      <input type="text" id="name"></input>
      <input type="text" id="age"></input>
      <button onClick={this.onAddPersonn}>add a personn</button>
    </div>);
  }
}
