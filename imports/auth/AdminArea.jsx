import React        		from 'react';
import AdminForm    		from '../AdminForm';
import AdminButtons     from '../AdminButtons';
import Header           from '../Header';
import NavBar           from '../NavBar';


export default  class AdminArea extends React.Component {


  render() {
  	 	
    return(

  <div>
    <span className='user box'>
			   <NavBar history={this.props.history}/>
        	 <Header/>
			   <AdminButtons history={this.props.history}/>

		</span>
			    <AdminForm history={this.props.history}/>
	 </div>

    )
  }
}


