// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Campaign', new Schema({ 
    name: String,
    image_url: String,
    image_urls: [
        {
            url: String 
        }],  
    details: String,
    story: String,
    donation_raised: Number, 
    donation_target: Number,
    donors: Number,
    phone: String,
    status: String,
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String
    },
    end_date: Date,
    created: { 
        type: Date,
        default: Date.now
    },
    links: [
        {
            url: String
        }],
    documents: [{
            url: String
        }]
}));