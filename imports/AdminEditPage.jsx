import React 		from 'react'
import { Form, Button }     from 'semantic-ui-react'
import DropdownNew          from './DropdownNew'

const options = [
  { key: 'm', text: 'Yoga Mat', value: 'Mat' },
  { key: 't', text: 'Yoga Towell', value: 'Towell' },
]



const option3= [
  { key: 's',  text: '68"',   value: '68"' },
  { key: 'th', text: '71"',  value: '71"' },
  { key: 'tn', text: '74+"', value: '74"' },
]


export default class AdminEditPage extends React.Component{

  constructor(){
    super()
    this.state = {
      thickness:'',
      length:'',
      category:'',
   

    }
    this.getData = this.getData.bind(this)

  }
 

 getData(data){
  debugger
  this.setState({thickness:data})

 }



updateProducts(){

	var id = this.props.id
	debugger
	var productName = this.refs.productName.value.trim()
	var price = this.refs.price.value.trim()
	var sku = this.refs.sku.value.trim()
	var category = this.state.category.trim()
	var thickness = this.state.thickness.trim()
	var length = this.state.length.trim()
	var description = this.refs.description.value.trim()
	debugger

if(!category || !thickness || !length || !description){
      alert('Fill all required fileds')
      return
    }

  Meteor.call('updateProducts',id ,productName, sku, price, category, thickness,length, description, ()=>{

 })
}



handleChange(e){
  
   this.setState({thickness:e.target.textContent},()=>{console.log(this.state)})
   
}
handleChange2(e){
  
   this.setState({length:e.target.textContent},()=>{console.log(this.state)})

}

handleChange3(e){
  
   this.setState({category:e.target.textContent},()=>{console.log(this.state)})

}

	render(){
        return(
        	
       <div>
       
  <Form className = 'containerz'>

  <div className="ui form">
  <div className="fields">
      
      <div className="field">
        <label>Product Name</label>
       <input  ref='productName' label='Product name' placeholder = 'Product Name' required />
    </div>

    <div className="field">
        <label>Item Sku</label>
       <input  ref='sku' label='Item Number'  placeholder = 'Item Sku' required />
    </div>
    
    <div className="field">
        <label>Item Price</label>
       <input ref='price' label='Item Price'   placeholder = 'Item Price' required />
    </div>
          
            <Form.Select    name = 'category'  onChange = {this.handleChange3.bind(this)}  label='Category'     options = {options} placeholder ='Category' />
            <DropdownNew    getData = {this.getData}/>
            <Form.Select    name = 'length'    onChange = {this.handleChange2.bind(this)}  label='Length'       options = {option3} placeholder ='Length' />
          <textarea ref ='description'   label='description' placeholder='Item Description' />
      </div>
  </div>

  
      
    
    </Form>
    <Button 
          className = "fluid ui button"  onClick = {this.updateProducts.bind(this)} floated='left'> Update Details </Button>
    </div>


)
}
}
