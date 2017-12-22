
export const Cart = new Meteor.Collection(null);

var CartCartObserver = new LocalPersist(Cart, 'budget-Cart');
