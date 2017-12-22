
import { Meteor } from 'meteor/meteor';

import {URL}  from './URL_Mailer'
import {Countries} from '../imports/api/Countries'

Meteor.startup(function () {
        process.env.MAIL_URL=URL
});


Cloudinary.config({
        cloud_name: 'bfritsch1023',
        api_key: '443728583269812',
        api_secret: 'Hcx3CXKI3UM-9n157w4r6J6cf08'
})