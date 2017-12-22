import React                from 'react';
import Footer               from './Footer';
import Header           	from './Header';
import NavBar 				from './NavBar';
import AdminList			from './AdminList';
import {Products} 			from './api/products';


export default class AdminProductMain extends React.Component{
          constructor() {
          	super()
          this.state={
          	products:''
          }

}
	removeItem(id){
		Products.remove({_id:id})
			
	}

	update(id){
		debugger
	}

	componentWillMount(){
		Tracker.autorun(()=>{		
			var stuff = Products.find({}).fetch()
			debugger
			this.setState({products:stuff})
		})
	}


        render(){
        return(

              <div className = "full container">
                <NavBar history={this.props.history}/>    		
                <Header />
            	 
         	
					<AdminList 
					list 	   = {this.state.products}
					removeItem = {this.removeItem}
					update 	   = {this.update}
					history    = {this.props.history}
					/>


         	
					<Footer/>
              </div>
		)
	}
}