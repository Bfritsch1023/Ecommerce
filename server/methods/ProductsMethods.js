import { Products } from '../../imports/api/products'
Meteor.methods({
        addproduct:function(productName, sku, price, category, thickness,length, description, photos){
                console.log("addproduct meteor method called from the server", productName, sku, price, category, thickness,length, description, photos)
                Products.insert({productName, sku, price, category, thickness,length, description, photos})
                
        },

        updateProducts:function(id, productName, sku, price, category, thickness,length, description){
        	console.log(id, productName, sku, price, category, thickness,length, description)
        	Products.update({_id:id},{$set:{
        		productName:productName,
        		sku:sku,
        		price:price,
        		category:category,
        		thickness:thickness,
        		length:length,
        		description:description,

        	}})
        }
})