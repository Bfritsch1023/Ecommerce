import React       from 'react';
import Footer      from './Footer';
import Header      from './Header';
import NavBar      from './NavBar';
import {Products}  from './api/products';
import ItemDetails from './ItemDetails'
import {Cart}	   from  './api/Cart';

export default class UserProductDescription extends React.Component{
     constructor(){
        super()
        this.state={
          product:''
      }
    }

componentWillMount(){
    debugger
    var that = this
    Tracker.autorun(()=>{
      var product = Products.findOne({_id:this.props.location.state.id})
      var cart = Cart.find({}).fetch()
        debugger
        that.setState({product})
        console.log(cart)

    })
  }





        render(){
          debugger
        return(

              <div  className = "full container">
              	<NavBar 
                    history = {this.props.history}/>		
                <Header />

                <ItemDetails 
                history ={this.props.history}
                product = {this.state.product}/>
                <Footer />
              </div>
		)
	}
}