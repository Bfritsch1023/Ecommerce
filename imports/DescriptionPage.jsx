import React       from 'react';
import Footer      from './Footer';
import Header      from './Header';
import NavBar      from './NavBar';
import {Products}  from './api/products';


export default class DescriptionPage extends React.Component{
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
        debugger
        that.setState({product})
        console.log(product)
    })
  }





        render(){
          debugger
        return(

              <div  className = "full container">
              	<NavBar 
                    history = {this.props.history}/>		
                <Header />
                <h1>{this.state.product.productName}</h1>

                <Footer />
              </div>
		)
	}
}