import React       from 'react'
import ItemDetails from './ItemDetails'



export default class ItemList extends React.Component{

	render(){
		return(
		<div> 

	{
		this.props.list.map((item,i)=>{
		return <ItemDetails 
				key		    = {i}
				productName = {item.productName}
				price  	    = {item.price}
				details	    = {item._id}
				description = {item.description}
				img 	    = {item.img}
				sku		    = {item.sku}
				thickness   = {item.thickness}
				length	    = {item.length}
				id 		    = {item._id}
				history 	= {this.props.history}
				removeItem  = {this.props.removeItem}
			
		/>

	})
}
		</div>

		)



	}
}
