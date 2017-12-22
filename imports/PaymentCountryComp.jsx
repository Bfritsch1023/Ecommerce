import React 		from "react";
import {Countries}  from './api/Countries';
import { Dropdown } from "semantic-ui-react";


export default class CountryComp extends React.Component {
	constructor(){
		super()
		this.state={countries:''}
	}
	getData(e) {
		var country = e.target.textContent;
		this.props.getData(country);
	}

	componentWillMount(){
		Tracker.autorun(()=>{
			var countries = Countries.find({}).fetch()
			this.setState({countries})

		})


	}

	render() {
		return (
			
			<Dropdown
				onChange={this.getData.bind(this)}
				placeholder="Select Country"
				fluid
				search
				selection
				options={this.state.countries}
			/>
			
		);
	}
}