import React  				from 'react';
import {Menu, Button} 	    from 'semantic-ui-react';
import PaymentInfoMain 		from './PaymentInfoMain';
import Footer 				from './Footer';
import Header				from './Header';
import NavBar 				from './NavBar';
import CheckOutList			from './CheckOutList';
import {Products}           from './api/products';
import {Cart}				from './api/Cart'


export default class CheckOutCart extends React.Component{
constructor(){
        super()
        this.state={
          cart:''
      }
    }

componentWillMount(){
    debugger
    var that = this
    Tracker.autorun(()=>{
      var cart = Cart.find({}).fetch()
        debugger
        that.setState({cart})
        console.log(cart)

    })
  }



        render(){

        return(
			

			<div className = "full container">

				<NavBar 
						history={this.props.history}/>
				<Header/>
				<CheckOutList 
						
						history = {this.props.history}/>
				<Footer/>

			</div>
			



)
}
}