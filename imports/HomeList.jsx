import React from 'react';
import HomeItem from './HomeItem';



export default class HomeList extends React.Component{



render(){
	debugger
	return <div>
			{
				this.props.products.map((ele,i) => {
					debugger
				return <HomeItem 
				key    	   = {i}
				name   	   = {ele.name}
				price  	   = {ele.price}
				details	   = {ele._id}
				img 	   = {ele.photos[0]}
				addProduct = {this.props.addProducts}
				history    = {this.props.history}
				id 		   = {ele._id}
				
				/>
			})
		}
		
		</div>

	}
}