
import React           	   from 'react';
import { BrowserRouter 	as Router, Route } from 'react-router-dom'; 
import AdminArea           from './auth/AdminArea.jsx'
import AdminEditPage       from './AdminEditPage'
import AdminProductMain    from './AdminProductMain'
import AdminOrderMain      from './AdminOrderMain'
import PaymentInfoMain     from './PaymentInfoMain'
import CheckOutCart 	     from './CheckOutCart'                                                         
import HomePage            from './HomePage'
import ItemMain            from './ItemMain'
import DescriptionPage      from './DescriptionPage'
import UserProductDescription from './UserProductDescription'

export const routes = () => (
  <Router>
          <div>
            <Route exact path  = "/AdminArea"           component   	= {AdminArea}/>
            <Route exact path  = "/AdminEditPage"       component     = {AdminEditPage}/>
          	<Route exact path  = "/AdminProductMain"    component     = {AdminProductMain}/>
          	<Route exact path  = "/AdminOrderMain"      component     = {AdminOrderMain}/>
            <Route exact path  = "/CheckOutCart"        component     = {CheckOutCart}/>  
            <Route exact path  = "/PaymentInfoMain"     component     = {PaymentInfoMain}/>  
            <Route exact path  = "/Home"                component     = {HomePage}/>
            <Route exact path  = "/ItemMain"            component     = {ItemMain}/>
            <Route exact path  = "/DescriptionPage"     component     = {DescriptionPage}/>
            <Route exact path  = '/UserProductDescription' component  = {UserProductDescription}/>
          </div>
  </Router>
)
