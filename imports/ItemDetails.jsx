import React                from 'react';
import {Button}             from 'semantic-ui-react';
import { Segment, Image }   from 'semantic-ui-react';
import { Cart }             from './api/Cart'




export default class  ItemDetails extends React.Component{


redirect(){
    
    this.props.history.push(`/PaymentInfoMain`)
  }

getData(e){
  debugger
  this.props.removeItem(this.props.id)
  }


addToCart(){
  debugger
  Cart.insert({
    productID:this.props.product._id, 
    quantity:1, },(e)=>{
      console.log(e)
    })
 
}
  render(){
    console.log(this.props.product)
  
    
  return(



  
<div>
  
  <Segment>


      <div className="ui mobile reversed equal width grid">

        <div className="column">

            <h4 className ='itemTitle'> {this.props.product.productName}</h4>

                <Image className ='checkOutImage' src={this.props.product.photos[0]} size='small' floated='left' />
              <Image className ='checkOutImage' src={this.props.product.photos[1]} size='small' floated='left' />
          <Image className ='checkOutImage' src={this.props.product.photos[2]} size='small' floated='left' />
      </div>

      <div className="column">
            <h4 className ='itemTitle'>Product Details</h4>
                <p><b>Price:</b> {this.props.product.price}</p>
                 <p><b>Length:</b> {this.props.product.length}</p>
                 <p><b>Thickness:</b> {this.props.product.thickness}</p>
                
        </div>
    <div className="column">
            <h4 className ='itemTitle'>Description</h4>
          
                 <p>{this.props.product.description}</p>
        </div>
  
      </div>

        <i onClick= {this.getData.bind(this)} 
        style={{fontSize:'24px'}}
          className="fa fa-trash-o" aria-hidden="true"></i>
        
        
     

  </Segment>

  <div className = 'button'>
        <Button onClick = {this.addToCart.bind(this)} className = 'checkOutBtn' floated='right' > Add To Cart </Button>

        </div>
 
</div>
    )
  }
}





