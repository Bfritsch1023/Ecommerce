
import { Meteor } from 'meteor/meteor';
//import Meteor library
import React from 'react';
//import React library
import { render } from 'react-dom';
//import the render function from react-dom

import {routes}	from '../imports/routes'
//import the React component that we haven't created yet! ...oops

Meteor.startup(() => {
  render(routes() , document.getElementById('app'));
});



	$.cloudinary.config({
        cloud_name:"bfritsch1023"})
