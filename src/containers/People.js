import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import { bindActionCreators } from 'redux';

import PeopleInput from '../components/PeopleInput';
import PeopleList from '../components/PeopleList';

import * as peopleActions from '../actions/PeopleActions';

class People extends Component {

  constructor(props){
    super(props)
    this.state={
      people:[]
    }
  }

  render() {
    return (
    <div>
      <PeopleInput addPersonn = { this.props.myActions.add }/>
      <PeopleList people = { this.props.people } />
    </div>);
  }
}

function mapStateToProps(state, props){
  console.log(state);
  return {
    people: state.people
  }
}

function mapsDispatchToProps(dispatch){
  return {
    //pour chaque action on la proxify pour etre ecoutee par le store.
    myActions : bindActionCreators(peopleActions, dispatch),
  }
}

const myConnect = connect(mapStateToProps, mapsDispatchToProps)
const PeopleRedux = myConnect(People)

export default PeopleRedux
