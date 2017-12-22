import { Products } from '../../imports/api/products'
Meteor.methods({
        addPhoto:function(id, url){
                console.log("addPhoto meteor method called from the server", id, url)
				Products.update(
				   { _id: id },
				   { $push: { photos: url } }
				)
                
        }
})