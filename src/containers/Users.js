import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Users extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  componentWillMount() {
    console.log("ici");
    const users={users:[
      { name:'Nicolas SAVOIS', age: '25', id:0},
      { name:'Anne SAVOIS', age: '27', id:1},
      { name:'Eloise SAVOIS', age: '3', id:2},
      { name:'Mathilde SAVOIS', age: '5', id:3},
    ]}
    this.setState(users);
  }
  render() {
    console.log(this.state.users);
    return (<div>
      Users : 
      <div>
        <ul>
         {this.state.users.map(user => (
           <li key={user.id}><Link to={{ pathname: `/user/${user.id}`, query: { user: `${user.name}` } }}>{user.name}</Link></li>
         ))}
        </ul>
      </div>
      <div className="detail">
        {this.props.children}
      </div>
    </div>);
  }
}
