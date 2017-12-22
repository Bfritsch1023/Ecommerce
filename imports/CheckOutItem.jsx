import React from 'react';
import {Menu, Button} 	    from 'semantic-ui-react';



export default class CheckOutItem extends React.Component{

redirect(){
	
    
    this.props.history.push(`/PaymentInfoMain`)
  }



render(){
	debugger
	return <div>
			<table class="ui very basic table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Qty</th>
      <th>Total</th>
    </tr>
  </thead>
  </table>
				
				<div className="first">
				<span className="product">{this.props.productName}} <br/>
				<img className="cartItem" src='./1.jpeg'/></span>
				<span className="price">$100</span>
				<span className="qty">
				<select className = 'qtyBox'>
							<option>0</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>7</option>
							<option>8</option>
							<option>9</option>
							<option>10</option>
							</select>
				
				
				</span>
				<span className="subtotal">{this.props.price}}</span>

			</div>
			<hr/>
				<span 	className="grandTotal"><b>Grand Total : $needtoadd</b>
				</span>
				<Button className = 'checkOutBtn' onClick = {this.redirect.bind(this)} floated='right'> Check Out </Button>
			</div>
	}
}