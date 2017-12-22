import React                from 'react';
import Footer               from './Footer';
import Header               from './Header';
import HomeList             from './HomeList';
import NavBar               from './NavBar';
import {Products}           from './api/products';


export default class ItemComp extends React.Component{
   constructor(){
        super()
        this.state={
          products:''
      }
    }

componentWillMount(){
  var that = this
  Tracker.autorun(()=>{
    var products = Products.find({}).fetch()
    debugger
    that.setState({products})
  })
}

        render(){
        return(

              <div className = "full container">
                <NavBar history={this.props.history}/>

                <Header />
                <HomeList 
                products= {this.state.products}
                history={this.props.history}/>   
                
                <Footer/>
              </div>
		)
	}
}