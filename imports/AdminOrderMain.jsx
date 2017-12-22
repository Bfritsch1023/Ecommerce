import React                from 'react';
import Footer               from './Footer';
import Header           	  from './Header';
import NavBar				        from './NavBar';
import { Buttons }          from 'semantic-ui-react';

export default class AdminOrders extends React.Component{
  constructor() {
          	super()
          this.state={
          products:[
            {
              name:'yogaMat',
              price:'100',
              img: 'http://res.cloudinary.com/bfritsch1023/image/upload/c_scale,h_330,w_440/v1512985103/5_pytkv3.jpg',
              length:'length',
              thickness:'thickness',
              sku:'sku',
              edit:'edit',
              shipping:'shipping'
          },
            {
              name:'yogaMat2',
              price:'200',
              img: 'http://res.cloudinary.com/bfritsch1023/image/upload/v1513614867/1_xogeqy.jpg',
              length:'length',
              thickness:'thickness',
              sku:'sku',
              edit:'edit',
              shipping:'shipping'
          },

        ]
      }
    }


        render(){
        return(

              <div className = "full container">
                <NavBar history={this.props.history}/>    		
                
<Header />
		<table class="ui very basic table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Qty</th>
      <th>Product</th>
      <th>Order # </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>status</td>
      <td>qty</td>
      <td>product</td>
      <td>order</td>
    </tr>
    
  </tbody>
</table>
         </div>
		)
	}
}