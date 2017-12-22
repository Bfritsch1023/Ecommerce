import React from 'react'
import { Button, Popup, Icon } from 'semantic-ui-react'

export default class Popeer extends React.Component{
	render(){
		return(
  		<Popup
    		trigger={<i class="fa fa-info-circle info" aria-hidden="true"></i>}
    		content={this.props.description || 'oops...'}
    		basic
  		/>
		)
	}
}
