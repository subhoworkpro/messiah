// 'use strict';

// module.exports = function(apiRoutes) {

//   var User   = require('../models/user'); // get our mongoose model
//   var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
//   var config = require('../../config'); // get our config file

//   var CryptoJS = require("crypto-js");

//   apiRoutes.get('/setup', function(req, res) {

//     // create a sample user
//     var admin = new User({ 
//       name: 'Admin User', 
//       password: 'password',
//       admin: true 
//     });

//     // save the sample user
//     admin.save(function(err) {
//       if (err) throw err;

//       console.log('User saved successfully');
//       res.json({ success: true });
//     });
//   });

//   apiRoutes.post('/authsetup', function(req, res) {

//     var admintoken = req.body.admintoken

//     if (admintoken == config.admintoken) {
//       var name = req.body.name;
//       var password = req.body.password;
      
//       if (name && password) {
//         var admin = new User({ 
//           name: name, 
//           password: CryptoJS.AES.encrypt(password, config.key).toString(),
//           admin: true 
//         });

//         // save the sample user
//         admin.save(function(err) {
//           if (err) throw err;

//           console.log('User saved successfully');
//           res.json({ success: true, message: 'User saved successfully' });
//         });
//       }else{
//         res.json({ success: false, message: 'Unable to create user' });
//       }

//     }else{
//       res.json({ success: false, message: 'Unable to create user' });
//     }

//   });

//   // route to return all users (GET http://localhost:8080/api/users)
//   apiRoutes.get('/users', function(req, res) {
//     User.find({}, function(err, users) {
//       res.json(users);
//     });
//   }); 

// };


'use strict';

module.exports = function(apiRoutes) {

  // var User   = require('../models/user'); // get our mongoose model
  // var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
  // var config = require('../../config'); // get our config file

  // var CryptoJS = require("crypto-js");

  var campaigns = [{
      "id": 1,
      "name": "zzz",
      "image_url": "https://res.cloudinary.com/intellirio-consultancy-and-labs-llp/image/upload/v1539319305/s1_ks4nla.jpg",
      "details": "Donate new and gently used sports equipment and give someone the opportunity to train and play sports properly",
      "story": "In order to move people to action, you must first connect them the problem your organization is trying to solve. Why is it so important that people act now and become supporters of your organization? That’s what EB Research Partnership aims to do with their 'Cause the Wave' campaign video. Dedicated to advancing treatments and finding a cure for children with Epidermoysis Bullosa, a debilitating and life-threatening skin disease, EBRP created this video to bring viewers up close and personal with three individuals living with EB. Their personalities shine through the video, creating a powerful emotional connection with viewers. Eddie Vedder of Pearl Jam, an EBRP board member, also shares his own story of how and why he adopted the cause as his own.",
      "donation_raised": "1000",
      "donation_target" : "10000",
      "end_date": "31-12-2018",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "700091"
      },
      "phone": "+91-770-736-8031",
    },
    {
      "id": 2,
      "name": "KALUDIGHI PRIMARY SCHOOL",
      "image_url": "https://res.cloudinary.com/intellirio-consultancy-and-labs-llp/image/upload/v1539319303/s3_ipqi7z.jpg",
      "details": "Help me give my students combination padlocks and storage containers to help us unlock learning through a modified escape room.",
      "story": "In order to move people to action, you must first connect them the problem your organization is trying to solve. Why is it so important that people act now and become supporters of your organization? That’s what EB Research Partnership aims to do with their 'Cause the Wave' campaign video. Dedicated to advancing treatments and finding a cure for children with Epidermoysis Bullosa, a debilitating and life-threatening skin disease, EBRP created this video to bring viewers up close and personal with three individuals living with EB. Their personalities shine through the video, creating a powerful emotional connection with viewers. Eddie Vedder of Pearl Jam, an EBRP board member, also shares his own story of how and why he adopted the cause as his own.",
      "donation_raised": "3000",
      "donation_target" : "10000",
      "end_date": "31 Dec 2018 11:59 pm",
      "donors": 300,
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "7000102"
      },
      "phone": "+91-692-593-9125"
    },
    {
      "id": 3,
      "name": "Monoharpur Muchia Pry. School",
      "image_url": "https://res.cloudinary.com/intellirio-consultancy-and-labs-llp/image/upload/v1539319303/s5_fcfa7u.jpg",
      "details": "Donate new and gently used sports equipment and give someone the opportunity to train and play sports properly",
      "story": "In order to move people to action, you must first connect them the problem your organization is trying to solve. Why is it so important that people act now and become supporters of your organization? That’s what EB Research Partnership aims to do with their 'Cause the Wave' campaign video. Dedicated to advancing treatments and finding a cure for children with Epidermoysis Bullosa, a debilitating and life-threatening skin disease, EBRP created this video to bring viewers up close and personal with three individuals living with EB. Their personalities shine through the video, creating a powerful emotional connection with viewers. Eddie Vedder of Pearl Jam, an EBRP board member, also shares his own story of how and why he adopted the cause as his own.",
      "donation_raised": "2500",
      "donation_target" : "10000",
      "end_date": "31 Dec 2018 11:59 pm",
      "donors": 300,
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "7000102"
      },
      "phone": "+91-692-593-9125"
    },
    {
      "id": 4,
      "name": "KAILASH PUR PRY SCHOOL",
      "image_url": "https://res.cloudinary.com/intellirio-consultancy-and-labs-llp/image/upload/v1539319567/s4_fe5i2i.jpg",
      "details": "Help me give my students combination padlocks and storage containers to help us unlock learning through a modified escape room.",
      "story": "In order to move people to action, you must first connect them the problem your organization is trying to solve. Why is it so important that people act now and become supporters of your organization? That’s what EB Research Partnership aims to do with their 'Cause the Wave' campaign video. Dedicated to advancing treatments and finding a cure for children with Epidermoysis Bullosa, a debilitating and life-threatening skin disease, EBRP created this video to bring viewers up close and personal with three individuals living with EB. Their personalities shine through the video, creating a powerful emotional connection with viewers. Eddie Vedder of Pearl Jam, an EBRP board member, also shares his own story of how and why he adopted the cause as his own.",
      "donation_raised": "6000",
      "donation_target" : "10000",
      "end_date": "31 Dec 2018 11:59 pm",
      "donors": 300,
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "7000102"
      },
      "phone": "+91-692-593-9125"
    },
    {
      "id": 5,
      "name": "LAXMIPUR PRY SCHOOL SOUTH",
      "image_url": "https://res.cloudinary.com/intellirio-consultancy-and-labs-llp/image/upload/v1539319512/s2_qu4tzm.jpg",
      "details": "Donate new and gently used sports equipment and give someone the opportunity to train and play sports properly",
      "story": "In order to move people to action, you must first connect them the problem your organization is trying to solve. Why is it so important that people act now and become supporters of your organization? That’s what EB Research Partnership aims to do with their 'Cause the Wave' campaign video. Dedicated to advancing treatments and finding a cure for children with Epidermoysis Bullosa, a debilitating and life-threatening skin disease, EBRP created this video to bring viewers up close and personal with three individuals living with EB. Their personalities shine through the video, creating a powerful emotional connection with viewers. Eddie Vedder of Pearl Jam, an EBRP board member, also shares his own story of how and why he adopted the cause as his own.",
      "donation_raised": "7800",
      "donation_target" : "10000",
      "end_date": "31 Dec 2018 11:59 pm",
      "donors": 300,
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "7000102"
      },
      "phone": "+91-692-593-9125"
    }
  ];

  // route to return all users (GET http://localhost:8080/api/users)
  apiRoutes.get('/campaigns', function(req, res) {
    // User.find({}, function(err, users) {
    //   res.json(users);
    // });
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(campaigns);
  }); 

};
