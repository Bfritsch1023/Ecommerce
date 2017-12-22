
import React from 'react';



export default class CheckOutBilling
 extends React.Component{
  


        render(){
        return(

  <div className="field">
    <label className = 'billingAddressTitle'>Billing Address</label>
    <div className="fields">
      <div className="twelve wide field">
        <input type="text" name="shipping[address]" placeholder="Street Address"/>
      </div>
      <div className="four wide field">
        <input type="text" name="shipping[address-2]" placeholder="Apt #"/>
      </div>
    </div>
  </div>

  )
 }
}