import React       from 'react';
import Footer      from './Footer';
import Header      from './Header';
import ItemList    from './ItemList';
import NavBar      from './NavBar';
import {Products}  from './api/products';


export default class ItemMain extends React.Component{
     constructor(){
        super()
        this.state={
          products:''
      }
    }

componentWillMount(){
  debugger
  var that = this
  Tracker.autorun(()=>{
    var products = Products.find({_id:this.props.location.state.id})
    debugger
    that.setState({products})
  })
}
removeItem(id){
  debugger
    Products.remove({_id:id})
      
  }



        render(){
        return(

              <div  className = "full container">
              	<NavBar 
                    history = {this.props.history}/>		
                <Header />
                <ItemList
                    list    = {this.state.products}    
                    history = {this.props.history}
                    removeItem = {this.removeItem}
                     />

                <Footer />
              </div>
		)
	}
}