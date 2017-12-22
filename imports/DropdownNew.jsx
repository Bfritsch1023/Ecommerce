import React from 'react'
import { Dropdown } from 'semantic-ui-react'

 

const options = [
  { key: 's', text: '1.55 mm', value: '1.55 mm' },
  { key: 'th', text: '3 mm', value: '3 mm' },
  { key: 'tn', text: '5 mm', value: '5 mm' },
]


export default class DropdownNew extends React.Component {
getData(e){
	var data = e.target.innerText
	this.props.getData(data)
}
	render(){
		return (
			<div className='field'>
			<label>Thickness</label>
  			<Dropdown 
  					
  					placeholder='Thickness' 
  					search selection options={options} 
  					onChange ={this.getData.bind(this)}
  			/>
  			</div>
  			
  		)
	}
}


