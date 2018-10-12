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
      "name": "BAG MALANCHA PRY SCHOOL",
      "image_url": "https://res.cloudinary.com/intellirio-consultancy-and-labs-llp/image/upload/v1539319305/s1_ks4nla.jpg",
      "details": "Donate new and gently used sports equipment and give someone the opportunity to train and play sports properly",
      "donation_raised": "1000",
      "donation_target" : "10000",
      "image": "",
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
      "donation_raised": "3000",
      "donation_target" : "10000",
      "end_date": "31-12-2018",
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
      "donation_raised": "2500",
      "donation_target" : "10000",
      "end_date": "31-12-2018",
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
      "donation_raised": "6000",
      "donation_target" : "10000",
      "end_date": "31-12-2018",
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
      "donation_raised": "7800",
      "donation_target" : "10000",
      "end_date": "31-12-2018",
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
