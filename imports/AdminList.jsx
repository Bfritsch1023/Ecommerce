import React from 'react'
import AdminTable from './AdminTable'



export default class AdminList extends React.Component{

	render(){
		return(
		<div> 

	{
		this.props.list.map((item,i)=>{
		return <AdminTable 
				key		    		= {i}
				productName 		= {item.productName}
				price  	    		= {item.price}
				details	    		= {item._id}
				description 		= {item.description}
				img 	    		= {item.img}
				sku		    		= {item.sku}
				edit	    		= {item.edit}
				thickness   		= {item.thickness}
				length	    		= {item.length}
				addProduct  		= {this.props.addProducts}
				removeItem  		= {this.props.removeItem}
				id 		    		= {item._id}
				history 			= {this.props.history}
				updateProducts		= {this.props.update}
		/>

	})
}
		</div>

		)



	}
}

