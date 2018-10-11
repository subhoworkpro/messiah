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

  var donations = [{
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
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
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
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
  apiRoutes.get('/donations', function(req, res) {
    // User.find({}, function(err, users) {
    //   res.json(users);
    // });
    res.json(donations);
  }); 

};
