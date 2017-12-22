import React, { Component }       from 'react'
import { Button, Icon, Menu }     from 'semantic-ui-react'



class AdminButton extends React.Component{

redirect(){
		
    this.props.history.push(`/AdminProductMain`)
  }
	
redirect2(){
		
    this.props.history.push(`/AdminOrderMain`)
  }
	
redirect3(){
		
    this.props.history.push(`/Home`)
  }
	




	render(){
return(

<div className = 'container'>
   <Menu fluid widths={3}>
        <Menu.Item name='products' onClick={this.redirect.bind(this)} />
        <Menu.Item name='orders'   onClick= {this.redirect2.bind(this)} />
        <Menu.Item name='shop' 	   onClick= {this.redirect3.bind(this)}/>
      </Menu>
   </div>

)
}}

export default AdminButton







