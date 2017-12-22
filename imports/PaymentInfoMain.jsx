import React                from 'react';
import {Button}             from 'semantic-ui-react';
import PaymentBillingComp   from './PaymentBillingComp';
import PaymentCountryComp   from './PaymentCountryComp';
import Footer               from './Footer';
import {Form}               from 'semantic-ui-react';
import Header               from './Header';
import NavBar               from './NavBar';
import PaymentShippingComp  from './PaymentShippingComp';



export default  class CheckOutPage extends React.Component {

  render() {
    return(

   <div className = 'container'>
   		<NavBar history={this.props.history}/>
   		<Header/>
   <form className="ui form">
    	<PaymentShippingComp/>
    	<PaymentCountryComp/>
    	<PaymentBillingComp/>
    	


<Button className = 'checkOutBtn' floated='right' tabIndex="0" > Submit </Button>
 

    </form>
    <Footer/>
    </div>

)
}
}
