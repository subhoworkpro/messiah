
'use strict';

module.exports = function(apiRoutes) {

  var User   = require('../models/user'); // get our mongoose model
  var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
  var config = require('../../config'); // get our config file

  var CryptoJS = require("crypto-js");

  var users = [{
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
  apiRoutes.get('/users', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    User.find({}, function(err, users) {
      res.json(users[0]);
    });
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.json(users[0]);
  }); 

  // route to return all users (GET http://localhost:8080/api/users)
  apiRoutes.post('/users', function(req, res) {
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var new_user = new User({

      name: req.body.name, 
      password: req.body.password, 
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      address: {
          street: req.body.address.street,
          city: req.body.address.city,
          zipcode: req.body.address.zipcode
      },
      admin: false,
      status: "active"
    });

    new_user.save(function(err, user){
      if (err)
        res.send(err);
      
      console.log('User saved successfully');
      res.json(user);

    });

    // User.find({}, function(err, users) {
    //   res.json(users[0]);
    // });

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
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.json(users[0]);
  }); 

  // route to return all users (GET http://localhost:8080/api/users)
  apiRoutes.post('/login', function(req, res) {
    // User.find({}, function(err, users) {
    //   res.json(users);
    // });
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(users[0]);
  }); 

};
