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

var request = require('request');

module.exports = function(apiRoutes) {

  // var User   = require('../models/user'); // get our mongoose model
  // var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
  // var config = require('../../config'); // get our config file

  // var CryptoJS = require("crypto-js");

  var donations = [{
      "id": 1,
      "transaction_id": "9876545",
      "amount": "900",
      "approval_code": "12232",
      "transaction_date": "Dec 12 2018 11:00 am",
      "campaign_name": "KAILASH PUR PRY SCHOOL",
      "image_url": "https://res.cloudinary.com/intellirio-consultancy-and-labs-llp/image/upload/v1539319567/s4_fe5i2i.jpg",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "700091"
      },
      "user_id": 1
    },
    {
      "id": 2,
      "transaction_id": "9876546",
      "amount": "1000",
      "approval_code": "12232",
      "transaction_date": "Dec 14 2018 11:00 am",
      "campaign_name": "LAXMIPUR PRY SCHOOL SOUTH",
      "image_url": "https://res.cloudinary.com/intellirio-consultancy-and-labs-llp/image/upload/v1539319512/s2_qu4tzm.jpg",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "700091"
      },
      "user_id": 1
    },
    {
      "id": 3,
      "transaction_id": "9876547",
      "amount": "900",
      "approval_code": "12232",
      "transaction_date": "Dec 15 2018 11:00 am",
      "campaign_name": "BAG MALANCHA PRY SCHOOL",
      "image_url": "https://res.cloudinary.com/intellirio-consultancy-and-labs-llp/image/upload/v1539319305/s1_ks4nla.jpg",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "700091"
      },
      "user_id": 1
    },
    {
      "id": 4,
      "transaction_id": "9876548",
      "amount": "900",
      "approval_code": "12232",
      "transaction_date": "Dec 16 2018 11:00 am",
      "campaign_name": "KALUDIGHI PRIMARY SCHOOL",
      "image_url": "https://res.cloudinary.com/intellirio-consultancy-and-labs-llp/image/upload/v1539319303/s3_ipqi7z.jpg",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "700091"
      },
      "user_id": 1
    }
  ];

  // route to return all users (GET http://localhost:8080/api/users)
  apiRoutes.get('/donations', function(req, res) {
    // User.find({}, function(err, users) {
    //   res.json(users);
    // });
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(donations);
  }); 

  apiRoutes.get('/payment/:paymentId', function(req, res) {
    // User.find({}, function(err, users) {
    //   res.json(users);
    // });

    var paymentId = req.params.paymentId;

    request('https://rzp_test_hii5NLEiVI3cgi:Egpk5YxyplHqC5GBEH7S8FGz@api.razorpay.com/v1/payments/'+paymentId, function (error, response, body) {
      console.log('Response:', body);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.json(JSON.parse(body));
    });
  }); 

};
