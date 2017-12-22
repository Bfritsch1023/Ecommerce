import React from 'react';



export default class CheckOutShipping extends React.Component{
  


        render(){
        return(


<div className="ui form">

      <h4 className="ui dividing header">Complete Your Order</h4>
  <div className="field">
      <label>Name</label>
    <div className="two fields">
    <div className="field">
        <input type="text" name="shipping[first-name]" placeholder="First Name"/>
    </div>
      <div className="field">
        <input type="text" name="shipping[last-name]" placeholder="Last Name"/>
      </div>
    </div>
  </div>
  <div className="field">
    <label>Shipping Address</label>
    <div className="fields">
      <div className="twelve wide field">
        <input type="text" name="shipping[address]" placeholder="Street Address"/>
      </div>
      <div className="four wide field">
        <input type="text" name="shipping[address-2]" placeholder="Apt #"/>
      </div>
    </div>
  </div>

  </div>

    )

  }
}