import React     from 'react';
import Footer    from './Footer';
import NavBar 	 from './NavBar';







export default class CheckOutPaymentPage extends React.Component{
  


        render(){
        return(

              <div className = "full container">
                <NavBar history={this.props.history}/>
               <Footer/>
			</div>
		)
	}
}