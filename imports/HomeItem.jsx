  
import React from 'react';




export default class HomeItem extends React.Component{
   


  redirect(){
    debugger
    this.props.history.push({pathname:`/userProductDescription`,state:{id:this.props.id}})
  }




        render(){
           debugger

            let image ={
                margin:'0 auto',
                width: '100%',
                border:'1px solid grey',
                padding:'2rem'

            }

        return(

        <div className="wrapper">
           
             <div> 

             <img onClick = {this.redirect.bind(this)} style={image} className="colonna" src= {this.props.img}/><h4 className ='itemTitle'> {this.props.name}{this.props.price}</h4> 
             </div>
           
        </div>


)
}
}




