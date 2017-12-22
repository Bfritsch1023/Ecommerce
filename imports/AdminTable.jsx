import React            from 'react';
import AdminEditPage    from './AdminEditPage'
import Popeer           from './Popeer'

export default class AdminTable extends React.Component{
  constructor(){
    super()
    this.state = {
      visibility:'none'
    }
  }

showEdit(){
    
  if (this.state.visibility == 'block'){

    this.setState({visibility:'none'})

  }
  else {
    this.setState ({visibility: 'block'})
   }
} 

getData(e){
  debugger
  this.props.removeItem(this.props.id)
  }

uploadWidget() {
  var id = this.props.id
        cloudinary.openUploadWidget({ 
        cloud_name: 'bfritsch1023', 
        upload_preset: 'u7asooyk', 
        tags:['Product']
},
    function(error, result) {
        debugger
        if(error){
            alert('someting went wrong...')
        }else{
          debugger
          Meteor.call('addPhoto',id, result[0].url )



        }
    });
}

redirect(){
    
    this.props.history.push(`/AdminEditPage`)
  }
redirect2(){
  var id = this.props.id
    this.props.history.push({
        pathname:`/DescriptionPage`,
        state:{id}
      })
  }

    render(){
      let style = {
      display:this.state.visibility
  } 

      console.log(this.props)
    
    return(

              <div>
   
   
    <table class="ui very basic table">
  <thead>
    <tr>
    <th>Add Image</th>
    <th>Product</th>
    <th>Price</th>
    <th>Sku </th>
    <th>Details</th>
    <th>Description</th>
    <th>Edit</th>
    <th>Remove</th>
    <th>View</th>
  </tr>
  </thead>
  
  <tbody>
    <tr> 
      <td><i onClick={this.uploadWidget.bind(this)} className="fa fa-picture-o icon" aria-hidden="true"></i></td>
      <td>{this.props.productName}</td>
      <td>{this.props.price}</td>
      <td>{this.props.sku}</td>
      <td>{this.props.thickness} &nbsp; {this.props.length}</td>
      <td> <Popeer description = {this.props.description}/></td>
      <td><i onClick   = {this.showEdit.bind(this)} className = "fa fa-pencil-square-o icon" aria-hidden="true"></i></td>
      <td><i onClick   = {this.getData.bind(this)}  className = "fa fa-minus-square-o icon" aria-hidden="true">  </i></td>
      <td><i onClick = {this.redirect2.bind(this)}  className="fa fa-eye icon" aria-hidden="true"></i></td>
     
    </tr>
    
  </tbody>

    <tr><th colspan="8">
      
    </th>
  </tr>
</table>
<div style ={style}> 
  <AdminEditPage 
      update = {this.props.update}
      id={this.props.id}
    /> 

    </div>
</div>
    )
  }
}

