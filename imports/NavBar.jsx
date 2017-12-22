import React, { Component } from 'react';
import AccountsUI           from '../client/AccountsUI.jsx';
import { Input, Menu }      from 'semantic-ui-react';



export default class MenuClass extends Component {
    state = { activeItem: 'home' }



  redirect(){
    this.props.history.push(`/CheckOutCart`)
    }

  redirect2(){
    this.props.history.push(`/Home`)
    }

  redirect3(){
    this.props.history.push(`/AdminArea`)
    }



render() {
  const { activeItem } = this.state
  return (
      <div className = 'secondaryMenu'>
        <Menu secondary>
          <Menu.Item>
            <AccountsUI/>
          </Menu.Item>
        <Menu.Item name='home'    active={activeItem === 'home'}    onClick= {this.redirect2.bind(this)} />
          <Menu.Item name='cart'  active={activeItem === 'cart'}    onClick= {this.redirect.bind(this)} />
        <Menu.Item name='profile' active={activeItem === 'profile'} onClick= {this.redirect3.bind(this)} />
       
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input className ='searchBar' icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
    )
  }
}
